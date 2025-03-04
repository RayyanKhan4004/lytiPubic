import React, { ReactNode, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../SideBar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
      const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);
  return (
    <div className="flex relative w-full h-auto min-h-screen flex-col overflow-hidden ">
      <Navbar />
      <div className="w-full flex  scroll-container overflow-hidden h-screen ">
        <div
          className={` overflow-y-scroll scroll-container  ${
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
        <span className={` ${!isSideBarExpanded ? 'w-[80%]' : "grow" } w-[80%] overflow-y-auto h-screen  scroll-container`}>
          {children}
        </span>
      </div>
    </div>
  );
};

export default DashboardLayout;
