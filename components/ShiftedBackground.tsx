import { FC } from "react";
const ShiftedBackground: FC = ({ children }) => {
  return (
    <span className="inline-block bg-black text-white px-2 py-0.5 text-5xl sm:text-6xl rounded-md">
      {children}
    </span>
  );
};

export default ShiftedBackground;
