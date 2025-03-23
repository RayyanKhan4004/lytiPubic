import React from "react";
import ActivitiesDashboardStatsCard from "../../../components/dashboard/teamDashboard/ActivitiesDashboardStatsCard";
import {
  useGetAdminActivitiesQuery,
  useGetUserActivitiesQuery,
} from "../../../lib/rtkQuery/dashboardApi";
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
            heading={e.activity.activityName}
            description1={e.count}
            currentValue={e.totalCount}
            maxValue={e.maxValue}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonalActivitiesDashboard;
