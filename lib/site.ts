export const company = {
  brand: "TMS Solutions",
  legalName: "T.M.S. Trading B.V.",
  email: "info@tms-solutions.nl",
  emailLabel: "info@tms-solutions.nl",
  submissionsEmail: "info@tms-solutions.nl",
  kvk: "96935510",
  vestiging: "000062214209",
  street: "San Marinostraat 193",
  postalCode: "3541 DS",
  city: "Utrecht",
  country: "Nederland",
  mapsUrl:
    "https://maps.google.com/?q=San+Marinostraat+193,+3541+DS+Utrecht",
  siteUrl: "https://tms-solutions.nl",
  hours: [
    { day: "Maandag – vrijdag", time: "09:00 – 17:30" },
    { day: "Zaterdag", time: "Op afspraak" },
    { day: "Zondag", time: "Gesloten" },
  ],
};

export type Sector = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  summary: string;
  lead: string;
  body: string;
  roles: string[];
  points: { title: string; text: string }[];
  assignments: string[];
  faqs: { q: string; a: string }[];
};

export type Vacancy = {
  slug: string;
  title: string;
  sector: string;
  location: string;
  hours: string;
  summary: string;
  intro: string;
  tasks: string[];
  requirements: string[];
  offer: string[];
};

export const sectors: Sector[] = [
  {
    slug: "bouw",
    name: "Bouw",
    tagline: "Vakmensen die het werk op de bouwplaats vooruit helpen.",
    image: "/images/bouw.jpg",
    summary: "Timmermannen, uitvoerders en bouwvakkers die direct meedraaien.",
    lead: "Van ruwbouw tot afbouw leveren we mensen die een ploeg versterken zonder lange inwerktijd.",
    body: "Aannemers en onderaannemers schakelen TMS Solutions in wanneer een project extra handen nodig heeft: piek in de planning, ziekte, of een nieuwe klus die morgen begint. We letten op certificaten, werkmentaliteit en of iemand past bij de manier van werken op uw bouwplaats.",
    roles: ["Timmerman", "Metselaar", "Stukadoor", "Bouwvakker", "Uitvoerder", "Werkvoorbereider"],
    points: [
      { title: "Veilig werken", text: "Waar de opdrachtgever het eist, selecteren we op een geldig VCA-diploma." },
      { title: "Snel schakelen", text: "U heeft één aanspreekpunt dat de aanvraag oppakt en kandidaten voorstelt." },
      { title: "Praktijkervaring", text: "We vragen door op projecten, materialen en ploegwerk, niet alleen op een functietitel." },
    ],
    assignments: [
      "Aanvulling van een vaste ploeg tijdens een deadline",
      "Bezetting van een nieuwbouw- of renovatieproject",
      "Vervanging bij ziekte of verlof",
      "Specialistisch werk in afbouw, dak of restauratie",
    ],
    faqs: [
      {
        q: "Hoe snel kan iemand starten?",
        a: "Dat hangt af van het profiel en de beschikbaarheid in ons bestand. We reageren binnen één werkdag op uw aanvraag en geven dan een reëel tijdspad.",
      },
      {
        q: "Vragen jullie VCA?",
        a: "Voor werk op de bouwplaats vragen we VCA wanneer de opdrachtgever of de locatie dat verplicht stelt.",
      },
    ],
  },
  {
    slug: "logistiek",
    name: "Logistiek",
    tagline: "Mensen die goederenstromen in beweging houden.",
    image: "/images/logistiek.jpg",
    summary: "Magazijn, orderpicken, heftrucks en reachtrucks.",
    lead: "Distributiecentra en warehouses hebben bezetting nodig die het tempo van de operatie aankan.",
    body: "We bemiddelen orderpickers, heftruckchauffeurs, teamleiders en logistiek medewerkers voor dagdienst en ploegen. We checken certificaten, rijervaring en of iemand bekend is met scanners, voicepicking of een specifieke stelling.",
    roles: ["Orderpicker", "Heftruckchauffeur", "Reachtruckchauffeur", "Magazijnmedewerker", "Teamleider logistiek"],
    points: [
      { title: "Certificaten", text: "Heftruck- en reachtruckcertificaat vragen we uit en controleren we voor de start." },
      { title: "Ploegendienst", text: "We plaatsen mensen die bewust kiezen voor vroege, late of 2-ploegendienst." },
      { title: "Tempo", text: "We bespreken fysieke belasting en productienormen vooraf, zodat de verwachting klopt." },
    ],
    assignments: [
      "Seizoenspiek in een distributiecentrum",
      "Structurele bezetting van een inpaklijn",
      "Vervanging van chauffeurs intern transport",
      "Ondersteuning bij een verhuizing van voorraad",
    ],
    faqs: [
      {
        q: "Plaatsen jullie ook in ploegendienst?",
        a: "Ja. We vermelden diensten en toeslagen vooraf, zodat een kandidaat weet welk rooster hij of zij accepteert.",
      },
      {
        q: "Regelen jullie ook leidinggevenden?",
        a: "Ja, van voorman tot teamleider, naast uitvoerende magazijnfuncties.",
      },
    ],
  },
  {
    slug: "techniek",
    name: "Techniek",
    tagline: "Monteurs en technici die storingen kort houden.",
    image: "/images/techniek.jpg",
    summary: "Werktuigbouw, elektro, installatie en onderhoud.",
    lead: "Technische bedrijven zoeken mensen die zelfstandig een storing afhandelen en netjes rapporteren.",
    body: "TMS Solutions werft servicemonteurs, installateurs, lassers en onderhoudstechnici. We matchen op discipline — werktuigbouw, elektro, koeltechniek of lassen — en op de mate van zelfstandigheid die de klus vraagt.",
    roles: ["Servicemonteur", "Elektromonteur", "Installatiemonteur", "Lasser MIG/MAG", "Onderhoudstechnicus"],
    points: [
      { title: "Vak eerst", text: "We toetsen diploma’s, lassercertificaten en merken waarmee iemand heeft gewerkt." },
      { title: "Storingsdienst", text: "Beschikbaarheid voor consignatie bespreken we expliciet, niet achteraf." },
      { title: "Veiligheid", text: "VCA, NEN 3140 of een andere eis nemen we mee in de selectie als de locatie dat vraagt." },
    ],
    assignments: [
      "Onderhoudsronde bij zakelijke installaties",
      "Storingsteam dat pieken opvangt",
      "Nieuwbouw van technische installaties",
      "Tijdelijke lascapaciteit in productie of constructie",
    ],
    faqs: [
      {
        q: "Kunnen monteurs met een servicebus worden geplaatst?",
        a: "Als de opdrachtgever een bus beschikbaar stelt, of als de kandidaat eigen vervoer heeft, nemen we dat op in de afspraak.",
      },
      {
        q: "Werken jullie landelijk?",
        a: "Ja. Onze vestiging staat in Utrecht en we plaatsen door heel Nederland.",
      },
    ],
  },
  {
    slug: "productie",
    name: "Productie",
    tagline: "Stabiele bezetting voor de lijn.",
    image: "/images/productie.jpg",
    summary: "Operators, machinebedieners en kwaliteitscontrole.",
    lead: "Een productielijn valt of staat met mensen die het ritme kennen en kwaliteit vasthouden.",
    body: "We leveren operators, inpakmedewerkers, machinebedieners en kwaliteitscontroleurs voor food en non-food. Hygiëne, ploegentoeslag en fysieke belasting leggen we vast voordat iemand start.",
    roles: ["Machinebediener", "Operator", "Inpakmedewerker", "Kwaliteitscontroleur", "Procesoperator"],
    points: [
      { title: "Lijnritme", text: "We bespreken tempo, staan en repeterend werk eerlijk met de kandidaat." },
      { title: "Hygiëne", text: "Voor food vragen we ervaring met kledingvoorschriften en schoon werken." },
      { title: "Continuïteit", text: "We zoeken mensen die een periode willen blijven, niet alleen een enkele dag." },
    ],
    assignments: [
      "Extra bezetting bij een productiepiek",
      "Vervanging in een 2- of 3-ploegenrooster",
      "Opstart van een extra lijn of shift",
      "Kwaliteitscontrole bij een nieuwe serie",
    ],
    faqs: [
      {
        q: "Plaatsen jullie in de foodindustrie?",
        a: "Ja, mits de kandidaat past bij de hygiëne-eisen van de locatie. Die eisen vragen we vooraf uit.",
      },
      {
        q: "Kan een groep tegelijk starten?",
        a: "Bij een grotere bezetting plannen we de instroom in overleg, zodat de lijn niet in één keer overloopt.",
      },
    ],
  },
  {
    slug: "zorg",
    name: "Zorg",
    tagline: "Zorgvuldig personeel voor cliënt en patiënt.",
    image: "/images/zorg.jpg",
    summary: "Helpenden, verzorgenden en ondersteuning in de zorg.",
    lead: "Zorgteams hebben mensen nodig die rustig werken, afspraken nakomen en cliënten serieus nemen.",
    body: "We bemiddelen helpenden, verzorgenden IG, huishoudelijke ondersteuning en zorgadministratie. Diploma’s en een Verklaring Omtrent het Gedrag nemen we mee wanneer de instelling dat verlangt. We plaatsen geen mensen op een zorgfunctie zonder de papieren die daarbij horen.",
    roles: ["Helpende zorg en welzijn", "Verzorgende IG", "Zorgondersteuner", "Huishoudelijke hulp", "Zorgadministratie"],
    points: [
      { title: "Diploma’s", text: "We koppelen alleen kandidaten met het diploma dat de functie vraagt." },
      { title: "VOG", text: "Een VOG regelen we wanneer de opdrachtgever die voorwaarde stelt." },
      { title: "Aandacht", text: "We letten op de doelgroep: ouderenzorg, gehandicaptenzorg of thuiszorg." },
    ],
    assignments: [
      "Vervanging bij ziekte op een woongroep",
      "Extra handen in de dagdienst",
      "Structurele ondersteuning bij onderbezetting",
      "Administratieve ontlasting van een zorgteam",
    ],
    faqs: [
      {
        q: "Plaatsen jullie ook nachtdiensten?",
        a: "Alleen als de kandidaat daar bewust voor kiest en de kwalificatie bij de dienst past.",
      },
      {
        q: "Werken jullie met zzp’ers in de zorg?",
        a: "We detacheren en bemiddelen personeel. De contractvorm leggen we per opdracht vast, binnen de regels die voor de zorg gelden.",
      },
    ],
  },
  {
    slug: "office",
    name: "Office",
    tagline: "Kantoorprofessionals die een team ontlasten.",
    image: "/images/office.jpg",
    summary: "Administratie, receptie, salaris en klantenservice.",
    lead: "Van receptie tot financiële administratie: mensen die overzicht houden en netjes werken.",
    body: "MKB-bedrijven en grotere kantoren vragen ons om administratief medewerkers, receptionisten, customer support en junior financieel medewerkers. We matchen op systemen, tempo en de mate van zelfstandigheid.",
    roles: ["Administratief medewerker", "Receptionist", "Salarisadministrateur", "Customer support", "Managementassistent"],
    points: [
      { title: "Systemen", text: "We vragen welke pakketten iemand écht heeft gebruikt, van Exact tot een ticketsysteem." },
      { title: "Taal", text: "Nederlands is de norm. Extra talen vermelden we als de functie dat nodig heeft." },
      { title: "Discretie", text: "Voor financiën en personeelszaken bespreken we vertrouwelijkheid vooraf." },
    ],
    assignments: [
      "Tijdelijke vervanging van een administrateur",
      "Ondersteuning tijdens een maand- of jaarafsluiting",
      "Receptie en telefoon bij een groeiend team",
      "Klantenservice bij een drukke periode",
    ],
    faqs: [
      {
        q: "Kan iemand op locatie én deels thuis werken?",
        a: "Hybride werken is bespreekbaar als de opdrachtgever dat toestaat. We zetten de afspraak in de opdrachtbevestiging.",
      },
      {
        q: "Plaatsen jullie ook meertalige support?",
        a: "Ja, als het profiel daarom vraagt. We toetsen de taal in het gesprek.",
      },
    ],
  },
  {
    slug: "horeca",
    name: "Horeca",
    tagline: "Gastvrij personeel voor service en keuken.",
    image: "/images/horeca.jpg",
    summary: "Bediening, keuken en leiding op de vloer.",
    lead: "Restaurants, hotels en cateraars hebben mensen nodig die een drukke dienst overeind houden.",
    body: "We zoeken bediening, koks, afwassers en floormanagers die servicegericht zijn en kunnen werken op avonden en weekenden. Ervaring met een specifiek concept — bistro, hotel of evenement — nemen we mee in de match.",
    roles: ["Bedieningsmedewerker", "Zelfstandig werkend kok", "Afwasser", "Gastheer of gastvrouw", "Floormanager"],
    points: [
      { title: "Diensten", text: "Avond-, weekend- en gesplitste diensten staan vooraf in het voorstel." },
      { title: "Hygiëne", text: "Voor de keuken letten we op kennis van HACCP en schoon werken." },
      { title: "Gastvrijheid", text: "We letten op houding naar gasten, niet alleen op jaren ervaring." },
    ],
    assignments: [
      "Extra bezetting in een druk seizoen",
      "Vervanging van een kok of bediening",
      "Evenementen en cateringpieken",
      "Opening van een nieuwe zaak",
    ],
    faqs: [
      {
        q: "Plaatsen jullie ook voor één evenement?",
        a: "Losse evenementen zijn bespreekbaar. Voor structurele diensten werken we het liefst met een langere opdracht.",
      },
      {
        q: "Is een HACCP-certificaat verplicht?",
        a: "Dat hangt af van de keuken. We vragen het uit bij de opdrachtgever en bij de kandidaat.",
      },
    ],
  },
  {
    slug: "groen",
    name: "Groen",
    tagline: "Vakmensen voor groenvoorziening en buitenruimte.",
    image: "/images/groen.jpg",
    summary: "Hoveniers, groenmedewerkers en machinisten.",
    lead: "Gemeenten, hoveniersbedrijven en cultuurtechniek zoeken mensen die buiten willen werken.",
    body: "We bemiddelen hoveniers, groenvoorzieners en machinisten voor aanleg en onderhoud. Seizoensdrukte in het voorjaar en de zomer vangen we op met mensen die buitenwerk bewust kiezen.",
    roles: ["Hovenier", "Groenvoorziener", "Machinist", "Voorman groen", "Stratenmaker"],
    points: [
      { title: "Buitenwerk", text: "We zijn eerlijk over weer, fysieke belasting en vroeg beginnen." },
      { title: "Rijbewijs", text: "BE, trekker of een specifiek machinecertificaat toetsen we als de klus dat vraagt." },
      { title: "Seizoen", text: "We plannen bezetting mee met de piek van aanleg en onderhoud." },
    ],
    assignments: [
      "Onderhoudsbestek voor een gemeente of VvE",
      "Aanleg van een tuin of terrein",
      "Machinale ondersteuning bij grondwerk",
      "Vervanging van een voorman in het seizoen",
    ],
    faqs: [
      {
        q: "Werken jullie ook in de winter?",
        a: "Ja, voor onderhoud, bestrating en werk dat het hele jaar doorgaat. De beschikbaarheid verschilt per seizoen.",
      },
      {
        q: "Moet een kandidaat eigen gereedschap meenemen?",
        a: "Alleen als dat is afgesproken. We zetten het in de opdracht, zodat niemand voor verrassingen staat.",
      },
    ],
  },
  {
    slug: "schoonmaak",
    name: "Schoonmaak",
    tagline: "Een schone werkplek, met mensen die op tijd komen.",
    image: "/images/schoonmaak.jpg",
    summary: "Kantoor, zorginstelling en objectleiding.",
    lead: "Schoonmaak draait om betrouwbaarheid: aanwezig, nauwkeurig en discreet op locatie.",
    body: "We plaatsen schoonmaakmedewerkers en objectleiders voor kantoren, zorg en lichte industrie. Vroege en late diensten, sleutelbeheer en omgang met bezoekers bespreken we voor de eerste dienst.",
    roles: ["Schoonmaakmedewerker", "Specialistisch reiniger", "Objectleider", "Glazenwasser", "Huishoudelijk medewerker"],
    points: [
      { title: "Betrouwbaar", text: "Op tijd starten is een selectiecriterium, niet een detail achteraf." },
      { title: "Discretie", text: "Op kantoren en in de zorg werken mensen tussen andermans spullen. Dat benoemen we." },
      { title: "Aansturing", text: "Voor meerdere panden zoeken we objectleiders die een ploeg kunnen aansturen." },
    ],
    assignments: [
      "Dagelijkse kantoorschoonmaak",
      "Ondersteuning in een zorginstelling",
      "Tijdelijke extra inzet na een verbouwing",
      "Leiding over meerdere objecten",
    ],
    faqs: [
      {
        q: "Plaatsen jullie ook vroege ochtenddiensten?",
        a: "Ja. Het tijdstip staat in het voorstel, inclusief reistijd naar de locatie.",
      },
      {
        q: "Leveren jullie materialen?",
        a: "Materialen en middelen blijven bij de opdrachtgever, tenzij we iets anders afspreken.",
      },
    ],
  },
  {
    slug: "beveiliging",
    name: "Beveiliging",
    tagline: "Beveiligers die rust en overzicht brengen.",
    image: "/images/beveiliging.jpg",
    summary: "Objectbeveiliging en evenementen, met de juiste papieren.",
    lead: "We plaatsen alleen beveiligers met de diploma’s en registratie die de locatie vereist.",
    body: "Objectbeveiliging, receptiebeveiliging en evenementen vragen verschillende papieren en een andere houding. We controleren het diploma en de geldigheid voordat we iemand voorstellen, en we zijn duidelijk over diensten, nachtwerk en fysieke belasting.",
    roles: ["Objectbeveiliger", "Evenementenbeveiliger", "Receptiebeveiliger", "Mobiele surveillance"],
    points: [
      { title: "Papieren op orde", text: "Zonder passend diploma en geldige registratie stellen we niemand voor." },
      { title: "Houding", text: "We letten op gastvrijheid bij receptie en op stevigheid bij objectbewaking." },
      { title: "Diensten", text: "Nacht, weekend en evenementen worden vooraf besproken, inclusief reistijd." },
    ],
    assignments: [
      "Vaste post op een kantoor of bedrijfsterrein",
      "Toezicht bij een evenement",
      "Vervanging in een bestaand beveiligingsteam",
      "Receptie met een beveiligingscomponent",
    ],
    faqs: [
      {
        q: "Welk diploma vragen jullie?",
        a: "Dat volgt de wettelijke eis van de functie. We plaatsen niemand op een beveiligingsrol zonder het diploma dat daarbij hoort.",
      },
      {
        q: "Kunnen beveiligers kort voor een evenement starten?",
        a: "Als diploma en beschikbaarheid kloppen, kan dat snel. We bevestigen pas als de papieren zijn gecontroleerd.",
      },
    ],
  },
  {
    slug: "it",
    name: "IT",
    tagline: "IT-professionals die systemen en gebruikers vooruit helpen.",
    image: "/images/it.jpg",
    summary: "Servicedesk, beheer en softwareontwikkeling.",
    lead: "Van eerste lijn tot development: mensen die een vraag oplossen en documenteren wat ze doen.",
    body: "We bemiddelen servicedeskmedewerkers, systeembeheerders en developers voor bedrijven die tijdelijk of structureel capaciteit nodig hebben. We matchen op stack, ticketsystemen en de balans tussen gebruikerscontact en techniek.",
    roles: ["Servicedeskmedewerker", "Systeembeheerder", "Software developer", "Functioneel beheerder", "IT-support op locatie"],
    points: [
      { title: "Concrete stack", text: "We noemen talen, tools en omgevingen, zodat een profiel niet vaag blijft." },
      { title: "Gebruikers", text: "Voor support letten we op uitleg in gewoon Nederlands, niet alleen op ticketsnelheid." },
      { title: "Hybride", text: "Kantoor, remote of op locatie bij de eindklant leggen we vast in de opdracht." },
    ],
    assignments: [
      "Eerste- en tweedelijns support bij een groeiend bedrijf",
      "Tijdelijke ontwikkelcapaciteit in een bestaand team",
      "Beheer tijdens een migratie of verhuizing",
      "Vervanging van een beheerder bij verlof",
    ],
    faqs: [
      {
        q: "Werken developers op afstand?",
        a: "Als het team dat wil, wel. We spreken beschikbare uren, overlap met kantoortijd en overlegmomenten af.",
      },
      {
        q: "Doen jullie ook werving voor een vaste rol?",
        a: "Een opdracht kan uitmonden in indiensttreding bij de opdrachtgever. Dat spreken we vooraf af, inclusief de voorwaarden.",
      },
    ],
  },
];

