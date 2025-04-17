import React from "react";
import Breadcrumb from "../../../components/common/BreadCrumb";
import CardLayout from "../../../components/layouts/CardLayout";

const ActivityAgent = () => {
  return (
    <div className="w-full px-4 my-6">
      <Breadcrumb items={["Report", "Activity", "Activity by agent"]} />
      <CardLayout>
        <div></div>
      </CardLayout>
    </div>
  );
};

export default ActivityAgent;
