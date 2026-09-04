/**
 * Insights page copy — the hero, section labels and empty-state text. Post
 * content itself lives behind lib/insights/repository.ts, not here, since
 * that layer is designed to be swapped for an Airtable source.
 */
export const insightsHero = {
  eyebrow: "Insights",
  title: "Notes from the work, not the theory.",
  intro:
    "Practical thinking on marketing, AI and growth — written from client work, not from a content calendar.",
};

export const insightsExplorer = {
  allCategoryLabel: "All",
  searchLabel: "Search insights",
  searchPlaceholder: "Search articles…",
  emptyState: {
    heading: "Nothing matches that yet.",
    line: "Try a different category, or clear the search.",
    clearLabel: "Clear filters",
  },
};

export const insightsListing = {
  featuredLabel: "Featured",
  gridHeading: "All Insights",
};

export const insightsArticle = {
  backLabel: "All insights",
  relatedHeading: "More insights",
  faqHeading: "Frequently asked questions",
};

export const insightsNotFound = {
  eyebrow: "Insights",
  title: "We couldn't find that article.",
  intro: "It may have been moved or renamed.",
  ctaLabel: "Browse all insights",
};
