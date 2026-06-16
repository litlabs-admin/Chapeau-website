"use client";

import { useEffect, useState } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

const CALM = [0.22, 1, 0.36, 1] as const;
const HOLD = 2600; // ms the word rests before changing
// Framer pastel family — the highlight cycles through these per word change.
const HIGHLIGHTS = ["#E1C1FF", "#8FCDFF", "#FFD9A8"];

/**
 * Hero headline — Framer "Echo" treatment, three lines.
 * Line 1 = the first lead word ("Your"), line 2 = the remainder ("Collective
 * for"), line 3 = a rotating word on a lavender highlight. On each change the
 * highlight sweeps out then back in via scaleX, alternating left→right then
 * right→left for a subtle, premium wipe (no typewriter). Reduced motion shows
 * the first word, static.
 */
export function RotatingHeadline({
  lead,
  words,
}: {
  lead: string;
  words: string[];
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [origin, setOrigin] = useState("left center");
  const hi = useAnimationControls(); // highlight box
  const wc = useAnimationControls(); // word text

  const parts = lead.trim().split(/\s+/);
  const first = parts[0];
  const rest = parts.slice(1).join(" ");

  useEffect(() => {
    if (reduce) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    const wait = (ms: number) =>
      new Promise<void>((res) => {
        timer = setTimeout(res, ms);
      });

    async function run() {
      // left→right first, then alternate
      let ltr = true;
      while (!cancelled) {
        await wait(HOLD);
        if (cancelled) break;

        // Clear the current highlight in the sweep direction, fade the word out.
        setOrigin(ltr ? "right center" : "left center");
        await Promise.all([
          hi.start({ scaleX: 0, transition: { duration: 0.42, ease: CALM } }),
          wc.start({ opacity: 0, transition: { duration: 0.28, ease: CALM } }),
        ]);
        if (cancelled) break;

        // Swap the word while the highlight is collapsed, then fill it back in.
        setI((n) => (n + 1) % words.length);
        setOrigin(ltr ? "left center" : "right center");
        hi.set({ scaleX: 0 });
        await Promise.all([
          hi.start({ scaleX: 1, transition: { duration: 0.55, ease: CALM } }),
          wc.start({
            opacity: 1,
            transition: { duration: 0.4, ease: CALM, delay: 0.08 },
          }),
        ]);

        ltr = !ltr;
      }
    }

    run();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [reduce, words.length, hi, wc]);

  return (
    <h1 className="text-center font-display text-[clamp(3.1rem,8.4vw,6.25rem)] font-extrabold uppercase leading-[0.9] tracking-display text-framer-ink">
      <span className="block">{first}</span>
      <span className="block">{rest}</span>
      <span className="mt-[0.12em] flex justify-center">
        <span className="relative inline-flex justify-center whitespace-nowrap px-[0.2em] py-[0.02em]">
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-[0.08em]"
            style={{
              transformOrigin: origin,
              backgroundColor: HIGHLIGHTS[i % HIGHLIGHTS.length],
            }}
            initial={{ scaleX: 1 }}
            animate={hi}
          />
          <motion.span
            className="relative"
            initial={{ opacity: 1 }}
            animate={wc}
          >
            {words[i]}
          </motion.span>
        </span>
      </span>
    </h1>
  );
}
