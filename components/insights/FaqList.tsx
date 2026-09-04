import type { FaqItem } from "@/lib/insights/types";
import { insightsArticle } from "@/lib/content/insights";

export function FaqList({ items }: { items: FaqItem[] }) {
  if (items.length === 0) return null;

  return (
    <div className="mt-16 border-t border-black/[0.06] pt-12">
      <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-framer-ink md:text-[1.7rem]">
        {insightsArticle.faqHeading}
      </h2>
      <div className="mt-6">
        {items.map((item) => (
          <details key={item.question} className="group border-b border-black/[0.06] py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.02rem] font-medium text-framer-ink [&::-webkit-details-marker]:hidden">
              {item.question}
              <svg
                className="h-4 w-4 shrink-0 text-framer-mute transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-framer-graphite/80">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
      <FaqJsonLd items={items} />
    </div>
  );
}

function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
