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
    "When you need more than advice, but are not ready to hire a full marketing department.",
    "Chapeau gives your business access to senior leadership, strategy and marketing expertise along with practical AI support.",
    "Our team of engineers, designers and marketing experts will enable your business to grow with clarity.",
  ],
  ctas: [
    { label: "Let's talk", href: "/contact", variant: "primary" as const },
    { label: "View example", href: "/examples", variant: "ghost" as const },
  ],
  image: "/media/hero-glass.jpg",
  imageAlt: "Abstract glass and light texture",
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
      "Roswell has been supporting businesses with trusted IT services for over 30 years. The relationships were strong, the technical knowledge was there and the service had earned its reputation. The next step was making that strength easier to see, easier to understand and easier for new clients to choose. Chapeau is supporting Roswell with a new website and SEO direction, GTM strategy, new service offers, AI-enabled service agents, recruitment support and done-for-you commercial activity.",
    enabled:
      "GTM strategy, Web & SEO, AI service development, new service offers, hiring support and campaign delivery.",
    workDelivered:
      "GTM strategy, web and SEO direction, AI-enabled service agents, new service offers, hiring support and done-for-you commercial activity.",
    outcome: "[Outcome copy — to be supplied by client]",
    cta: { label: "View case study", href: "/examples" },
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
      "RACAM provides security systems and communications support for homes, businesses and commercial sites. The technical knowledge was strong, the supplier relationships were trusted and the service offering was clear. As the business moved further into commercial work, the next step was building the marketing activity to support that shift. Chapeau is supporting RACAM with done-for-you marketing services, social content, CRM setup, automation, Meta ads management and campaign delivery.",
    enabled:
      "Digital marketing, CRM setup, automation, Meta ads, social content and campaign delivery.",
    workDelivered:
      "Done-for-you marketing services, social content, CRM installation, automation, Meta ads management and campaign activity.",
    outcome: "[Outcome copy — to be supplied by client]",
    cta: { label: "View case study", href: "/examples" },
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
      "Openbook Analytics helps users understand stocks, portfolios and investment opportunities with clearer insight. The product had a strong story, early traction and a clear market opportunity. The next step was making the route to users easier to define, easier to test and easier to grow. Chapeau is supporting Openbook with user acquisition, PR, GTM strategy, campaign planning and automation support.",
    enabled:
      "User acquisition, PR, GTM strategy, automation, campaign planning and growth support.",
    workDelivered:
      "User acquisition, PR, GTM strategy, campaign planning and automation support.",
    outcome: "[Outcome copy — to be supplied by client]",
    cta: { label: "View case study", href: "/examples" },
    image: "/media/case-data.jpg",
    imageAlt: "Reflective product and data surface detail",
    overlay: "gold",
  },
];

export const offers: Offer[] = [
  {
    id: "build-sprint",
    name: "Marketing Sprint",
    line: "For one clear piece of work that needs shaped, built and delivered properly with a deadline.",
    bestFor:
      "Businesses that know something needs fixed, launched or sharpened, and want the work moving without committing to a long engagement.",
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
    bestFor: "Growing businesses that need senior direction and regular delivery.",
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
    line: "Tools, automations and agents built around how your business actually works.",
    bestFor:
      "Businesses ready to reduce manual work, improve workflows or build a useful internal tool.",
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
