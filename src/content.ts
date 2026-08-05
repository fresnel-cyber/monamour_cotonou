// Source unique de vérité pour tous les textes, coordonnées et métadonnées SEO.
// Modifier ce fichier suffit pour mettre à jour le contenu du site, sans
// toucher aux composants.

export const site = {
  name: 'Mon Amour',
  tagline: 'Restaurant, café & pâtisserie à Cotonou',
  url: 'https://monamour-cotonou.vercel.app',
  locale: 'fr',
} as const;

export const business = {
  legalName: 'Mon Amour',
  type: 'CafeOrCoffeeShop' as const,
  description:
    "Café, restaurant et pâtisserie cosy au Camp Guezo à Cotonou. Burgers, tartines, brunch du dimanche et pâtisserie maison dans une ambiance calme et chaleureuse.",
  address: {
    streetAddress: 'Camp Guezo',
    addressLocality: 'Cotonou',
    addressCountry: 'BJ',
    // Repère : près de l'Ambassade d'Allemagne, direction Moov, première rue à droite.
    landmark:
      "Près de l'Ambassade d'Allemagne, direction Moov, première rue à droite.",
  },
  phoneDisplay: '+229 01 91 69 53 53',
  // wa.me exige un numéro sans "+", sans espaces.
  whatsappNumber: '2290191695353',
  telHref: 'tel:+2290191695353',
  instagram: '@monamour_cotonou',
  instagramUrl: 'https://www.instagram.com/monamour_cotonou/',
  // TODO (Fresnel) : confirmer la gamme de prix réelle avant mise en ligne.
  priceRange: '€€',
} as const;

export const hours = {
  closedDay: 'Lundi',
  display: [
    { days: 'Mardi au Dimanche', hours: '9h00 à 22h00' },
    { days: 'Lundi', hours: 'Fermé' },
  ],
  // Format schema.org openingHoursSpecification
  jsonLd: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '22:00',
    },
  ],
} as const;

export const whatsappMessage = encodeURIComponent(
  "Bonjour Mon Amour, je souhaiterais avoir plus d'informations."
);

export const ctaLinks = {
  whatsapp: `https://wa.me/${business.whatsappNumber}?text=${whatsappMessage}`,
  call: business.telHref,
} as const;

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const photos = {
  hero: {
    src: '/assets/photos/hero-terrasse-cafe-cotonou.webp',
    alt: 'Terrasse ombragée de Mon Amour à Camp Guezo, Cotonou, avec tables en bois et café servi en journée',
    width: 1080,
    height: 891,
  } satisfies Photo,
  about: {
    src: '/assets/photos/about-diner-ambiance-bougie.webp',
    alt: "Table dressée pour le dîner chez Mon Amour, ambiance intime à la bougie en soirée",
    width: 1080,
    height: 1190,
  } satisfies Photo,
  menu: {
    burger: {
      src: '/assets/photos/menu-burger-signature.svg',
      alt: 'Burger gourmand servi chez Mon Amour',
      width: 1000,
      height: 1000,
    } satisfies Photo,
    tartine: {
      src: '/assets/photos/menu-tartine-avocat-oeuf.webp',
      alt: 'Assiette de tartines de Mon Amour : avocat, fromage frais, concombre, œuf et tomate',
      width: 710,
      height: 585,
    } satisfies Photo,
    brunch: {
      src: '/assets/photos/menu-brunch-petit-dejeuner.webp',
      alt: 'Petit-déjeuner brunch chez Mon Amour : sandwich croissant, pancakes, œuf et jus d’orange',
      width: 1080,
      height: 830,
    } satisfies Photo,
    patisserie: {
      src: '/assets/photos/menu-patisserie-assortiment.webp',
      alt: 'Assortiment de pâtisseries maison de Mon Amour présenté en salle',
      width: 1080,
      height: 830,
    } satisfies Photo,
  },
  gallery: [
    {
      src: '/assets/photos/galerie-cotelettes-agneau-grillees.webp',
      alt: 'Côtelettes d’agneau grillées servies chez Mon Amour',
      width: 1080,
      height: 950,
    },
    {
      src: '/assets/photos/galerie-arche-roses-entree.webp',
      alt: 'Arche fleurie de roses blanches à l’entrée du jardin de Mon Amour',
      width: 472,
      height: 820,
    },
    {
      src: '/assets/photos/galerie-guirlande-lumineuse-nuit.webp',
      alt: 'Guirlandes lumineuses au-dessus de la terrasse de Mon Amour en soirée',
      width: 472,
      height: 840,
    },
    {
      src: '/assets/photos/galerie-dessert-fraises-chocolat.webp',
      alt: 'Fraises enrobées de chocolat, dessert de Mon Amour',
      width: 1080,
      height: 880,
    },
    {
      src: '/assets/photos/galerie-comptoir-patisserie-bar.webp',
      alt: 'Comptoir pâtisserie et coin bar dans la salle de Mon Amour',
      width: 475,
      height: 840,
    },
    {
      src: '/assets/photos/galerie-homard-fruits-de-mer.webp',
      alt: 'Homard grillé gratiné, fruits de mer signature de Mon Amour',
      width: 560,
      height: 720,
    },
  ] satisfies Photo[],
  ogImage: '/assets/photos/og-image-mon-amour-cotonou.webp',
} as const;

