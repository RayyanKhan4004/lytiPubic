import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface DoubleCircularProgressProps {
  currentValue: number;
  currentTarget: number;
  currentTotal: number;
  targetTotal: number;
  status: "Not on pace" | "On pace" | "Goal achieved";
  size?: number;
}

const DoubleCircularProgress: React.FC<DoubleCircularProgressProps> = ({
  currentValue,
  currentTarget,
  currentTotal,
  targetTotal,
  status,
  size = 120,
}) => {
  const outerPercentage = (currentTarget / targetTotal) * 100;
  const innerPercentage = (currentValue / currentTotal) * 100;
  const innerSize = size - 10;

  let color: string;
  if (status === "Not on pace") {
    color = "#9CA3AF";
  } else if (status === "On pace") {
    color = "#DC2626";
  } else {
    color = "#16A34A";
  }

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Outer Circle */}
      <div className="absolute inset-0">
        <CircularProgressbar
          value={outerPercentage}
          strokeWidth={2}
          styles={buildStyles({
            strokeLinecap: "round",
            pathColor: "#9CA3AF",
            trailColor: "#E5E7EB",
          })}
        />
      </div>
      {/* Inner Circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div style={{ width: innerSize, height: innerSize }}>
          <CircularProgressbar
            value={innerPercentage}
            strokeWidth={8}
            styles={buildStyles({
              strokeLinecap: "round",
              pathColor: color,
              trailColor: "#E5E7EB",
            })}
          />
        </div>
      </div>
      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-800 font-bold">
        <span className="text-lg">{currentValue}</span>
        <span className="border-t w-9 border-gray-300"></span>
        <span className="text-sm text-gray-500">{currentTarget}</span>
      </div>
    </div>
  );
};

export default DoubleCircularProgress;
