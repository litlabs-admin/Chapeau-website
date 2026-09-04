import Image from "next/image";
import Link from "next/link";
import type { PostSummary } from "@/lib/insights/types";
import { insightsListing } from "@/lib/content/insights";
import { formatDate } from "@/lib/insights/utils";
import { Reveal } from "@/components/motion/Reveal";

export function FeaturedPost({ post }: { post: PostSummary }) {
  return (
    <section className="pt-12 md:pt-16">
      <div className="shell">
        <Reveal>
          <Link
            href={`/insights/${post.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-black/5 bg-framer-card shadow-[0_4px_18px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:shadow-[0_20px_48px_rgba(0,0,0,0.32)] md:grid-cols-2"
          >
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-2">
                <span className="label text-[0.72rem] text-[#FF2E8A]">
                  {insightsListing.featuredLabel}
                </span>
                <span className="rounded-full border border-black/10 px-2.5 py-1 text-[0.72rem] text-framer-graphite">
                  {post.category.label}
                </span>
                {post.isNew && (
                  <span className="rounded-full bg-[#FF2E8A] px-2.5 py-1 text-[0.68rem] font-medium text-white">
                    New
                  </span>
                )}
              </div>
              <h2 className="mt-5 text-[clamp(1.7rem,3.4vw,2.3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-framer-ink">
                {post.title}
              </h2>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-framer-graphite/80">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3 text-[0.8rem] text-framer-mute">
                <span>{formatDate(post.publishedAt)}</span>
                <span className="h-1 w-1 rounded-full bg-framer-mute/50" aria-hidden="true" />
                <span>{post.readMinutes} min read</span>
              </div>
            </div>
            <div className="relative min-h-[280px] md:min-h-[420px]">
              <Image
                src={post.heroImage.src}
                alt={post.heroImage.alt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
