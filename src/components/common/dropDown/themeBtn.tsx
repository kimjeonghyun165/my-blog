"use client";
import { DropDownBtn } from "@/interfaces/interfaces";
import { toLowerCaseString } from "@/utils/utils";

export let theme: string = "cupcake";

export function ThemeBtn({ index, item, router }: DropDownBtn) {
  return (
    <li key={index}>
      <a
        onClick={() => {
          document.cookie =
            "mode=" +
            toLowerCaseString(item.contentText) +
            "; max-age=" +
            3600 * 24 * 400;
          theme = item.content;
          router.refresh();
        }}
      >
        {item.contentText}
      </a>
    </li>
  );
}
