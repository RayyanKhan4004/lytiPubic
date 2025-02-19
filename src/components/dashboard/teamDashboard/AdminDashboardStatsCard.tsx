import React from "react";

type StatCardProps = {
  value: string;
  label: string;
  darkMode?: boolean;
};

const AdminDashboardStatsCard: React.FC<StatCardProps> = ({
  value,
  label,
  darkMode = false,
}) => {
  return (
    <div
      className={`w-[22%] border border-(--inputBorder) rounded-xl px-3 flex flex-col gap-2 h-[82px] justify-center ${
        darkMode ? "bg-(--secondary) text-white" : ""
      }`}
    >
      <h1
        className={`font-semibold  text-base  ${
          darkMode ? " text-white" : "text-(--secondary)"
        }`}
      >
        {value}
      </h1>
      <p className="text-xs font-normal">{label}</p>
    </div>
  );
};

export default AdminDashboardStatsCard;
