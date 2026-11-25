import nodemailer from "nodemailer";
import { company } from "@/lib/site";

export const runtime = "nodejs";

const MAX_FILE_BYTES = 5 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const recent = new Map<string, number[]>();

function clean(value: FormDataEntryValue | null) {
  return String(value || "").replace(/\r/g, "").trim();
}

function limited(value: string, max: number) {
  return value.slice(0, max);
}

function allowed(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((time) => now - time < 10 * 60 * 1000);
  if (hits.length >= 5) {
    recent.set(ip, hits);
    return false;
  }
  hits.push(now);
  recent.set(ip, hits);
  return true;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!allowed(ip)) {
    return Response.json({ error: "Er zijn te veel berichten verstuurd. Probeer het later opnieuw." }, { status: 429 });
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    return Response.json({ error: "Het formulier kan het bericht nu niet versturen. Mail ons rechtstreeks." }, { status: 503 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: "Het bericht kon niet worden gelezen." }, { status: 400 });
  }

  if (clean(form.get("website"))) {
    return Response.json({ ok: true });
  }

  const formName = limited(clean(form.get("formName")), 120);
  const name = limited(clean(form.get("name")), 120);
  const email = limited(clean(form.get("email")), 160);
  if (formName.length < 2 || name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Vul uw naam en een geldig e-mailadres in." }, { status: 400 });
  }

  const labels = new Map<string, string>();
  for (const [key, value] of form.entries()) {
    if (key.startsWith("label.") && typeof value === "string") labels.set(key.slice(6), limited(clean(value), 80));
  }

  const lines = [`Bericht via tms-solutions.nl`, `Formulier: ${formName}`, ""];
  for (const [key, value] of form.entries()) {
    if (key === "formName" || key === "website" || key === "cv" || key.startsWith("label.") || typeof value !== "string") continue;
    lines.push(`${labels.get(key) || key}: ${limited(clean(value), 4000) || "—"}`);
  }

  const file = form.get("cv");
  const attachments = [];
  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_FILE_BYTES || !ALLOWED_FILE_TYPES.has(file.type)) {
      return Response.json({ error: "Het cv moet een PDF of Word-bestand zijn van maximaal 5 MB." }, { status: 400 });
    }
    attachments.push({
      filename: limited(file.name.replace(/[^\w.\- ]+/g, ""), 120) || "cv",
      content: Buffer.from(await file.arrayBuffer()),
      contentType: file.type,
    });
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_PORT !== "587",
    auth: { user, pass },
  });

  try {
    await transport.sendMail({
      from: `TMS Solutions <${user}>`,
      to: process.env.MAIL_TO || company.submissionsEmail,
      replyTo: email,
      subject: `New submission (${formName})`,
      text: lines.join("\n"),
      attachments,
    });
  } catch {
    return Response.json({ error: "Het bericht kon niet worden verzonden. Probeer het opnieuw." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
