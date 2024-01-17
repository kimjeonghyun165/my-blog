import { posts } from "@/constants/posts";
import Link from "next/link";

export function MobPagination({ currentPage }: { currentPage: number }) {
  const totalPages = Math.ceil(posts.length / 5);

  return (
    <div className="join">
      <Link href={`/${currentPage - 1 === 0 ? 1 : currentPage - 1}`}>
        <button className="join-item btn btn-sm" disabled={currentPage === 1}>
          «
        </button>
      </Link>
      <button className={`join-item btn btn-sm`}>
        Page {currentPage === 0 ? 1 : currentPage}
      </button>
      <Link
        href={`/${totalPages == currentPage ? totalPages : currentPage + 1}`}
      >
        <button
          className="join-item btn btn-sm"
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </Link>
    </div>
  );
}
