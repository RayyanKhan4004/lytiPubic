import React from "react";
import NewProgressBar from "../../common/NewProgressBar";

interface CircleDashboardStatsCardProps {
  heading: string;
  description1: string;
  currentValue: number;
  maxValue: number;
}

const ActivitiesDashboardStatsCard: React.FC<CircleDashboardStatsCardProps> = ({
  heading,
  description1,
  currentValue,
  maxValue,
}) => {
  return (
    <div className="px-3 py-3 shadow-md font-poppins rounded-xl flex gap-2.5 w-[24%] flex-col">
      <h1 className="text-(--secondary) text-2xl font-semibold">{heading}</h1>
      <h3 className="font-normal text-xs">{description1}</h3>

      {/* <NewProgressBar currentValue={currentValue} maxValue={maxValue} /> */}
    </div>
  );
};

export default ActivitiesDashboardStatsCard;
