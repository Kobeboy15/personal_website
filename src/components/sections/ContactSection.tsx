import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import ArrowUpRight from "@/components/ArrowUpRight";
import MobileVersionArchive from "@/components/MobileVersionArchive";

const SOCIALS = [
  { label: "GitHub", value: "@Kobeboy15", href: "https://github.com/Kobeboy15" },
  {
    label: "LinkedIn",
    value: "kobe-michael",
    href: "https://www.linkedin.com/in/kobe-michael/",
  },
  { label: "Résumé", value: "Download CV", href: "/KobeMichael_CV.pdf" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="gutter py-24 lg:py-32">
      <SectionLabel index="06" title="Contact" />

      <div className="mt-12">
        <Reveal>
          <p className="eyebrow mb-6">Let&apos;s work together</p>
          <a
            href="mailto:me@kobemichael.dev"
            className="block w-full break-words font-sans text-[clamp(1.6rem,6.5vw,5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink transition-colors duration-300 hover:text-accent"
          >
            me@kobemichael.dev
          </a>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-16 grid grid-cols-1 border-t border-line sm:grid-cols-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-line px-1 py-6 transition-colors duration-300 hover:text-accent sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
            >
              <span className="flex flex-col gap-1">
                <span className="eyebrow">{s.label}</span>
                <span className="text-lg text-ink transition-colors duration-300 group-hover:text-accent">
                  {s.value}
                </span>
              </span>
              <ArrowUpRight className="text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          ))}
        </div>
      </Reveal>

      <div className="rule mt-24 flex flex-col items-start justify-between gap-4 pt-6 sm:flex-row sm:items-center sm:gap-2">
        <p className="font-mono text-xs text-ink-mute">
          Create with the heart, build with the mind.
        </p>
        <MobileVersionArchive />
        <p className="font-mono text-xs text-ink-mute">© 2026 Kobe Michael</p>
      </div>
    </section>
  );
}
