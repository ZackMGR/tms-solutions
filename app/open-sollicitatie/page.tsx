import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { sectors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Open sollicitatie",
  description: "Geen passend profiel gezien? Stuur een open sollicitatie naar TMS Solutions.",
};

export default function OpenApplicationPage() {
  return (
    <section className="section page-hero">
      <div className="wrap layout-2">
        <div>
          <p className="eyebrow">Open sollicitatie</p>
          <h1>Geen passende vacature? Stuur toch een bericht.</h1>
          <p className="lead" style={{ margin: "16px 0 22px" }}>
            Vertel welk werk je zoekt, waar je wilt werken en wanneer je kunt starten. We bewaren je gegevens
            om je te bellen zodra er een opdracht past. Voeg je cv toe als bijlage in de e-mail die opent.
          </p>
          <InquiryForm
            subject="Open sollicitatie"
            submitLabel="Stuur mijn sollicitatie"
            fields={[
              { name: "name", label: "Naam", required: true },
              { name: "phone", label: "Telefoon", type: "tel", required: true },
              { name: "email", label: "E-mail", type: "email", required: true, full: true },
              {
                name: "sector",
                label: "Sector",
                type: "select",
                full: true,
                options: [{ value: "Maakt mij niet uit", label: "Maakt mij niet uit" }, ...sectors.map((sector) => ({ value: sector.name, label: sector.name }))],
              },
              { name: "availability", label: "Beschikbaarheid", placeholder: "Bijvoorbeeld: per direct, 32 uur", full: true },
              { name: "message", label: "Ervaring en wat je zoekt", type: "textarea", required: true },
            ]}
          />
        </div>
        <aside className="paper-card">
          <h3>Wat we daarna doen</h3>
          <ol className="assign-list" style={{ marginTop: 12 }}>
            <li>We lezen je bericht binnen één werkdag.</li>
            <li>Als het aansluit, bellen we voor een kort gesprek.</li>
            <li>We houden je aan als er later een opdracht past.</li>
          </ol>
        </aside>
      </div>
    </section>
  );
}
