import React from "react";

interface CardProps {
  icon: string;
  text: string;
  path?: string;
}

const OptionCard: React.FC<CardProps> = ({ icon, text, path }) => {
  return (
    <div className="shadow-(--cardShadow) rounded-2xl bg-white flex items-center gap-4 px-3 w-[24%] h-[82px] font-Poppins">
      <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-(--primary)">
        <img src={icon} alt={text} />
      </div>
      {text}
    </div>
  );
};

export default OptionCard;
