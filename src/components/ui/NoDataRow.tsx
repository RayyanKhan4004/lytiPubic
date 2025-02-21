import React from "react";

interface NoDataRowProps {
  text?: string;
  className?: string;
  colSpan?: number;
}

const NoDataRow: React.FC<NoDataRowProps> = ({
  text = "No data found",
  className = "",
  colSpan = 7,
}) => {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className={` text-center text-lg my-48 py-6 text-gray-500 bg-gray-100 border-none rounded ${className}`}
      >
        {text}
      </td>
    </tr>
  );
};

export default NoDataRow;
