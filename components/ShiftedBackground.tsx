import { FC } from "react";
const ShiftedBackground: FC<{ className?: string }> = ({
  className,
  children,
}) => {
  return (
    <span
      className={`inline-block bg-black text-white px-2 py-1 text-5xl sm:text-6xl rounded-sm capitalize ${className}`}
    >
      {children}
    </span>
  );
};

export default ShiftedBackground;
