import type { Metadata } from "next";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "Algemene voorwaarden van T.M.S. Trading B.V., handelend als TMS Solutions.",
};

const sections = [
  {
    title: "1. Toepasselijkheid",
    body: [
      `Deze voorwaarden gelden voor alle offertes, opdrachten en overeenkomsten van ${company.legalName}, handelend onder de naam ${company.brand}, met opdrachtgevers en met mensen die via ons werkzaam zijn.`,
    ],
  },
  {
    title: "2. Begrippen",
    body: [
      "Opdrachtgever: de organisatie die ons vraagt personeel te werven of ter beschikking te stellen. Medewerker: de persoon die via ons bij een opdrachtgever werkt. Opdracht: de afspraak waarin rol, plaats, uren, tarief en duur staan.",
    ],
  },
  {
    title: "3. Totstandkoming",
    body: [
      "Een voorstel is vrijblijvend tot we het schriftelijk bevestigen of tot de medewerker feitelijk start. Een mondelinge toezegging bevestigen we per e-mail, zodat beide kanten hetzelfde document hebben.",
    ],
  },
  {
    title: "4. Inzet en selectie",
    body: [
      "We selecteren op de eisen die de opdrachtgever vooraf noemt, inclusief diploma’s of een VOG wanneer die verplicht zijn. De opdrachtgever blijft verantwoordelijk voor instructie, toezicht en een veilige werkplek op locatie.",
    ],
  },
  {
    title: "5. Tarief en betaling",
    body: [
      "Tarieven zijn exclusief btw, tenzij het voorstel anders zegt. De betalingstermijn is 14 dagen na factuurdatum. Bij te late betaling mogen we wettelijke rente en redelijke incassokosten in rekening brengen.",
    ],
  },
  {
    title: "6. Aansprakelijkheid",
    body: [
      "We zijn niet aansprakelijk voor schade door onjuiste informatie van de opdrachtgever of de medewerker. Onze aansprakelijkheid is beperkt tot het factuurbedrag van de betreffende opdracht over de laatste drie maanden, behalve bij opzet of bewuste roekeloosheid.",
    ],
  },
  {
    title: "7. Geheimhouding",
    body: [
      "Partijen houden informatie geheim die ze in het kader van de opdracht krijgen en die redelijkerwijs vertrouwelijk is, ook na afloop van de opdracht.",
    ],
  },
  {
    title: "8. Duur en einde",
    body: [
      "De opdracht duurt zolang als in de bevestiging staat. Opzeggen gebeurt schriftelijk. De opzegtermijn is één maand, tenzij de bevestiging een andere termijn noemt of een dwingende wettelijke termijn langer is.",
    ],
  },
  {
    title: "9. Overname",
    body: [
      "Wil de opdrachtgever een medewerker zelf in dienst nemen, dan maken we daar vooraf afspraken over. Zonder die afspraak geldt een vergoeding die in verhouding staat tot de wervingsinspanning, tenzij dwingend recht iets anders voorschrijft.",
    ],
  },
  {
    title: "10. Recht en geschillen",
    body: [
      "Op deze voorwaarden is Nederlands recht van toepassing. Geschillen gaan naar de bevoegde rechter in het arrondissement Midden-Nederland, locatie Utrecht.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="section page-hero">
      <div className="wrap-s legal">
        <p className="eyebrow">Laatst bijgewerkt in 2026</p>
        <h1>Algemene voorwaarden</h1>
        <p>
          Deze tekst is een werkafspraak voor de dienstverlening van {company.brand}. Laat hem nalezen door
          een jurist voordat u er offertes op baseert.
        </p>
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
