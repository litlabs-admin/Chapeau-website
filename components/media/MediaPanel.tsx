import Image from "next/image";
import { cn } from "@/lib/cn";
import { Pattern } from "./Pattern";

type Overlay = "teal" | "charcoal" | "gold";

/**
 * MediaPanel — the brand's image-block primitive. A swappable photo slot sits
 * under a teal gradient base, a subtle colour overlay and the craft pattern, so
 * panels read on-brand even before real client photography drops in. Swap a real
 * image later by changing only the `src` in the content file.
 *
 * Image rules honoured: strong image block · subtle teal/charcoal/gold overlay ·
 * clean surrounding layout · the image brings colour into the section.
 */
const overlays: Record<Overlay, string> = {
  teal: "from-teal-900/85 via-teal-800/55 to-teal-600/25",
  charcoal: "from-ink/90 via-navy/65 to-teal-900/35",
  gold: "from-copper-dark/85 via-copper/45 to-stone/20",
};

export function MediaPanel({
  src,
  alt,
  overlay = "teal",
  className,
  priority = false,
  rounded = "rounded-2xl",
  children,
}: {
  src?: string;
  alt: string;
  overlay?: Overlay;
  className?: string;
  priority?: boolean;
  rounded?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-teal-primary",
        rounded,
        className,
      )}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
          className="object-cover"
        />
      )}
      {/* colour overlay — lets the image carry teal/charcoal/gold into the section */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br mix-blend-multiply",
          overlays[overlay],
        )}
      />
      {/* craft detail */}
      <Pattern opacity={0.16} />
      {/* foil hairline along the top edge — the glint */}
      <div className="foil-line absolute inset-x-0 top-0 h-px opacity-60" />
      {children && <div className="relative z-10 h-full">{children}</div>}
    </div>
  );
}
