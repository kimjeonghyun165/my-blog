import { ListItem } from "@/interfaces/interfaces";
import Link from "next/link";

export const MobileList = ({
  title,
  description,
  imageSrc,
  category,
  date,
  url,
}: ListItem) => {
  return (
    <div>
      <Link href={url}>
        <div className="card mx-auto bg-base-100 shadow-xl sm:max-w-none">
          <figure className="mx-auto w-full object-cover p-4 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0">
            <img
              className="border-base-content bg-base-300 rounded-btn border border-opacity-5"
              src={imageSrc}
              alt="Shoes"
            />
          </figure>
          <div className="card-body pb-2">
            <h2 className="card-title">{title}</h2>
            <p className="text-xs opacity-60">{description}</p>
            <div className="card-actions flex justify-end items-center mt-2">
              <p className="text-xs opacity-60">{date}</p>
              <div className="badge badge-outline">{category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
