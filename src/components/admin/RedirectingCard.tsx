import React from "react";
import { Link } from "react-router-dom";
import share from "../../assets/icons/Share.svg";

interface CardProps {
  text: string;
  path: string;
}

const RedirectingCard: React.FC<CardProps> = ({ text, path }) => {
  return (
    <Link
      to={path}
      className="shadow-(--cardShadow) rounded-2xl bg-white flex items-center gap-4 px-3 w-[24%] h-[56px] font-Poppins"
    >
      <img src={share} alt="share icon" />
      <span>{text}</span>
    </Link>
  );
};

export default RedirectingCard;
