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
  // "Your [word] for [word]" — "Your" and "for" stay fixed; pairs rotate in fixed slots.
  rotation: [
    { a: "Partner", b: "AI" },
    { a: "Team", b: "Marketing" },
    { a: "Leadership", b: "Strategy" },
    { a: "Collective", b: "Growth" },
  ],
  support: [
    "When you need more than advice, but are not ready to hire a full marketing department.",
    "Chapeau gives your business access to senior marketing expertise and practical AI support.",
    "We set the direction, build the tools and deliver the campaigns that enable your business to grow with more clarity.",
  ],
  ctas: [
    { label: "Start a conversation", href: "/contact", variant: "primary" as const },
    { label: "View example", href: "/examples", variant: "ghost" as const },
  ],
  image: "/media/hero-glass.jpg",
  imageAlt: "Abstract glass and light texture",
};

export const valueStrip = {
  lead: "Enabling small businesses with",
  items: [
    "GTM strategy",
    "AI agents and automations",
    "Digital marketing",
    "SEO",
    "Social media content",
  ],
};

export const logoStrip = [
  "Roswell IT",
  "RACAM",
  "Openbook Analytics",
  "We Are Pawprint",
  "BiP Solutions",
  "FAP",
  "Connect Three",
  "GR23 Marketing",
  "LitLabs",
];

export const caseStudies: CaseStudy[] = [
  {
    id: "roswell-it",
    business: "Roswell IT",
    type: "Managed IT provider / MSP",
    headline: "Modernising a 30-year-old IT MSP.",
    context:
      "Roswell had decades of trust, technical expertise and loyal clients. There was a gap in telling this story, bringing the brand to life, showcasing the trust and turning it into new growth. Chapeau is supporting Roswell in launching new service, website and SEO direction, GTM strategy, AI-enabled service agents, recruitment support and done-for-you commercial activity.",
    enabled:
      "GTM strategy, Web & SEO, AI service development, new service offers, hiring support and campaign delivery.",
    workDelivered:
      "GTM strategy, web and SEO direction, AI-enabled service agents, new service offers, hiring support and done-for-you commercial activity.",
    outcome: "[Outcome copy — to be supplied by client]",
    cta: { label: "View example", href: "/examples" },
    image: "/media/case-network.jpg",
    imageAlt: "Technical infrastructure detail",
    overlay: "teal",
  },
  {
    id: "racam",
    business: "RACAM",
    type: "Security systems and communications provider",
    headline: "Bringing digital marketing to a company with no marketing team.",
    context:
      "RACAM had strong technical knowledge, trusted supplier relationships and a clear service offering, and have transitioned from residential to more commercial clientele. Chapeau is supporting RACAM with done-for-you marketing services, social content, CRM installation, automation, Meta ads management and campaign activity.",
    enabled:
      "Digital marketing, CRM setup, automation, Meta ads, social content and campaign delivery.",
    workDelivered:
      "Done-for-you marketing services, social content, CRM installation, automation, Meta ads management and campaign activity.",
    outcome: "[Outcome copy — to be supplied by client]",
    cta: { label: "View example", href: "/examples" },
    image: "/media/case-city.jpg",
    imageAlt: "City architecture and glass texture at dusk",
    overlay: "charcoal",
  },
  {
    id: "openbook-analytics",
    business: "Openbook Analytics",
    type: "Stock analytics platform",
    headline: "Supporting user acquisition with sharper go-to-market execution.",
    context:
      "Openbook had a strong product, great story and early traction with a clear market opportunity. The next stage was about shipping product, clarifying the route to users, improving visibility and building repeatable acquisition activity. Chapeau is supporting Openbook with user acquisition, PR, GTM strategy, campaign planning and automation support.",
    enabled:
      "User acquisition, PR, GTM strategy, automation, campaign planning and growth support.",
    workDelivered:
      "User acquisition, PR, GTM strategy, campaign planning and automation support.",
    outcome: "[Outcome copy — to be supplied by client]",
    cta: { label: "View example", href: "/examples" },
    image: "/media/case-data.jpg",
    imageAlt: "Reflective product and data surface detail",
    overlay: "gold",
  },
];

export const offers: Offer[] = [
  {
    id: "build-sprint",
    name: "Build Sprint",
    line: "For one clear piece of work that needs shaped, built and delivered properly.",
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
