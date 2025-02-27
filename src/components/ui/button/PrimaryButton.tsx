import React from "react";
import Spinner from "../loader/Spinner";

interface ButtonProps {
  text: string;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  width?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  isLoading = false,
  type = "button",
  width = "w-fit",
}) => {
  return (
    <button
      type={type}
      className={`bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] ${width} px-8 rounded-xl text-white`}
    >
      {isLoading ? <Spinner /> : text}
    </button>
  );
};

export default PrimaryButton;
