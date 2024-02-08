import getPostMetaData from "@/components/getPostMetaData";
import PostItem from "@/components/PostItem";

export default function Blog() {
  const postMetaData = getPostMetaData();

  const postPreview = postMetaData.map((post) => (
    <PostItem key={post.slug} {...post} />
  ));

  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center max-w-screen-md w-full relative dark:text-white mx-auto">
        <div className="mb-14">
          <h2 className="text-3xl mb-2 dark:text-white font-semibold">
            Blog ✍️
          </h2>
          <p>
            My portfolio of standout projects, from Program Exercises to
            personal initiatives.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12">{postPreview}</div>
      </div>
    </div>
  );
}
