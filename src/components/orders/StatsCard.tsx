import React from "react";

interface StatsCardProps {
  heading: string;
  stats: { value: string; text: string }[];
}

const StatsCard: React.FC<StatsCardProps> = ({ heading, stats }) => {
  return (
    <div className="shadow-(--cardShadow) rounded-lg flex flex-col gap-4 min-w-[32%]  p-6 my-5 ">
      <h2 className="text-lg text-(--secondary) font-semibold">{heading}</h2>
      <div className="flex gap-2 justify-between">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-(--secondary) font-semibold text-2xl text-center flex flex-col gap-2.5 font-poppin leading-[36px]"
          >
            {stat.value}
            <span className="font-normal text-black text-xs leading-[18px]">
              {stat.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
