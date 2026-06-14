/**
 * Examples page content — lifted from the Copy Deck. The featured case studies
 * reuse the shared `caseStudies` data (single source of truth) so the home teaser
 * and the full Examples index never drift. Quote-led proof lives here.
 *
 * Note: internal "CEO quote pending" / "Stats pending" markers from the deck are
 * deliberately NOT surfaced on the live page.
 */
export { caseStudies } from "./home";

export const examplesHero = {
  eyebrow: "Examples",
  title:
    "Selected work across growing businesses, platforms and service-led teams.",
  intro:
    "From MSPs and security providers to analytics platforms, sustainability tools and people-development businesses, the work changes depending on the problem.",
};

export type QuoteProof = {
  id: string;
  business: string;
  role: string;
  quote: string;
};

export const quoteProof: QuoteProof[] = [
  {
    id: "bip-solutions",
    business: "BiP Solutions",
    role: "Alan McMenemy & Alan Mathie — Sales Director / HR Director",
    quote:
      "Will enabled our team of BDMs to embed AI tools into their daily activity to improve their sales skills, deployed a coaching system for personal development and project managed the rollout of our sales enablement platform to improve customer experience and speed up deal velocity.",
  },
  {
    id: "we-are-pawprint",
    business: "We Are Pawprint",
    role: "Emily Hillier — Managing Director",
    quote:
      "Will was able to onboard more users to the platform by optimising the onboarding and education process. He sped up adoption and engagement by delivering key customer learning sessions.",
  },
  {
    id: "fap",
    business: "FAP",
    role: "Jim Law — Founder",
    quote:
      "Will was able to reduce our CPA significantly by using lead generation growth hacks, which onboarded more users to our platform much quicker, as well as enabling the user base to use more features.",
  },
];
