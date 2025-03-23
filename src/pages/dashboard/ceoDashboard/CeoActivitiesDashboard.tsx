import React from "react";
import ActivitiesDashboardStatsCard from "../../../components/dashboard/teamDashboard/ActivitiesDashboardStatsCard";
import { useGetAdminActivitiesQuery } from "../../../lib/rtkQuery/dashboardApi";

const CeoActivitiesDashboard = () => {
  const { data } = useGetAdminActivitiesQuery();

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 justify-between w-full">
        {data?.activities?.map((e: any, i: number) => (
          <ActivitiesDashboardStatsCard
            key={i}
            heading={e.activityName}
            description1={e.totalCount}
            currentValue={e.totalCount}
            maxValue={e.maxValue}
          />
        ))}
      </div>
    </div>
  );
};

export default CeoActivitiesDashboard;
