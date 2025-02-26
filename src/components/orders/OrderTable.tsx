import React from 'react';

export interface Order {
  closedDate?: string;
  order?: string;
  status?: string;
  propertyAddress?: string;
  amount?: string;
}
interface OrderTableProps {
  stylesTable ?: string;
  stylesHead?: string;
  styleFooter?: string;
  
  data: Order[];
  tableHead: any;
  tableFooter: any;
  tableOnClick?: any;
}
const OrderTable: React.FC<OrderTableProps> = ({
  data = [],
  tableOnClick,
  tableHead,
  tableFooter,
  stylesTable,
  stylesHead,
  styleFooter,
}) => {
  return (
    <div className="w-full font-Poppins">
      <div className="shadow-(--cardShadow) p-6 rounded-xl">
        <h1 className="text-lg font-semibold mb-4">Orders</h1>
        <div className="overflow-x-auto">
          <table className='w-full'>
            <thead className={`${stylesHead} w-full`}>
              <tr className="border-b border-[#F4EFE9]">
                {tableHead.map((data: any) => (
                  <th className="text-start py-3 px-4 font-medium text-sm">
                    {data}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={`${stylesTable}`}>
              {data.map((order, index) => (
                <tr
                  onClick={() => tableOnClick && tableOnClick()}
                  key={index}
                  className="border-b cursor-pointer border-[#F4EFE9] hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-4 px-4 text-sm">{order.closedDate}</td>
                  <td className="py-4 px-4 text-sm">{order.order}</td>
                  <td className="py-4 px-4 text-sm">
                    <span className="">{order.status}</span>
                  </td>
                  <td className="py-4 px-4 text-sm">{order.propertyAddress}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className={`${styleFooter}`}>
              <tr className="bg-gray-50">
                {tableFooter.map((data: any) => (
                  <td className="py-3 px-4 font-semibold text-sm">{data}</td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;