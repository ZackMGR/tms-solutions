import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { Dock, Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

const description =
  "TMS Solutions bemiddelt en detacheert vakmensen voor opdrachtgevers in bouw, logistiek, techniek, zorg en kantoor. Vanuit Utrecht, door heel Nederland.";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "TMS Solutions — detachering en vakmensen in Nederland",
    template: "%s · TMS Solutions",
  },
  description,
  applicationName: company.brand,
  authors: [{ name: company.legalName, url: company.siteUrl }],
  creator: company.brand,
  keywords: ["detachering", "bemiddeling", "vakmensen", "uitzendwerk", "Utrecht", "bouw", "logistiek", "techniek", "zorg"],
  alternates: { canonical: "./" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: company.brand,
    title: {
      default: "TMS Solutions — detachering en vakmensen in Nederland",
      template: "%s · TMS Solutions",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "TMS Solutions — detachering en vakmensen in Nederland",
      template: "%s · TMS Solutions",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: company.brand,
  legalName: company.legalName,
  description,
  email: company.submissionsEmail,
  url: company.siteUrl,
  image: `${company.siteUrl}/images/hero.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.street,
    postalCode: company.postalCode,
    addressLocality: company.city,
    addressCountry: "NL",
  },
  areaServed: "NL",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="nl" className={poppins.variable}>
      <body>
        <a className="skip" href="#inhoud">
          Naar de inhoud
        </a>
        <Header />
        <main id="inhoud">{children}</main>
        <Footer />
        <Dock />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
