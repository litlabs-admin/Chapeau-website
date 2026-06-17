"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A single "moving part" card with micro-interactions: the card lifts and
 * deepens its shadow on hover, an accent bar grows along the top edge, and the
 * index number nudges up to meet it. Settles to static when reduced motion is
 * preferred. The scroll-in entrance is handled by the wrapping Reveal.
 */
export function WorkJoinCard({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      tabIndex={0}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-framer-card p-6 shadow-[0_4px_18px_rgba(0,0,0,0.12)] outline-none focus-visible:ring-2 focus-visible:ring-[#FF2E8A]/40 sm:p-7 md:p-8"
      variants={{
        rest: { y: 0, boxShadow: "0 4px 18px rgba(0,0,0,0.12)" },
        hover: reduce
          ? {}
          : { y: -6, boxShadow: "0 18px 40px rgba(0,0,0,0.16)" },
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Accent bar that grows across the top edge on hover */}
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[3px] w-full origin-left bg-[#FF2E8A]"
        variants={{
          rest: { scaleX: 0, opacity: 0 },
          hover: reduce ? {} : { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.span
        className="block text-center font-condensed text-[1.1rem] font-semibold text-[#FF2E8A] md:text-left"
        variants={{
          rest: { y: 0 },
          hover: reduce ? {} : { y: -2 },
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        0{index + 1}
      </motion.span>
      <h3 className="mt-4 text-center text-[1.15rem] font-semibold tracking-[-0.02em] text-framer-ink md:text-left md:text-[1.3rem]">
        {title}
      </h3>
      <p className="mt-3 text-center leading-relaxed text-framer-graphite md:text-left">
        {body}
      </p>
    </motion.div>
  );
}
