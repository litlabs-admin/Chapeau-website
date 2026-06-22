import { cn } from "@/lib/cn";

/**
 * Section marker — Oswald condensed uppercase with an optional teal dot.
 * Used for eyebrows, tags and small accent words. Never for body copy.
 */
export function Label({
  children,
  dot = true,
  className,
  dotClassName,
  tone = "dark",
}: {
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
  dotClassName?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "label inline-flex items-center gap-2.5 text-[0.78rem]",
        tone === "dark" ? "text-slate" : "text-white/60",
        className,
      )}
    >
      {dot && (
        <span className={cn("h-1.5 w-1.5 rounded-full bg-teal-500", dotClassName)} aria-hidden="true" />
      )}
      {children}
    </span>
  );
}
