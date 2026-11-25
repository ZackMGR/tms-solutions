import type { Metadata } from "next";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Hoe T.M.S. Trading B.V. persoonsgegevens verwerkt.",
};

const sections = [
  {
    title: "1. Verantwoordelijke",
    body: [
      `${company.legalName}, gevestigd aan ${company.street}, ${company.postalCode} ${company.city}, is verwerkingsverantwoordelijke voor de persoonsgegevens die via deze website en in het contact daarna worden verwerkt. Handelsnaam: ${company.brand}.`,
    ],
  },
  {
    title: "2. Welke gegevens",
    body: [
      "Via de formulieren op deze site vragen we naam, e-mailadres, telefoonnummer en de inhoud van uw bericht. Bij een sollicitatie kunt u een cv als PDF of Word-bestand meesturen.",
      "Een burgerservicenummer, een kopie van een identiteitsbewijs of een Verklaring Omtrent het Gedrag vragen we niet via de website. Die gegevens komen alleen aan de orde als er een arbeidsovereenkomst of een wettelijke plicht volgt, en dan via een apart kanaal.",
    ],
  },
  {
    title: "3. Waarvoor",
    body: [
      "We gebruiken de gegevens om te reageren op uw vraag, te beoordelen of een opdracht past, u voor te stellen aan een opdrachtgever als u daarvoor toestemming geeft, een overeenkomst uit te voeren en te voldoen aan een wettelijke plicht zoals de loonadministratie.",
    ],
  },
  {
    title: "4. Grondslag",
    body: [
      "Afhankelijk van het moment is de grondslag uw verzoek (sollicitatie of contact), de voorbereiding of uitvoering van een overeenkomst, een wettelijke plicht, of een gerechtvaardigd belang om onze dienst te kunnen leveren en misbruik te voorkomen.",
    ],
  },
  {
    title: "5. Bewaartermijn",
    body: [
      "Een sollicitatie die niet tot een opdracht leidt, bewaren we maximaal twee jaar zodat we u kunnen benaderen voor een passende klus. Wilt u eerder verwijdering, dan kan dat. Gegevens die bij een dienstverband horen, bewaren we zolang de wet dat vraagt, onder meer voor de fiscale bewaarplicht.",
    ],
  },
  {
    title: "6. Delen",
    body: [
      "We delen uw gegevens met een opdrachtgever alleen als dat nodig is om u voor te stellen of de opdracht uit te voeren, en bij een sollicitatie pas nadat we dat met u hebben afgestemd. Verwerkers die bijvoorbeeld e-mail of salarisadministratie voor ons doen, krijgen niet meer gegevens dan nodig is. We verkopen geen gegevens.",
    ],
  },
  {
    title: "7. Beveiliging",
    body: [
      "De formulieren sturen uw bericht per e-mail naar info@tms-solutions.nl. We bewaren die berichten in die mailbox en nemen redelijke maatregelen tegen onbevoegde toegang. Er is geen aparte database voor de formulieren.",
    ],
  },
  {
    title: "8. Uw rechten",
    body: [
      "U kunt inzage, correctie, verwijdering, beperking, overdracht of bezwaar vragen. Stuur daarvoor een e-mail naar " + company.emailLabel + ". We reageren binnen dertig dagen. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.",
    ],
  },
  {
    title: "9. Cookies",
    body: [
      "Deze website zet geen trackingcookies en gebruikt geen advertentie- of analyseplatform. Een technische cookie van de browser zelf, voor de werking van de pagina, kan voorkomen.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      `Vragen over dit beleid: ${company.emailLabel}, of schriftelijk naar ${company.street}, ${company.postalCode} ${company.city}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="section page-hero">
      <div className="wrap-s legal">
        <p className="eyebrow">Laatst bijgewerkt in 2026</p>
        <h1>Privacybeleid</h1>
        {sections.map((section) => (
          <div key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
