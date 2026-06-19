"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { dictionary } from "@/lib/content/home";
import { Reveal } from "@/components/motion/Reveal";

const PER_CHAR = 55; // ms per character while typing
const PER_ERASE = 30; // ms per character while backspacing (clearly perceptible)
const START_DELAY = 650; // let the heading settle before typing begins
const HOLD = 3200; // how long the finished definition rests before erasing
const RETYPE_PAUSE = 400; // brief blank beat before it types again

/**
 * ChapeauDefinition — the dictionary entry on the hero's charcoal panel.
 * CHAPEAU, the pronunciation row and a thin rule fade in, then the definition
 * types out char-by-char with the site's blinking caret, which rests when done.
 * Subtle, plays once on mount. Reduced motion shows the full definition static.
 * Mirrors RotatingHeadline's async-timeline idiom (cancelled flag + wait + clear).
 */
export function ChapeauDefinition() {
  const reduce = useReducedMotion();
  const { word, pronunciation, partOfSpeech, definition } = dictionary;

  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (reduce) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    const wait = (ms: number) =>
      new Promise<void>((res) => {
        timer = setTimeout(res, ms);
      });

    async function run() {
      await wait(START_DELAY);
      while (!cancelled) {
        for (let c = 1; c <= definition.length; c++) {
          await wait(PER_CHAR);
          if (cancelled) return;
          setTyped(definition.slice(0, c));
        }
        await wait(HOLD); // rest on the full definition
        if (cancelled) return;
        for (let c = definition.length - 1; c >= 0; c--) {
          await wait(PER_ERASE); // backspace, character by character
          if (cancelled) return;
          setTyped(definition.slice(0, c));
        }
        await wait(RETYPE_PAUSE); // brief blank beat before it types again
        if (cancelled) return;
      }
    }

    run();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [reduce, definition]);

  const staticMode = reduce ?? false;
  const shown = staticMode ? definition : typed;
  // Caret blinks while typing and rests (still blinking) once finished.
  const showCaret = !staticMode;

  return (
    <div className="mx-auto max-w-[640px] text-center">
      <Reveal trigger="mount">
        <p className="font-display text-[clamp(2.5rem,7vw,4rem)] font-extrabold uppercase leading-[0.9] tracking-display text-white">
          {word}
        </p>
      </Reveal>

      <Reveal trigger="mount" delay={0.12}>
        <p className="mt-3 flex items-center justify-center gap-3 font-mono text-[0.95rem]">
          <span style={{ color: "#FF2E8A" }}>{pronunciation}</span>
          <span className="italic text-framer-mute">{partOfSpeech}</span>
        </p>
      </Reveal>

      <Reveal trigger="mount" delay={0.2}>
        <div className="mx-auto my-5 h-px w-16 bg-white/15" />
      </Reveal>

      <p className="mx-auto min-h-[3em] max-w-[40ch] font-sans text-[clamp(1.05rem,2.6vw,1.25rem)] italic leading-[1.5] text-white/70">
        {shown}
        {showCaret && (
          <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.15em] bg-white/70 align-middle motion-safe:animate-[caret_1.05s_steps(1)_infinite]" />
        )}
      </p>
    </div>
  );
}
