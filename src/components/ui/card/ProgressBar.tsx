import React from "react";

interface ProgressBarProps {
  percentage: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const numericValue = parseFloat(percentage);

  return (
    <div className="w-full bg-gray-300 rounded-full h-4 relative">
      <div
        className="bg-green-500 h-full rounded-full transition-all duration-300 ease-in-out"
        style={{ width: percentage }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold">
        {percentage}
      </span>
    </div>
  );
};

export default ProgressBar;
