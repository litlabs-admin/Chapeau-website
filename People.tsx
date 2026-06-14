"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Gentle scroll reveal — a small fade + translate, once. Calm easing, never
 * bouncy. Settles to static when the user prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  style,
  delay = 0,
  y = 28,
  as = "div",
  trigger = "inView",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span";
  /**
   * "inView" — fade in once the block scrolls into view (default, used site-wide).
   * "mount" — play once on load; the right choice for above-the-fold hero text,
   * which would otherwise render at full opacity server-side with no entrance.
   */
  trigger?: "inView" | "mount";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  const transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay };

  if (trigger === "mount") {
    return (
      <MotionTag
        className={cn(className)}
        style={style}
        initial={reduce ? false : { opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={cn(className)}
      style={style}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      // Trigger once the block is ~14% into the viewport, so the fade-in is
      // clearly seen happening as you scroll rather than already finished.
      viewport={{ once: true, margin: "0px 0px -14% 0px" }}
      transition={transition}
    >
      {children}
    </MotionTag>
  );
}
