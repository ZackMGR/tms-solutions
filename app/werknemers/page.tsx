import type { Metadata } from "next";
import Link from "next/link";
import { workerBenefits, workerSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Voor werknemers",
  description: "Werk via TMS Solutions: een vast aanspreekpunt, eerlijke afspraken en opdrachten door heel Nederland.",
};

export default function WorkersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="eyebrow">Voor werknemers</p>
            <h1>Een opdracht waar je niet in het diepe springt.</h1>
            <p className="lead" style={{ marginTop: 14 }}>
              We luisteren naar het werk dat je wilt, het rooster dat je aankunt en hoe ver je wilt reizen.
              Daarna zoeken we een opdracht die daarbij past.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/vacatures">Bekijk vacatures</Link>
              <Link className="btn btn-ghost" href="/open-sollicitatie">Open sollicitatie</Link>
            </div>
          </div>
          <img src="/images/techniek.jpg" alt="Monteur aan het werk in een werkplaats" width={1400} height={933} />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Wat je krijgt</p>
              <h2>Iemand die de opdracht kent.</h2>
            </div>
          </div>
          <div className="benefit-grid">
            {workerBenefits.map((item) => (
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
            <p className="eyebrow">Zo werkt het</p>
            <h2>Van reactie tot eerste dienst.</h2>
            <ol className="step-list">
              {workerSteps.map((step, index) => (
                <li key={step}>
                  <span className="step-no">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/vacatures">Naar de vacatures</Link>
            </div>
          </div>
          <img src="/images/team.jpg" alt="Collega's in overleg" width={1400} height={2099} style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 24 }} />
        </div>
      </section>
    </>
  );
}
