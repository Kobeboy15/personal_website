import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { coverLetters } from "@/data/coverletters";

type Props = { params: { company: string } };

export function generateStaticParams() {
  return Object.keys(coverLetters).map((company) => ({ company }));
}

export function generateMetadata({ params }: Props): Metadata {
  const entry = coverLetters[params.company];
  if (!entry) return {};

  return {
    title: `Cover Letter — ${entry.company}`,
    description: `Kobe Michael's cover letter for the ${entry.role} role at ${entry.company}.`,
    robots: { index: false, follow: false },
  };
}

export default function CoverLetterPage({ params }: Props) {
  const entry = coverLetters[params.company];
  if (!entry) notFound();

  return (
    <article className="mx-auto max-w-2xl">
      <Reveal>
        <div className="rule flex flex-wrap items-center justify-between gap-x-4 gap-y-1 pt-4">
          <span className="eyebrow text-ink-mute">Kobe Michael</span>
          <span className="eyebrow text-ink-mute">{entry.date}</span>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
            {entry.company}
          </p>
          <h1 className="mt-1 font-sans text-[clamp(1.75rem,5vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
            {entry.role}
          </h1>
        </div>
      </Reveal>

      <Reveal>
        <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-p:text-ink-soft prose-p:leading-relaxed prose-strong:text-ink prose-strong:font-medium">
          {entry.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <p>{entry.signoff}</p>
          <p className="mt-6 font-sans text-lg font-semibold tracking-tight text-ink">
            Kobe Michael.
          </p>
        </div>
      </Reveal>

      <div className="rule mt-16 flex flex-wrap items-center justify-between gap-4 pt-6">
        <Link
          href="/"
          className="link-line font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
        >
          ← kobemichael.dev
        </Link>
        <a
          href={`/showcase/${entry.slug}/coverletter.pdf`}
          className="link-line font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
        >
          Download PDF ↓
        </a>
      </div>
    </article>
  );
}
