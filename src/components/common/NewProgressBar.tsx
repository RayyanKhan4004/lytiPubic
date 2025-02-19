import React from "react";

interface ProgressBarProps {
  maxValue: number;
  currentValue: number;
}

const NewProgressBar: React.FC<ProgressBarProps> = ({
  maxValue,
  currentValue,
}) => {
  const progress = Math.min(Math.max((currentValue / maxValue) * 100, 0), 100);

  return (
    <div className="relative w-full py-2 text-xs">
      <div
        className="absolute  font-medium text-(--greyText) -mt-5"
        style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
      >
        {currentValue}
      </div>

      <div className="w-full h-[5px] bg-gray-300 rounded-full relative">
        <div
          className="h-full bg-(--secondary) rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-white border border-gray-400 rounded-full"
          style={{
            left: `${progress}%`,
            transform: "translate(-50%, -50%)",
            top: "50%",
          }}
        ></div>
      </div>

      <div className="flex justify-between  text-(--primary) mt-1">
        <span>0</span>
        <span>{maxValue}</span>
      </div>
    </div>
  );
};

export default NewProgressBar;
