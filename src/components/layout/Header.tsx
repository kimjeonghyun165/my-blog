import {
  dropContent1,
  dropContent2,
  listContent1,
  listContent2,
} from "@/constants/constants";
import { useWindowSize } from "@/hooks/useSize";
import { Drawer } from "../common/drawer/drawer";
import { Dropdown } from "../common/dropDown/dropDown";

export function Header() {
  const isMobile = useWindowSize(768);

  const desktopDropdown = () => {
    return (
      <>
        <Dropdown
          type={"url"}
          buttonText={"Service"}
          listContent={listContent1}
        />
        <Dropdown
          type={"theme"}
          buttonText={"Mode"}
          listContent={listContent2}
        />
      </>
    );
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-30 bg-opacity-95 backdrop-blur-[1px] md:m-4">
      <div className="navbar relative flex justify-between py-4 md:gap-1 lg:gap-2">
        <div className="flex-1">
          <a className="btn btn-ghost text-lg sm:text-2xl" href="/1">
            게으른 공대생 노트
          </a>
        </div>
        <div className="flex-none">
          {isMobile ? (
            <Drawer contents={[dropContent1, dropContent2]} />
          ) : (
            desktopDropdown()
          )}
        </div>
      </div>
    </header>
  );
}
