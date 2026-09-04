import type { PostBlock, TocItem } from "@/lib/insights/types";

const NEW_WINDOW_DAYS = 14;
const WORDS_PER_MINUTE = 200;

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Rough estimate used only when a post has no explicit Read Minutes value. */
export function estimateReadMinutes(body: PostBlock[]): number {
  const words = body.reduce((total, block) => {
    if (block.type === "p" || block.type === "heading") return total + block.text.split(/\s+/).length;
    if (block.type === "quote" || block.type === "callout") return total + block.text.split(/\s+/).length;
    if (block.type === "list") return total + block.items.join(" ").split(/\s+/).length;
    return total;
  }, 0);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function tocFromBlocks(body: PostBlock[]): TocItem[] {
  return body
    .filter((block): block is Extract<PostBlock, { type: "heading" }> => block.type === "heading")
    .map((block) => ({ id: block.id, text: block.text }));
}

/** Computed once, server-side, against the render-time clock — never in the client. */
export function isNew(publishedAt: string, now: Date = new Date()): boolean {
  const published = new Date(publishedAt).getTime();
  const ageDays = (now.getTime() - published) / (1000 * 60 * 60 * 24);
  return ageDays >= 0 && ageDays <= NEW_WINDOW_DAYS;
}
