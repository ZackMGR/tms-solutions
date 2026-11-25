import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap-s">
        <p className="eyebrow">404</p>
        <h1>Deze pagina bestaat niet.</h1>
        <p className="lead" style={{ margin: "16px 0 22px" }}>
          De link is verlopen of het adres klopt niet. Ga terug naar de homepage of bekijk de vacatures.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/">Naar home</Link>
          <Link className="btn btn-ghost" href="/vacatures">Vacatures</Link>
        </div>
      </div>
    </section>
  );
}
