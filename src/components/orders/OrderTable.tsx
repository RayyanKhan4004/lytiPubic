
// import React from "react";

// export interface Order {
//   [key: string]: any; // Allow any key-value pairs
// }

// interface OrderTableProps {
//   stylesTable?: string;
//   stylesHead?: string;
//   styleFooter?: string;
//   hasHeader?: boolean;
//   hasFooter?: boolean;
//   data: Order[];
//   tableFooter?: any;
//   tableOnClick?: (order: Order) => void; // Pass the order to the click handler
//   tableStyles?: string;
// }

// const OrderTable: React.FC<OrderTableProps> = ({
//   data = [],
//   tableOnClick,
//   tableFooter,
//   stylesTable,
//   stylesHead,
//   styleFooter,
//   tableStyles,
//   hasFooter,
//   hasHeader,
// }) => {
//   // Get unique keys from the data to create table headers
//   const keys = Array.from(new Set(data.flatMap(Object.keys)));

//   return (
//     <table className={`${tableStyles} w-full`}>
//       {hasHeader && (
//         <thead className={`${stylesHead} w-full`}>
//           <tr className="border-b border-[#F4EFE9]">
//             {keys.map((key) => (
//               <th
//                 key={key}
//                 className="text-start py-3 px-4 font-medium text-sm"
//               >
//                 {key}
//               </th>
//             ))}
//           </tr>
//         </thead>
//       )}

//       <tbody className={`${stylesTable}`}>
//         {data.map((order, index) => (
//           <tr
//             onClick={() => tableOnClick && tableOnClick(order)} // Pass the order to the click handler
//             key={index}
//             className="border-b cursor-pointer border-[#F4EFE9] hover:bg-gray-50 transition-colors duration-200"
//           >
//             {keys.map((key) => (
//               <td key={key} className="py-4 px-4 text-sm">
//                 {order[key] !== undefined ? order[key] : "-"}{" "}
//                 {/* Display '-' for undefined values */}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//       {hasFooter && (
//         <tfoot className={`${styleFooter}`}>
//           <tr className="bg-gray-50">
//             {tableFooter.map((data: any, index: number) => (
//               <td key={index} className="py-3 px-4 font-semibold text-sm">
//                 {data}
//               </td>
//             ))}
//           </tr>
//         </tfoot>
//       )}
//     </table>
//   );
// };

// export default OrderTable;
const OrderTable: React.FC<OrderTableProps> = ({
  data = [],
  tableOnClick,
  tableFooter,
  stylesTable = "",
  stylesHead = "",
  styleFooter = "",
  hasFooter = false,
  hasHeader = false,
}) => {
  const keys = Object.keys(data[0] || {}); // Get keys from the first item for headers

  return (
    <table className={`${stylesTable} w-full`}>
      {hasHeader && (
        <thead className={`${stylesHead} w-full`}>
          <tr>
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

      <tbody>
        {data.map((item, index) => (
          <tr
            onClick={() => tableOnClick && tableOnClick(item)}
            key={index}
            className="border-b cursor-pointer border-[#F4EFE9] hover:bg-gray-50 transition-colors duration-200"
          >
            {keys.map((key) => (
              <td key={key} className="py-4 px-4 text-sm">
                {item[key] !== undefined ? item[key] : "-"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>

      {hasFooter && (
        <tfoot className={`${styleFooter}`}>
          <tr>
            {tableFooter.map((footerItem, index) => (
              <td key={index} className="py-3 px-4 font-semibold text-sm">
                {footerItem}
              </td>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  );
};

export default OrderTable;