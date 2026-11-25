import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Inloggen",
  description: "Toegang tot het medewerkersportaal van TMS Solutions vraag je persoonlijk aan.",
};

export default function LoginPage() {
  return (
    <section className="section page-hero">
      <div className="wrap layout-2">
        <div>
          <p className="eyebrow">Medewerkersportaal</p>
          <h1>Inloggen wordt persoonlijk uitgegeven.</h1>
          <p className="lead" style={{ margin: "16px 0 22px" }}>
            Uren, loonstroken en opdrachtdocumenten komen in een portaal zodra je via TMS Solutions aan het
            werk bent. Toegang vragen we niet via een open wachtwoord op deze site. Laat je gegevens achter,
            dan sturen we de inloglink naar het e-mailadres dat bij je opdracht hoort.
          </p>
          <InquiryForm
            subject="Aanvraag portaaltoegang"
            submitLabel="Vraag toegang aan"
            note="We mailen alleen een inloglink naar een adres dat bij een lopende opdracht hoort."
            fields={[
              { name: "name", label: "Naam", required: true },
              { name: "email", label: "E-mail van je opdracht", type: "email", required: true },
              { name: "phone", label: "Telefoon", type: "tel", full: true },
              { name: "message", label: "Opdracht of opdrachtgever", type: "textarea", required: true, placeholder: "Bijvoorbeeld: magazijn Nieuwegein, gestart in maart." },
            ]}
          />
        </div>
        <aside className="paper-card">
          <h3>Nog geen opdracht?</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            Het portaal is er voor mensen die al geplaatst zijn. Zoek je werk, kijk dan bij de vacatures of stuur
            een open sollicitatie.
          </p>
        </aside>
      </div>
    </section>
  );
}
