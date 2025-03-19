import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  return (
    <div style={{ width: typeof width === "number" ? `${width}px` : width }}>
      <Skeleton
        height={height}
        borderRadius={borderRadius}
        baseColor="#e2e8f0"
        highlightColor="#f1f5f9"
      />
    </div>
  );
};

export default CustomizableSkeleton;
