/**
 * Homepage content — lifted verbatim from the Chapeau Site Copy Deck.
 * Editing copy happens here, never inside components.
 */

export type CaseStudy = {
  id: string;
  business: string;
  type: string;
  headline: string;
  context: string;
  /** The problem and approach narrative — shown below the context on the home teaser. */
  challenge: string;
  /** "What Chapeau enabled" — used on the home teaser. */
  enabled: string;
  /** Labelled "Work delivered" on the Examples page. */
  workDelivered: string;
  /** Outcome summary shown on the Examples page. */
  outcome: string;
  cta: { label: string; href: string };
  /** Swappable media slot — drop real client photography in later. */
  image: string;
  imageAlt: string;
  overlay: "teal" | "charcoal" | "gold";
};

export type Offer = {
  id: string;
  name: string;
  line: string;
  bestFor: string;
  checklist: string[];
  alsoCovers: string[];
  cta: { label: string; href: string };
};

export const hero = {
  // "Your Collective for [word]" — the lead stays fixed; the trailing word rotates in a fixed slot.
  lead: "Your Collective for",
  words: ["AI", "Marketing", "Strategy", "Growth"],
  support: [
    "When you need more than advice.",
    "Chapeau gives your business access to senior leadership, strategy and marketing expertise along with practical AI support.",
    "Our team of engineers, designers and marketing experts will enable your business to grow with clarity.",
  ],
  ctas: [
    { label: "Let's talk", href: "/contact", variant: "primary" as const },
    { label: "How we work", href: "/how-we-work", variant: "ghost" as const },
  ],
  image: "/media/hero-glass.jpg",
  imageAlt: "Abstract glass and light texture",
};

/**
 * CHAPEAU dictionary entry — the definition types out on the hero's charcoal
 * panel. Copy lives here, never inside components.
 */
export const dictionary = {
  word: "CHAPEAU",
  pronunciation: "[sha-POH]",
  partOfSpeech: "noun",
  definition: "A tip of the hat. Recognition and respect for what you've built.",
};

export const valueStrip = {
  lead: "Enabling businesses with",
  items: [
    "GTM strategy",
    "AI agents and automations",
    "Digital marketing",
    "SEO",
    "Social media content",
  ],
};

/**
 * Trust strip — real client logos. Placeholder brand marks for now; drop more
 * files into /public/media/logos and add an entry here. width/height are the
 * asset's intrinsic pixels (used for aspect ratio; rendered height is fixed in CSS).
 */
