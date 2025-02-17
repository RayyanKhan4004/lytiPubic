import { useState } from "react";

interface TabNavigationProps {
  tabs: string[];
  onTabSelect: (tab: string) => void;
}

export default function TabNavigation({
  tabs,
  onTabSelect,
}: TabNavigationProps) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    onTabSelect(tab);
  };

  return (
    <div className="border-b border-gray-300 w-[60%] shadow-(--cardShadow) rounded-xl  font-Poppins px-3 h-[53px] flex  items-center">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={` text-sm font-medium ${
              selectedTab === tab
                ? "font-semibold text-gray-900  "
                : "text-greyText"
            }`}
          >
            {tab}
            {selectedTab === tab && (
              <div className="bg-(--primary) w-full h-[5px] rounded-t-md"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