export const vacancies: Vacancy[] = [
  {
    slug: "uitvoerder-nieuwbouw",
    title: "Uitvoerder nieuwbouw",
    sector: "bouw",
    location: "Utrecht",
    hours: "40 uur",
    summary: "Je stuurt een ploeg aan op nieuwbouw en renovatie en houdt planning en kwaliteit bij.",
    intro: "Voor projecten in de regio Utrecht zoeken we een uitvoerder die overzicht houdt op de bouwplaats en rustig schakelt met onderaannemers.",
    tasks: [
      "Dagelijkse aansturing van de ploeg op de bouwplaats",
      "Bewaken van planning, kwaliteit en veiligheid",
      "Afstemmen met werkvoorbereiding en onderaannemers",
      "Signaleren van meerwerk en knelpunten",
    ],
    requirements: [
      "Ervaring als uitvoerder of voorman in de woning- of utiliteitsbouw",
      "VCA en een rijbewijs B",
      "Je kunt een ploeg aansturen en blijft rustig als de planning schuift",
      "Nederlands in woord en geschrift",
    ],
    offer: [
      "Een opdracht via TMS Solutions met een vast aanspreekpunt",
      "Marktconforme beloning, afgesproken vóór de start",
      "Werk in de regio Utrecht",
      "Ruimte om door te groeien naar een langere samenwerking",
    ],
  },
  {
    slug: "timmerman-renovatie",
    title: "Timmerman renovatie",
    sector: "bouw",
    location: "Utrecht",
    hours: "40 uur",
    summary: "Zelfstandig timmerwerk in renovatie en verbouw, van kozijn tot betimmering.",
    intro: "We zoeken een timmerman die zelfstandig een renovatieklus kan oppakken en netjes oplevert.",
    tasks: [
      "Stellen van kozijnen, deuren en binnenbetimmering",
      "Aftekenen, zagen en monteren op de bouw",
      "Overleggen met de uitvoerder over volgorde en materiaal",
      "Werkplek veilig en opgeruimd achterlaten",
    ],
    requirements: [
      "Aantoonbare ervaring als timmerman in renovatie of nieuwbouw",
      "VCA wanneer de locatie dat vraagt",
      "Je werkt nauwkeurig en kunt tekeningen lezen",
      "Eigen handgereedschap is een voordeel",
    ],
    offer: [
      "Afwisselende projecten in de regio",
      "Duidelijke afspraken over uren en tarief",
      "Een aanspreekpunt dat bereikbaar is tijdens de opdracht",
    ],
  },
  {
    slug: "heftruckchauffeur",
    title: "Heftruckchauffeur",
    sector: "logistiek",
    location: "Rotterdam",
    hours: "40 uur · 2-ploegen",
    summary: "Intern transport in een distributiecentrum, met een geldig heftruckcertificaat.",
    intro: "Voor een distributieomgeving in de regio Rotterdam zoeken we heftruckchauffeurs die veilig en in tempo werken.",
    tasks: [
      "Verplaatsen van pallets tussen ontvangst, opslag en expeditie",
      "Controleren van locaties en aantallen",
      "Melden van schade en onveilige situaties",
      "Samenwerken met orderpickers en teamleiders",
    ],
    requirements: [
      "Geldig heftruckcertificaat",
      "Ervaring in een distributiecentrum of productiemagazijn",
      "Je kunt werken in een 2-ploegenrooster",
      "Veilig werken gaat boven snelheid",
    ],
    offer: [
      "Ploegentoeslag volgens de afspraak in de opdracht",
      "Een duidelijke inwerkdag op de locatie",
      "Begeleiding vanuit TMS Solutions tijdens de opdracht",
    ],
  },
  {
    slug: "magazijnmedewerker-orderpicken",
    title: "Magazijnmedewerker orderpicken",
    sector: "logistiek",
    location: "Nieuwegein",
    hours: "32–40 uur",
    summary: "Orderpicken en inpakken in een magazijn net onder Utrecht.",
    intro: "We zoeken magazijnmedewerkers die nauwkeurig orders verzamelen en een fysieke werkdag prettig vinden.",
    tasks: [
      "Orders picken met scanner of picklijst",
      "Goederen inpakken en klaarzetten voor verzending",
      "Voorraadverschillen melden",
      "Werkplek volgens de afspraken van het magazijn houden",
    ],
    requirements: [
      "Ervaring in een magazijn is welkom, inwerkbaar talent ook",
      "Je kunt een volle dienst staan en tillen",
      "Nederlands of Engels voldoende om instructies te volgen",
      "Beschikbaar op doordeweekse dagen",
    ],
    offer: [
      "Uren in overleg tussen 32 en 40",
      "Een locatie die vanuit Utrecht goed te bereiken is",
      "Snel duidelijkheid na je reactie",
    ],
  },
  {
    slug: "storingsmonteur-installaties",
    title: "Storingsmonteur installaties",
    sector: "techniek",
    location: "Amersfoort",
    hours: "40 uur",
    summary: "Onderhoud en storingen aan werktuigkundige installaties bij zakelijke klanten.",
    intro: "We zoeken een monteur voor onderhoud en storingen aan installaties in de regio Amersfoort, die zelfstandig op pad kan.",
    tasks: [
      "Storingen zoeken en verhelpen bij klanten",
      "Planmatig onderhoud uitvoeren",
      "Werkbonnen en gebruikte materialen registreren",
      "Klanten kort en duidelijk informeren over de status",
    ],
    requirements: [
      "Mbo-werk- en denkniveau in de richting werktuigbouw of installatietechniek",
      "Ervaring met onderhoud aan installaties",
      "Rijbewijs B",
      "VCA",
    ],
    offer: [
      "Zelfstandig werk met een planning die vooraf bekend is",
      "Een vast aanspreekpunt bij TMS Solutions",
      "Marktconforme beloning",
    ],
  },
  {
    slug: "machinebediener-productie",
    title: "Machinebediener productie",
    sector: "productie",
    location: "Veenendaal",
    hours: "40 uur · ploegen",
    summary: "Je bedient een productielijn, bewaakt kwaliteit en wisselt om bij een andere order.",
    intro: "Voor een productielocatie in Veenendaal zoeken we machinebedieners die een ploegendienst willen draaien.",
    tasks: [
      "Machine opstarten, omstellen en bewaken",
      "Kwaliteit van het product controleren",
      "Storingen melden en kleine stops zelf oplossen",
      "Registreren van output en afkeur",
    ],
    requirements: [
      "Ervaring als operator of machinebediener",
      "Je werkt nauwkeurig en volgens voorschrift",
      "Bereid om in ploegendienst te werken",
      "Basis Nederlands of Engels",
    ],
    offer: [
      "Een vaste ploegindeling na de inwerkperiode",
      "Toeslag volgens de afgesproken regeling",
      "Kans op een langere opdracht bij goed functioneren",
    ],
  },
  {
    slug: "helpende-zorg-en-welzijn",
    title: "Helpende zorg en welzijn",
    sector: "zorg",
    location: "Utrecht",
    hours: "24–32 uur",
    summary: "Ondersteuning in de dagelijkse zorg, met aandacht voor de bewoner.",
    intro: "We zoeken een helpende voor de dagdienst in Utrecht. Een diploma en een VOG horen bij de plaatsing.",
    tasks: [
      "Helpen bij wassen, kleden en eten",
      "Huishoudelijke taken op de woongroep",
      "Signalen doorgeven aan de verzorgende of verpleegkundige",
      "Een prettige sfeer bewaren voor bewoners",
    ],
    requirements: [
      "Diploma Helpende zorg en welzijn of vergelijkbaar",
      "Ervaring in de ouderenzorg is een voordeel",
      "Bereid een VOG aan te vragen",
      "Beschikbaar in de dagdienst, deels in het weekend is bespreekbaar",
    ],
    offer: [
      "Een team dat je inwerkt op de groep",
      "Uren tussen 24 en 32 per week",
      "Begeleiding vanuit TMS Solutions naast het team op locatie",
    ],
  },
  {
    slug: "administratief-medewerker",
    title: "Administratief medewerker",
    sector: "office",
    location: "Utrecht",
    hours: "32–40 uur",
    summary: "Orderadministratie, mail en archief voor een groeiend MKB-bedrijf.",
    intro: "We zoeken een nauwkeurige administratief medewerker die overzicht houdt en prettig samenwerkt met collega’s.",
    tasks: [
      "Verwerken van orders, facturen en binnenkomende post",
      "Bijhouden van mappen en digitale dossiers",
      "Beantwoorden van vragen van collega’s en klanten",
      "Signaleren van ontbrekende gegevens",
    ],
    requirements: [
      "Ervaring met administratief werk",
      "Je werkt secuur in Excel en een e-mailomgeving",
      "Nederlands op professioneel niveau",
      "Je kunt zelfstandig een takenlijst afwerken",
    ],
    offer: [
      "Kantooruren in Utrecht, hybride werken in overleg",
      "Een overzichtelijke inwerkperiode",
      "Duidelijke opdracht en een aanspreekpunt",
    ],
  },
  {
    slug: "bediening-allround",
    title: "Allround bediening",
    sector: "horeca",
    location: "Utrecht",
    hours: "20–32 uur",
    summary: "Bediening in een drukke zaak: opnemen, uitserveren en afruimen.",
    intro: "Voor horeca in Utrecht zoeken we bediening die gastvrij blijft als het druk wordt.",
    tasks: [
      "Gasten ontvangen en bestellingen opnemen",
      "Uitserveren van eten en drinken",
      "Afruimen en de zaal bijhouden",
      "Meewerken bij het openen of sluiten van de dienst",
    ],
    requirements: [
      "Ervaring in bediening",
      "Beschikbaar op avonden en in het weekend",
      "Representatief en vriendelijk naar gasten",
      "Je kunt in een team werken",
    ],
    offer: [
      "Diensten in overleg, tussen 20 en 32 uur",
      "Fooi en toeslagen volgens de afspraak met de locatie",
      "Snel contact na je reactie",
    ],
  },
  {
    slug: "hovenier",
    title: "Hovenier",
    sector: "groen",
    location: "Zeist",
    hours: "38–40 uur",
    summary: "Aanleg en onderhoud van tuinen en groenstroken, met een voorman op de klus.",
    intro: "We zoeken een hovenier voor aanleg in het seizoen en onderhoud daarna, in de regio Zeist.",
    tasks: [
      "Beplanting zetten, bestrating leggen en grondwerk",
      "Onderhoud van bestaand groen",
      "Machines en handgereedschap netjes gebruiken",
      "De werkplek veilig achterlaten voor bewoners of verkeer",
    ],
    requirements: [
      "Ervaring als hovenier of groenvoorziener",
      "Rijbewijs B, BE is een voordeel",
      "Je werkt graag buiten, ook als het weer tegenzit",
      "Basiskennis van beplanting en bestrating",
    ],
    offer: [
      "Werk in de regio Utrechtse Heuvelrug",
      "Een ploeg die je meeneemt in de manier van werken",
      "Heldere afspraken over uren en gereedschap",
    ],
  },
  {
    slug: "schoonmaakmedewerker",
    title: "Schoonmaakmedewerker",
    sector: "schoonmaak",
    location: "Houten",
    hours: "20–32 uur",
    summary: "Schoonmaak van kantoren en algemene ruimtes, in een vroege of late dienst.",
    intro: "We zoeken schoonmaakmedewerkers die zelfstandig een route lopen en afspraken over sleutels serieus nemen.",
    tasks: [
      "Stofzuigen, dweilen en sanitair reinigen volgens het programma",
      "Bijvullen van dispensers en melden van defecten",
      "Afronden van de ruimte voordat gebruikers binnenkomen",
      "Omgaan met sleutels of een toegangspas volgens protocol",
    ],
    requirements: [
      "Ervaring in schoonmaak is welkom",
      "Je komt op tijd en werkt zelfstandig",
      "Beschikbaar in de vroege ochtend of aan het einde van de dag",
      "Discreet op locatie",
    ],
    offer: [
      "Vaste route na de inwerkdiensten",
      "Uren in overleg",
      "Een objectleider of aanspreekpunt in de buurt",
    ],
  },
  {
    slug: "objectbeveiliger",
    title: "Objectbeveiliger",
    sector: "beveiliging",
    location: "Utrecht",
    hours: "32–40 uur",
    summary: "Toezicht op een bedrijfs- of kantoorlocatie, met de papieren die de wet vraagt.",
    intro: "Voor objectbeveiliging in Utrecht zoeken we beveiligers met een geldig diploma en een rustige, alerte houding.",
    tasks: [
      "Toegangscontrole en rondes over het object",
      "Registreren van bijzonderheden",
      "Aanspreekpunt zijn voor bezoekers en medewerkers",
      "Opvolgen van het protocol bij een incident",
    ],
    requirements: [
      "Het diploma dat wettelijk bij objectbeveiliging hoort, geldig op de startdatum",
      "Ervaring op een object is een voordeel",
      "Bereidheid tot vroege, late of weekenddiensten",
      "Verklaring Omtrent het Gedrag wanneer de locatie die vraagt",
    ],
    offer: [
      "Diensten die vooraf in een rooster staan",
      "Inwerken op het objectprotocol",
      "Een aanspreekpunt buiten de locatie bij vragen over de opdracht",
    ],
  },
  {
    slug: "servicedesk-medewerker",
    title: "Servicedeskmedewerker",
    sector: "it",
    location: "Utrecht",
    hours: "32–40 uur",
    summary: "Eerste lijn voor collega’s: tickets, accounts en rustige uitleg.",
    intro: "We zoeken een servicedeskmedewerker die gebruikers helpt en een ticket netjes afhandelt.",
    tasks: [
      "Aannemen en oplossen van eerstelijns meldingen",
      "Accounts, wachtwoorden en werkplekken inregelen volgens procedure",
      "Doorzetten van tweedelijns issues met een bruikbare omschrijving",
      "Kennisartikelen bijwerken als een oplossing vaker voorkomt",
    ],
    requirements: [
      "Ervaring op een IT-servicedesk of vergelijkbare supportrol",
      "Je legt techniek uit in gewone taal",
      "Bekend met een ticketsysteem",
      "Nederlands vloeiend, Engels kunnen lezen",
    ],
    offer: [
      "Kantoor in Utrecht, deels op afstand in overleg",
      "Een team dat je de omgeving laat zien",
      "Duidelijke opdrachtduur en kans op verlenging",
    ],
  },
];

