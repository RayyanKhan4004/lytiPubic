import React from "react";
import CircleDashboardStatsCard from "../../../components/dashboard/teamDashboard/circlesDashboard/CircleDashboardStatsCard";
import CircularProgress from "../../../components/dashboard/teamDashboard/circlesDashboard/CircularProgress";
import DoubleCircularProgress from "../../../components/dashboard/teamDashboard/circlesDashboard/DoubleCircularProgressProps ";
import CircleStatsSection from "../../../components/dashboard/teamDashboard/circlesDashboard/CircleStatsSection";

const CirclesDashboard = () => {
  const dashboardStats = [
    {
      heading: "$0",
      description1: "YTD Closed volume",
      description2: "0",
      currentValue: 0,
      maxValue: 0,
    },
    {
      heading: "0",
      description1: "YTD Closed Units",
      description2: "0",
      currentValue: 0,
      maxValue: 0,
    },
    {
      heading: "$0",
      description1: "YTD Forecasted volume",
      description2: "0",
      currentValue: 0,
      maxValue: 0,
    },
    {
      heading: "0",
      description1: "YTD Forecasted Units",
      description2: "0",
      currentValue: 0,
      maxValue: 0,
    },
    {
      heading: "$0",
      description1: "U/C Volume",
      description2: "0",
      currentValue: 0,
      maxValue: 0,
    },
    {
      heading: "$0",
      description1: "Closed volume",
      description2: "0",
      currentValue: 0,
      maxValue: 0,
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
      <CircleStatsSection />
    </div>
  );
};

export default CirclesDashboard;