export const sections = {
  hero: {
    eyebrow: 'Camp Guezo, Cotonou',
    title: 'Mon Amour',
    subtitle:
      'Un café, restaurant et pâtisserie cosy où prendre le temps : burgers, tartines et brunch du dimanche dans une ambiance calme.',
  },
  about: {
    eyebrow: 'À propos',
    title: 'Une adresse pensée pour ralentir',
    paragraphs: [
      "Chez Mon Amour, l'idée est simple : offrir une bulle calme et chaleureuse au cœur de Cotonou, où l'on vient aussi bien pour un café en tête-à-tête que pour un déjeuner ou un dîner entre amis.",
      "Ambiance cosy, service attentif et menu varié, de la pâtisserie maison aux burgers généreux, pensé pour accompagner chaque moment de la journée.",
    ],
  },
  menu: {
    eyebrow: 'Le menu',
    title: 'Quelques incontournables',
    intro:
      'Un menu varié pour le déjeuner comme pour le dîner, avec un rendez-vous immanquable : le brunch du dimanche.',
    items: [
      {
        key: 'burger',
        title: 'Burgers',
        description: 'Des burgers gourmands, généreux et faits maison.',
      },
      {
        key: 'tartine',
        title: 'Tartines',
        description: 'Des tartines fraîches et savoureuses, midi comme soir.',
      },
      {
        key: 'brunch',
        title: 'Brunch du dimanche',
        description: 'Le rendez-vous convivial du dimanche, à ne pas manquer.',
      },
      {
        key: 'patisserie',
        title: 'Pâtisserie & café',
        description: 'Pâtisserie maison et cafés à savourer sur place.',
      },
    ],
  },
  gallery: {
    eyebrow: 'Ambiance',
    title: "Dans l'esprit de la maison",
  },
  testimonials: {
    eyebrow: 'Avis clients',
    title: 'Ce qu\'on en dit',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Bon à savoir',
  },
  contact: {
    eyebrow: 'Infos pratiques',
    title: 'Horaires & Contact',
  },
} as const;

export type Testimonial = {
  author: string;
  quote: string;
  rating: number;
  source: string;
};

// Avis Google réels, repris tels quels (voir amour10.jpg).
export const testimonials: Testimonial[] = [
  {
    author: 'Christian Amoule',
    quote:
      "Un très bon restaurant avec un bon emplacement et des mets très bon. J'ai beaucoup aimé leur spécialité mixte européenne et asiatique. Le crêpe est un des meilleurs que j'ai mangé à Cotonou.",
    rating: 4.9,
    source: 'Avis Google',
  },
  {
    author: 'Sammywillyx Willy',
    quote:
      'Friendly, personalised service. Consistently great food, a memorable atmosphere, and efficient customer service.',
    rating: 4.9,
    source: 'Avis Google',
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

// FAQ reprise du contenu déjà publié par le restaurant (amour6.jpg à amour9.jpg).
export const faq: FaqItem[] = [
  {
    question: 'Puis-je privatiser Mon Amour ?',
    answer:
      "Oui, bien sûr. Mon Amour est disponible pour vos événements privés et occasions spéciales. Qu'il s'agisse d'une célébration intime, d'un dîner romantique ou d'un moment mémorable à partager, nous vous aidons à créer l'ambiance parfaite pour votre événement.",
  },
  {
    question: 'Proposez-vous un service traiteur ?',
    answer:
      "Oui, notre service traiteur apporte l'expérience Mon Amour à vos événements, avec des plats soigneusement préparés, des desserts gourmands et une touche d'élégance.",
  },
  {
    question: 'Puis-je personnaliser un gâteau ?',
    answer:
      'Bien sûr. Nos gâteaux peuvent être personnalisés selon votre occasion, des anniversaires aux célébrations spéciales, avec des créations uniques pensées pour vous.',
  },
  {
    question: 'Organisez-vous des anniversaires ?',
    answer:
      'Oui, célébrez votre journée spéciale chez Mon Amour avec de délicieux plats, de magnifiques desserts et une expérience culinaire inoubliable créée autour de votre célébration.',
  },
];

export const seo = {
  title: 'Mon Amour | Café, Restaurant & Pâtisserie à Camp Guezo, Cotonou',
  description:
    "Café cosy et restaurant à Camp Guezo, Cotonou : burgers, tartines, brunch du dimanche et pâtisserie maison. Ouvert du mardi au dimanche, de 9h à 22h.",
  keywords: [
    'café Cotonou',
    'brunch Cotonou',
    'restaurant Camp Guezo',
    'pâtisserie Cotonou',
    'restaurant Cotonou',
  ],
} as const;
