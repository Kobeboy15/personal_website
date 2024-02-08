import Link from "next/link";

interface PostItemData {
  title: string;
  date: string;
  subtitle: string;
  readDuration: string;
  slug: string;
  key: string;
}

export default function PostItem(post: PostItemData) {
  return (
    <Link
      href={post ? `blog/${post.slug}` : ""}
      className="p-4 shadow-md border transition-colors duration-300 bg-white/40 dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:border-zinc-600 rounded-sm"
    >
      <article className="flex flex-col">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-sm my-2 text-justify line-clamp-2">
          {post.subtitle}
        </p>
        <p className="text-sm mt-2 flex gap-3 items-center">
          <span>{post.date}</span>
          <span>{post.readDuration} min</span>
        </p>
      </article>
    </Link>
  );
}
