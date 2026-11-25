"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { company, sectors } from "@/lib/site";

const links = [
  { href: "/vacatures", label: "Vacatures" },
  { href: "/werknemers", label: "Voor werknemers" },
  { href: "/werkgevers", label: "Voor werkgevers" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setSectorsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-lock", open);
    return () => document.body.classList.remove("nav-lock");
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setSectorsOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span>
            {company.street}, {company.postalCode} {company.city}
          </span>
          <a href={`mailto:${company.email}`}>{company.emailLabel}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="wrap header-inner">
          <Logo />
          <nav className={open ? "nav is-open" : "nav"} aria-label="Hoofdmenu">
            <Link href="/vacatures" aria-current={pathname.startsWith("/vacatures") ? "page" : undefined}>
              Vacatures
            </Link>
            <div className={sectorsOpen ? "drop is-open" : "drop"}>
              <button
                type="button"
                aria-expanded={sectorsOpen}
                aria-controls="sector-menu"
                onClick={() => setSectorsOpen((value) => !value)}
              >
                Sectoren
              </button>
              <div className="drop-panel" id="sector-menu">
                {sectors.map((sector) => (
                  <Link key={sector.slug} href={`/sectoren/${sector.slug}`}>
                    {sector.name}
                    <small>{sector.summary}</small>
                  </Link>
                ))}
                <Link href="/sectoren" className="drop-all">
                  Alle sectoren
                </Link>
              </div>
            </div>
            {links.slice(1).map((link) => (
              <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link className="btn btn-primary header-cta" href="/vacatures">
            Vind een baan
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
