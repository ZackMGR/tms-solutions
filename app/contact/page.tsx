import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met TMS Solutions in Utrecht. We reageren binnen één werkdag.",
};

const intents = [
  { value: "Ik zoek werk", label: "Ik zoek werk" },
  { value: "Ik zoek personeel", label: "Ik zoek personeel" },
  { value: "Iets anders", label: "Iets anders" },
];

type Props = { searchParams: Promise<{ onderwerp?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const topic = params.onderwerp === "personeel" ? "Ik zoek personeel" : params.onderwerp === "werk" ? "Ik zoek werk" : "Ik zoek werk";

  return (
    <section className="section page-hero">
      <div className="wrap">
        <p className="eyebrow">Reactie binnen één werkdag</p>
        <h1>Laten we contact hebben.</h1>
        <p className="lead" style={{ margin: "16px 0 28px" }}>
          Op zoek naar werk, naar personeel, of een andere vraag. Mail ons of stuur het formulier. We denken
          persoonlijk mee.
        </p>
        <div className="layout-2">
          <InquiryForm
            formName="Contact"
            submitLabel="Verstuur bericht"
            defaults={{ topic }}
            note="Het bericht wordt direct verstuurd naar info@tms-solutions.nl."
            fields={[
              { name: "topic", label: "Waar gaat het over?", type: "select", options: intents, full: true },
              { name: "name", label: "Naam", required: true },
              { name: "phone", label: "Telefoon", type: "tel" },
              { name: "email", label: "E-mail", type: "email", required: true, full: true },
              { name: "message", label: "Bericht", type: "textarea", required: true, placeholder: "Vertel kort wat u zoekt." },
            ]}
          />
          <aside className="stack">
            <div className="paper-card">
              <h3>Mail ons</h3>
              <p style={{ marginTop: 8 }}>
                <a href={`mailto:${company.email}`}>{company.emailLabel}</a>
              </p>
              <p className="muted">Antwoord binnen 1 werkdag.</p>
            </div>
            <div className="paper-card">
              <h3>Bezoek</h3>
              <p style={{ marginTop: 8 }}>
                {company.street}<br />
                {company.postalCode} {company.city}
              </p>
              <p style={{ marginTop: 8 }}>
                <a href={company.mapsUrl}>Open in Google Maps</a>
              </p>
            </div>
            <div className="paper-card">
              <h3>Openingstijden</h3>
              <ul className="hours" style={{ marginTop: 12 }}>
                {company.hours.map((slot) => (
                  <li key={slot.day}>
                    <span>{slot.day}</span>
                    <strong>{slot.time}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="paper-card">
              <h3>Onze gegevens</h3>
              <p style={{ marginTop: 8 }}>
                {company.legalName}<br />
                KVK {company.kvk}<br />
                Vestiging {company.vestiging}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
