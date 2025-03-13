import React from "react";

export interface Order {
  [key: string]: any; // Allow any key-value pairs
}

interface OrderTableProps {
  stylesTable?: string;
  stylesHead?: string;
  styleFooter?: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
  data: Order[];
  tableFooter?: any;
  tableOnClick?: (order: Order) => void;
  tableStyles?: string;
}

const OrderTable: React.FC<OrderTableProps> = ({
  data = [],
  tableOnClick,
  tableFooter,
  stylesTable,
  stylesHead,
  styleFooter,
  tableStyles,
  hasFooter,
  hasHeader,
}) => {
  const keys = Array.from(new Set(data.flatMap(Object.keys)));

  return (
    <table className={`${tableStyles} w-full`}>
      {hasHeader && (
        <thead className={`${stylesHead} w-full sticky`}>
          <tr className="border-b border-[#F4EFE9]">
            {keys.map((key) => (
              <th
                key={key}
                className="text-start py-3 px-4 font-medium text-sm"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
      )}

      <tbody className={`${stylesTable}`}>
        {data.map((order, index) => (
          <tr
            onClick={() => tableOnClick && tableOnClick(order)} // Pass the order to the click handler
            key={index}
            className="border-b cursor-pointer border-[#F4EFE9] hover:bg-gray-50 transition-colors duration-200"
          >
            {keys.map((key) => (
              <td key={key} className="py-4 px-4 text-sm">
                {order[key] !== undefined ? order[key] : "-"}{" "}
                {/* Display '-' for undefined values */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {hasFooter && (
        <tfoot className={`${styleFooter}`}>
          <tr className="bg-[#F3F3F3] rounded-b-[10px]">
            {tableFooter.map((data: any, index: number) => (
              <td
                key={index}
                className="py-3 px-4 font-medium  text-sm leading-[21px]  text-[#15120F]"
              >
                {data}
              </td>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  );
};

export default OrderTable;
