import type { Metadata } from "next";
import { getAllPosts, getCategories, getFeaturedPost } from "@/lib/insights/repository";
import { insightsHero } from "@/lib/content/insights";
import { PageIntro } from "@/components/sections/PageIntro";
import { FeaturedPost } from "@/components/insights/FeaturedPost";
import { InsightsExplorer } from "@/components/insights/InsightsExplorer";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const revalidate = 900;

export const metadata: Metadata = {
  title: "Insights",
  description: insightsHero.intro,
  alternates: { canonical: "/insights" },
};

export default async function InsightsPage() {
  const [posts, categories, featured] = await Promise.all([
    getAllPosts(),
    getCategories(),
    getFeaturedPost(),
  ]);
  const rest = posts.filter((post) => post.slug !== featured?.slug);

  return (
    <>
      <PageIntro
        eyebrow={insightsHero.eyebrow}
        title={insightsHero.title}
        intro={insightsHero.intro}
      />
      {featured && <FeaturedPost post={featured} />}
      <InsightsExplorer posts={rest} categories={categories} />
      <FinalCTA />
    </>
  );
}
