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

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "TMS Solutions — detachering en vakmensen",
    template: "%s · TMS Solutions",
  },
  description:
    "TMS Solutions bemiddelt vakmensen voor opdrachtgevers in bouw, logistiek, techniek, zorg, kantoor en meer. Vanuit Utrecht, door heel Nederland.",
  openGraph: {
    locale: "nl_NL",
    siteName: company.brand,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: company.brand,
  legalName: company.legalName,
  email: company.email,
  url: company.siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.street,
    postalCode: company.postalCode,
    addressLocality: company.city,
    addressCountry: "NL",
  },
  areaServed: "NL",
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