export const reasons = [
  {
    title: "Snel een reactie",
    text: "U hoort binnen één werkdag van ons. Geen weken wachten op een eerste gesprek.",
  },
  {
    title: "Eén aanspreekpunt",
    text: "Kandidaat en opdrachtgever hebben een vast persoon die de opdracht kent.",
  },
  {
    title: "Afspraken vooraf",
    text: "Uren, tarief, diploma’s en de lengte van de opdracht staan vast vóór de start.",
  },
  {
    title: "Ontzorgd",
    text: "Werving, voorstellen, contract en de gang naar de eerste werkdag nemen wij uit handen.",
  },
];

export const workerBenefits = [
  {
    title: "Iemand die meedenkt",
    text: "Je krijgt een aanspreekpunt dat je opdracht kent, voor de start en tijdens het werk.",
  },
  {
    title: "Eerlijk over de klus",
    text: "Rooster, reistijd en wat het werk lichamelijk vraagt, hoor je voordat je ja zegt.",
  },
  {
    title: "Op tijd betaald",
    text: "Salaris en toeslagen spreken we vooraf af. Je hoeft niet achter je uren aan.",
  },
  {
    title: "Een volgende stap",
    text: "Bevalt een opdracht, dan kijken we naar verlenging of een plek die beter past.",
  },
];

