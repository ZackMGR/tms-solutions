import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { JobList } from "@/components/JobList";
import { sectorBySlug, vacancies, vacancyBySlug } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return vacancies.map((vacancy) => ({ slug: vacancy.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vacancy = vacancyBySlug(slug);
  if (!vacancy) return { title: "Vacature" };
  return {
    title: vacancy.title,
    description: vacancy.summary,
  };
}

export default async function VacancyPage({ params }: Props) {
  const { slug } = await params;
  const vacancy = vacancyBySlug(slug);
  if (!vacancy) notFound();
  const sector = sectorBySlug(vacancy.sector);
  const similar = vacancies.filter((item) => item.sector === vacancy.sector && item.slug !== vacancy.slug).slice(0, 3);

  return (
    <article className="section page-hero">
      <div className="wrap">
        <p className="crumbs">
          <Link href="/vacatures">Vacatures</Link>
          <span>/</span>
          {sector ? <Link href={`/sectoren/${sector.slug}`}>{sector.name}</Link> : null}
        </p>
        <div className="layout-2">
          <div className="prose">
            <p className="eyebrow">{sector?.name} · {vacancy.location} · {vacancy.hours}</p>
            <h1>{vacancy.title}</h1>
            <p className="lead">{vacancy.intro}</p>
            <h2>Wat je doet</h2>
            <ul className="role-list">
              {vacancy.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
            <h2>Wat we vragen</h2>
            <ul className="role-list">
              {vacancy.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2>Wat je krijgt</h2>
            <ul className="role-list">
              {vacancy.offer.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className="stack">
            <InquiryForm
              subject={`Sollicitatie: ${vacancy.title}`}
              submitLabel="Solliciteer"
              defaults={{ message: `Ik reageer op ${vacancy.title} in ${vacancy.location}.` }}
              fields={[
                { name: "name", label: "Naam", required: true },
                { name: "phone", label: "Telefoon", type: "tel" },
                { name: "email", label: "E-mail", type: "email", required: true, full: true },
                { name: "message", label: "Bericht", type: "textarea", required: true },
              ]}
            />
            <p className="muted">
              Liever eerst bellen over je ervaring? Mail ons, dan plannen we een gesprek.
            </p>
          </aside>
        </div>
        {similar.length > 0 ? (
          <div style={{ marginTop: 48 }}>
            <h2>Vergelijkbare profielen</h2>
            <div style={{ marginTop: 16 }}>
              <JobList jobs={similar} />
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
