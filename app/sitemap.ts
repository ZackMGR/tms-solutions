import type { MetadataRoute } from "next";
import { company, sectors, vacancies } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/vacatures", "/sectoren", "/werknemers", "/werkgevers", "/over-ons", "/contact", "/open-sollicitatie", "/privacybeleid", "/algemene-voorwaarden", "/inloggen"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${company.siteUrl}${route || "/"}`,
      lastModified: now,
    })),
    ...sectors.map((sector) => ({
      url: `${company.siteUrl}/sectoren/${sector.slug}`,
      lastModified: now,
    })),
    ...vacancies.map((vacancy) => ({
      url: `${company.siteUrl}/vacatures/${vacancy.slug}`,
      lastModified: now,
    })),
  ];
}
