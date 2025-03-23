import React, { useState } from "react";
import Breadcrumb from "../../../components/common/BreadCrumb";
import TabNavigation from "../../../components/common/TabNavigation";
import CirclesDashboard from "../teamDashboard/CirclesDashboard";
import YtdDashboard from "../teamDashboard/YtdDashboard";
import LeaderboardsDashboard from "../teamDashboard/LeaderboardsDashboard";
import ActivitiesDashboard from "../teamDashboard/ActivitiesDashboard";
import AdminDashboard from "../teamDashboard/AdminDashboard";
import PersonalActivitiesDashboard from "./PersonalActivitiesDashboard";

const PersonalDashboard = () => {
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
      <Breadcrumb items={["Dashboard", "Personal Dashboard"]} />
      <div className="my-8">
        <TabNavigation tabs={tabItems} onTabSelect={setActiveTab} />
      </div>

      {activeTab === "Circles Dashboard" && <CirclesDashboard />}
      {activeTab === "YTD Dashboard" && <YtdDashboard />}
      {activeTab === "Activities Dashboard" && <PersonalActivitiesDashboard />}
      {activeTab === "Leaderboards Dashboard" && <LeaderboardsDashboard />}
      {activeTab === "Admin Dashboard" && <AdminDashboard />}
    </div>
  );
};

export default PersonalDashboard;
