export const LIVESTOCK_SECTORS = [
  {
    id: "poultry",
    name: "Chicken & Poultry Farm",
    shortName: "Chicken",
    eyebrow: "FRESH LAYERS & VIGOROUS BROILERS",
    tag: "Layers & Broilers",
    badge: "Daily Fresh Harvest",
    description:
      "High-producing poultry units dedicated to table eggs with rich golden yolks and robust, tender table broilers. Raised with spacious cross-ventilation and 100% wholesome feed.",
    image: "/poultry-battery-cages.jpg",
    gallery: ["/poultry-battery-cages.jpg"],
    features: [
      "Modern battery cage housing with automated nipple drinkers",
      "Daily harvested organic jumbo brown eggs",
      "Plump, tender table broilers & POL pullets",
      "Natural feed enriched with maize & minerals",
    ],
    products: [
      {
        id: "eggs-jumbo",
        name: "Farm Fresh Jumbo Brown Eggs",
        specs: "30 eggs per crate • Golden yolks",
        price: 4900,
        unit: "per crate",
        popular: true,
      },
      {
        id: "broiler-dressed",
        name: "Dressed Broiler Chicken",
        specs: "1.8kg – 2.2kg flash-chilled with gizzards",
        price: 6800,
        unit: "per bird",
        popular: true,
      },
      {
        id: "pol-pullets",
        name: "Point of Lay (POL) Pullets",
        specs: "Fully vaccinated 16-week layers",
        price: 7500,
        unit: "per pullet",
        popular: false,
      },
    ],
    metrics: {
      capacity: "5,000+ Birds",
      dailyEggs: "140+ Crates Daily",
      feedGrade: "A-Grade Non-GMO Mix",
    },
  },
  {
    id: "piggery",
    name: "Piggery Farm",
    shortName: "Piggery",
    eyebrow: "PREMIUM SWINE HUSBANDRY",
    tag: "Breeding & Finishing",
    badge: "Bio-Secure Pens",
    description:
      "Specialized pig farming raised in climate-controlled, hygienic environments with scientifically formulated organic nutrition and routine veterinary supervision.",
    image: "/piggery-commercial.jpg",
    gallery: ["/piggery-commercial.jpg"],
    features: [
      "Concrete sanitary pens with automated bite drinkers",
      "Healthy, active breeding stock and weaners",
      "Strict bio-security protocols & daily sanitation",
      "Zero growth hormones — 100% wholesome feed",
    ],
    products: [
      {
        id: "hog-market",
        name: "Live Market Hogs",
        specs: "85kg – 110kg average weight",
        price: 165000,
        unit: "per hog",
        popular: true,
      },
      {
        id: "weaner-pair",
        name: "Quality Breeding Weaners",
        specs: "Selected for vigor & fertility",
        price: 45000,
        unit: "per pair",
        popular: false,
      },
      {
        id: "pork-dressed",
        name: "Dressed / Carcass Cuts",
        specs: "Hygienically slaughtered & vacuum packed",
        price: 5800,
        unit: "per kg",
        popular: false,
      },
    ],
    metrics: {
      capacity: "800+ Head Capacity",
      veterinary: "Weekly Health Audits",
      diet: "Balanced Grains & Forage",
    },
  },
  {
    id: "turkey",
    name: "Turkey Farm",
    shortName: "Turkey",
    eyebrow: "PREMIUM FESTIVE & COMMERCIAL TURKEYS",
    tag: "Free-Range Heritage",
    badge: "Heritage Breeds",
    description:
      "Broad-breasted white and bronze heritage turkeys bred for superior meat yield, rich natural flavor, and respectful open-barn animal welfare.",
    image: "/turkey-commercial.jpg",
    gallery: ["/turkey-commercial.jpg"],
    features: [
      "Spacious, airy poultry barn with automated bell feeders",
      "Heavy breast meat yield & succulent texture",
      "Full vaccination schedule and humane handling",
      "Ideal for festive events, restaurants & supermarkets",
    ],
    products: [
      {
        id: "turkey-dressed",
        name: "Oven-Ready Dressed Turkey",
        specs: "7kg – 9kg cleaned & prepped",
        price: 38000,
        unit: "per turkey",
        popular: true,
      },
      {
        id: "turkey-live-heavy",
        name: "Whole Live Heritage Turkey",
        specs: "10kg – 13kg live heavy tom",
        price: 52000,
        unit: "per bird",
        popular: false,
      },
      {
        id: "turkey-parts",
        name: "Turkey Wings & Drumsticks Cut",
        specs: "Packed 5kg wholesale box",
        price: 29000,
        unit: "per 5kg box",
        popular: false,
      },
    ],
    metrics: {
      capacity: "1,200+ Birds",
      growthPeriod: "16 – 22 Weeks",
      welfareScore: "100% Free Roam",
    },
  },
  {
    id: "fishery",
    name: "Fishery & Aquaculture",
    shortName: "Fishery",
    eyebrow: "FRESHWATER CATFISH & TILAPIA",
    tag: "Live & Oven-Smoked",
    badge: "Fresh Flow-Through Ponds",
    description:
      "Modern, hygienic aquaculture systems specializing in African Catfish and Tilapia. Raised in pure borehole-fed water with nutrient-dense feeds, producing sweet, firm, and healthy table fish.",
    image: "/fishery-commercial.jpg",
    gallery: ["/fishery-commercial.jpg"],
    features: [
      "Pure borehole water flow-through systems",
      "Plump live table catfish (1.2kg – 2.5kg)",
      "Hygienic hardwood oven-smoked vacuum packs",
      "Zero muddy smell or chemical contamination",
    ],
    products: [
      {
        id: "fish-live-catfish",
        name: "Fresh Live Table Catfish",
        specs: "1.2kg – 2.0kg average size",
        price: 3800,
        unit: "per kg",
        popular: true,
      },
      {
        id: "fish-smoked-catfish",
        name: "Oven-Dried Smoked Catfish",
        specs: "Pack of 4 large vacuum-sealed fish",
        price: 8500,
        unit: "per pack",
        popular: true,
      },
      {
        id: "fish-fingerlings",
        name: "Catfish Juveniles / Seedlings",
        specs: "High-vigor batch of 100 fish",
        price: 6500,
        unit: "per 100 fish",
        popular: false,
      },
    ],
    metrics: {
      capacity: "20,000+ Fish",
      waterSystem: "Pure Borehole Flow",
      feedGrade: "Extruded Floating Pellets",
    },
  },
];

