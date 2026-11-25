import type { Metadata } from "next";
import { VacancyBrowser } from "@/components/VacancyBrowser";
import { vacancies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vacatures",
  description: "Openstaande profielen van TMS Solutions in bouw, logistiek, techniek, zorg, kantoor en meer.",
};

export default function VacanciesPage() {
  return (
    <section className="section page-hero">
      <div className="wrap">
        <p className="eyebrow">Vacatures</p>
        <h1>Werk dat bij je past.</h1>
        <p className="lead" style={{ margin: "16px 0 28px" }}>
          Dit zijn rollen waarvoor we kandidaten zoeken, door heel Nederland. Een opdracht hangt af van de
          planning van de opdrachtgever. Reageer en we bellen je over een passende plek, of we bewaren je
          gegevens voor de volgende.
        </p>
        <VacancyBrowser jobs={vacancies} />
      </div>
    </section>
  );
}
