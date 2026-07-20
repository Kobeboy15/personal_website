import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Docket",
  description:
    "A local-first job-application pipeline I built — paste a job description, get a tailored resume and cover letter, track it to an offer.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Docket — Kobe Michael",
    description:
      "A local-first job-application pipeline I built — paste a job description, get a tailored resume and cover letter, track it to an offer.",
    images: ["/showcase/docket/dashboard.webp"],
    type: "article",
  },
};

const SHOTS = [
  {
    src: "/showcase/docket/landing.webp",
    width: 3024,
    height: 8300,
    label: "Landing",
    caption: "The pitch — paste a posting, get a scored, tailored application back.",
  },
  {
    src: "/showcase/docket/dashboard.webp",
    width: 3024,
    height: 1964,
    label: "Dashboard",
    caption: "Every application in one ledger — stage, fit score, dates.",
  },
  {
    src: "/showcase/docket/detail.webp",
    width: 3024,
    height: 5504,
    label: "Application detail",
    caption:
      "Fit breakdown, generated resume and cover letter, an adversarial grading pass, and the stage timeline — all in one place.",
  },
];

const STACK = [
  "Next.js",
  "TypeScript",
  "Prisma",
  "SQLite",
  "Tailwind",
  "GSAP",
  "Claude / OpenRouter / Groq",
];

export default function DocketShowcasePage() {
  return (
    <article className="mx-auto max-w-3xl">
      <Reveal>
        <div className="rule flex flex-wrap items-center gap-x-4 gap-y-1 pt-4">
          <span className="eyebrow text-ink-mute">Selected work</span>
          <span className="eyebrow text-ink-mute">Personal tool, in daily use</span>
        </div>
      </Reveal>

      <Reveal>
        <h1 className="mt-8 font-sans text-[clamp(2.5rem,8vw,5rem)] font-medium leading-[0.9] tracking-[-0.03em] text-ink">
          Docket
        </h1>
        <p className="mt-4 text-xl text-ink-soft">
          A local-first job-application pipeline: paste a job description, get a fit
          score, a tailored resume and cover letter, and a running ledger of every
          application from applied to offer.
        </p>
      </Reveal>

      <Reveal>
        <div className="prose prose-neutral mt-14 max-w-none dark:prose-invert prose-headings:font-sans prose-headings:font-medium prose-headings:tracking-tight prose-p:text-ink-soft prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-li:text-ink-soft">
          <p>
            I built this for my own job search, then kept using it. It runs entirely on
            my machine — SQLite on disk, no account, no server I don&apos;t control —
            because it reads and stores things I&apos;d rather not put on someone else&apos;s
            infrastructure: my real resume, real job descriptions, and a running record
            of where I&apos;ve applied.
          </p>
          <p>
            That&apos;s also why what follows is screenshots rather than a link you can
            click through yourself. The company/role shown below is a stand-in example —
            not a real application — swapped in specifically so this page doesn&apos;t
            expose which companies I&apos;m actually talking to.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 space-y-16">
        {SHOTS.map((shot) => (
          <Reveal key={shot.src}>
            <div className="overflow-hidden rounded-sm border border-line">
              <Image
                src={shot.src}
                alt={shot.caption}
                width={shot.width}
                height={shot.height}
                sizes="(min-width: 768px) 768px, 100vw"
                className="w-full"
              />
            </div>
            <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-mute">
              {shot.label}
            </p>
            <p className="mt-1 text-sm text-ink-soft">{shot.caption}</p>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16">
          <p className="eyebrow mb-3">Stack</p>
          <div className="flex flex-wrap gap-2">
            {STACK.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-sm border border-line px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-ink-mute"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="rule mt-20 flex items-center justify-between pt-6">
        <Link
          href="/"
          className="link-line font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
        >
          ← kobemichael.dev
        </Link>
      </div>
    </article>
  );
}
