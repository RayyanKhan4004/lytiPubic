import React from "react";
import CustomizableSkeleton from "./CustomizableSkeleton";

type TableSkeletonProps = {
  columns?: number;
};

const TableSkeleton: React.FC<TableSkeletonProps> = ({ columns = 6 }) => {
  const renderRows = () => {
    const rows = [];

    for (let i = 0; i < 10; i++) {
      const columnsArray = [];
      for (let j = 0; j < columns; j++) {
        columnsArray.push(
          <td key={j} className="px-3 pt-6">
            <CustomizableSkeleton height={35} />
          </td>
        );
      }
      rows.push(<tr key={i}>{columnsArray}</tr>);
    }
    return rows;
  };

  return <>{renderRows()}</>;
};

export default TableSkeleton;
