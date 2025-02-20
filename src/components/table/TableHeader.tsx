import React from "react";
import arrowUpDown from "../../assets/icons/ArrowsDownUp.svg";

interface TableHeaderProps {
  text: string;
  arrowIcon?: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  text,
  arrowIcon = false,
}) => {
  return (
    <th className="text-start font-medium min-w-[220px] max-w-[250px]">
      <div className="flex gap-2 items-center">
        {text}
        {arrowIcon && <img src={arrowUpDown} alt="Arrow Icon" />}
      </div>
    </th>
  );
};

export default TableHeader;
