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

const TopAgentCard: React.FC<UserCardProps> = ({
  image,
  rank,
  name,
  count,
  width = "w-[48%]",
  border = "border border-gray-200",
  percentage,
}) => {
  return (
    <div
      className={`bg-white flex  gap-1 rounded-xl p-3 ${border} ${width} items-center mt-4 gap-4  font-poppin`}
    >
      <div className="relative mb-1">
        <img
          src={image}
          alt={name}
          className="w-[50px] h-[50px] rounded-full"
        />
        <div
          className={`w-[20px] h-[20px] rounded-full flex justify-center items-center bg-(--secondary) text-white absolute left-0 mx-auto right-0 bottom-[-8px] text-xs font-semibold`}
        >
          {rank}
        </div>
      </div>
      <div>
        <h2 className="font-bold text-sm">{name}</h2>
        <h3 className="text-xs gap-2 flex ">Count: {count}</h3>
      </div>
      <h2 className="font-bold text-sm">{percentage}</h2>
    </div>
  );
};

export default TopAgentCard;
