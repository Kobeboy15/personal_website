import type { Metadata } from "next";
import Image from "next/image";
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
      ...(post.image && { images: [{ url: post.image }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — Kobe Michael`,
      description: post.excerpt,
      ...(post.image && { images: [post.image] }),
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
    <article className="mx-auto max-w-4xl">
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
        <h1 className="mt-8 font-sans text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-ink">
          {post.title}
        </h1>
      </Reveal>

      <Reveal>
        <div className="prose prose-lg prose-neutral mt-14 max-w-none dark:prose-invert prose-p:text-ink-soft prose-p:text-xl prose-p:leading-[1.7] prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink">
          <Markdown>{content}</Markdown>
        </div>
      </Reveal>

      {post.images && post.images.length > 0 ? (
        <Reveal>
          <div className="mt-16 grid grid-cols-2 gap-2">
            <div className="col-span-2 overflow-hidden rounded-sm sm:col-span-1 sm:row-span-2">
              <Image
                src={post.images[0]}
                alt={`${post.title} — photo 1`}
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            {post.images.slice(1).map((src, i) => (
              <div key={src} className="overflow-hidden rounded-sm">
                <Image
                  src={src}
                  alt={`${post.title} — photo ${i + 2}`}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      ) : post.image ? (
        <Reveal>
          <div className="mt-16 overflow-hidden rounded-sm">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </Reveal>
      ) : null}

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
