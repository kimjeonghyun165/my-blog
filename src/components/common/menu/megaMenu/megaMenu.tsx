import { Drawer, ListContent } from "@/interfaces/interfaces";
import { useRouter } from "next/navigation";
import { LinkBtn } from "../../dropDown/linkBtn";
import { ThemeBtn } from "../../dropDown/themeBtn";

interface DrawerProps {
  contents: Drawer[];
}

export function MegaMenu(props: DrawerProps) {
  let router = useRouter();
  return (
    <ul className="menu xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
      {props.contents.map((content: any, index: number) => (
        <li key={index}>
          <a>{content.mainText}</a>
          <ul>
            {content.subText.map((item: ListContent, subIndex: number) => (
              <li key={subIndex} className="max-w-fit">
                {content.type === "theme" ? (
                  <ThemeBtn index={subIndex} item={item} router={router} />
                ) : (
                  <LinkBtn index={subIndex} item={item} router={router} />
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
