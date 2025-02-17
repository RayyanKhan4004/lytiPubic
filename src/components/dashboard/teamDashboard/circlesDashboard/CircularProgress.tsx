import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Tooltip } from "react-tooltip";

interface CircularProgressBarProps {
  value: number;
  maxValue: number;
  status: "Not on pace" | "On pace" | "Goal achieved";
}

const CircularProgress: React.FC<CircularProgressBarProps> = ({
  value,
  maxValue,
  status,
}) => {
  const percentage = (value / maxValue) * 100;

  let color: string;

  if (status === "Not on pace") {
    color = "#9CA3AF";
  } else if (status === "On pace") {
    color = "#DC2626";
  } else {
    color = "#16A34A";
  }

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <div data-tooltip-id="progress-tooltip" className="cursor-pointer">
        <CircularProgressbar
          value={percentage}
          text={`${value}`}
          styles={buildStyles({
            textColor: "#3b82f6",
            pathColor: color,
            trailColor: "#E5E7EB",
            textSize: "24px",
          })}
        />
      </div>

      <Tooltip
        id="progress-tooltip"
        place="top"
        style={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="text-sm text-gray-800">
          <p>
            <strong>Agent:</strong> 181
          </p>
          <p>
            <strong>ISA:</strong> 35
          </p>
          <hr className="my-1" />
          <p>
            <strong>Total:</strong> 216
          </p>
        </div>
      </Tooltip>
    </div>
  );
};

export default CircularProgress;
