import React from "react";
import ProgressBar from "../../../orders/ProgressBar";
import NewProgressBar from "../../../common/NewProgressBar";

interface CircleDashboardStatsCardProps {
  heading: string;
  description1: string;
  description2: string;
  currentValue: number;
  maxValue: number;
}

const CircleDashboardStatsCard: React.FC<CircleDashboardStatsCardProps> = ({
  heading,
  description1,
  description2,
  currentValue,
  maxValue,
}) => {
  return (
    <div className="px-2 py-3 shadow-md font-poppins rounded-xl flex gap-2.5 w-[16%] flex-col">
      <h1 className="text-(--secondary) text-2xl font-semibold">{heading}</h1>
      <h3 className="font-normal text-xs">{description1}</h3>
      <h3 className="font-medium text-(--secondary) text-xs">{description2}</h3>

      <NewProgressBar currentValue={currentValue} maxValue={maxValue} />
    </div>
  );
};

export default CircleDashboardStatsCard;
