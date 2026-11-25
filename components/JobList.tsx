import Link from "next/link";
import { sectorBySlug, type Vacancy } from "@/lib/site";

export function JobList({ jobs }: { jobs: Vacancy[] }) {
  if (jobs.length === 0) {
    return (
      <div className="empty">
        <p>Er staan in deze sector nu geen open profielen.</p>
        <p style={{ marginTop: 8 }}>
          <Link href="/open-sollicitatie">Stuur een open sollicitatie</Link>
        </p>
      </div>
    );
  }

  return (
    <ul className="jobs">
      {jobs.map((job) => {
        const sector = sectorBySlug(job.sector);
        return (
          <li key={job.slug}>
            <Link href={`/vacatures/${job.slug}`}>
              <span className="job-sector">{sector?.name}</span>
              <span className="job-main">
                <strong>{job.title}</strong>
                <em>{job.summary}</em>
              </span>
              <span className="job-meta">
                {job.location} · {job.hours}
              </span>
              <span className="job-go" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
