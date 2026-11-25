"use client";

import { useState, type FormEvent } from "react";

type Option = { value: string; label: string };

export type FormField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: Option[];
  full?: boolean;
  placeholder?: string;
};

export function InquiryForm({
  formName,
  submitLabel,
  fields,
  defaults = {},
  allowCv = false,
  note = "We sturen uw bericht naar info@tms-solutions.nl. U hoeft zelf geen e-mail te openen.",
}: {
  formName: string;
  submitLabel: string;
  fields: FormField[];
  defaults?: Record<string, string>;
  allowCv?: boolean;
  note?: string;
}) {
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();

    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setReady(false);
      setError("Vul uw naam en een geldig e-mailadres in.");
      return;
    }

    const missing = fields.find((field) => field.required && field.name !== "name" && field.name !== "email" && !String(data.get(field.name) || "").trim());
    if (missing) {
      setReady(false);
      setError(`Vul ${missing.label.toLowerCase()} in.`);
      return;
    }

    data.set("formName", formName);
    for (const field of fields) data.set(`label.${field.name}`, field.label);
    if (allowCv) data.set("label.cv", "Cv");
    setSending(true);
    setError("");
    setReady(false);

    try {
      const response = await fetch("/api/inquiry", { method: "POST", body: data });
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setError(payload?.error || "Het bericht kon niet worden verzonden. Probeer het opnieuw.");
        return;
      }
      form.reset();
      setReady(true);
    } catch {
      setError("Het bericht kon niet worden verzonden. Probeer het opnieuw.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
      {fields.map((field) => (
        <label key={field.name} className={field.full || field.type === "textarea" ? "field full" : "field"}>
          <span>
            {field.label}
            {field.required ? " *" : ""}
          </span>
          {field.type === "textarea" ? (
            <textarea name={field.name} required={field.required} placeholder={field.placeholder} defaultValue={defaults[field.name] || ""} />
          ) : field.type === "select" ? (
            <select name={field.name} defaultValue={defaults[field.name] || field.options?.[0]?.value || ""} required={field.required}>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              name={field.name}
              type={field.type || "text"}
              required={field.required}
              placeholder={field.placeholder}
              defaultValue={defaults[field.name] || ""}
              autoComplete={field.name === "email" ? "email" : field.name === "name" ? "name" : field.name === "phone" ? "tel" : undefined}
            />
          )}
        </label>
      ))}
      {allowCv ? (
        <label className="field full">
          <span>Cv (PDF of Word, optioneel)</span>
          <input name="cv" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
        </label>
      ) : null}
      <div className="full">
        <button className="btn btn-primary" type="submit" disabled={sending}>
          {sending ? "Versturen…" : submitLabel}
        </button>
      </div>
      {error ? <p className="form-error full">{error}</p> : null}
      {ready ? <p className="form-ok full">Uw bericht is verstuurd. We reageren binnen één werkdag.</p> : null}
      <p className="form-note full">{note}</p>
    </form>
  );
}
