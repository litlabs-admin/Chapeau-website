import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/insights/repository";

const BASE = "https://chapeau.co";

// Launch pages only — Knowledge Room is intentionally excluded until built.
const routes = ["", "/how-we-work", "/collective", "/insights", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return [
    ...routes.map((path) => ({
      url: `${BASE}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...posts.map((post) => ({
      url: `${BASE}/insights/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
