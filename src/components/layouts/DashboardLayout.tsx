import React, { ReactNode, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../SideBar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
      const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);
  return (
    <div className="flex relative w-full h-auto min-h-screen flex-col">
      <Navbar />
      <div className="w-full flex ">
        <div
          className={` ${
            isSideBarExpanded
              ? "w-[96px] duration-300 ease-in-out"
              : "w-[20%] duration-300 ease-in-out"
          }`}
        >
          <Sidebar
            isSideBarExpanded={isSideBarExpanded}
            setIsSideBarExpanded={setIsSideBarExpanded}
          />
        </div>
        <span className="grow">{children}</span>
      </div>
    </div>
  );
};

export default DashboardLayout;
