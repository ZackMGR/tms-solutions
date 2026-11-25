import Link from "next/link";
import { JobList } from "@/components/JobList";
import { reasons, sectors, vacancies } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Detachering vanuit Utrecht</p>
            <h1>
              Vakmensen voor werk dat <em>niet kan wachten.</em>
            </h1>
            <p className="lead">
              TMS Solutions koppelt ervaren mensen aan opdrachtgevers in bouw, logistiek, techniek, zorg,
              kantoor en meer. Korte lijnen, één aanspreekpunt en afspraken die vooraf helder zijn.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/vacatures">
                Bekijk vacatures
              </Link>
              <Link className="btn btn-ghost" href="/werkgevers">
                Personeel nodig?
              </Link>
            </div>
            <ul className="trust">
              <li>Door heel Nederland</li>
              <li>Reactie binnen 1 werkdag</li>
              <li>Vast aanspreekpunt</li>
            </ul>
          </div>
          <figure className="hero-photo">
            <img src="/images/hero.jpg" alt="Bouwvakkers aan het werk op een project" width={1600} height={1060} />
            <figcaption className="hero-caption">
              <strong>11 sectoren</strong>
              <span>Van de bouwplaats tot het kantoor, vanuit Utrecht.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Sectoren</p>
              <h2>Waar we mensen plaatsen.</h2>
            </div>
            <Link className="btn btn-ghost" href="/sectoren">
              Alle sectoren
            </Link>
          </div>
          <div className="sector-grid">
            {sectors.map((sector) => (
              <Link className="sector-card" key={sector.slug} href={`/sectoren/${sector.slug}`}>
                <img src={sector.image} alt={`${sector.name} bij TMS Solutions`} width={1400} height={933} />
                <div>
                  <h3>{sector.name}</h3>
                  <p>{sector.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Waarom TMS</p>
              <h2>Eerst luisteren. Dan pas plaatsen.</h2>
            </div>
            <p>Een snelle plaatsing die niet past, kost beide kanten tijd. Daarom beginnen we met de klus en de mens.</p>
          </div>
          <div className="reason-grid">
            {reasons.map((reason, index) => (
              <article className="reason" key={reason.title}>
                <span>0{index + 1}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Hoe het werkt</p>
              <h2>In een paar stappen aan het werk.</h2>
            </div>
          </div>
          <div className="steps">
            <article className="paper-card">
              <p className="eyebrow">Voor vakmensen</p>
              <h3>Een opdracht die bij je past</h3>
              <ol className="step-list">
                {["Reageer op een profiel of stuur een open sollicitatie.", "We bellen en bespreken ervaring, rooster en reisafstand.", "We stellen je voor bij een opdrachtgever.", "Je start, met ons als aanspreekpunt."].map((step, index) => (
                  <li key={step}>
                    <span className="step-no">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div style={{ marginTop: 18 }}>
                <Link className="btn btn-primary" href="/werknemers">
                  Werken via TMS
                </Link>
              </div>
            </article>
            <article className="paper-card">
              <p className="eyebrow">Voor opdrachtgevers</p>
              <h3>Bezetting zonder omweg</h3>
              <ol className="step-list">
                {["Vertel welke rol, welke locatie en wanneer iemand moet starten.", "We vragen door op diploma’s, ploeg en werkcultuur.", "U ontvangt kandidaten die we zelf hebben gesproken.", "Na akkoord regelen we contract en eerste werkdag."].map((step, index) => (
                  <li key={step}>
                    <span className="step-no">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div style={{ marginTop: 18 }}>
                <Link className="btn btn-ghost" href="/werkgevers">
                  Personeel aanvragen
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Vacatures</p>
              <h2>Profielen die we nu zoeken.</h2>
            </div>
            <Link className="btn btn-ghost" href="/vacatures">
              Alle vacatures
            </Link>
          </div>
          <JobList jobs={vacancies.slice(0, 6)} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap doors">
          <Link className="door door-dark" href="/werknemers">
            <p className="eyebrow">Ik zoek werk</p>
            <h2>Een plek waar je vak telt.</h2>
            <p>Bekijk de profielen of stuur een open sollicitatie. We reageren binnen één werkdag.</p>
            <span className="btn btn-light">Zo werkt het</span>
          </Link>
          <Link className="door door-light" href="/contact?onderwerp=personeel">
            <p className="eyebrow">Ik zoek personeel</p>
            <h2>Vertel ons wie u mist.</h2>
            <p>Eén bericht is genoeg. We bellen terug en stellen een eerste kandidaat voor zodra het profiel scherp is.</p>
            <span className="btn btn-primary">Plan een gesprek</span>
          </Link>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band">
            <p className="eyebrow">Klaar om te schakelen?</p>
            <h2>Nieuwe opdracht of nieuwe mensen.</h2>
            <p className="lead">Laat een bericht achter. We nemen binnen één werkdag contact op.</p>
            <div className="cta-actions">
              <Link className="btn btn-light" href="/contact">
                Neem contact op
              </Link>
              <Link className="btn btn-line" href="/vacatures">
                Bekijk vacatures
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
