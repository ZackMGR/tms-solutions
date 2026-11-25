import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JobList } from "@/components/JobList";
import { relatedSectors, sectorBySlug, sectors, vacanciesIn } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectorBySlug(slug);
  if (!sector) return { title: "Sector" };
  return { title: sector.name, description: sector.tagline };
}

export default async function SectorPage({ params }: Props) {
  const { slug } = await params;
  const sector = sectorBySlug(slug);
  if (!sector) notFound();
  const jobs = vacanciesIn(sector.slug);
  const others = relatedSectors(sector.slug);

  return (
    <article>
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="crumbs">
              <Link href="/sectoren">Alle sectoren</Link>
              <span>/</span>
              <span>{sector.name}</span>
            </p>
            <h1>{sector.name}</h1>
            <p className="lead" style={{ marginTop: 14 }}>{sector.tagline}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact?onderwerp=personeel">
                Personeel aanvragen
              </Link>
              <Link className="btn btn-ghost" href="/vacatures">
                Bekijk vacatures
              </Link>
            </div>
          </div>
          <img src={sector.image} alt="" width={1400} height={933} />
        </div>
      </section>

      <section className="section">
        <div className="wrap layout-2">
          <div className="prose">
            <p className="eyebrow">Over deze sector</p>
            <h2>Wat we in deze sector doen.</h2>
            <p>{sector.lead}</p>
            <p>{sector.body}</p>
            <h2>Waar we voor worden gevraagd</h2>
            <ol className="assign-list">
              {sector.assignments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
          <aside className="paper-card">
            <h3>Functies die we plaatsen</h3>
            <ul className="role-list">
              {sector.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="benefit-grid cols-3">
            {sector.points.map((point) => (
              <article className="paper-card" key={point.title}>
                <h3>{point.title}</h3>
                <p className="muted" style={{ marginTop: 8 }}>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap layout-2">
          <div>
            <p className="eyebrow">Vragen</p>
            <h2>Vragen over {sector.name}.</h2>
            <div className="faq" style={{ marginTop: 16 }}>
              {sector.faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className="paper-card">
            <h3>Staat uw vraag er niet bij?</h3>
            <p className="muted" style={{ margin: "8px 0 16px" }}>
              Mail ons de rol, de plaats en de gewenste startdatum. We reageren binnen één werkdag.
            </p>
            <Link className="btn btn-primary" href="/contact">
              Neem contact op
            </Link>
          </aside>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Profielen</h2>
            <Link href="/open-sollicitatie">Open sollicitatie</Link>
          </div>
          <JobList jobs={jobs} />
          <div className="section-head" style={{ marginTop: 36 }}>
            <h2>Andere sectoren</h2>
            <Link href="/sectoren">Alle sectoren</Link>
          </div>
          <div className="chip-row">
            {others.map((item) => (
              <Link className="chip" key={item.slug} href={`/sectoren/${item.slug}`}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
