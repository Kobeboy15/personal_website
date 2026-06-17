import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import ExpandableQuote from "@/components/ExpandableQuote";
import type { Recommendation } from "@/lib/data";

export default function RecommendationsSection({
  recommendations,
}: {
  recommendations: Recommendation[];
}) {
  return (
    <section id="recommendations" className="gutter py-24 lg:py-32">
      <SectionLabel index="04" title="Recommendations" />

      <Reveal>
        <h2 className="h-section mb-12 mt-12">What colleagues say</h2>
      </Reveal>

      <div>
        {recommendations.map((rec) => {
          const isManager = rec.relationship.toLowerCase().includes("manager");
          return (
            <Reveal key={rec.name}>
              <blockquote className="rule grid grid-cols-12 gap-y-6 py-10 first:border-t-0 first:pt-0 lg:gap-x-12 lg:py-12">
                <div className="col-span-12 lg:col-span-4">
                  <p className="text-lg font-medium tracking-tight text-ink">
                    {rec.name}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {rec.title}
                    {rec.company && (
                      <>
                        {" "}
                        <span className="text-ink-mute">·</span>{" "}
                        <span className="font-medium text-accent">
                          {rec.company}
                        </span>
                      </>
                    )}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span
                      className={`rounded-full border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] ${
                        isManager
                          ? "border-accent/40 bg-accent/10 text-accent"
                          : "border-line text-ink-soft"
                      }`}
                    >
                      {rec.relationship}
                    </span>
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-mute">
                      {rec.date}
                    </span>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-8">
                  <ExpandableQuote paragraphs={rec.quote} />
                </div>
              </blockquote>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
