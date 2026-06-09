import React from "react";
import { quoteProof, type QuoteProof as Quote } from "@/lib/content/examples";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Quote-led proof — simpler testimonial entries (Business · Person/role · Quote)
 * per the component rule. Set on a calm charcoal field so the words carry weight,
 * each card opening with a single gold quote glyph — the glint.
 */
export function QuoteProof() {
  return (
    <section className="bg-charcoal py-20 text-white md:py-28" aria-label="In their words">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Label tone="light">In their words</Label>
          <h2 className="mt-5 text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
            Work the people closest to it stand behind.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-3">
          {quoteProof.map((q, i) => (
            <QuoteCard key={q.id} quote={q} delay={i * 0.08} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteCard({ quote, delay, index }: { quote: Quote; delay: number; index: number }) {
  const isMiddle = index === 1;
  return (
    <Reveal
      delay={delay}
      className={`card-glow relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 ease-calm hover:border-white/30 hover:bg-white/[0.07] sm:p-6 md:p-8${isMiddle ? " card-glow-gold" : ""}`}
      style={{ "--card-glow-bg": "#111820" } as React.CSSProperties}
    >
      <span
        className="font-condensed text-4xl leading-[0.6] text-gold md:text-5xl"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote className="mt-5 flex-1 text-[1.02rem] leading-relaxed text-white/85">
        {quote.quote}
      </blockquote>
      <footer className="mt-7 border-t border-white/10 pt-5">
        <p className="font-condensed text-[1.15rem] font-semibold uppercase tracking-[0.01em] text-white">
          {quote.business}
        </p>
        <p className="mt-1 min-h-[2.5rem] text-[0.85rem] leading-snug text-white/50">
          {quote.role}
        </p>
      </footer>
    </Reveal>
  );
}
