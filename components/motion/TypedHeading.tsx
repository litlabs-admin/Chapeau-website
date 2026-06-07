"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Fade-in heading for inner pages. Renders all text immediately and fades in
 * on mount. Words listed in `highlight` are wrapped in the brand teal gradient.
 * Settles to static text when the user prefers reduced motion.
 */
export function TypedHeading({
  text,
  highlight = [],
  className,
}: {
  text: string;
  highlight?: string[];
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className={className}
      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {renderSegments(text, highlight)}
    </motion.span>
  );
}

function renderSegments(text: string, highlight: string[]): React.ReactNode {
  if (!highlight.length) return text;

  const segments: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    let earliestIdx = -1;
    let earliestWord = "";

    for (const word of highlight) {
      const idx = remaining.indexOf(word);
      if (idx !== -1 && (earliestIdx === -1 || idx < earliestIdx)) {
        earliestIdx = idx;
        earliestWord = word;
      }
    }

    if (earliestIdx === -1) {
      segments.push(remaining);
      break;
    }

    if (earliestIdx > 0) {
      segments.push(remaining.slice(0, earliestIdx));
    }

    segments.push(
      <span
        key={key++}
        className="bg-teal-primary bg-clip-text text-transparent"
      >
        {earliestWord}
      </span>,
    );

    remaining = remaining.slice(earliestIdx + earliestWord.length);
  }

  return segments;
}
