import { mockPosts } from "@/lib/insights/mock/posts";
import { estimateReadMinutes, isNew, slugify, tocFromBlocks } from "@/lib/insights/utils";
import type { FaqItem, InsightCategory, Post, PostBlock, PostSummary } from "@/lib/insights/types";

/**
 * Server-only data access. No "use client" file should ever import this —
 * components receive plain PostSummary/Post objects as props instead.
 *
 * This is the single swap point for the future Airtable automation: replace
 * the `source` constant below with a fetch against the Airtable REST API
 * (wrapped in `{ next: { revalidate: 900, tags: ["insights"] } }`), map
 * `record.fields` into `RawPost`, and JSON.parse the two JSON columns inside
 * a try/catch that falls back to `[]`. Nothing outside this file changes —
 * see the field mapping documented in lib/insights/types.ts.
 */

/** Airtable-record-shaped input to the mappers below. */
export type RawPost = {
  slug: string;
  title: string;
  excerpt: string;
  categoryLabel: string;
  publishedAt: string;
  readMinutes?: number;
  heroImageSrc: string;
  heroImageAlt: string;
  featured: boolean;
  authorName: string;
  authorRole: string;
  status: "Draft" | "Published";
  seoTitle?: string;
  seoDescription?: string;
  body: PostBlock[];
  faqs: FaqItem[];
};

const source: RawPost[] = mockPosts;

function toCategory(label: string): InsightCategory {
  return { slug: slugify(label), label };
}

function toSummary(raw: RawPost): PostSummary {
  return {
    slug: raw.slug,
    title: raw.title,
    excerpt: raw.excerpt,
    category: toCategory(raw.categoryLabel),
    publishedAt: raw.publishedAt,
    readMinutes: raw.readMinutes ?? estimateReadMinutes(raw.body),
    heroImage: { src: raw.heroImageSrc, alt: raw.heroImageAlt },
    featured: raw.featured,
    isNew: isNew(raw.publishedAt),
  };
}

function toPost(raw: RawPost): Post {
  return {
    ...toSummary(raw),
    author: { name: raw.authorName, role: raw.authorRole },
    body: raw.body,
    faqs: raw.faqs,
    toc: tocFromBlocks(raw.body),
    seo: { title: raw.seoTitle, description: raw.seoDescription },
  };
}

async function published(): Promise<RawPost[]> {
  return source.filter((post) => post.status === "Published");
}

export async function getAllPosts(): Promise<PostSummary[]> {
  const posts = await published();
  return posts
    .map(toSummary)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await published();
  const raw = posts.find((post) => post.slug === slug);
  return raw ? toPost(raw) : null;
}

export async function getCategories(): Promise<InsightCategory[]> {
  const posts = await getAllPosts();
  const byslug = new Map<string, InsightCategory>();
  for (const post of posts) {
    if (!byslug.has(post.category.slug)) byslug.set(post.category.slug, post.category);
  }
  return Array.from(byslug.values());
}

export async function getFeaturedPost(): Promise<PostSummary | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.featured) ?? posts[0] ?? null;
}

export async function getRelatedPosts(slug: string, limit = 3): Promise<PostSummary[]> {
  const posts = await getAllPosts();
  const current = posts.find((post) => post.slug === slug);
  const rest = posts.filter((post) => post.slug !== slug);
  if (!current) return rest.slice(0, limit);

  const sameCategory = rest.filter((post) => post.category.slug === current.category.slug);
  const others = rest.filter((post) => post.category.slug !== current.category.slug);
  return [...sameCategory, ...others].slice(0, limit);
}
