/**
 * Contact page content — lifted from the Copy Deck. Form fields, the option
 * dropdown and the "what happens next" steps.
 */
export const contactHero = {
  eyebrow: "Contact Us",
  title: "Need more than advice?",
  intro:
    "Tell us what you want to talk about. Whether you need a focused sprint, ongoing growth support or an AI build, tell us where you are trying to get to and what is getting in the way.",
};

export const optionChoices = [
  "Build Sprint",
  "Growth Retainer",
  "AI Build Lab",
  "Not sure yet",
] as const;

export const contactMethods = ["Email", "Phone call", "Video call"] as const;

export const whatNext = {
  eyebrow: "What happens next",
  steps: [
    "We read what you send.",
    "If it looks like a fit, we arrange a short conversation.",
    "If we are not the right people, we will say that clearly.",
  ],
};
