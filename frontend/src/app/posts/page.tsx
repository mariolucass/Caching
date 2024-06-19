import { CardPost } from "@/components/CardPost";
import Link from "next/link";
import { Suspense } from "react";
import { loadPosts } from "../services/loadPosts";
import { ModeToggler } from "./modeToggler";
import { ResetCacheButton } from "./resetCacheButton";

const ListPosts = async () => {
  const posts = await loadPosts();
  return (
    <ul className="max-h-screen w-full flex flex-wrap justify-start gap-12">
      {posts.data.map((post: any) => (
        <li key={post.id} className="w-[350px]">
          <Link href={`/posts/${post.id}`}>
            <CardPost post={post} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Posts = () => (
  <section className="w-full max-w-screen-xl h-screen flex flex-col gap-12 p-12">
    <div className="w-full flex justify-around">
      <h1 className="text-3xl text-center">Posts</h1>

      <div className="flex gap-8 items-center">
        <ModeToggler />
        <ResetCacheButton />
      </div>
    </div>

    <Suspense fallback={<div>Loading...</div>}>
      <ListPosts />
    </Suspense>
  </section>
);

export default Posts;
