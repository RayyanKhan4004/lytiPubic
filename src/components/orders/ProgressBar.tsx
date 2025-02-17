import React from "react";

interface ProgressBarProps {
  maxValue: number;
  currentValue: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  maxValue,
  currentValue,
}) => {
  const progressWidth = maxValue > 0 ? (currentValue / maxValue) * 100 : 0;

  return (
    <div className="relative w-40 h-6 bg-gray-400 rounded-full overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-(--secondary) rounded-full transition-all duration-300"
        style={{ width: `${Math.min(progressWidth, 100)}%` }}
      ></div>
      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-sm font-medium">
        {currentValue}
      </span>
    </div>
  );
};

export default ProgressBar;
