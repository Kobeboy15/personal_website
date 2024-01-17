import Link from "next/link";

interface PostItemData {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  key: string;
}

const PlaceHolderURL =
  "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export default function PostItem(post: PostItemData) {
  return (
    <Link
      href={post ? `blog/${post.slug}` : ""}
      className="block border-slate-400 shadow-md border w-[700px]"
    >
      <article className="p-6 grid gap-5">
        <img
          src={PlaceHolderURL}
          alt="Preview image"
          className="w-full h-[300px] object-cover"
        />
        <div className="grid gap-1">
          <h2 className="text-3xl font-bold">{post.title}</h2>
          <p className="">{post.subtitle}</p>
        </div>
        <p>{post.date}</p>
      </article>
    </Link>
  );
}
