import type { Metadata } from "next";
import { company, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description: "TMS Solutions is de handelsnaam van T.M.S. Trading B.V. in Utrecht. Wij detacheren en bemiddelen vakmensen.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="eyebrow">Over ons</p>
            <h1>Persoonlijk detacheren, vanuit Utrecht.</h1>
            <p className="lead" style={{ marginTop: 14 }}>
              {company.brand} verbindt vakmensen met opdrachtgevers. Korte lijnen, afspraken die vooraf
              vaststaan en een plaatsing die beide kanten volhouden.
            </p>
          </div>
          <img src="/images/team.jpg" alt="Mensen in gesprek aan een tafel" width={1400} height={2099} />
        </div>
      </section>
      <section className="section">
        <div className="wrap layout-2">
          <div className="prose">
            <h2>Wie we zijn</h2>
            <p>
              {company.legalName} is gevestigd aan de {company.street} in {company.city} en werkt onder de
              handelsnaam {company.brand}. We bemiddelen en detacheren personeel in uitvoerend werk en
              vakmanschap: bouw, logistiek, techniek, productie, zorg, kantoor, horeca, groen, schoonmaak,
              beveiliging en IT.
            </p>
            <p>
              De inschrijving bij de Kamer van Koophandel staat nog als in voorbereiding. De site is er zodat
              kandidaten en opdrachtgevers ons al kunnen bereiken. We reageren binnen één werkdag.
            </p>
            <h2>Waar we naartoe werken</h2>
            <p>
              Flexibel werk hoeft niet anoniem te zijn. We willen dat een kandidaat weet bij wie hij terechtkan,
              en dat een opdrachtgever één persoon heeft die de ploeg kent. Geen callcenter, wel een naam
              en een mailadres dat wordt gelezen.
            </p>
          </div>
          <aside className="paper-card">
            <h3>Bedrijfsgegevens</h3>
            <dl className="facts" style={{ marginTop: 14 }}>
              <div>
                <dt>Statutaire naam</dt>
                <dd>{company.legalName}</dd>
              </div>
              <div>
                <dt>Handelsnamen</dt>
                <dd>{company.legalName} · {company.brand}</dd>
              </div>
              <div>
                <dt>Rechtsvorm</dt>
                <dd>Besloten vennootschap · hoofdvestiging</dd>
              </div>
              <div>
                <dt>KVK</dt>
                <dd>{company.kvk}</dd>
              </div>
              <div>
                <dt>Vestigingsnummer</dt>
                <dd>{company.vestiging}</dd>
              </div>
              <div>
                <dt>Adres</dt>
                <dd>
                  {company.street}<br />
                  {company.postalCode} {company.city}
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href={`mailto:${company.email}`}>{company.emailLabel}</a></dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Waar we voor staan</p>
              <h2>Vier afspraken met onszelf.</h2>
            </div>
          </div>
          <div className="value-grid">
            {values.map((value) => (
              <article className="paper-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
