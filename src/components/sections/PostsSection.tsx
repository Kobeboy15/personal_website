import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import type { Post } from "@/lib/data";

export default function PostsSection({ posts }: { posts: Post[] }) {
  return (
    <section id="posts" className="gutter py-24 lg:py-32">
      <SectionLabel index="05" title="Writing" />

      <Reveal>
        <h2 className="h-section mb-12 mt-12">Things I&apos;ve written</h2>
      </Reveal>

      <div>
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
              <h3 className="mt-3 text-xl font-medium tracking-tight text-ink transition-colors group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                {post.excerpt}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10">
          <Link
            href="/posts"
            className="link-line font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
          >
            All posts →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