export const workerSteps = [
  "Je reageert op een profiel of stuurt een open sollicitatie.",
  "We bellen voor een kennismaking en bespreken wat je zoekt.",
  "We leggen een passende opdracht voor en stellen je voor.",
  "Je start, met TMS Solutions als achtervang als er iets speelt.",
];

export const employerBenefits = [
  {
    title: "We leren de klus kennen",
    text: "Eerst de werkplek, de ploeg en de eisen. Daarna pas een kandidaat.",
  },
  {
    title: "Een voorstel met context",
    text: "U krijgt geen anonieme stapel cv’s, maar mensen die we hebben gesproken.",
  },
  {
    title: "Breed inzetbaar",
    text: "Bouw, logistiek, techniek, productie, zorg, kantoor, horeca, groen, schoonmaak, beveiliging en IT.",
  },
  {
    title: "Helder tarief",
    text: "Het voorstel noemt wat er wel en niet in zit. Geen kleine lettertjes achteraf.",
  },
  {
    title: "Langere samenwerking",
    text: "We blijven bereikbaar tijdens de opdracht en denken mee over verlenging.",
  },
  {
    title: "Minder regelwerk",
    text: "Contract, uren en de eerste werkdag regelen we samen met u, in één lijn.",
  },
];

export const employerSteps = [
  "U belt, mailt of vult het formulier in met de rol en de startdatum.",
  "We stellen verduidelijkende vragen over diploma’s, rooster en werkplek.",
  "U ontvangt een of meer kandidaten die we zelf hebben gesproken.",
  "Na akkoord regelen we de start, zodat uw ploeg niet blijft wachten.",
];

