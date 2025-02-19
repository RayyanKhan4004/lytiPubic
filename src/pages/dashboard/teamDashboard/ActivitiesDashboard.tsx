import React from "react";
import ActivitiesDashboardStatsCard from "../../../components/dashboard/teamDashboard/ActivitiesDashboardStatsCard";

const ActivitiesDashboard = () => {
  const dashboardStats = [
    {
      heading: "$37.9M",
      description1: "Conversations",
      currentValue: 80,
      maxValue: 180,
    },
    {
      heading: "60",
      description1: "Open Houses",
      description2: "30.41",
      currentValue: 80,
      maxValue: 180,
    },
    {
      heading: "122M",
      description1: "Number of Unique Dials",
      description2: "16.7M",
      currentValue: 80,
      maxValue: 180,
    },
    {
      heading: "159",
      description1: "Digital Conversations",
      description2: "30.41",
      currentValue: 80,
      maxValue: 180,
    },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 justify-between w-full">
        {dashboardStats.map((stat, i) => (
          <ActivitiesDashboardStatsCard
            key={i}
            heading={stat.heading}
            description1={stat.description1}
            currentValue={stat.currentValue}
            maxValue={stat.maxValue}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesDashboard;
