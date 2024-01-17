import { DropDownBtn } from "@/interfaces/interfaces";
import Link from "next/link";

export function LinkBtn({ index, item, router }: DropDownBtn) {
  return (
    <li key={index}>
      <Link href={item.content}>{item.contentText}</Link>
    </li>
  );
}
