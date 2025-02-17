import React, { useState } from "react";
import Breadcrumb from "../../../components/common/BreadCrumb";
import TabNavigation from "../../../components/common/TabNavigation";
import CirclesDashboard from "./CirclesDashboard";
import YtdDashboard from "./YtdDashboard";

const TeamDashboard = () => {
  const tabItems = [
    "Circles Dashboard",
    "YTD Dashboard",
    "Activities Dashboard ",
    "Leaderboards Dashboard",
    "Admin Dashboard",
  ];
  const [activeTab, setActiveTab] = useState(tabItems[0]);

  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={[" Dashboard", "Team Dashboard"]} />
      <div className="my-8">
        <TabNavigation tabs={tabItems} onTabSelect={setActiveTab} />
      </div>

      {activeTab === "Circles Dashboard" && <CirclesDashboard />}
      {activeTab === "YTD Dashboard" && <YtdDashboard />}
    </div>
  );
};

export default TeamDashboard;
