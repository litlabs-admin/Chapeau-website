import type { PostSummary } from "@/lib/insights/types";
import { insightsArticle } from "@/lib/content/insights";
import { Reveal } from "@/components/motion/Reveal";
import { PostCard } from "@/components/insights/PostCard";

export function RelatedPosts({ posts }: { posts: PostSummary[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-framer-wash py-20 md:py-28" aria-label="More insights">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label text-[0.72rem] text-framer-mute">{insightsArticle.relatedHeading}</p>
          <h2 className="mt-5 text-[clamp(2rem,4.2vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-framer-ink">
            Keep reading
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
