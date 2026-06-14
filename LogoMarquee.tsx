import { cn } from "@/lib/cn";

/**
 * Craft pattern — a fine concentric "glaze" arc motif inspired by the teal-
 * patterned bowl reference. Used as a subtle overlay on media panels and CTA
 * backgrounds. Pattern is detail, not wallpaper, so it stays low-opacity.
 */
export function Pattern({
  className,
  opacity = 0.18,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <radialGradient id="glaze-fade" cx="78%" cy="22%" r="85%">
          <stop offset="0%" stopColor="#05C3C3" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#05737D" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0F2D2D" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* concentric foil arcs */}
      {Array.from({ length: 9 }).map((_, n) => (
        <circle
          key={n}
          cx="300"
          cy="90"
          r={28 + n * 34}
          fill="none"
          stroke="url(#glaze-fade)"
          strokeWidth="1"
        />
      ))}
      {/* faint vertical glaze striations */}
      {Array.from({ length: 13 }).map((_, n) => (
        <line
          key={`v-${n}`}
          x1={n * 32}
          y1="0"
          x2={n * 32}
          y2="400"
          stroke="#E1CDC3"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
