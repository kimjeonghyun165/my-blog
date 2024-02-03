import { posts } from "@/constants/posts";
import Link from "next/link";

export function PcPagination({ currentPage }: { currentPage: number }) {
  const totalPages = Math.ceil(posts.length / 5);
  return (
    <div className="join">
      {Array.from({ length: totalPages }, (_, i) => (
        <Link href={`/${i + 1}`} key={i}>
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label={String(i)}
            checked={i + 1 === currentPage}
          />
        </Link>
      ))}
    </div>
  );
}
