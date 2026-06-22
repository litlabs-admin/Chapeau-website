"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { caseStudies, type CaseStudy } from "@/lib/content/home";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/**
 * Sticky pinned showcase — the Framer "Everything in sync" mechanic.
 * On desktop the right card stays pinned while the left text scrolls; the active
 * item (whichever crosses the viewport centre) drives a crossfade of the right
 * image + pastel panel colour. On mobile it falls back to a simple stacked flow.
 *
 * `kind` picks the left-column copy: "work" (home Selected Work teaser) or
 * "examples" (the full portfolio entry with Work delivered + Outcome).
 */
const panelTones = ["bg-[#FF2E8A]", "bg-[#08B8E8]"];

export function StickyShowcase({ kind }: { kind: "work" | "examples" }) {
  const items = caseStudies;
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Desktop: sticky pinned scroll */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-16 lg:gap-20">
        <div>
          {items.map((cs, i) => (
            <div
              key={cs.id}
              data-index={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={cn(
                "flex min-h-screen flex-col justify-center py-16 transition-opacity duration-500 ease-calm",
                active === i ? "opacity-100" : "opacity-40",
              )}
            >
              <TextBlock cs={cs} index={i} kind={kind} />
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="sticky top-0 flex h-screen items-center">
            <div className="relative w-full">
              {items.map((cs, i) => (
                <div
                  key={cs.id}
                  aria-hidden={active !== i}
                  className={cn(
                    "transition-opacity duration-700 ease-calm",
                    active === i
                      ? "relative z-10 opacity-100"
                      : "absolute inset-0 z-0 opacity-0",
                  )}
                >
                  <CardInner cs={cs} index={i} kind={kind} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stacked flow */}
      <div className="flex flex-col gap-16 md:hidden">
        {items.map((cs, i) => (
          <Reveal as="article" key={cs.id} className="flex flex-col gap-6">
            <CardInner cs={cs} index={i} kind={kind} />
            <TextBlock cs={cs} index={i} kind={kind} />
          </Reveal>
        ))}
      </div>
    </>
  );
}

function CardInner({
  cs,
  index,
  kind,
}: {
  cs: CaseStudy;
  index: number;
  kind: "work" | "examples";
}) {
  const tone = panelTones[index % panelTones.length];

  return (
    <div
      className={cn(
        "pattern-dots flex items-center justify-center overflow-hidden rounded-lg p-6 md:p-10",
        tone,
      )}
    >
      <div className="w-full max-w-md rounded-[14px] bg-white p-3 shadow-[0_2.53px_80px_rgba(0,0,0,0.08)]">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] bg-framer-wash">
          <Image
            src={cs.image}
            alt={cs.imageAlt}
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
            className="object-cover"
          />
        </div>
        {kind === "work" && (
          <div className="flex items-center justify-between px-1 pb-1 pt-3">
            <span className="text-[0.9rem] font-medium text-framer-ink">
              {cs.business}
            </span>
            <span className="label text-[0.6rem] text-framer-mute">
              {cs.type}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function TextBlock({
  cs,
  index,
  kind,
}: {
  cs: CaseStudy;
  index: number;
  kind: "work" | "examples";
}) {
  if (kind === "examples") {
    return (
      <div className="max-w-xl">
        <div className="border-t border-framer-ink/15 pt-6">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-display text-[1.4rem] font-bold leading-none text-framer-ink/25 md:text-[1.9rem]">
              0{index + 1}
            </span>
            <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold uppercase leading-none tracking-[0.005em] text-framer-ink">
              {cs.business}
            </h3>
            <span className="label text-[0.68rem] text-framer-mute">
              {cs.type}
            </span>
          </div>
        </div>
        <h2 className="mt-5 text-[clamp(1.55rem,3.1vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-framer-ink">
          {cs.headline}
        </h2>
        <p className="mt-5 leading-relaxed text-framer-graphite">{cs.context}</p>
        {cs.challenge && cs.challenge.split("\n\n").map((para, i) => (
          <p key={i} className="mt-4 leading-relaxed text-framer-graphite">{para}</p>
        ))}
        <div className="mt-7 border-l-2 border-framer-ink/40 pl-5">
          <p className="label text-[0.66rem] text-framer-mute">Work delivered</p>
          <p className="mt-2 font-medium leading-relaxed text-framer-ink">
            {cs.workDelivered}
          </p>
        </div>
        <div className="mt-5 border-l-2 border-framer-ink/15 pl-5">
          <p className="label text-[0.66rem] text-framer-mute">Outcome</p>
          <p className="mt-2 leading-relaxed text-framer-graphite">
            {cs.outcome}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl">
      <p className="label text-[0.72rem] text-framer-mute">{cs.business}</p>
      <h3 className="mt-4 text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-framer-ink">
        {cs.headline}
      </h3>
      <p className="mt-5 leading-relaxed text-framer-graphite">{cs.context}</p>
      {cs.challenge && cs.challenge.split("\n\n").map((para, i) => (
        <p key={i} className="mt-4 leading-relaxed text-framer-graphite">{para}</p>
      ))}
      <div className="mt-7 border-l-2 border-framer-ink/15 pl-5">
        <p className="label text-[0.66rem] text-framer-mute">
          What Chapeau enabled
        </p>
        <p className="mt-2 font-medium leading-relaxed text-framer-ink">
          {cs.enabled}
        </p>
      </div>
      <div className="mt-7">
        <CaseLink href={cs.cta.href} label={cs.cta.label} />
      </div>
    </div>
  );
}

function CaseLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 border-b border-framer-ink/25 pb-1 text-[0.95rem] font-medium text-framer-ink transition-colors duration-300 ease-calm hover:border-framer-ink"
    >
      {label}
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 transition-transform duration-300 ease-calm group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
