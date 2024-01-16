import getPostMetaData from "@/components/getPostMetaData";
import PostItem from "@/components/PostItem";

export default function Blog() {
  const postMetaData = getPostMetaData();

  const postPreview = postMetaData.map((post) => (
    <PostItem key={post.slug} {...post} />
  ));

  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center relative dark:text-white mx-auto">
        <h1 className="text-2xl text-center">Welcome to my blogs</h1>
        <div className="grid grid-cols-1 gap-12 mt-[60px]">{postPreview}</div>
      </div>
    </div>
  );
}
