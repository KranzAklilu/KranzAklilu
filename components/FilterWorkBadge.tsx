import { FC } from "react";
import clsx from "clsx";

const FilterWorkBadge: FC<{ text: string }> = ({ text }) => {
  return (
    <span
      className={clsx(
        "bg-gray-100 text-gray-900 cursor-pointer rounded-md mx-1 px-2.5 py-1 text-center text-xs"
      )}
    >
      {text}
    </span>
  );
};

export default FilterWorkBadge;
