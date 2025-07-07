import { TimelineDotProps } from "@/types/ComponentProps";
import React from "react";

const TimelineDot: React.FC<TimelineDotProps> = ({
  isCurrent,
  isLatest,
}) => {
  if (isLatest || isCurrent) {
    return (
      <div className={`bg-white  border-7 border-black rounded-full w-6 h-6 flex items-center justify-center align-middle ${isCurrent && "animate-bounce"}`}></div>
    );
  } else {
    return <div className="bg-black rounded-full w-6 h-6"></div>;
  }
};

export default TimelineDot;
