import type { Metadata } from "next";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { Reveal } from "@/components/Reveal";
import { getPositionById, getExperienceMarkdown } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const position = await getPositionById(params.id);

  if (!position) {
    return {
      title: "Experience not found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${position.name} · ${position.company}`;

  return {
    title,
    description: position.short_description,
    alternates: { canonical: `/experience/${position.id}` },
    openGraph: {
      title: `${title} — Kobe Michael`,
      description: position.short_description,
      url: `/experience/${position.id}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — Kobe Michael`,
      description: position.short_description,
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const position = await getPositionById(params.id);

  if (!position) {
    return (
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-4">404</p>
        <h1 className="h-section mb-6">{params.id}?</h1>
        <p className="text-ink-soft">
          No matching experience found.{" "}
          <Link href="/" className="link-line">
            Return home
          </Link>
          .
        </p>
      </div>
    );
  }

  const content = await getExperienceMarkdown(position.markdown);
  const current = position.date.includes("Present");

  return (
    <article className="mx-auto max-w-3xl">
      <Reveal>
        <div className="rule flex flex-wrap items-center gap-x-4 gap-y-1 pt-4">
          <span className="eyebrow">{position.type}</span>
          <span className="eyebrow text-ink-mute">{position.date}</span>
          {current && (
            <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Current
            </span>
          )}
        </div>
      </Reveal>

      <Reveal>
        <h1 className="mt-8 font-sans text-[clamp(2.5rem,8vw,5rem)] font-medium leading-[0.9] tracking-[-0.03em] text-ink">
          {position.company}
        </h1>
        <p className="mt-4 text-xl text-ink-soft">{position.name}</p>
      </Reveal>

      <Reveal>
        <div className="prose prose-neutral mt-14 max-w-none dark:prose-invert prose-headings:font-sans prose-headings:font-medium prose-headings:tracking-tight prose-p:text-ink-soft prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-li:text-ink-soft">
          <Markdown>{content}</Markdown>
        </div>
      </Reveal>

      <Reveal>
        <div className="rule mt-20 pt-6">
          <Link
            href="/#work"
            className="link-line font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
          >
            ← All experience
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
