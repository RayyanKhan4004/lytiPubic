import React from "react";

type UserCardProps = {
  image: string;
  rank: number;
  name: string;
  count: number;
  percentage?: number;
  width?: string;
  border?: string;
};

const LeaderboardsDashboardUserCard: React.FC<UserCardProps> = ({
  image,
  rank,
  name,
  count,
  percentage,
  width = "w-[48%]",
  border = "border border-white",
}) => {
  const rankColors: { [key: number]: string } = {
    1: "#FE5100",
    2: "#0098CE",
    3: "#F8A219",
    4: "#404041",
    5: "#8775FF",
  };

  const badgeColor = rankColors[rank] || "#E0E0E0";

  return (
    <div
      className={`bg-white flex flex-col gap-1 rounded-xl p-3 ${border} ${width} items-center mt-4`}
    >
      <div className="relative mb-1">
        <img
          src={image}
          alt={name}
          className="w-[60px] h-[60px] rounded-full"
        />
        <div
          className="w-[24px] h-[24px] rounded-full flex justify-center items-center text-white absolute left-0 mx-auto right-0 bottom-[-11px] text-base font-semibold"
          style={{ backgroundColor: badgeColor }}
        >
          {rank}
        </div>
      </div>
      <h2 className="font-bold text-sm">{name}</h2>
      <h3 className="text-xs">Count: {count}</h3>
      <h3 className="text-xs">{percentage} of total</h3>
    </div>
  );
};

export default LeaderboardsDashboardUserCard;