export const logoStrip: { src: string; alt: string; width: number; height: number }[] = [
  { src: "/media/logos/nexus.svg", alt: "Nexus", width: 380, height: 114 },
  { src: "/media/logos/logo-stripe2.svg", alt: "Client logo", width: 252, height: 154 },
  { src: "/media/logos/logo-stripe4.webp", alt: "Client logo", width: 349, height: 111 },
  { src: "/media/logos/logo-stripe3.svg", alt: "Client logo", width: 139, height: 152 },
  { src: "/media/logos/logo-stripe5.webp", alt: "Client logo", width: 224, height: 79 },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "roswell-it",
    business: "Roswell IT",
    type: "Managed IT provider / MSP",
    headline: "Making IT less alien.",
    context:
      "Roswell is an East Kilbride based MSP who have been providing outstanding IT support for 30 years, with a strong technical team and a loyal client base.",
    challenge:
      "They had a great technical team but no sales or marketing function, no new services and an unclear commercial direction. The reputation was strong but quiet — they weren't telling anyone, and after 30 years innovation had started to slow. The first step was making that strength easier to see: training staff to spot opportunity, sharpening commercial thinking and supporting digital marketing, so new clients could choose Roswell again.",
    enabled:
      "GTM strategy, Web & SEO, AI service development, new service offers, hiring support and campaign delivery.",
    workDelivered:
      "GTM strategy, web and SEO direction, AI-enabled service agents, new service offers, hiring support and done-for-you commercial activity.",
    outcome: "[Outcome copy — to be supplied by client]",
    cta: { label: "View case study", href: "/contact" },
    image: "/media/roswell-case.jpeg",
    imageAlt: "The Roswell IT team",
    overlay: "teal",
  },
  {
    id: "racam",
    business: "RACAM",
    type: "Security systems and communications provider",
    headline: "Opening the door to commercial growth.",
    context:
      "RACAM are a Hillington based CCTV installer who provide security systems and communications support for homes, businesses and commercial sites. As the business moved further into commercial work, the next step was building the marketing activity to support that shift.",
    challenge:
      "The technical knowledge was strong, the supplier relationships were trusted and the service offering was clear. What was missing was the marketing activity to match the move into commercial work.",
    enabled:
      "Digital marketing, CRM setup, automation, Meta ads, social content and campaign delivery.",
    workDelivered:
      "Done-for-you marketing services, social content, CRM installation, automation, Meta ads management and campaign activity.",
    outcome: "[Outcome copy — to be supplied by client]",
    cta: { label: "View case study", href: "/contact" },
    image: "/media/racam-case.jpeg",
    imageAlt: "RACAM Security & Communications branded van",
    overlay: "charcoal",
  },
  {
    id: "openbook-analytics",
    business: "Openbook Analytics",
    type: "Stock analytics platform",
    headline: "Helping investors read the market.",
    context:
      "Openbook Analytics is a platform that helps users understand stocks, portfolios and investment opportunities. A startup with a growing reputation — winning Young Scottish Edge 2026, the product has a cool origin story and early traction, with a clear market opportunity.",
    challenge:
      "The product had a strong story, early traction and a clear market opportunity. The next step was making the route to users easier to define, easier to test and easier to grow.",
    enabled:
      "User acquisition, PR, GTM strategy, automation, campaign planning and growth support.",
    workDelivered:
      "User acquisition, PR, GTM strategy, campaign planning and automation support.",
    outcome: "[Outcome copy — to be supplied by client]",
    cta: { label: "View case study", href: "/contact" },
    image: "/media/openbook-case.png",
    imageAlt: "Openbook Analytics stock analytics platform",
    overlay: "gold",
  },
];

export const offers: Offer[] = [
  {
    id: "build-sprint",
    name: "Marketing Sprint",
    line: "For one clear piece of work that is delivered on a deadline.",
    bestFor:
      "Businesses that know exactly what they need and how quickly they need it without committing to a long term contract.",
    checklist: [
      "Website or landing page",
      "SEO review",
      "Brand guide",
      "Campaign plan",
      "Messaging or positioning",
      "Sales or marketing collateral",
    ],
    alsoCovers: [
      "Strategy document",
      "Design assets",
      "Templates",
      "Lead magnet",
      "Email sequence",
      "Paid ads setup",
      "Social content pack",
    ],
    cta: { label: "Scope a sprint", href: "/contact" },
  },
  {
    id: "growth-retainer",
    name: "Growth Retainer",
    line: "Ongoing strategy, marketing and AI support without hiring a full marketing department.",
    bestFor:
      "Businesses that want to grow, can't afford to hire an internal marketing department, need senior commercial direction or have a need to embed AI confidently.",
    checklist: [
      "Ongoing strategy check-ins",
      "Done-for-you content",
      "SEO and content planning",
      "CRM support",
      "Automations",
      "Reporting and review",
    ],
    alsoCovers: [
      "PPC",
      "Paid search",
      "Meta ads",
      "LinkedIn campaigns",
      "Reddit ads",
      "ABM",
      "Retargeting",
      "Webinars",
      "Email campaigns",
      "Video editing",
      "Lead magnets",
      "Landing page optimisation",
      "Campaign tracking",
    ],
    cta: { label: "Discuss a retainer", href: "/contact" },
  },
  {
    id: "ai-build-lab",
    name: "AI Build Lab",
    line: "Tools, toys and automation agents built around how your business actually works.",
    bestFor:
      "Businesses ready to reduce repetitive work, improve workflows or build a useful internal tool.",
    checklist: [
      "AI workflows",
      "Voice agents",
      "Chat agents",
      "Internal tools",
      "Product builds",
      "Advanced automations",
    ],
    alsoCovers: [
      "CRM workflows",
      "Dashboards",
      "Data capture flows",
      "Prompt systems",
      "Lead qualification flows",
      "Proposal automation",
      "Document automation",
      "Onboarding flows",
      "Reporting systems",
      "Customer support workflows",
      "Sales and marketing operations tools",
    ],
    cta: { label: "Explore a build", href: "/contact" },
  },
];

