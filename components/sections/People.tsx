import { people, type Person } from "@/lib/content/collective";
import { Pattern } from "@/components/media/Pattern";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The Collective — the people. Two-column rich cards. Avatars are on-brand
 * monogram tiles (teal gradient + craft pattern + initials) that swap for real
 * portraits later. Each card carries the bio and a "Brings" capability row.
 */
export function People() {
  return (
    <section className="bg-charcoal py-20 text-white md:py-28" aria-label="The Collective">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Label tone="light">The people</Label>
          <h2 className="mt-5 text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
            One team, brought into the work early.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-2">
          {people.map((p, i) => (
            <PersonCard key={p.id} person={p} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

function PersonCard({ person, delay }: { person: Person; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="grid grid-rows-[auto_1fr_auto] rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 ease-calm hover:border-teal-400/40 lg:min-h-[500px] md:p-8"
    >
      <div className="flex items-center gap-5">
        {/* Monogram avatar — swappable for a real portrait */}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-teal-primary">
          <Pattern opacity={0.25} />
          <div className="foil-line absolute inset-x-0 top-0 h-px opacity-60" />
          <span className="absolute inset-0 flex items-center justify-center font-condensed text-xl font-semibold tracking-wide text-white">
            {initials(person.name)}
          </span>
        </div>
        <div>
          <h3 className="text-[1.4rem] font-semibold tracking-[-0.02em] text-white">
            {person.name}
          </h3>
          <p className="label mt-1 text-[0.68rem] text-teal-400">{person.role}</p>
        </div>
      </div>

      <div className="mt-6 self-start space-y-3.5 leading-relaxed text-white/65">
        {person.bio.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="border-t border-white/10 pt-5 mt-6">
        <p className="label text-[0.62rem] text-white/40">Brings</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {person.brings.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[0.72rem] text-white/55"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