export const values = [
  {
    title: "Korte lijnen",
    text: "U spreekt een mens, geen wachtrij. Vragen over een lopende opdracht horen dezelfde dag een reactie te krijgen tijdens kantooruren.",
  },
  {
    title: "Eerlijk vooraf",
    text: "Een klus die zwaar, vroeg of onregelmatig is, beschrijven we zo. Dat voorkomt een mismatch in de eerste week.",
  },
  {
    title: "Vak voor papier",
    text: "Een cv is een begin. We vragen naar het werk dat iemand echt heeft gedaan.",
  },
  {
    title: "Afspraken nakomen",
    text: "Wat we toezeggen over uren, tarief en begeleiding, leggen we vast en voeren we uit.",
  },
];

export function sectorBySlug(slug: string) {
  return sectors.find((sector) => sector.slug === slug);
}

export function vacancyBySlug(slug: string) {
  return vacancies.find((vacancy) => vacancy.slug === slug);
}

export function vacanciesIn(sector: string) {
  return vacancies.filter((vacancy) => vacancy.sector === sector);
}

export function relatedSectors(slug: string, count = 4) {
  const index = sectors.findIndex((sector) => sector.slug === slug);
  if (index < 0) return sectors.slice(0, count);
  return Array.from({ length: count }, (_, offset) => sectors[(index + 1 + offset) % sectors.length]);
}
