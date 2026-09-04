/**
 * Insights content types — shaped so every scalar maps to one Airtable
 * column, ready for the future Airtable automation. Mapping (documented
 * here so the automation is built the right way):
 *
 *   slug         -> Slug (single line text, unique)
 *   title        -> Title (single line text)
 *   excerpt      -> Excerpt (long text)
 *   category     -> Category (single select) -> { slug: slugify(name), label: name }
 *   publishedAt  -> Published At (date, ISO)
 *   readMinutes  -> Read Minutes (number; falls back to estimateReadMinutes(body))
 *   heroImage    -> Hero Image URL (text) + Hero Alt (text)
 *   featured     -> Featured (checkbox)
 *   author       -> Author Name / Author Role (text)
 *   body         -> Body JSON (long text containing PostBlock[] JSON)
 *   faqs         -> FAQ JSON (long text containing FaqItem[] JSON)
 *   seo          -> SEO Title / SEO Description (text)
 *   —            -> Status (single select: Draft/Published) — repository filters to Published
 *
 * `isNew` and `toc` are always derived, never stored.
 *
 * IMPORTANT: use a plain URL text field for the hero image, not an Airtable
 * attachment — attachment URLs (v5.airtableusercontent.com) expire after
 * roughly two hours and are unusable as a next/image `src` on a statically
 * generated page.
 */

export type InsightCategory = { slug: string; label: string };

export type PostBlock =
  | { type: "heading"; text: string; id: string }
  | { type: "p"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "callout"; title?: string; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "cta"; text: string; label: string; href: string };

export type FaqItem = { question: string; answer: string };

export type TocItem = { id: string; text: string };

/** Listing/card payload — no body, so it serialises cheaply to the client. */
export type PostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  publishedAt: string;
  readMinutes: number;
  heroImage: { src: string; alt: string };
  featured: boolean;
  isNew: boolean;
};

export type Post = PostSummary & {
  author: { name: string; role: string };
  body: PostBlock[];
  faqs: FaqItem[];
  toc: TocItem[];
  seo: { title?: string; description?: string };
};
