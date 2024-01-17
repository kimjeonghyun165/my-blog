"use client";
import { useCookie } from "@/hooks/useCookies";
import { DropdownForm } from "@/interfaces/interfaces";
import { useRouter } from "next/navigation";
import { UnderOutline } from "public/svgs";
import { LinkBtn } from "./linkBtn";
import { ThemeBtn } from "./themeBtn";

export function Dropdown({ type, buttonText, listContent }: DropdownForm) {
  let router = useRouter();
  useCookie();
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost m-1">
        <div className="flex items-center">
          <a>{buttonText}</a>
          <div className="mx-2">
            <UnderOutline />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {listContent.map((item, index) =>
          type === "theme" ? (
            <ThemeBtn index={index} item={item} router={router} />
          ) : (
            <LinkBtn index={index} item={item} router={router} />
          )
        )}
      </ul>
    </div>
  );
}
