import Image from "next/image";
import { people, type Person } from "@/lib/content/collective";
import { Reveal } from "@/components/motion/Reveal";

export function People() {
  return (
    <section className="bg-framer-ink py-20 text-white md:py-28" aria-label="The Collective">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label text-[0.72rem] text-white/55">The people</p>
          <h2 className="mt-5 text-[clamp(2rem,4.2vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
            One team, brought into the work early.
          </h2>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 md:mt-16 lg:grid-cols-2">
          {people.map((p, i) => (
            <PersonCard key={p.id} person={p} index={i} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

const accents = ["#FF2E8A", "#7FFF5C", "#E1B23C", "#08B8E8"];
const patterns = ["pattern-dots", "pattern-triangle", "pattern-grid", "pattern-dots"];

function PersonCard({
  person,
  index,
  delay,
}: {
  person: Person;
  index: number;
  delay: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-2xl bg-framer-graphite shadow-[0_4px_18px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(0,0,0,0.32)]"
    >
      {/* Coloured top panel */}
      <div
        className="relative h-32 flex-none transition-[filter] duration-300 ease-out group-hover:brightness-110"
        style={{ backgroundColor: accents[index % accents.length] }}
      >
        {/* Pattern clipped independently so it can scale without cutting the avatar */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110 ${patterns[index % patterns.length]}`}
          />
        </div>
        {/* Avatar overlapping the panel bottom */}
        <div className="absolute bottom-0 left-6 z-10 translate-y-1/2">
          <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full bg-fuchsia-primary ring-4 ring-framer-graphite transition-transform duration-300 ease-out group-hover:scale-110">
            <Image
              src={person.image}
              alt={`Portrait of ${person.name}`}
              fill
              sizes="72px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-6 pb-8 pt-12">
        <div>
          <h3 className="text-[1.3rem] font-semibold tracking-[-0.02em] text-white transition-colors duration-200 md:text-[1.4rem]">
            {person.name}
          </h3>
          <p className="label mt-1 text-[0.7rem] text-[#FF2E8A]">{person.role}</p>
        </div>

        <div className="mt-5 space-y-3.5 leading-relaxed text-white/65">
          {person.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="min-h-10 flex-1" />

        <div className="border-t border-white/10 pt-5">
          <p className="label text-[0.66rem] text-white/40">Brings</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {person.brings.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-2.5 py-1 text-[0.72rem] text-white/55 transition-all duration-200 hover:border-white/30 hover:bg-white/5 hover:text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
