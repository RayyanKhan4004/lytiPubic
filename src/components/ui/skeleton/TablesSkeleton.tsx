import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface TableSkeletonProps {
  columnCount: number;
  rowCount?: number;
}

const TablesSkeleton: React.FC<TableSkeletonProps> = ({
  columnCount,
  rowCount = 5,
}) => {
  return (
    <div className="w-full">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {[...Array(columnCount)].map((_, index) => (
              <th key={index} className="p-3 bg-gray-100">
                <Skeleton height={20} width="80%" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(rowCount)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(columnCount)].map((_, colIndex) => (
                <td key={colIndex} className="p-3">
                  <Skeleton height={20} width="60%" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablesSkeleton;
