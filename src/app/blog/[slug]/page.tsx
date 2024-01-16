import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "@/components/getPostMetaData";

const getPostContent = (slug: string) => {
  const folder = "content/posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export async function generateStaticParams() {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  console.log(post);

  return (
    <div className="mt-16 max-w-3xl mx-auto">
      <div className="flex flex-col gap-2 w-fit">
        <h1 className="text-3xl font-bold">{post.data.title}</h1>
        <p className="text-xl font-medium">{post.data.subtitle}</p>
        <p className="text-lg">{post.data.date}</p>
      </div>
      <article className="prose lg:prose-md dark:prose-invert max-w-none">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
