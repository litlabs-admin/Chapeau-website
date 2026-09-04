"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/insights/types";
import { cn } from "@/lib/cn";

// Clears the sticky header + the `scroll-mt-28` offset headings scroll to.
const ACTIVE_OFFSET = 130;

export function ArticleToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (items.length < 2) return;

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    // Position-based rather than IntersectionObserver threshold-crossing: a
    // fast scroll (Page Down, a large wheel delta) can carry a heading past a
    // narrow observed band in a single frame without ever intersecting it.
    // Recomputing from getBoundingClientRect on every scroll has no such gap.
    let ticking = false;
    const updateActive = () => {
      ticking = false;
      let current: string | null = null;
      for (const el of headings) {
        if (el.getBoundingClientRect().top <= ACTIVE_OFFSET) {
          current = el.id;
        } else {
          break; // headings are in document order once one is below the line, the rest are too
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav aria-label="On this page" className="hidden md:block">
      <div className="sticky top-28">
        <p className="label text-[0.66rem] text-framer-mute">On this page</p>
        <ol className="mt-4 space-y-2.5">
          {items.map((item) => {
            const active = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "location" : undefined}
                  className={cn(
                    "block border-l-2 pl-3 text-[0.88rem] leading-snug transition-colors duration-200",
                    active
                      ? "border-[#FF2E8A] font-medium text-framer-ink"
                      : "border-transparent text-framer-graphite/75 hover:text-framer-ink",
                  )}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
