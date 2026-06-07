"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Pair = { a: string; b: string };
type Phase =
  | "idle"
  | "typingA"
  | "betweenAB"
  | "typingB"
  | "hold"
  | "deletingB"
  | "deletingA";

const SPEED = {
  type: 58, // ms per character typed
  del: 30, // ms per character deleted
  between: 220, // beat after word A before word B
  hold: 1700, // pause on the full phrase
};

/**
 * Hero word rotation — a smooth, subtle typewriter. "Your" and "for" stay fixed;
 * the two rotating words type in, hold, then backspace before the next pair. The
 * words sit in fixed-width slots reserved from the longest word, so the line never
 * reflows horizontally and the headline height stays constant. A thin teal caret
 * marks the slot currently typing. Reduced motion shows the first pair, static.
 */
export function RotatingHeadline({
  pairs,
  startDelay = 350,
}: {
  pairs: Pair[];
  startDelay?: number;
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [aLen, setALen] = useState(0);
  const [bLen, setBLen] = useState(0);

  const widthA = Math.max(...pairs.map((p) => p.a.length));
  const widthB = Math.max(...pairs.map((p) => p.b.length));
  const current = pairs[i];

  useEffect(() => {
    if (reduce) return;
    let t: ReturnType<typeof setTimeout>;

    switch (phase) {
      // Gentle initial beat so the caret reads before the first keystroke.
      case "idle":
        t = setTimeout(() => setPhase("typingA"), startDelay);
        break;
      case "typingA":
        if (aLen < current.a.length) {
          t = setTimeout(() => setALen((n) => n + 1), SPEED.type);
        } else {
          t = setTimeout(() => setPhase("betweenAB"), SPEED.between);
        }
        break;
      case "betweenAB":
        t = setTimeout(() => setPhase("typingB"), 0);
        break;
      case "typingB":
        if (bLen < current.b.length) {
          t = setTimeout(() => setBLen((n) => n + 1), SPEED.type);
        } else {
          t = setTimeout(() => setPhase("hold"), SPEED.hold);
        }
        break;
      case "hold":
        t = setTimeout(() => setPhase("deletingB"), 0);
        break;
      case "deletingB":
        if (bLen > 0) {
          t = setTimeout(() => setBLen((n) => n - 1), SPEED.del);
        } else {
          t = setTimeout(() => setPhase("deletingA"), SPEED.between * 0.6);
        }
        break;
      case "deletingA":
        if (aLen > 0) {
          t = setTimeout(() => setALen((n) => n - 1), SPEED.del);
        } else {
          t = setTimeout(() => {
            setI((n) => (n + 1) % pairs.length);
            setPhase("typingA");
          }, SPEED.between * 0.6);
        }
        break;
    }
    return () => clearTimeout(t);
  }, [phase, aLen, bLen, current.a, current.b, pairs.length, reduce, startDelay]);

  // Which slot owns the caret right now.
  const caretOn = reduce
    ? "none"
    : phase === "idle" ||
        phase === "typingA" ||
        phase === "deletingA" ||
        phase === "betweenAB"
      ? "a"
      : "b";

  const shownA = reduce ? current.a : current.a.slice(0, aLen);
  const shownB = reduce ? current.b : current.b.slice(0, bLen);

  return (
    <h1 className="font-sans font-semibold leading-[1.15] tracking-[-0.03em] text-[clamp(2.75rem,6.2vw,5rem)]">
      <span className="text-charcoal">Your </span>
      <Slot ch={widthA}>
        <span className="bg-teal-primary bg-clip-text text-transparent">
          {shownA}
        </span>
        {caretOn === "a" && <Caret />}
      </Slot>
      <br className="block md:hidden" />
      <span className="text-charcoal"> for </span>
      <Slot ch={widthB}>
        <span className="text-charcoal">{shownB}</span>
        {caretOn === "b" && <Caret />}
      </Slot>
    </h1>
  );
}

function Slot({ ch, children }: { ch: number; children: React.ReactNode }) {
  return (
    <span
      className="relative inline-flex items-baseline whitespace-nowrap align-baseline md:[min-width:var(--slot-w)]"
      style={{ '--slot-w': `${ch}ch` } as React.CSSProperties}
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
