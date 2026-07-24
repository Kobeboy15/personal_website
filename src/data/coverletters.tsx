import type { ReactNode } from "react";

export type CoverLetterEntry = {
  slug: string;
  company: string;
  role: string;
  date: string;
  paragraphs: ReactNode[];
  signoff: ReactNode;
};

/**
 * Per-company cover letters for direct showcase links (/showcase/[company]/coverletter).
 * Add an entry here + the matching PDF at public/showcase/[slug]/coverletter.pdf to
 * publish a new one. These routes are excluded from robots.txt and the sitemap —
 * unlisted, link-only.
 */
export const coverLetters: Record<string, CoverLetterEntry> = {
  tempo: {
    slug: "tempo",
    company: "Tempo",
    role: "Senior Frontend Developer",
    date: "July 24, 2026",
    paragraphs: [
      <>
        I&apos;m applying for the Senior Frontend Developer role on Tempo&apos;s team. What
        stands out about the posting is that one line — wanting someone who solves
        customers&apos; problems rather than just closes issues in the task tracker. That&apos;s
        the distinction I actually care about day to day, and building for a product used by a
        third of the Fortune 500 inside the Jira ecosystem is exactly the kind of scale where
        that distinction matters. I&apos;ve also worked remote-first and autonomously for most of
        the past three years, comfortable starting on a problem before it&apos;s fully
        spec&apos;d out.
      </>,
      <>
        The core of this role — writing maintainable TypeScript/React for complex, data-heavy
        UI — is what I&apos;ve been doing for <strong>8+ years</strong>. At{" "}
        <strong>Yield Guild Games</strong> I built the <strong>token system</strong> end to
        end: market-data integrations, live price charts, transaction flows, all in a
        Next.js/TypeScript monorepo. Earlier at <strong>SupaPass</strong> I owned the CMS and
        led a full refactor of the legacy <strong>Website Builder</strong> (React, TypeScript,
        Next.js, GraphQL) used by thousands of creators, modernizing its UI/UX end to end. Both
        are the same shape of problem this role describes — genuinely complex interfaces, not
        CRUD forms.
      </>,
      <>
        Testing discipline and code review aren&apos;t an afterthought for me either. At{" "}
        <strong>SheepCRM</strong> I championed frontend reliability to{" "}
        <strong>95%+ Jest coverage</strong>, cutting post-deployment defects; at YGG I mentored
        a junior engineer whose test coverage went from near-zero to <strong>~70%</strong>{" "}
        under my review. On performance specifically, I led the frontend of{" "}
        <strong>ARISE</strong> at CODY, shipping two weeks early while lifting engagement{" "}
        <strong>25%</strong> and performance <strong>30%</strong> — the kind of concrete gain
        I&apos;d want to bring to Tempo Timesheets and Capacity Planner.
      </>,
      <>
        One honest note: I don&apos;t have Java or Kotlin experience — my backend exposure has
        been Node/TypeScript rather than the JVM. Since the posting lists that as a plus rather
        than a requirement, and the role centers on the frontend, I don&apos;t expect it to be a
        blocker, but I&apos;d rather say so directly than leave it unaddressed.
      </>,
    ],
    signoff: (
      <>
        Thank you for reading this. I&apos;d welcome the chance to talk through how I could
        contribute to Tempo&apos;s engineering team.
      </>
    ),
  },
};
