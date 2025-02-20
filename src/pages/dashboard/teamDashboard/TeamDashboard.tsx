import React, { useState } from "react";
import Breadcrumb from "../../../components/common/BreadCrumb";
import TabNavigation from "../../../components/common/TabNavigation";
import CirclesDashboard from "./CirclesDashboard";
import YtdDashboard from "./YtdDashboard";
import ActivitiesDashboard from "./ActivitiesDashboard";
import LeaderboardsDashboard from "./LeaderboardsDashboard";
import AdminDashboard from "./AdminDashboard";

const TeamDashboard = () => {
  const tabItems = [
    "Circles Dashboard",
    "YTD Dashboard",
    "Activities Dashboard",
    "Leaderboards Dashboard",
    "Admin Dashboard",
  ];
  const [activeTab, setActiveTab] = useState(tabItems[0]);

  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Dashboard", "Team Dashboard"]} />
      <div className="my-8">
        <TabNavigation tabs={tabItems} onTabSelect={setActiveTab} />
      </div>

      {activeTab === "Circles Dashboard" && <CirclesDashboard />}
      {activeTab === "YTD Dashboard" && <YtdDashboard />}
      {activeTab === "Activities Dashboard" && <ActivitiesDashboard />}
      {activeTab === "Leaderboards Dashboard" && <LeaderboardsDashboard />}
      {activeTab === "Admin Dashboard" && <AdminDashboard />}
    </div>
  );
};

export default TeamDashboard;
