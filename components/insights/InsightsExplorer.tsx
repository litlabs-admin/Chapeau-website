"use client";

import { useMemo, useState } from "react";
import type { InsightCategory, PostSummary } from "@/lib/insights/types";
import { insightsExplorer } from "@/lib/content/insights";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { PostCard } from "@/components/insights/PostCard";

const ALL = "all";

export function InsightsExplorer({
  posts,
  categories,
}: {
  posts: PostSummary[];
  categories: InsightCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = activeCategory === ALL || post.category.slug === activeCategory;
      const matchesQuery =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.label.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [posts, activeCategory, query]);

  const clearFilters = () => {
    setActiveCategory(ALL);
    setQuery("");
  };

  return (
    <section className="py-20 md:py-28" aria-label="All insights">
      <div className="shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div
            role="group"
            aria-label="Filter by category"
            className="flex flex-wrap items-center gap-2.5"
          >
            <CategoryChip
              label={insightsExplorer.allCategoryLabel}
              active={activeCategory === ALL}
              onClick={() => setActiveCategory(ALL)}
            />
            {categories.map((category) => (
              <CategoryChip
                key={category.slug}
                label={category.label}
                active={activeCategory === category.slug}
                onClick={() => setActiveCategory(category.slug)}
              />
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <label htmlFor="insights-search" className="sr-only">
              {insightsExplorer.searchLabel}
            </label>
            <svg
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-framer-mute"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" strokeLinecap="round" />
            </svg>
            <input
              id="insights-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={insightsExplorer.searchPlaceholder}
              aria-controls="insights-grid"
              className="w-full rounded-lg border border-black/10 bg-white py-3 pl-10 pr-4 text-[0.97rem] text-charcoal outline-none transition-all duration-200 placeholder:text-slate/50 focus:border-[#FF2E8A] focus:shadow-[0_0_0_3px_rgba(255,46,138,0.10)]"
            />
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {filtered.length} articles
        </p>

        {filtered.length > 0 ? (
          <ul id="insights-grid" className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <Reveal key={post.slug} as="li" delay={(i % 3) * 0.08}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-black/10 bg-framer-wash px-8 py-16 text-center">
            <p className="text-[1.1rem] font-medium text-framer-ink">
              {insightsExplorer.emptyState.heading}
            </p>
            <p className="mt-2 text-[0.95rem] text-framer-mute">
              {insightsExplorer.emptyState.line}
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-full border border-black/10 px-4 py-2 text-[0.85rem] text-framer-graphite/75 transition-all duration-200 ease-calm hover:border-black/25 hover:text-framer-ink"
            >
              {insightsExplorer.emptyState.clearLabel}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-[0.85rem] transition-all duration-200 ease-calm",
        active
          ? "border-[#FF2E8A] bg-[#FF2E8A] text-white"
          : "border-black/10 text-framer-graphite/75 hover:border-black/25 hover:text-framer-ink",
      )}
    >
      {label}
    </button>
  );
}
