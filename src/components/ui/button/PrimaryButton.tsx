import React from "react";
import Spinner from "../loader/Spinner";

interface ButtonProps {
  text ?: string;
  isLoading?: boolean;
  image ?: string
  type?: "button" | "submit" | "reset";
}

const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  isLoading = false,
  type = "button",
  image ,
}) => {
  return (
    <button
      type={type}
      className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] w-fit px-8 rounded-xl text-white"
    >
      {isLoading ? <Spinner /> : text}
    </button>
  );
};

export default PrimaryButton;
