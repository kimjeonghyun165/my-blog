"use client";

import { useWindowSize } from "@/hooks/useSize";
import { MobileMenu } from "./mob";
import { PcMenu } from "./pc";

export function Menu({ title, lists }: { title: string; lists: string[] }) {
  const isMobile = useWindowSize(1024);

  return (
    <div className="sticky top-32">
      {isMobile ? (
        <MobileMenu title={title} lists={lists} />
      ) : (
        <PcMenu title={title} lists={lists} />
      )}
    </div>
  );
}
