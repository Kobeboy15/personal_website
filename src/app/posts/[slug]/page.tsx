import type { Metadata } from "next";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { Reveal } from "@/components/Reveal";
import { getPosts, getPostBySlug, getPostMarkdown } from "@/lib/data";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post not found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/posts/${post.slug}` },
    openGraph: {
      title: `${post.title} — Kobe Michael`,
      description: post.excerpt,
      url: `/posts/${post.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — Kobe Michael`,
      description: post.excerpt,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-4">404</p>
        <h1 className="h-section mb-6">{params.slug}?</h1>
        <p className="text-ink-soft">
          No matching post found.{" "}
          <Link href="/posts" className="link-line">
            Return to posts
          </Link>
          .
        </p>
      </div>
    );
  }

  const content = await getPostMarkdown(post.slug);

  return (
    <article className="mx-auto max-w-2xl">
      <Reveal>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-4">
          <span className="eyebrow text-ink-mute">{post.date}</span>
          {post.tags?.map((tag) => (
            <span key={tag} className="eyebrow text-ink-mute">
              #{tag}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <h1 className="mt-8 font-sans text-[clamp(2rem,6vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">
          {post.title}
        </h1>
      </Reveal>

      <Reveal>
        <div className="prose prose-neutral mt-14 max-w-none dark:prose-invert prose-p:text-ink-soft prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink">
          <Markdown>{content}</Markdown>
        </div>
      </Reveal>

      <div className="rule mt-20 pt-6">
        <Link
          href="/posts"
          className="link-line font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
        >
          ← All posts
        </Link>
      </div>
    </article>
  );
}
