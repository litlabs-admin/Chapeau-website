/**
 * Global site constants — positioning line, contact details, primary CTA language.
 * CTA wording is restricted to the approved set from the Build Rules.
 */
export const site = {
  name: "Chapeau",
  positioning:
    "Senior marketing expertise and practical AI support for growing businesses.",
  email: "litlabs@chapeaucollective.com",
  social: {
    linkedin: "https://www.linkedin.com/",
  },
  primaryCta: {
    label: "Let's talk",
    href: "/contact",
  },
  finalCta: {
    heading: "Need more than advice?",
    line: "Tell us what you want to talk about.",
    cta: { label: "Let's talk", href: "/contact" },
  },
} as const;
