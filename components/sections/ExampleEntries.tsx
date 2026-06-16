import { StickyShowcase } from "./StickyShowcase";

/**
 * Featured work — the full Examples index given the Framer "Everything in sync"
 * sticky showcase: the case image stays pinned on the right while the entry's
 * copy (headline, context, Work delivered, Outcome) scrolls on the left.
 */
export function ExampleEntries() {
  return (
    <section className="py-16 md:py-24" aria-label="Featured work">
      <div className="shell">
        <StickyShowcase kind="examples" />
      </div>
    </section>
  );
}
