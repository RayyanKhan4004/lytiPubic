import React from "react";
import Spinner from "../loader/Spinner";

interface ButtonProps {
  text?: string;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  image?: string;
  className?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  isLoading = false,
  type = "button",
  image,
  className = "px-3 rounded-xl bg-(--primary)",
}) => {
  return (
    <button
      type={type}
      className={`flex items-center cursor-pointer gap-1.5 text-sm h-[44px]  ${className} text-white`}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {image && <img src={image} alt="button icon" />}
          {text}
        </>
      )}
    </button>
  );
};

export default PrimaryButton;
