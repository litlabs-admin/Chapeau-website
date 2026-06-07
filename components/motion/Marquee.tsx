"use client";

import { cn } from "@/lib/cn";

/**
 * Marquee primitive — a single lane that scrolls slowly and continuously, used
 * by both the logo strip and the services ticker. The content is duplicated so
 * the loop is seamless; it pauses on hover and honours reduced motion (the CSS
 * animation is neutralised globally for prefers-reduced-motion).
 *
 * `speed` is seconds-per-loop (higher = slower). Direction alternates per lane.
 */
export function Marquee({
  children,
  direction = "left",
  speed = 60,
  className,
  itemClassName,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div className={cn("group/marquee mask-x overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max flex-nowrap",
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right",
          "group-hover/marquee:[animation-play-state:paused]",
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Two identical tracks for a seamless -50% loop */}
        {[0, 1].map((track) => (
          <div
            key={track}
            className={cn("flex flex-nowrap", itemClassName)}
            aria-hidden={track === 1}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
