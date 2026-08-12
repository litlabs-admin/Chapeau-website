import Link from "next/link";
import {
  companyDetails,
  policySections,
  type PolicyBlock,
} from "@/lib/content/privacy";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Renders the Privacy & Cookie Policy body — a numbered table of contents
 * (sticky on desktop) alongside the sections themselves. Calm editorial
 * typography matching PageIntro; no marketing chrome, since this is a
 * reference document people scan and search, not a page that sells.
 */
export function PolicyContent() {
  return (
    <section className="pb-24 pt-16 md:pb-32 md:pt-20">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[220px_1fr] md:gap-16">
          <nav aria-label="Policy sections" className="hidden md:block">
            <div className="sticky top-28">
              <p className="label text-[0.66rem] text-framer-mute">On this page</p>
              <ol className="mt-4 space-y-2.5">
                {policySections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-[0.88rem] leading-snug text-framer-graphite/75 transition-colors hover:text-framer-ink"
                    >
                      {section.number}. {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="min-w-0">
            {policySections.map((section, i) => (
              <div
                key={section.id}
                id={section.id}
                className={i > 0 ? "mt-14 scroll-mt-28 border-t border-black/[0.06] pt-14" : "scroll-mt-28"}
              >
                <Reveal as="article" delay={Math.min(i * 0.02, 0.1)}>
                  <p className="label text-[0.72rem] text-[#FF2E8A]">{section.number}</p>
                  <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-framer-ink md:text-[1.7rem]">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-[1rem] leading-relaxed text-framer-graphite/85">
                    {section.blocks.map((block, j) => (
                      <PolicyBlockView key={j} block={block} />
                    ))}
                  </div>
                </Reveal>
              </div>
            ))}

            <Reveal className="mt-14 border-t border-black/[0.06] pt-10 text-center">
              <p className="text-[0.95rem] text-framer-mute">
                Questions about this policy?
              </p>
              <a
                href={`mailto:${companyDetails.email}`}
                className="mt-2 inline-block text-lg text-[#FF2E8A] underline-offset-4 transition-colors hover:underline"
              >
                {companyDetails.email}
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PolicyBlockView({ block }: { block: PolicyBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;

    case "list":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-[#FF2E8A]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "rows":
      return (
        <div className="overflow-hidden rounded-xl border border-black/[0.08]">
          {block.rows.map((row, i) => (
            <div
              key={row.left}
              className={
                "grid gap-2 px-5 py-3.5 sm:grid-cols-2 sm:items-center " +
                (i > 0 ? "border-t border-black/[0.06]" : "") +
                (i % 2 === 1 ? " bg-framer-wash" : "")
              }
            >
              <span className="text-[0.95rem] text-framer-ink">{row.left}</span>
              <span className="label text-[0.68rem] text-framer-mute sm:text-right">
                {row.right}
              </span>
            </div>
          ))}
        </div>
      );

    case "address":
      return (
        <div className="rounded-xl border border-black/[0.08] bg-framer-wash px-5 py-4 text-[0.95rem] not-italic leading-relaxed text-framer-graphite">
          <p className="font-medium text-framer-ink">
            {companyDetails.tradingAs}, trading name of {companyDetails.legalName}
          </p>
          {companyDetails.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>
            {companyDetails.jurisdiction}, company number {companyDetails.companyNumber}
          </p>
          <p>
            ICO registration reference:{" "}
            {companyDetails.icoReference === "pending" ? (
              <span className="italic text-framer-mute">
                pending — the company has only recently registered; this reference will be added once issued
              </span>
            ) : (
              companyDetails.icoReference
            )}
          </p>
          <p>
            Email:{" "}
            <Link
              href={`mailto:${companyDetails.email}`}
              className="text-[#FF2E8A] underline-offset-4 hover:underline"
            >
              {companyDetails.email}
            </Link>
          </p>
        </div>
      );

    default:
      return null;
  }
}
