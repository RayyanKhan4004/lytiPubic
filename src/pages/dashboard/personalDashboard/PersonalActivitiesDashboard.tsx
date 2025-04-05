import React from "react";
import ActivitiesDashboardStatsCard from "../../../components/dashboard/teamDashboard/ActivitiesDashboardStatsCard";
import { useGetUserActivitiesQuery } from "../../../lib/rtkQuery/dashboardApi";
import { useAppSelector } from "../../../lib/store/hooks";

const PersonalActivitiesDashboard = () => {
  const userId = useAppSelector((state: any) => state?.auth?.user?.id);
  const { data, isLoading } = useGetUserActivitiesQuery({ userId });

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 justify-between w-full">
        {data?.userActivities?.map((e: any, i: number) => (
          <ActivitiesDashboardStatsCard
            key={i}
            heading={e.activityName}
            description1={e.totalCount.toString()}
            currentValue={e.totalCount}
            maxValue={100}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonalActivitiesDashboard;
