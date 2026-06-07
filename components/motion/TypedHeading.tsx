"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const SPEED = 36; // ms per character

/**
 * One-shot typewriter for page headings. Types character-by-character on mount,
 * shows a teal caret while in progress. Words listed in `highlight` are wrapped
 * in the brand teal gradient once they are fully typed. Settles to static text
 * when the user prefers reduced motion.
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
  const [len, setLen] = useState(reduce ? text.length : 0);

  useEffect(() => {
    if (reduce || len >= text.length) return;
    const t = setTimeout(() => setLen((l) => l + 1), SPEED);
    return () => clearTimeout(t);
  }, [len, text.length, reduce]);

  const done = len >= text.length;
  const shown = text.slice(0, len);

  return (
    <span className={className}>
      {renderSegments(shown, highlight)}
      {!done && <Caret />}
    </span>
  );
}

function renderSegments(shown: string, highlight: string[]): React.ReactNode {
  if (!highlight.length) return shown;

  const segments: React.ReactNode[] = [];
  let remaining = shown;
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

function Caret() {
  return (
    <span
      aria-hidden="true"
      className="ml-[0.06em] inline-block h-[0.82em] w-[2px] translate-y-[0.06em] rounded-full bg-teal-500 align-baseline motion-safe:animate-[caret_1.05s_steps(1)_infinite]"
    />
  );
}
