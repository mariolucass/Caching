"use client";

import { CardPost } from "@/components/CardPost";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const compareResponseTimes = (initialTime: number, cachedTime: number) => {
  const fasterTime = Math.min(initialTime, cachedTime);
  const slowerTime = Math.max(initialTime, cachedTime);

  const improvement =
    slowerTime !== 0 ? ((slowerTime - fasterTime) / slowerTime) * 100 : 0;

  return Math.ceil(improvement);
};

export default function PostPage({ params }: any) {
  const router = useRouter();

  const isFirstRender = useRef(true);

  const [initialResponseTime, setInitialResponseTime] = useState(0);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    post: null,
    responseTime: null,
    isCached: false,
  });

  const fetchPost = async (isFirstRender?: boolean) => {
    const res = await fetch(`http://localhost:3000/posts/${params.id}/`);
    const rawData = await res.json();

    const { data, responseTime, isCached } = rawData;

    if (isFirstRender) {
      setInitialResponseTime(responseTime);
    }

    setData({
      post: data,
      responseTime,
      isCached,
    });

    setLoading(false);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      fetchPost(true);
      isFirstRender.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  const { isCached, post, responseTime } = data;

  console.log(initialResponseTime);

  return (
    <div className="w-[450px] flex flex-col gap-8 shadow-2xl p-8 justify-center items-center border bg-card rounded-lg">
      <div className="w-full flex justify-between">
        <div className="flex flex-col w-[205px]">
          <h1>Response time: {responseTime} ms</h1>

          {!isFirstRender.current && (
            <span className="self-end">
              Gain:{" "}
              <span className="text-lime-700">
                {compareResponseTimes(initialResponseTime, responseTime!)}
              </span>
            </span>
          )}
        </div>

        <h2>
          Cached : <Switch disabled checked={isCached} />
        </h2>
      </div>

      {post && <CardPost post={post} />}

      <div className="w-full flex justify-evenly">
        <Button
          className="w-1/3 flex self-center"
          onClick={() => {
            router.push("/posts");
          }}
        >
          All posts
        </Button>

        <Button className="w-1/3 flex self-center" onClick={() => fetchPost()}>
          Refetch Post
        </Button>
      </div>
    </div>
  );
}
