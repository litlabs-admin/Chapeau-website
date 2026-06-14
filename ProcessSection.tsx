"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Phase = "idle" | "typing" | "hold" | "deleting";

const SPEED = {
  type: 58, // ms per character typed
  del: 30, // ms per character deleted
  hold: 1700, // pause on the full word
};

/**
 * Hero word rotation — a smooth, subtle typewriter. The lead ("Your Collective
 * for") stays fixed; a single trailing word types in, holds, then backspaces
 * before the next. The word sits in a fixed-width slot reserved from the longest
 * word, so the line never reflows horizontally and the headline height stays
 * constant. A thin teal caret marks the slot while typing. On mobile the lead
 * stays locked on its own line and the rotating word drops below. Reduced motion
 * shows the first word, static.
 */
export function RotatingHeadline({
  lead,
  words,
  startDelay = 350,
}: {
  lead: string;
  words: string[];
  startDelay?: number;
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [len, setLen] = useState(0);

  const width = Math.max(...words.map((w) => w.length));
  const current = words[i];

  useEffect(() => {
    if (reduce) return;
    let t: ReturnType<typeof setTimeout>;

    switch (phase) {
      // Gentle initial beat so the caret reads before the first keystroke.
      case "idle":
        t = setTimeout(() => setPhase("typing"), startDelay);
        break;
      case "typing":
        if (len < current.length) {
          t = setTimeout(() => setLen((n) => n + 1), SPEED.type);
        } else {
          t = setTimeout(() => setPhase("hold"), SPEED.hold);
        }
        break;
      case "hold":
        t = setTimeout(() => setPhase("deleting"), 0);
        break;
      case "deleting":
        if (len > 0) {
          t = setTimeout(() => setLen((n) => n - 1), SPEED.del);
        } else {
          t = setTimeout(() => {
            setI((n) => (n + 1) % words.length);
            setPhase("typing");
          }, SPEED.type);
        }
        break;
    }
    return () => clearTimeout(t);
  }, [phase, len, current.length, words.length, reduce, startDelay]);

  const shown = reduce ? current : current.slice(0, len);

  return (
    <h1 className="font-sans font-semibold leading-[1.15] tracking-[-0.03em] text-[clamp(2.75rem,6.2vw,5rem)]">
      <span className="text-charcoal">{lead}</span>
      <br className="block md:hidden" />
      <span className="hidden md:inline"> </span>
      <Slot ch={width}>
        <span className="bg-teal-primary bg-clip-text text-transparent">
          {shown}
        </span>
        {!reduce && <Caret />}
      </Slot>
    </h1>
  );
}

function Slot({ ch, children }: { ch: number; children: React.ReactNode }) {
  return (
    <span
      className="relative inline-flex items-baseline whitespace-nowrap align-baseline md:[min-width:var(--slot-w)]"
      style={{ "--slot-w": `${ch}ch` } as React.CSSProperties}
    >
      {children}
    </span>
  );
}

function Caret() {
  return (
    <span
      aria-hidden="true"
      className="ml-[0.06em] inline-block h-[0.82em] w-[2px] translate-y-[0.06em] rounded-full bg-teal-500 align-baseline motion-safe:animate-[caret_1.05s_steps(1)_infinite]"
    />
  );
}
