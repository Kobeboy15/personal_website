import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const FOCUS = [
  "Frontend Engineering",
  "UI / UX Design",
  "Design Systems",
  "Accessibility",
];

export default function AboutSection() {
  return (
    <section id="about" className="gutter py-24 lg:py-32">
      <SectionLabel index="01" title="About" />

      <div className="mt-12 grid grid-cols-12 gap-8 lg:gap-12">
        <div className="col-span-12 lg:col-span-8">
          <Reveal stagger>
            <p className="h-section text-balance">
              A passionate web developer and designer crafting interfaces where
              usability and craft meet.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
              I previously collaborated with{" "}
              <a
                href="https://sheepcrm.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-line"
              >
                SheepCRM
              </a>
              , building their internal event calendar and help centre. I&apos;m
              now advancing toward full-stack development through ongoing studies
              at{" "}
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
              I like challenging my creativity by tackling problems that
              emphasise usability and accessibility — crafting intuitive
              interfaces and layouts that balance system constraints with
              high-quality design.
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
