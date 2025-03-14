import LeaderboardsDashboardColumn from "../../../components/dashboard/teamDashboard/leaderboardsDashboard/LeaderboardsDashboardColumn";
import { LeaderboardsData } from "../../../utils/DummyData";

const LeaderboardsDashboard = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between gap-1.5 items-center flex-wrap">
        <LeaderboardsDashboardColumn
          heading="Appointment Met"
          totalCount={36}
          users={LeaderboardsData}
        />
        <LeaderboardsDashboardColumn
          heading="Appointment Set"
          totalCount={36}
          users={LeaderboardsData}
        />
        <LeaderboardsDashboardColumn
          heading="Closed units YTD"
          totalCount={36}
          users={LeaderboardsData}
        />
        <LeaderboardsDashboardColumn
          heading="Closed Volume (YTD) "
          totalCount={36}
          users={LeaderboardsData}
        />
        <LeaderboardsDashboardColumn
          heading="Closed GCI (YTD) "
          totalCount={36}
          users={LeaderboardsData}
        />
        <LeaderboardsDashboardColumn
          heading="Pending Units "
          totalCount={36}
          users={LeaderboardsData}
        />
      </div>
    </div>
  );
};

export default LeaderboardsDashboard;
