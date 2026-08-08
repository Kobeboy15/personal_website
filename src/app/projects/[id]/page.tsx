import type { Metadata } from "next";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { Reveal } from "@/components/Reveal";
import { getProjectById, getProjectMarkdown, getProjects } from "@/lib/data";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = await getProjectById(params.id);

  if (!project) {
    return {
      title: "Project not found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: project.name,
    description: project.short_description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: `${project.name} — Kobe Michael`,
      description: project.short_description,
      url: `/projects/${project.id}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Kobe Michael`,
      description: project.short_description,
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const project = await getProjectById(params.id);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-4">404</p>
        <h1 className="h-section mb-6">{params.id}?</h1>
        <p className="text-ink-soft">
          No matching project found.{" "}
          <Link href="/" className="link-line">
            Return home
          </Link>
          .
        </p>
      </div>
    );
  }

  const content = await getProjectMarkdown(project.id);

  return (
    <article className="mx-auto max-w-3xl">
      <Reveal>
        <div className="rule flex flex-wrap items-center gap-x-4 gap-y-1 pt-4">
          {project.date && (
            <span className="eyebrow text-ink-mute">{project.date}</span>
          )}
          {project.tags?.map((tag) => (
            <span key={tag} className="eyebrow text-ink-mute">
              {tag}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <h1 className="mt-8 font-sans text-[clamp(2.5rem,8vw,5rem)] font-medium leading-[0.9] tracking-[-0.03em] text-ink">
          {project.name}
        </h1>
        <p className="mt-4 text-xl text-ink-soft">{project.short_description}</p>
      </Reveal>

      <Reveal>
        <div className="prose prose-neutral mt-14 max-w-none dark:prose-invert prose-headings:font-sans prose-headings:font-medium prose-headings:tracking-tight prose-p:text-ink-soft prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-li:text-ink-soft prose-pre:bg-paper-dim">
          <Markdown
            options={{
              overrides: {
                code: {
                  component: ({ children, className }) =>
                    className ? (
                      <code className={className}>{children}</code>
                    ) : (
                      <span className="inline-flex items-center rounded-sm border border-line px-2 py-0.5 font-mono text-[0.7rem] uppercase tracking-widest text-ink-mute not-prose">
                        {children}
                      </span>
                    ),
                },
                img: {
                  component: ({ alt, title, className: _className, ...props }) => (
                    <span className="not-prose my-10 flex flex-col items-center">
                      <span className="inline-block overflow-hidden rounded-sm border border-line">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt={alt}
                          {...props}
                          className="block max-h-[34rem] w-auto max-w-full"
                        />
                      </span>
                      {title && (
                        <span className="mt-3 block max-w-lg text-center text-sm text-ink-soft">
                          {title}
                        </span>
                      )}
                    </span>
                  ),
                },
              },
            }}
          >
            {content}
          </Markdown>
        </div>
      </Reveal>

      <div className="rule mt-20 flex items-center justify-between pt-6">
        <Link
          href="/#projects"
          className="link-line font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
        >
          ← All projects
        </Link>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
          >
            View source
          </a>
        )}
      </div>
    </article>
  );
}
