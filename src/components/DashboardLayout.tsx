import React, { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex relative w-full h-auto min-h-screen flex-col">
      <Navbar />
      <div className="w-full flex ">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <span className="w-[80%]">{children}</span>
      </div>
    </div>
  );
};

export default DashboardLayout;
