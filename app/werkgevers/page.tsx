import type { Metadata } from "next";
import Link from "next/link";
import { employerBenefits, employerSteps, sectors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Voor werkgevers",
  description: "Personeel nodig? TMS Solutions levert vakmensen voor bouw, logistiek, techniek, zorg, kantoor en meer.",
};

export default function EmployersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="eyebrow">Voor werkgevers</p>
            <h1>Het juiste personeel, op het moment dat de planning dat vraagt.</h1>
            <p className="lead" style={{ marginTop: 14 }}>
              Structureel of voor een piek: we leveren mensen die de klus kennen. U spreekt één persoon,
              krijgt een helder voorstel en hoeft de werving niet zelf te doen.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact?onderwerp=personeel">Neem contact op</Link>
            </div>
          </div>
          <img src="/images/office.jpg" alt="Kantoor waar teams samenwerken" width={1400} height={935} />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Waarom TMS</p>
              <h2>Minder zoeken. Meer mensen die blijven.</h2>
            </div>
          </div>
          <div className="benefit-grid cols-3">
            {employerBenefits.map((item) => (
              <article className="paper-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap layout-2">
          <div>
            <p className="eyebrow">Aanpak</p>
            <h2>Van aanvraag tot eerste werkdag.</h2>
            <ol className="step-list">
              {employerSteps.map((step, index) => (
                <li key={step}>
                  <span className="step-no">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <aside className="paper-card">
            <h3>Onze sectoren</h3>
            <p className="muted" style={{ marginTop: 8 }}>
              Staat de uwe er niet bij? Beschrijf de rol, dan kijken we of we kunnen helpen.
            </p>
            <div className="chip-row">
              {sectors.map((sector) => (
                <Link className="chip" key={sector.slug} href={`/sectoren/${sector.slug}`}>
                  {sector.name}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band">
            <h2>Klaar om iemand te zoeken?</h2>
            <p className="lead">Vertel ons de functie, de plaats en de startdatum. We bellen binnen één werkdag.</p>
            <Link className="btn btn-light" href="/contact?onderwerp=personeel">Plan een gesprek</Link>
          </div>
        </div>
      </section>
    </>
  );
}
