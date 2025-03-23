import React, { useState } from "react";
import Breadcrumb from "../../../components/common/BreadCrumb";
import TabNavigation from "../../../components/common/TabNavigation";
import CirclesDashboard from "../teamDashboard/CirclesDashboard";
import YtdDashboard from "../teamDashboard/YtdDashboard";
import ActivitiesDashboard from "../teamDashboard/ActivitiesDashboard";
import LeaderboardsDashboard from "../teamDashboard/LeaderboardsDashboard";
import AdminDashboard from "../teamDashboard/AdminDashboard";
import CeoActivitiesDashboard from "./CeoActivitiesDashboard";

const CeoDashboard = () => {
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
      <Breadcrumb items={["Dashboard", "CEO  Dashboard"]} />
      <div className="my-8">
        <TabNavigation tabs={tabItems} onTabSelect={setActiveTab} />
      </div>

      {activeTab === "Circles Dashboard" && <CirclesDashboard />}
      {activeTab === "YTD Dashboard" && <YtdDashboard />}
      {activeTab === "Activities Dashboard" && <CeoActivitiesDashboard />}
      {activeTab === "Leaderboards Dashboard" && <LeaderboardsDashboard />}
      {activeTab === "Admin Dashboard" && <AdminDashboard />}
    </div>
  );
};

export default CeoDashboard;
