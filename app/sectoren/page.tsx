import type { Metadata } from "next";
import Link from "next/link";
import { sectors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sectoren",
  description: "TMS Solutions plaatst vakmensen in bouw, logistiek, techniek, productie, zorg, office, horeca, groen, schoonmaak, beveiliging en IT.",
};

export default function SectorsPage() {
  return (
    <section className="section page-hero">
      <div className="wrap">
        <p className="eyebrow">Sectoren</p>
        <h1>Vakmensen in het werk dat u doet.</h1>
        <p className="lead" style={{ margin: "16px 0 28px" }}>
          Van de bouwplaats tot de zorginstelling. Staat uw sector er niet bij, dan kijken we alsnog of we
          een kandidaat kunnen vinden.
        </p>
        <div className="sector-grid">
          {sectors.map((sector) => (
            <Link className="sector-card" key={sector.slug} href={`/sectoren/${sector.slug}`}>
              <img src={sector.image} alt="" width={1400} height={933} />
              <div>
                <h3>{sector.name}</h3>
                <p>{sector.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="cta-band" style={{ marginTop: 28 }}>
          <h2>Staat uw sector er niet bij?</h2>
          <p className="lead">Beschrijf de rol. We zeggen eerlijk of we die kunnen invullen.</p>
          <Link className="btn btn-light" href="/contact?onderwerp=personeel">
            Neem contact op
          </Link>
        </div>
      </div>
    </section>
  );
}
