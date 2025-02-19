import React from "react";
import CircleDashboardStatsCard from "../../../components/dashboard/teamDashboard/circlesDashboard/CircleDashboardStatsCard";
import CircularProgress from "../../../components/dashboard/teamDashboard/circlesDashboard/CircularProgress";

const CirclesDashboard = () => {
  const dashboardStats = [
    {
      heading: "$37.9M",
      description1: "YTD Closed volume",
      description2: "16.7M",
      currentValue: 80,
      maxValue: 180,
    },
    {
      heading: "60",
      description1: "YTD Closed Units",
      description2: "30.41",
      currentValue: 80,
      maxValue: 180,
    },
    {
      heading: "122M",
      description1: "YTD Forecasted volume",
      description2: "16.7M",
      currentValue: 80,
      maxValue: 180,
    },
    {
      heading: "159",
      description1: "YTD Forecasted Units",
      description2: "30.41",
      currentValue: 80,
      maxValue: 180,
    },
    {
      heading: "$0",
      description1: "U/C Volume",
      description2: "2.41M",
      currentValue: 80,
      maxValue: 180,
    },
    {
      heading: "$0",
      description1: "Closed volume",
      description2: "1.60M",
      currentValue: 80,
      maxValue: 180,
    },
  ];

  return (
    <div className="flex  w-full flex-col gap-5">
      <div className="flex items-center gap-3 justify-between w-full">
        {dashboardStats.map((stat, i) => (
          <CircleDashboardStatsCard
            key={i}
            heading={stat.heading}
            description1={stat.description1}
            description2={stat.description2}
            currentValue={stat.currentValue}
            maxValue={stat.maxValue}
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
