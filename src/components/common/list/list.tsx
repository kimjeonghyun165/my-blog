"use client";

import { ListItem } from "@/interfaces/interfaces";
import { MobileList } from "./mob";
import { PcList } from "./pc";
import { formatDateString } from "@/utils/utils";
import { useWindowSize } from "@/hooks/useSize";

const List = ({
  date,
  title,
  description,
  imageSrc,
  category,
  url,
}: ListItem) => {
  const sizeDetect = useWindowSize(640);
  const dateFormat = formatDateString(date);

  return (
    <div className={`${sizeDetect ? "mx-auto" : "max-w-3xl"} bg-base-100`}>
      {sizeDetect ? (
        <MobileList
          date={dateFormat}
          title={title}
          description={description}
          imageSrc={imageSrc}
          category={category}
          url={url}
        />
      ) : (
        <PcList
          date={dateFormat}
          title={title}
          description={description}
          imageSrc={imageSrc}
          category={category}
          url={url}
        />
      )}
    </div>
  );
};

export default List;
