import React from "react";

interface YtdDashboardStatsCardProps {
  value: string | number;
  heading: string;
}

const YtdDashboardStatsCard: React.FC<YtdDashboardStatsCardProps> = ({
  value,
  heading,
}) => {
  return (
    <div className="border-(--inputBorder) border-[1px] shadow-(--cardShadow) w-[24%] px-2.5 py-6 rounded-lg flex-col flex gap-3 justify-center items-center font-poppins">
      <h1 className="text-(--secondary) text-2xl font-semibold">{value}</h1>
      <h3 className="font-normal text-xs">{heading}</h3>
    </div>
  );
};

export default YtdDashboardStatsCard;
