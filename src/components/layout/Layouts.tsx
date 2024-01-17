"use client";
import { menu } from "@/constants/constants";
import { useWindowSize } from "@/hooks/useSize";
import { Menu } from "../common/menu/menu/menu";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useWindowSize(1024);
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full max-w-none flex-grow pt-10 p-6 md:p-10">
        <div className={`${isMobile ? "" : "flex min-h-[50vh] gap-6"} w-full`}>
          <div className=" flex flex-col">
            <Menu title={"Tag"} lists={menu} />
          </div>
          <div className="mx-auto">{children}</div>
        </div>
      </div>
      <div className="mt-12 b-0">
        <Footer />
      </div>
    </main>
  );
}
