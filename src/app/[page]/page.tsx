"use client";
import List from "@/components/common/list/list";
import { Pagination } from "@/components/common/pagination/pagination";
import { Layout } from "@/components/layout/Layouts";
import { posts } from "@/constants/posts";
import { usePage } from "@/hooks/usePage";
import { useParams } from "next/navigation";

export default function Home() {
  const router = useParams();
  const currentPage = Number(router.page) || 1;
  const currentPosts = usePage(posts, 5, currentPage);

  return (
    <Layout>
      <div className="w-full mx-auto max-w-2xl">
        <div className="grid justify-items-stretch gap-6">
          {currentPosts.map((post: any) => (
            <List
              key={post._id}
              date={post.date}
              title={post.title}
              description={post.description}
              imageSrc={post.image}
              category={post.category}
              url={post.url}
            />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Pagination currentPage={currentPage} />
        </div>
      </div>
    </Layout>
  );
}
