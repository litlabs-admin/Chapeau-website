import Image from "next/image";
import type { ReactNode } from "react";
import type { PostBlock } from "@/lib/insights/types";
import { Button } from "@/components/ui/Button";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders `[text](url)` inside block text as an external link; everything else passes through as plain text. */
function renderInline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  LINK_PATTERN.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = LINK_PATTERN.exec(text))) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-[#FF2E8A]/40 underline-offset-2 hover:decoration-[#FF2E8A]"
      >
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export function ArticleBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="space-y-5 text-[1.05rem] leading-[1.75] text-framer-graphite/85">
      {blocks.map((block, i) => (
        <ArticleBlock key={i} block={block} />
      ))}
    </div>
  );
}

function ArticleBlock({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          id={block.id}
          className="scroll-mt-28 pt-6 text-[1.5rem] font-semibold tracking-[-0.02em] text-framer-ink md:text-[1.75rem]"
        >
          {block.text}
        </h2>
      );

    case "p":
      return <p>{renderInline(block.text)}</p>;

    case "list":
      return block.ordered ? (
        <ol className="list-decimal space-y-2.5 pl-5 marker:text-[#FF2E8A]">
          {block.items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2E8A]"
                aria-hidden="true"
              />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote className="border-l-2 border-[#FF2E8A] py-1 pl-6 text-[1.15rem] italic leading-relaxed text-framer-ink">
          {block.text}
          {block.attribution && (
            <cite className="mt-3 block not-italic label text-[0.7rem] text-framer-mute">
              {block.attribution}
            </cite>
          )}
        </blockquote>
      );

    case "callout":
      return (
        <div className="rounded-2xl border border-black/[0.08] bg-framer-wash px-6 py-5">
          {block.title && (
            <p className="label text-[0.7rem] text-[#FF2E8A]">{block.title}</p>
          )}
          <p className="mt-2 text-[0.98rem] leading-relaxed text-framer-graphite">
            {block.text}
          </p>
        </div>
      );

    case "image":
      return (
        <figure>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-framer-panel">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-[0.85rem] text-framer-mute">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "cta":
      return (
        <div className="rounded-2xl bg-framer-ink px-7 py-8 text-center text-white">
          <p className="text-lg">{block.text}</p>
          <div className="mt-5">
            <Button href={block.href} variant="light">
              {block.label}
            </Button>
          </div>
        </div>
      );

    default:
      return null;
  }
}
