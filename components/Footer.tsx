import Link from "next/link";
import { Logo } from "@/components/Logo";
import { company, sectors } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>
              {company.legalName} werkt onder de handelsnaam {company.brand}. Wij bemiddelen vakmensen
              en detacheren personeel, vanuit Utrecht en door heel Nederland.
            </p>
          </div>
          <div>
            <h3>Voor werknemers</h3>
            <ul>
              <li><Link href="/vacatures">Vacatures</Link></li>
              <li><Link href="/werknemers">Werken via TMS</Link></li>
              <li><Link href="/open-sollicitatie">Open sollicitatie</Link></li>
              <li><Link href="/inloggen">Inloggen</Link></li>
            </ul>
          </div>
          <div>
            <h3>Voor werkgevers</h3>
            <ul>
              <li><Link href="/werkgevers">Personeel nodig?</Link></li>
              <li><Link href="/sectoren">Sectoren</Link></li>
              <li><Link href="/contact?onderwerp=personeel">Neem contact op</Link></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li><a href={`mailto:${company.email}`}>{company.emailLabel}</a></li>
              <li>{company.street}</li>
              <li>{company.postalCode} {company.city}</li>
              <li>KVK {company.kvk}</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: 28 }}>
          <h3>Sectoren</h3>
          <div className="sector-links">
            {sectors.map((sector) => (
              <Link key={sector.slug} href={`/sectoren/${sector.slug}`}>
                {sector.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="legal-line">
          <span>
            © {new Date().getFullYear()} {company.legalName} · vestiging {company.vestiging}
          </span>
          <nav aria-label="Juridisch">
            <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
            <Link href="/privacybeleid">Privacybeleid</Link>
            <Link href="/inloggen">Login</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export function Dock() {
  return (
    <nav className="dock" aria-label="Snelle acties">
      <a href={`mailto:${company.email}`}>Mail</a>
      <Link href="/vacatures">Vacatures</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
