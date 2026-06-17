import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const FOCUS = [
  "Frontend Engineering",
  "System Design",
  "AI-Assisted Workflows",
  "UI / UX Design",
  "Design Systems",
  "Accessibility",
  "Mentorship & Leadership",
];

export default function AboutSection() {
  return (
    <section id="about" className="gutter py-24 lg:py-32">
      <SectionLabel index="01" title="About" />

      <div className="mt-12 grid grid-cols-12 gap-8 lg:gap-12">
        <div className="col-span-12 lg:col-span-8">
          <Reveal stagger>
            <h2 className="h-section text-balance">
              A passionate web developer and designer crafting interfaces where
              usability and craft meet.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
              I&apos;m currently a frontend engineer at{" "}
              <a
                href="https://www.yieldguild.games/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-line"
              >
                Yield Guild Games
              </a>
              , building web3 gaming experiences, and recently completed my
              studies at{" "}
              <a
                href="https://langara.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-line"
              >
                Langara College
              </a>
              .
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Lately I&apos;ve been deepening my craft on two fronts — applying
              system-design thinking to build more resilient, well-architected
              products, and weaving AI into my workflow to ship with greater
              speed, reliability, and quality. I&apos;m drawn to problems that
              demand both: intuitive, accessible interfaces backed by sound
              engineering.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:pl-8">
          <Reveal stagger>
            <p className="eyebrow mb-5">Focus</p>
            <ul className="flex flex-col gap-3">
              {FOCUS.map((f) => (
                <li
                  key={f}
                  className="rule flex items-center justify-between pt-3 text-sm text-ink"
                >
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
