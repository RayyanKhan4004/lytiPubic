import React, { ReactNode } from "react";

type CardLayoutProps = {
  children: ReactNode;
  className?: string;
};

const CardLayout: React.FC<CardLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={`shadow-(--cardShadow) rounded-2xl bg-white px-4 min-h-auto my-6 py-6 flex flex-col gap-3 ${
        className || "w-full"
      }`}
    >
      {children}
    </div>
  );
};

export default CardLayout;
