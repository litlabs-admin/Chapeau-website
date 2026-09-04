import Image from "next/image";
import Link from "next/link";
import type { PostSummary } from "@/lib/insights/types";
import { formatDate } from "@/lib/insights/utils";

/**
 * Card used by both the listing grid and the related-posts strip. No hooks,
 * so it works equally well imported from a client component or a server one.
 */
export function PostCard({ post }: { post: PostSummary }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-framer-card shadow-[0_4px_18px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(0,0,0,0.32)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-framer-panel">
        <Image
          src={post.heroImage.src}
          alt={post.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 px-6 pt-6">
        <span className="rounded-full border border-black/10 px-2.5 py-1 text-[0.72rem] text-framer-graphite">
          {post.category.label}
        </span>
        {post.isNew && (
          <span className="rounded-full bg-[#FF2E8A] px-2.5 py-1 text-[0.68rem] font-medium text-white">
            New
          </span>
        )}
      </div>

      <h3 className="mt-4 px-6 text-[1.2rem] font-semibold leading-snug tracking-[-0.02em] text-framer-ink">
        {post.title}
      </h3>
      <p className="mt-2.5 line-clamp-3 px-6 text-[0.95rem] leading-relaxed text-framer-graphite/75">
        {post.excerpt}
      </p>

      <div className="min-h-6 flex-1" />

      <div className="flex items-center justify-between border-t border-black/[0.06] px-6 py-4 text-[0.78rem] text-framer-mute">
        <span>{formatDate(post.publishedAt)}</span>
        <span>{post.readMinutes} min read</span>
      </div>
    </Link>
  );
}
