import type { MetadataRoute } from "next";

const BASE = "https://chapeau.co";

// Launch pages only — Knowledge Room is intentionally excluded until built.
const routes = ["", "/examples", "/how-we-work", "/collective", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
