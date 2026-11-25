"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/lib/site";

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
  subject,
  submitLabel,
  fields,
  defaults = {},
  note = "Het formulier opent uw e-mailprogramma met dit bericht. Voeg daar uw cv toe als bijlage wanneer u solliciteert. Er wordt niets opgeslagen voordat u de e-mail verstuurt.",
}: {
  subject: string;
  submitLabel: string;
  fields: FormField[];
  defaults?: Record<string, string>;
  note?: string;
}) {
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
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

    const lines = [
      `Bericht via tmssolutions.nl`,
      ``,
      ...fields.map((field) => `${field.label}: ${String(data.get(field.name) || "").trim() || "—"}`),
    ];
    const href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setError("");
    setReady(true);
    window.location.href = href;
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
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
      <div className="full">
        <button className="btn btn-primary" type="submit">
          {submitLabel}
        </button>
      </div>
      {error ? <p className="form-error full">{error}</p> : null}
      {ready ? (
        <p className="form-ok full">
          Uw e-mailprogramma opent met het bericht aan {company.emailLabel}. Verstuur die e-mail om ons te bereiken.
        </p>
      ) : null}
      <p className="form-note full">{note}</p>
    </form>
  );
}
