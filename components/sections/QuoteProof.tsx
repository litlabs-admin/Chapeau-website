import React from "react";
import Image from "next/image";
import { quoteProof, type QuoteProof as Quote } from "@/lib/content/home";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/motion/Reveal";

export function QuoteProof() {
  return (
    <section className="bg-framer-ink py-20 text-white md:py-28" aria-label="Testimonials">
      <div className="shell">
        <Reveal>
          <Label tone="light">Testimonials</Label>
          <h2 className="mt-4 max-w-xl text-[clamp(2.1rem,4.2vw,2.9rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
            What people say about working with Chapeau Collective.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-3">
          {quoteProof.map((q, i) => (
            <QuoteCard key={q.id} quote={q} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteCard({ quote, delay }: { quote: Quote; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-framer-graphite shadow-[0_4px_18px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(0,0,0,0.32)]"
    >
      {/* Solid brand-colour panel */}
      <div
        className="relative h-36 flex-none"
        style={{ backgroundColor: quote.accentColor }}
      >
        {/* Pattern clipped independently so avatar can overflow */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105 ${quote.patternClass}`}
          />
        </div>
        {/* Brand logo on a white chip, centred */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex h-16 items-center rounded-xl bg-white px-5 shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
            <Image
              src={quote.logo}
              alt={quote.logoAlt}
              width={quote.logoWidth}
              height={quote.logoHeight}
              className={`w-auto object-contain ${quote.logoClass ?? "h-9"}`}
            />
          </div>
        </div>
        {/* Avatar overlapping the panel bottom */}
        <div className="absolute bottom-0 left-6 z-20 translate-y-1/2">
          <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full bg-[#3a3a3a] ring-4 ring-white transition-transform duration-300 ease-out group-hover:scale-110">
            <Image
              src={quote.image}
              alt={`Portrait of ${quote.person}`}
              fill
              sizes="72px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col px-6 pb-8 pt-12">
        <blockquote className="flex-1 text-[1.05rem] leading-relaxed text-white/80 md:text-[1.1rem]">
          &ldquo;{quote.quote}&rdquo;
        </blockquote>
        <footer className="mt-6">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white">
            {quote.person}
          </p>
          <p className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-white/40">
            {quote.title}
          </p>
        </footer>
      </div>
    </Reveal>
  );
}
