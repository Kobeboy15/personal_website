import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { Reveal } from "@/components/Reveal";
import { getPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Posts — Kobe Michael",
  description: "Thoughts on AI, frontend engineering, and the future of building software.",
  alternates: { canonical: "/posts" },
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="flex min-h-svh flex-col">
      <header className="fixed inset-x-0 top-0 z-40 bg-paper/80 backdrop-blur-md">
        <nav className="gutter flex items-center justify-between py-5">
          <Link
            href="/"
            className="link-line flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
          >
            ← Home
          </Link>
          <div className="flex items-center gap-6">
            <span className="font-mono text-sm font-medium tracking-tight text-ink">
              Kobe Michael
            </span>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="gutter flex-1 pb-24 pt-32 lg:pt-40">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow text-ink-mute">Writing</p>
            <h1 className="mt-4 font-sans text-[clamp(2.5rem,8vw,5rem)] font-medium leading-[0.9] tracking-[-0.03em] text-ink">
              Posts
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Thoughts on AI, frontend engineering, and the future of building software.
            </p>
          </Reveal>

          <div className="mt-16">
            {posts.map((post) => (
              <Reveal key={post.slug}>
                <Link
                  href={`/posts/${post.slug}`}
                  className="rule group block py-10 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-mute">
                      {post.date}
                    </span>
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-mute"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-3 text-xl font-medium tracking-tight text-ink transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
