import React from "react";
import dummyImage from "../../../assets/images/Dummy.jpg";
import LeaderboardsDashboardUserCard from "../../../components/dashboard/teamDashboard/leaderboardsDashboard/LeaderboardsDashboardUserCard";
import LeaderboardsDashboardColumn from "../../../components/dashboard/teamDashboard/leaderboardsDashboard/LeaderboardsDashboardColumn";

const LeaderboardsDashboard = () => {
  const users = [
    { rank: 1, name: "Wade Warren", count: 34 },
    { rank: 2, name: "John Doe", count: 28 },
    { rank: 3, name: "Jane Smith", count: 25 },
    { rank: 4, name: "Robert Brown", count: 22 },
    { rank: 5, name: "Emily Davis", count: 21 },
    { rank: 6, name: "Michael Miller", count: 19 },
    { rank: 7, name: "Sarah Wilson", count: 18 },
    { rank: 8, name: "James Taylor", count: 16 },
    { rank: 9, name: "Olivia Lee", count: 14 },
    { rank: 10, name: "William Harris", count: 12 },
  ];

  return (
    <div className="w-full">
      <div className="w-full flex justify-between gap-1.5 items-center flex-wrap">
        <LeaderboardsDashboardColumn
          heading="Appointment Met"
          totalCount={36}
          users={users}
        />
        <LeaderboardsDashboardColumn
          heading="Appointment Set"
          totalCount={36}
          users={users}
        />
        <LeaderboardsDashboardColumn
          heading="Closed units YTD"
          totalCount={36}
          users={users}
        />
        <LeaderboardsDashboardColumn
          heading="Closed Volume (YTD) "
          totalCount={36}
          users={users}
        />
        <LeaderboardsDashboardColumn
          heading="Closed GCI (YTD) "
          totalCount={36}
          users={users}
        />
        <LeaderboardsDashboardColumn
          heading="Pending Units "
          totalCount={36}
          users={users}
        />
      </div>
    </div>
  );
};

export default LeaderboardsDashboard;
