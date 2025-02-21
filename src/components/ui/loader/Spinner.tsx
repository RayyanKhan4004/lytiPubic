import React from "react";

interface SpinnerProps {
  size?: string;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "w-4 h-4",
  color = "text-white",
}) => {
  return (
    <div className={`flex items-center justify-center `}>
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent border-solid ${color} ${size}`}
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
