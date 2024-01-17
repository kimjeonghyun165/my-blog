import { Drawer } from "@/interfaces/interfaces";
import { DotList } from "public/svgs/DotList";
import { MegaMenu } from "../menu/megaMenu/megaMenu";

interface DrawerProps {
  contents: Drawer[];
}

export function Drawer(props: DrawerProps) {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-sm btn-ghost"
        >
          <DotList />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <MegaMenu contents={props.contents} />
        </ul>
      </div>
    </div>
  );
}
