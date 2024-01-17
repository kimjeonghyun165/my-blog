import { useWindowSize } from "@/hooks/useSize";
import { MobPagination } from "./mob";
import { PcPagination } from "./pc";

export function Pagination({ currentPage }: { currentPage: number }) {
  const isMobile = useWindowSize(720);

  return (
    <div>
      {isMobile ? (
        <MobPagination currentPage={currentPage} />
      ) : (
        <PcPagination currentPage={currentPage} />
      )}
    </div>
  );
}
