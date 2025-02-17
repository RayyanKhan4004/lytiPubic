import React from "react";
import CircleDashboardStatsCard from "../../../components/dashboard/teamDashboard/circlesDashboard/CircleDashboardStatsCard";
import CircularProgress from "../../../components/dashboard/teamDashboard/circlesDashboard/CircularProgress";

const CirclesDashboard = () => {
  return (
    <div className="flex  w-full flex-col gap-5">
      <div className="flex items-center gap-3 justify-between w-full">
        {["1", "2", "3", "4", "5", "6"].map((i) => (
          <CircleDashboardStatsCard
            key={i}
            heading="$56M"
            description1="Closed Volume"
            description2="167"
            currentValue={200}
            maxValue={500}
          />
        ))}
      </div>
      <CircularProgress value={30} maxValue={100} status="Not on pace" />{" "}
      <CircularProgress value={70} maxValue={100} status="On pace" />{" "}
      <CircularProgress value={100} maxValue={100} status="Goal achieved" />{" "}
    </div>
  );
};

export default CirclesDashboard;