export const FARM_STATS = [
  {
    value: "4",
    label: "Specialized Divisions",
    subtext: "Chicken, Piggery, Turkey & Fishery",
  },
  {
    value: "100%",
    label: "Naturally Raised",
    subtext: "Zero artificial growth hormones",
  },
  {
    value: "15,000+",
    label: "Happy Customers",
    subtext: "Families, caterers & supermarkets",
  },
  {
    value: "24/7",
    label: "Veterinary Oversight",
    subtext: "Clinical hygiene & strict biosecurity",
  },
];

export const QUALITY_PILLARS = [
  {
    step: "01",
    category: "Genetic Integrity",
    title: "Selective Genetics & Sourcing",
    description:
      "We procure only certified, robust parent stock and disease-resistant strains tested for vigor and healthy growth.",
    image: "/process-genetics.jpg",
    icon: "ShieldCheck",
  },
  {
    step: "02",
    category: "Wholesome Nutrition",
    title: "Clean Feed & Pure Well Water",
    description:
      "All livestock and fish consume custom-milled organic nutrition supplemented with filtered borehole groundwater.",
    image: "/process-feed.jpg",
    icon: "Wheat",
  },
  {
    step: "03",
    category: "Ethical Husbandry",
    title: "Compassionate & Humane Care",
    description:
      "From natural ventilation to clean concrete ponds, our facilities exceed standard welfare benchmarks.",
    image: "/process-welfare.jpg",
    icon: "HeartHandshake",
  },
  {
    step: "04",
    category: "Farm-Gate Dispatch",
    title: "Cold-Chain Delivery & Traceability",
    description:
      "Supplying live stock or freshly dressed vacuum cuts directly from the farm gate across Lagos and Ogun State.",
    image: "/process-delivery.jpg",
    icon: "Truck",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    quote:
      "The live catfish and fresh eggs from Nelson Farms are consistently top quality. The fish have clean flesh with zero muddy smell, which our restaurant patrons praise every week.",
    author: "Chef Babatunde Adeyemi",
    role: "Culinary Director, Heritage Bistro",
    avatar: "/testimonials/chef_babatunde.jpg",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "They guided us step-by-step with expert advice, bio-secure delivery, and prime livestock genetics. It made a huge positive difference for our entire community supply chain.",
    author: "Mrs. Folashade Okonjo",
    role: "Lekki Household & Event Caterer",
    avatar: "/testimonials/mrs_folashade.jpg",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "Our supermarket chain relies on Nelson Farms for dressed broilers and oven-smoked catfish. Their cold-chain dispatch and supply punctuality are the best we have experienced in Lagos.",
    author: "Chukwudi Nwosu",
    role: "Procurement Lead, Prime Grocers",
    avatar: "/testimonials/chukwudi_nwosu.jpg",
  },
  {
    id: 4,
    rating: 5,
    quote:
      "We source our breeding weaners and market hogs exclusively from Nelson Farms. Their biosecurity protocols and veterinary vaccination records give us total peace of mind.",
    author: "Dr. Amina Bello",
    role: "Agro-Enterprise Consultant, Ogun State",
    avatar: "/testimonials/dr_amina.jpg",
  },
  {
    id: 5,
    rating: 5,
    quote:
      "The heritage turkeys for our annual corporate banquet were fresh, juicy, and impeccably dressed. Our guests could not stop talking about the flavor and quality.",
    author: "Engr. Kayode Adeleke",
    role: "Corporate Events Manager, Victoria Island",
    avatar: "/testimonials/kayode_adeleke.jpg",
  },
  {
    id: 6,
    rating: 5,
    quote:
      "Fresh jumbo eggs delivered straight to our bakery doors twice a week with zero breakage. The deep golden yolks give our pastries an unbeatable richness and rise.",
    author: "Hajia Zainab Alabi",
    role: "Master Baker & Confectionery Owner, Ikeja",
    avatar: "/testimonials/zainab_alabi.jpg",
  },
];

