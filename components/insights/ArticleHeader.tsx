import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/insights/types";
import { insightsArticle } from "@/lib/content/insights";
import { formatDate } from "@/lib/insights/utils";
import { Reveal } from "@/components/motion/Reveal";

export function ArticleHeader({ post }: { post: Post }) {
  return (
    <section className="pt-16 md:pt-24">
      <div className="shell">
        <Reveal trigger="mount" y={12} className="text-center">
          <Link
            href="/insights"
            className="label text-[0.7rem] text-framer-mute transition-colors hover:text-framer-ink"
          >
            ← {insightsArticle.backLabel}
          </Link>
        </Reveal>

        <Reveal trigger="mount" delay={0.12} y={12} className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-black/10 px-2.5 py-1 text-[0.72rem] text-framer-graphite">
            {post.category.label}
          </span>
          <span className="h-1 w-1 rounded-full bg-framer-mute/50" aria-hidden="true" />
          <span className="label text-[0.7rem] text-framer-mute">
            {formatDate(post.publishedAt)}
          </span>
          <span className="h-1 w-1 rounded-full bg-framer-mute/50" aria-hidden="true" />
          <span className="label text-[0.7rem] text-framer-mute">{post.readMinutes} min read</span>
        </Reveal>

        <Reveal trigger="mount" delay={0.24} y={18}>
          <h1 className="mx-auto mt-6 max-w-4xl text-center text-[clamp(2.2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-framer-ink">
            {post.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-framer-mute md:text-xl">
            {post.excerpt}
          </p>
        </Reveal>
      </div>

      <Reveal trigger="mount" delay={0.3} className="shell mt-12 md:mt-14">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-framer-panel">
          <Image
            src={post.heroImage.src}
            alt={post.heroImage.alt}
            fill
            priority
            sizes="(min-width: 1280px) 1120px, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <ArticleJsonLd post={post} />
    </section>
  );
}

function ArticleJsonLd({ post }: { post: Post }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author.name },
    image: post.heroImage.src,
    mainEntityOfPage: `/insights/${post.slug}`,
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
