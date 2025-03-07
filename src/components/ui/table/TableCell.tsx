import React from "react";

interface TableCellProps {
  content: string;
  maxWidth?: string;
}

const TableCell: React.FC<TableCellProps> = ({
  content,
  maxWidth = "50px",
}) => {
  return (
    <th
      className="cursor-pointer text-start font-medium"
      style={{
        maxWidth,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }}
      title={content}
    >
      {content}
    </th>
  );
};

export default TableCell;
