import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import ArrowUpRight from "@/components/ArrowUpRight";
import type { Position } from "@/lib/data";

export default function ExperienceSection({
  positions,
}: {
  positions: Position[];
}) {
  return (
    <section id="work" className="gutter py-24 lg:py-32">
      <SectionLabel index="02" title="Experience" />

      <Reveal>
        <h2 className="h-section mt-12 mb-10">Where I&apos;ve worked</h2>
      </Reveal>

      <div>
        {positions.map((p, i) => {
          const current = p.date.includes("Present");
          return (
            <Reveal key={p.id}>
              <Link
                href={`/experience/${p.id}`}
                className="group block border-t border-line transition-colors duration-300 hover:border-ink"
              >
                <div className="grid grid-cols-12 items-baseline gap-3 py-6 lg:py-7">
                  <span className="col-span-2 font-mono text-xs text-ink-mute lg:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="col-span-10 lg:col-span-5">
                    <h3 className="flex items-center gap-3 text-2xl font-medium tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 lg:text-3xl">
                      {p.company}
                      {current && (
                        <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      )}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{p.name}</p>
                  </div>

                  <p className="col-span-6 hidden text-sm text-ink-soft lg:col-span-3 lg:block">
                    {p.short_description}
                  </p>

                  <div className="col-span-12 mt-2 flex items-center justify-between lg:col-span-3 lg:mt-0 lg:justify-end lg:gap-6">
                    <span className="font-mono text-xs text-ink-mute">
                      {p.date}
                    </span>
                    <ArrowUpRight className="text-ink-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
        <div className="border-t border-line" />
      </div>
    </section>
  );
}
