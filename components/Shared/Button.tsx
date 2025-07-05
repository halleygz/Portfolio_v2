import { BtnProps } from "@/types/ComponentProps";
import React from "react";

const Button: React.FC<BtnProps> = ({
  children,
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`border-solid border-1 border-gray-900 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-1 min-w-24 ${className}`}
      aria-pressed={props["aria-pressed"]}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
