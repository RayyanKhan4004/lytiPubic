import React, { FC } from "react";

interface CustomizableSkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

const CustomizableSkeleton: FC<CustomizableSkeletonProps> = ({
  width = "100%",
  height = "70px",
  borderRadius = "10px",
}) => {
  const skeletonStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    borderRadius:
      typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius,
  };

  return (
    <div className={`bg-slate-200 animate-pulse  `} style={skeletonStyle}></div>
  );
};

export default CustomizableSkeleton;
