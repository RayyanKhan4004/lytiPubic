import React from "react";

type MainTitleProps = {
  title: string;
};

const MainTitle: React.FC<MainTitleProps> = ({ title }) => {
  return <div className="text-lg font-semibold text-(--primary) ">{title}</div>;
};

export default MainTitle;
