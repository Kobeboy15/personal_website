import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import type { Post } from "@/lib/data";

export default function PostsSection({ posts }: { posts: Post[] }) {
  const [featured, ...rest] = posts;

  return (
    <section id="posts" className="gutter py-24 lg:py-32">
      <SectionLabel index="05" title="Writing" />

      <Reveal>
        <h2 className="h-section mb-12 mt-12">Things I&apos;ve written</h2>
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-px overflow-hidden rounded-sm bg-line lg:grid-cols-2">
        {featured && (
          <Reveal>
            <Link
              href={`/posts/${featured.slug}`}
              className="group flex flex-col gap-6 bg-paper p-7 transition-colors duration-300 hover:bg-paper-dim lg:p-10"
            >
              {featured.image && (
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    width={800}
                    height={450}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-mute">
                    {featured.date}
                  </span>
                  {featured.tags?.slice(0, 2).map((tag) => (
                    <span key={tag} className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-mute">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-2xl font-medium leading-tight tracking-tight text-ink transition-colors group-hover:text-accent lg:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {featured.excerpt}
                </p>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="flex flex-col gap-px bg-line">
          {rest.map((post) => (
            <Reveal key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="group flex flex-col gap-4 bg-paper p-7 transition-colors duration-300 hover:bg-paper-dim lg:p-10"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-mute">
                    {post.date}
                  </span>
                  {post.tags?.slice(0, 2).map((tag) => (
                    <span key={tag} className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-mute">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-medium leading-tight tracking-tight text-ink transition-colors group-hover:text-accent lg:text-2xl">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {post.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="mt-8">
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
