"use client";

import { useMemo, useState } from "react";
import { JobList } from "@/components/JobList";
import { sectors, type Vacancy } from "@/lib/site";

export function VacancyBrowser({ jobs }: { jobs: Vacancy[] }) {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("alle");
  const [location, setLocation] = useState("alle");

  const locations = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.location))).sort((a, b) => a.localeCompare(b, "nl")),
    [jobs],
  );

  const filtered = jobs.filter((job) => {
    const sectorName = sectors.find((item) => item.slug === job.sector)?.name ?? "";
    const haystack = `${job.title} ${job.summary} ${job.location} ${sectorName}`.toLowerCase();
    const matchesQuery = haystack.includes(query.trim().toLowerCase());
    const matchesSector = sector === "alle" || job.sector === sector;
    const matchesLocation = location === "alle" || job.location === location;
    return matchesQuery && matchesSector && matchesLocation;
  });

  return (
    <div>
      <form className="filters" onSubmit={(event) => event.preventDefault()}>
        <label className="field">
          <span>Zoeken</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Functie, plaats of sector"
            type="search"
          />
        </label>
        <label className="field">
          <span>Sector</span>
          <select value={sector} onChange={(event) => setSector(event.target.value)}>
            <option value="alle">Alle sectoren</option>
            {sectors.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Plaats</span>
          <select value={location} onChange={(event) => setLocation(event.target.value)}>
            <option value="alle">Alle plaatsen</option>
            {locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <button
          className="btn btn-ghost"
          type="button"
          onClick={() => {
            setQuery("");
            setSector("alle");
            setLocation("alle");
          }}
        >
          Wis filters
        </button>
      </form>
      <p className="count">
        {filtered.length} {filtered.length === 1 ? "profiel" : "profielen"}
      </p>
      {filtered.length === 0 ? (
        <div className="empty">
          <p>Geen profielen met deze combinatie. Wis een filter of stuur een open sollicitatie.</p>
        </div>
      ) : (
        <JobList jobs={filtered} />
      )}
    </div>
  );
}
