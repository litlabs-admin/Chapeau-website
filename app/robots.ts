import type { MetadataRoute } from "next";

const BASE = "https://chapeau.co";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Knowledge Room is hidden at launch.
      disallow: ["/knowledge-room", "/api/"],
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
