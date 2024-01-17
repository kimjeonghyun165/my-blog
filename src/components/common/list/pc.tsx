import { ListItem } from "@/interfaces/interfaces";
import Link from "next/link";

export const PcList = ({
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
        <div className="card card-side bg-base-100 shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-70 hover:bg-base-200 duration-150">
          <figure className="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0">
            <img
              className="border-base-content bg-base-300 rounded-btn border border-opacity-5"
              src={imageSrc}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <p>{date}</p>
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="flex items-center pt-4">
              <div className="badge badge-outline">{category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