export type QuoteProof = {
  id: string;
  business: string;
  person: string;
  title: string;
  quote: string;
  accentColor: string;
  patternClass: string;
  /** Mock portrait until a real client photo is supplied. */
  image: string;
};

export const quoteProof: QuoteProof[] = [
  {
    id: "roswell-it",
    business: "Roswell IT",
    person: "Jim Craig",
    title: "Founder & Managing Director, Roswell IT",
    quote:
      "Chapeau helped us make the strength of the business easier to see. What we needed was clearer commercial direction, better visibility and support turning that reputation into new growth. They created a strategy and now support us in executing it. They helped us spot opportunity, sharpened commercial thinking, helped shape new service offers and brought structure to our digital marketing. Chapeau are now supporting Roswell with a new website and SEO direction, AI-enabled service agents, recruitment support and done-for-you marketing activity. This has helped us take what Roswell was already good at and turn it into something clearer, more fun, more visible and easier for new clients to choose.",
    accentColor: "#C8B4F0",
    patternClass: "pattern-dots",
    image: "/media/testimonial-jim-craig.png",
  },
  {
    id: "racam",
    business: "RACAM",
    person: "Calum Maguire",
    title: "Director, RACAM",
    quote:
      "We have worked with other providers in the past who have offered us different packages and services which never quite suited us, but what we get with Chapeau is a fully done-for-you marketing service, social content, CRM setup, automation, Meta ads management and campaign delivery. Chapeau manages our website, our lead generation and helps us set and achieve our goals. It's not an agency doing off-the-shelf work, they live our success and challenges as if they were part of the team.",
    accentColor: "#7FE5A0",
    patternClass: "pattern-triangle",
    image: "/media/testimonial-calum-maguire.png",
  },
  {
    id: "openbook-analytics",
    business: "Openbook Analytics",
    person: "Andrew Menzies",
    title: "Co-Founder, Openbook Analytics",
    quote:
      "My brother Richard and I have been working on our product for over a year, trying to perfect the features and make it ready to ship. Chapeau supported Openbook to get over that final hurdle and launch it, they helped us design our user journey to make sure it was as smooth as it needed to be, with user acquisition, PR, GTM strategy, campaign planning and automation support. Chapeau helps with our SEO, Brand and are always there to advise us on every step of our growth.",
    accentColor: "#F7C948",
    patternClass: "pattern-grid",
    image: "/media/testimonial-andrew-menzies.png",
  },
];

export const tickerLanes = [
  {
    label: "Strategy and growth",
    terms: [
      "Demand generation",
      "Revenue strategy",
      "Pipeline acceleration",
      "Account-based marketing",
      "Growth engineering",
      "Brand growth",
      "Campaign strategy",
      "Lifecycle & retention",
      "Attribution",
    ],
  },
  {
    label: "Marketing and content",
    terms: [
      "Websites & landing pages",
      "SEO",
      "AI SEO",
      "Brand & positioning",
      "Social media content",
      "Paid ads",
      "Paid social",
      "Performance marketing",
      "Creative campaigns",
      "Lead magnets",
      "Email campaigns",
    ],
  },
  {
    label: "AI, systems and infrastructure",
    terms: [
      "AI agents",
      "Voice agents",
      "Agentic workflows",
      "Automations",
      "CRM setup",
      "CRM systems",
      "Marketing automation",
      "Content automation",
      "AI analytics",
      "Dashboards",
      "Data pipelines",
      "Lead infrastructure",
      "Product builds",
    ],
  },
];
