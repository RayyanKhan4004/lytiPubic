import React, { ReactNode } from "react";

type CardLayoutProps = {
  children: ReactNode;
};

const CardLayout: React.FC<CardLayoutProps> = ({ children }) => {
  return (
    <div className="shadow-(--cardShadow) rounded-2xl bg-white px-4 min-h-auto my-6 w-full py-6 flex flex-col gap-3">
      {children}
    </div>
  );
};

export default CardLayout;
