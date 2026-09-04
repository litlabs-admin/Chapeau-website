import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/insights/repository";
import { Container } from "@/components/ui/Container";
import { ArticleHeader } from "@/components/insights/ArticleHeader";
import { ArticleBody } from "@/components/insights/ArticleBody";
import { ArticleToc } from "@/components/insights/ArticleToc";
import { FaqList } from "@/components/insights/FaqList";
import { RelatedPosts } from "@/components/insights/RelatedPosts";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const revalidate = 900;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.seo.title ?? post.title,
    description: post.seo.description ?? post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      images: [{ url: post.heroImage.src, width: 1200, height: 630, alt: post.heroImage.alt }],
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.slug);

  return (
    <>
      <ArticleHeader post={post} />
      <section className="pb-24 pt-14 md:pb-32 md:pt-16">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[220px_1fr] md:gap-16">
            <ArticleToc items={post.toc} />
            <div className="min-w-0">
              <ArticleBody blocks={post.body} />
              <FaqList items={post.faqs} />
            </div>
          </div>
        </Container>
      </section>
      <RelatedPosts posts={related} />
      <FinalCTA />
    </>
  );
}