export const FAQS = [
  {
    question: "Where do you deliver across Lagos and Nigeria?",
    answer:
      "We offer daily scheduled deliveries across Lagos Island (Ikoyi, Victoria Island, Lekki, Ajah) and Lagos Mainland (Ikeja, Surulere, Maryland, Magodo, Yaba), as well as bulk refrigerated dispatches to Ogun State.",
  },
  {
    question: "What farming divisions do you operate?",
    answer:
      "We operate four core commercial divisions: Chicken & Poultry (broilers & jumbo eggs), Piggery (market hogs & breeding weaners), Turkey (heritage live & dressed), and Fishery (fresh live & smoked catfish).",
  },
  {
    question: "Can I buy live animals or only dressed meat?",
    answer:
      "We supply both! You can order live broilers, pigs, turkeys, and catfish, or request hygienically slaughtered, dressed, and vacuum-sealed packaging prepared on order.",
  },
  {
    question:
      "How can commercial businesses or supermarkets place wholesale orders?",
    answer:
      "Supermarkets, hotels, and restaurants can request dedicated wholesale pricing contracts with scheduled weekly deliveries and formal invoicing.",
  },
  {
    question: "Can prospective partners visit the farm?",
    answer:
      "Yes. In keeping with our strict bio-security protocols, farm visits must be scheduled at least 48 hours in advance so our staff can prepare visitor sanitation.",
  },
];

export const LIVE_TICKER = [
  "Daily Egg Harvest: 140+ crates collected fresh this morning",
  "Fresh Catfish Harvest: Live & oven-smoked batches ready",
  "Free Lagos delivery on orders over ₦60,000",
  "Heritage turkeys available for booking",
  "Pure borehole water & bio-secure farm protocols verified",
];
