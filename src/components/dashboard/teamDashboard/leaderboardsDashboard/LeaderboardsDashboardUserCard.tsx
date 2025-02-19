import React from "react";

type UserCardProps = {
  image: string;
  rank: number;
  name: string;
  count: number;
};

const LeaderboardsDashboardUserCard: React.FC<UserCardProps> = ({
  image,
  rank,
  name,
  count,
}) => {
  return (
    <div className="bg-white flex flex-col gap-1 rounded-xl p-3 w-[48%] items-center mt-4">
      <div className="relative mb-1">
        <img
          src={image}
          alt={name}
          className="w-[60px] h-[60px] rounded-full"
        />
        <div className="w-[24px] h-[24px] rounded-full flex justify-center items-center bg-(--secondary) text-white absolute left-0 mx-auto right-0 bottom-[-11px] text-base font-semibold border border-white">
          {rank}
        </div>
      </div>
      <h2 className="font-bold text-sm">{name}</h2>
      <h3 className="text-xs gap-2">Count: {count}</h3>
    </div>
  );
};

export default LeaderboardsDashboardUserCard;
