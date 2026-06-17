import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import ArrowUpRight from "@/components/ArrowUpRight";
import type { Project } from "@/lib/data";

export default function ProjectsSection({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <section id="projects" className="gutter py-24 lg:py-32">
      <SectionLabel index="03" title="Projects" />

      <Reveal>
        <h2 className="h-section mb-12 mt-12">Things I&apos;ve built</h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-2">
        {projects.map((proj, i) => (
          <Reveal key={proj.name}>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between gap-10 bg-paper p-7 transition-colors duration-300 hover:bg-paper-dim lg:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-ink-mute">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="text-ink-mute transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-medium tracking-tight text-ink lg:text-3xl">
                  {proj.name}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                  {proj.short_description}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-pretty text-sm leading-relaxed text-ink-soft">
            Some of my more recent work is covered by NDAs and can&apos;t be
            shown publicly. Curious to see more of what I&apos;ve built?
          </p>
          <a
            href="#contact"
            className="link-line shrink-0 font-mono text-sm uppercase tracking-widest text-ink"
          >
            Get in touch <ArrowUpRight />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
