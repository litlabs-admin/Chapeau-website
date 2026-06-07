/**
 * Collective page content — lifted from the Copy Deck. People bios, the
 * "why the collective exists" narrative, and the four ways the work joins up.
 */

export type Person = {
  id: string;
  name: string;
  role: string;
  bio: string[];
  brings: string[];
};

export const collectiveHero = {
  eyebrow: "The Collective",
  title: "Senior people and practical builders around the same table.",
  intro:
    "Chapeau is a tip of the hat to the people who have already taken the risk. You have built the business, earned the trust and created the foundation.",
};

export const whyCollective = {
  eyebrow: "Why the collective exists",
  lead: [
    "The next stage often needs more than reputation, referrals and word of mouth. It needs sharper direction, better marketing, practical AI support and people who can help move the work.",
    "Growth rarely depends on one isolated thing.",
    "That is why Chapeau works as a collective.",
  ],
  examples: [
    "A website might need clearer positioning.",
    "A campaign might need better follow-up.",
    "An AI idea might need workflow design.",
    "A marketing plan might need stronger commercial logic.",
    "A product launch might need user education, content, CRM and automation working together.",
  ],
  close:
    "Chapeau brings the right people into the work early, so strategy, marketing, AI and delivery are not treated as separate conversations. The aim is simple: set the direction, build what is needed and keep the work moving.",
  signature: "Senior direction. Practical delivery. One joined-up view of growth.",
};

export const people: Person[] = [
  {
    id: "will-sinclair",
    name: "Will Sinclair",
    role: "Commercial Direction and Enablement",
    bio: [
      "Will drives Chapeau's commercial direction and keeps the work connected to results. He is part of the hugely successful Sales Geek franchise and works as Sales Director with a number of businesses.",
      "He has experience across B2B, B2C, product, consulting, campaigns, customer journeys, team performance and practical enablement, and sits on the board of trustees at Launch It, supporting entrepreneurship and mentoring people taking the next step in business.",
      "Will helps turn commercial problems into clearer plans, better systems and work people can actually use.",
    ],
    brings: [
      "Commercial thinking",
      "Behavioural insight",
      "Enablement",
      "Process design",
      "Mentoring",
      "Growth leadership",
    ],
  },
  {
    id: "gordon-ross",
    name: "Gordon Ross",
    role: "Marketing and Strategy",
    bio: [
      "Gordon brings senior marketing experience across SaaS, IT, financial services, EV, consultancy, insurance and sponsorship. He helps businesses sharpen the market, the message and the route to growth.",
      "He works across positioning, campaigns, customer acquisition, brand and content, helping make the marketing direction clearer and easier to execute.",
    ],
    brings: [
      "Marketing strategy",
      "Positioning",
      "Content",
      "Campaigns",
      "Acquisition",
    ],
  },
  {
    id: "vandan-mandloi",
    name: "Vandan Mandloi",
    role: "AI and Digital Operations",
    bio: [
      "Vandan builds the digital systems, workflows and AI-led tools that make the work easier to deliver, repeat and improve. He helps turn ideas into practical systems, from automation and agents to campaign infrastructure, internal tools and product workflows.",
      "He makes sure AI is not treated as theatre. It has to be useful, practical and built around how the business actually works.",
    ],
    brings: [
      "AI systems",
      "Automation",
      "Digital operations",
      "Product builds",
      "Workflow design",
      "Implementation",
    ],
  },
  {
    id: "jessica-burke",
    name: "Jessica Burke",
    role: "Marketing and Strategy",
    bio: [
      "Jessica brings marketing and strategy experience into the collective, supporting the direction, planning and delivery of growth work. She helps connect the message, the audience and the activity, making sure campaigns are built with clarity and commercial purpose.",
      "She supports the work across brand, content, campaign planning and practical marketing delivery.",
    ],
    brings: [
      "Marketing strategy",
      "Campaign planning",
      "Brand thinking",
      "Content",
      "Delivery support",
    ],
  },
];

export const workJoins = {
  eyebrow: "How the work joins together",
  heading: "Four moving parts, one joined-up view.",
  items: [
    {
      title: "Direction",
      body: "We work out what needs to change, what matters most and what the business is trying to achieve.",
    },
    {
      title: "Marketing",
      body: "We build the campaigns, content, pages and activity that help the business reach the right people.",
    },
    {
      title: "AI and systems",
      body: "We create workflows, automations and tools that make the work easier to deliver and easier to repeat.",
    },
    {
      title: "Delivery",
      body: "We keep the work visible, organised and connected to the agreed priorities.",
    },
  ],
};
