// import StatsCard from "../../components/orders/StatsCard";
// import OrderTable, { Order } from "../../components/orders/OrderTable";
// import TableTitle from "../../components/ui/typography/TableTitle";
// import CustomizableDropdown from "../../components/common/CustomizableDropdown";
// import Breadcrumb from "../../components/common/BreadCrumb";
// import FilterPopup from "../../components/ui/FilterPopup";
// import filter from "../../assets/icons/AlignLeft.svg";
// import { useState } from "react";
// const sampleOrders: Order[] = [
//   {
//     closedDate: '9/1/10',
//     order: '6409',
//     status: 'Closed',
//     propertyAddress: '4501 Elgin St, Cactus, Galveston TX',

//   },
//   {
//     closedDate: '8/21/10',
//     order: '6176',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '8/14/10',
//     order: '6134',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '8/27/10',
//     order: '6197',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '8/6/10',
//     order: '6071',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '8/23/10',
//     order: '6544',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '8/14/10',
//     order: '6323',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '7/18/10',
//     order: '6510',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '4/29/10',
//     order: '6467',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '4/21/10',
//     order: 'G58',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '7/18/10',
//     order: '6510',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '4/29/10',
//     order: '6467',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '4/21/10',
//     order: 'G58',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '7/18/10',
//     order: '6510',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '4/29/10',
//     order: '6467',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '4/21/10',
//     order: 'G58',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '7/18/10',
//     order: '6510',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '4/29/10',
//     order: '6467',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '4/21/10',
//     order: 'G58',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '7/18/10',
//     order: '6510',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '4/29/10',
//     order: '6467',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '4/21/10',
//     order: 'G58',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '7/18/10',
//     order: '6510',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '4/29/10',
//     order: '6467',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '4/21/10',
//     order: 'G58',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '7/18/10',
//     order: '6510',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '4/29/10',
//     order: '6467',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
//   {
//     closedDate: '4/21/10',
//     order: 'G58',
//     status: 'Closed',
//     propertyAddress: '8502 Fredonia Rd, Inglewood',

//   },
// ];
// const FeeDetail = () => {
//     const [isModelOpen , setIsModelOpen] = useState(false)
//   return (
//     <>
//       {
//         <FilterPopup
//           isModelOpen={isModelOpen}
//           setIsModelOpen={setIsModelOpen}
//         />
//       }
//       <div className="w-full h-full gap-6 p-6">
//         <div className="flex justify-between w-full">
//           <Breadcrumb items={["Orders", "Fee Details"]} />
//           <div className=" flex  justify-end gap-4">
//             <CustomizableDropdown
//               options={["1", "2", "3", "4", "5", "6"]}
//               selected="06 Columns"
//               setSelected={() => {}}
//               width="154px"
//             />
//             <CustomizableDropdown
//               options={["1", "2", "3", "4", "5", "6"]}
//               selected="06 Columns"
//               setSelected={() => {}}
//               width="154px"
//             />
//             <CustomizableDropdown
//               options={["1", "2", "3", "4", "5", "6"]}
//               selected="06 Columns"
//               setSelected={() => {}}
//               width="154px"
//             />
//             <CustomizableDropdown
//               options={["1", "2", "3", "4", "5", "6"]}
//               selected="06 Columns"
//               setSelected={() => {}}
//               width="154px"
//             />
//             <CustomizableDropdown
//               options={["1", "2", "3", "4", "5", "6"]}
//               selected="06 Columns"
//               setSelected={() => {}}
//               width="154px"
//             />
//             <button
//               className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white "
//               onClick={(e) => {
//                 e.preventDefault();
//                 setIsModelOpen(true);
//               }}
//             >
//               <img src={filter} alt="" />
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-between w-full">
//           <StatsCard
//             heading="Orders"
//             stats={[
//               { value: "20.7k", text: "Total Orders" },
//               { value: "3k", text: "Total Amount" },
//               { value: "57k", text: "Avg /Order" },
//             ]}
//           />
//           <StatsCard
//             heading="Title"
//             stats={[
//               { value: "20.7k", text: "Total Orders" },
//               { value: "3k", text: "Total Amount" },
//               { value: "57k", text: "Avg /Order" },
//             ]}
//           />
//           <StatsCard
//             heading="Escrow"
//             stats={[
//               { value: "20.7k", text: "Total Orders" },
//               { value: "3k", text: "Total Amount" },
//               { value: "57k", text: "Avg /Order" },
//             ]}
//           />
//         </div>
//         <div className="flex flex-row gap-6 font-poppin">
//           <div className="shadow-(--cardShadow) pt-6 rounded-xl h-[900px]  w-[50%] grow">
//             <div className="flex justify-between  p-6 pb-0">
//               <TableTitle title="Orders" />
//               <CustomizableDropdown
//                 options={["1", "2", "3", "4", "5", "6"]}
//                 selected="06 Columns"
//                 setSelected={() => {}}
//                 width="154px"
//               />
//             </div>

//             <div className="overflow-scroll scroll-container h-[755px]">
//               <OrderTable data={sampleOrders} hasHeader={true} />
//             </div>
//             <div className="w-full bg-[#F3F3F3] flex justify-between sticky rounded-b-[10px] px-[24px] py-[16px]">
//               <span>Total</span>
//               <span>$782.01</span>
//             </div>
//             {/*  */}
//           </div>
//           <div className=" w-[50%]  flex flex-col grow gap-6">
//             <div className="shadow-(--cardShadow) pt-6 rounded-[10px] ">
//               <div className="px-6">
//                 <TableTitle title="Fee Type" />
//               </div>
//               <div className=" rounded-b-[10px] overflow-scroll scroll-container">

//                 <OrderTable
//                   hasHeader={true}
//                   hasFooter={true}
//                   tableFooter={[
//                     "total",
//                     "$948.55",
//                     "$450.54",
//                     "$275.43",
//                     "$406.27",
//                   ]}
//                   data={[
//                     {
//                       FeeCategory: "Title Charges",
//                       Amount: "$396.84",
//                       "Amount%": "$630.44",
//                       "OOC TFI": "$106.58",
//                       FeeDeposit: "$396.84",
//                     },
//                     {
//                       FeeCategory: "Title Fee Income",
//                       Amount: "$$475.84",
//                       "Amount%": "$630.44",
//                       "OOC TFI": "$106.58",
//                       FeeDeposit: "$396.84",
//                     },
//                   ]}
//                 />
//                 {/*  */}
//               </div>
//             </div>
//             {/*  */}
//             <div className="shadow-(--cardShadow) pt-6 rounded-[10px] ">
//               <div className="px-6">
//                 <TableTitle title="Fee Description" />
//               </div>
//               <div className=" rounded-b-[10px] overflow-scroll scroll-container">
//                 {/* //// */}
//                 <OrderTable
//                   hasHeader={true}
//                   hasFooter={true}
//                   tableFooter={[
//                     "total",
//                     "$948.55",
//                     "$450.54",
//                     "$275.43",
//                     "$406.27",
//                   ]}
//                   data={[
//                     {
//                       FeeCategory: "Title Charges",
//                       Amount: "$396.84",
//                       "Amount%": "$630.44",
//                       "OOC TFI": "$106.58",
//                       FeeDeposit: "$396.84",
//                     },
//                     {
//                       FeeCategory: "Title Fee Income",
//                       Amount: "$$475.84",
//                       "Amount%": "$630.44",
//                       "OOC TFI": "$106.58",
//                       FeeDeposit: "$396.84",
//                     },
//                   ]}
//                 />
//                 {/*  */}
//               </div>
//             </div>
//             {/*  */}
//             <div className="shadow-(--cardShadow) pt-6 rounded-[10px] ">
//               <div className="px-6 ">
//                 <TableTitle title="PCT-Westcor Commissions " />
//               </div>
//               <div className=" rounded-b-[10px] overflow-scroll scroll-container">
//                 {/* //// */}
//                 <OrderTable
//                   hasHeader={true}
//                   data={[
//                     {
//                       Underwriter: "PCTW",
//                       "Fee Income": "$351.02",
//                       "Non-Com.": "$490.51",
//                       "Net Fee In.": "$275.43",
//                       "Com.": "$169.43",
//                       "PCT Receiv.": "$351.02",
//                     },
//                   ]}
//                 />
//                 {/*  */}
//               </div>
//             </div>
//             {/*  */}
//             <div className="shadow-(--cardShadow) pt-6 rounded-[10px] ">
//               <div className="px-6">
//                 <TableTitle title="PCT-Westcor Commissions " />
//               </div>
//               <div className=" rounded-b-[10px] overflow-scroll scroll-container">
//                 {/* //// */}
//                 <OrderTable
//                   hasHeader={true}
//                   data={[
//                     {
//                       Underwriter: "PCTW",
//                       "Fee Income": "$351.02",
//                       "Non-Com.": "$490.51",
//                       "Net Fee In.": "$275.43",
//                       "Com.": "$169.43",
//                       "PCT Receiv.": "$351.02",
//                     },
//                   ]}
//                 />
//                 {/*  */}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="shadow-(--cardShadow) mt-6 pt-6 rounded-xl w-full">
//           {/* ////// */}
//           <div className="px-6">

//           <TableTitle title="Orders" />
//           </div>

//           <thead className="w-[100%] px-6">
//             <tr className="flex flex-row justify-between">
//               <tr className="text-start py-3 px-4 font-medium text-sm">
//                 Closed Date
//               </tr>
//               <tr className="text-start py-3 px-4 font-medium text-sm">
//                 Order
//               </tr>
//               <tr className="text-start py-3 px-4 font-medium text-sm">
//                 Status
//               </tr>
//               <tr className="text-start py-3 px-4 font-medium text-sm">
//                 Property Address
//               </tr>
//             </tr>
//           </thead>

//           <div className="overflow-scroll scroll-container h-[267px]">
//             <OrderTable data={sampleOrders} />
//           </div>
//           <div className="w-full bg-[#F3F3F3] flex justify-between sticky rounded-b-[10px] px-[24px] py-[16px]">
//             <span>Total</span>
//             <span>$782.01</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeeDetail;

import StatsCard from "../../components/orders/StatsCard";
import OrderTable, { Order } from "../../components/orders/OrderTable";
import TableTitle from "../../components/ui/typography/TableTitle";
import Breadcrumb from "../../components/common/BreadCrumb";
import FilterPopup from "../../components/ui/FilterPopup";
import { useState } from "react";
import { useGetOrdersQuery } from "../../lib/rtkQuery/orderApi";
import MainTitle from "../../components/ui/typography/MainTitle";
import TableSkeleton from "../../components/ui/skeleton/TableSkeleton";
import NoDataRow from "../../components/ui/NoDataRow";
import CardLayout from "../../components/layouts/CardLayout";
import Pagination from "../../components/common/Pagination";
import CustomizableSkeleton from "../../components/ui/skeleton/CustomizableSkeleton";
import {
  formatNumber,
  formatNumberWithoutDecimals,
} from "../../utils/functions";

const FeeDetail = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string>("");
  const [page, setPage] = useState(1);

  const {
    data: orderData,
    isLoading,
    refetch,
  } = useGetOrdersQuery({
    status: "",
    type: "",
    propertyCounty: "",
    transactionType: "",
    page: 1,
    limit: 10,
    keyword: "",
    titleOffice: "",
    underwriter: "",
    orderId: selectedOrderId,
  });
  console.log(orderData, "==data==");

  const handleRowClick = (orderId: string) => {
    if (selectedOrderId !== orderId) {
      setSelectedOrderId(orderId);
    }
  };
  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    if (newPage >= 1 && newPage <= orderData?.totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="mb-9">
      {
        <FilterPopup
          isModelOpen={isModelOpen}
          setIsModelOpen={setIsModelOpen}
        />
      }
      <div className="w-full h-full gap-6 p-6">
        <div className="flex justify-between w-full">
          <Breadcrumb items={["Orders", "Fee Details"]} />
        </div>
        {isLoading ? (
          <div className="w-full flex gap-4 mt-2">
            <CustomizableSkeleton height={156} width="32%" />
            <CustomizableSkeleton height={156} width="32%" />
            <CustomizableSkeleton height={156} width="32%" />
          </div>
        ) : (
          <div className="w-full flex gap-4 mt-2">
            <StatsCard
              heading="Orders"
              stats={[
                {
                  value: `${formatNumberWithoutDecimals(
                    orderData?.totalOrderCount
                  )}`,
                  text: "Total Orders",
                },
                {
                  value: `$${formatNumber(orderData?.totalFee)}`,
                  text: "Total Amount",
                },
                { value: "0", text: "Avg /Order" },
              ]}
            />
            <StatsCard
              heading="Title"
              stats={[
                {
                  value: `${formatNumberWithoutDecimals(
                    orderData?.titleChargesOrderCount
                  )}`,
                  text: "Total Units",
                },
                {
                  value: `$${formatNumber(orderData?.titleChargesTotalFee)}`,
                  text: "Title charges",
                },
                { value: "0", text: "Avg Title " },
              ]}
            />
            <StatsCard
              heading="Escrow"
              stats={[
                {
                  value: `${formatNumberWithoutDecimals(
                    orderData?.escrowChargesOrderCount
                  )}`,
                  text: "Escrow Units",
                },
                {
                  value: `$${formatNumber(orderData?.escrowChargesTotalFee)}`,
                  text: "Escrow charges",
                },
                { value: "0", text: "Avg Escrow" },
              ]}
            />
          </div>
        )}
        <div className="flex flex-row  justify-between w-full font-poppin">
          <CardLayout className="w-[49%] max-h-[810px] h-auto">
            <MainTitle title="Orders" />
            <div className="w-full overflow-y-auto max-h-[700px] ">
              <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F] mt-7">
                <thead className="text-sm font-normal text-start  border-b-[1px] border-[#F4EFE9] ">
                  <tr>
                    <th className="text-start font-medium min-w-[43px]">Id</th>
                    <th className="text-start font-medium px-4 min-w-[120px]">
                      Closed Date
                    </th>
                    <th className="text-start font-medium px-4 min-w-[100px]">
                      Status
                    </th>
                    <th className="text-start font-medium px-4 min-w-[300px]">
                      Property Address
                    </th>
                    <th className="text-start font-medium px-4 min-w-[155px]">
                      Transaction type
                    </th>
                    <th className="text-start font-medium px-4 min-w-[150px]">
                      Order type
                    </th>
                    <th className="text-start font-medium px-4 min-w-[70px]">
                      Fees
                    </th>
                    <th className="text-start font-medium px-4 min-w-[200px]">
                      County
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {isLoading ? (
                    <TableSkeleton columns={8} />
                  ) : (
                    <>
                      {orderData?.orders?.length === 0 ? (
                        <NoDataRow colSpan={8} />
                      ) : (
                        <>
                          {orderData?.orders?.map((e: any, i: number) => (
                            <>
                              <tr
                                key={e.id}
                                onClick={() => handleRowClick(e.id)}
                                className={`font-Jakarta text-sm font-normal text-[#15120F] h-[60px] border-b-[1px] border-[#F4EFE9] cursor-pointer  
            transition-colors duration-500 ease-in-out ${
              selectedOrderId === e.id
                ? "bg-gray-100"
                : "bg-white hover:bg-gray-100"
            }`}
                              >
                                <td
                                  className="cursor-pointer"
                                  style={{
                                    maxWidth: "50px",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                  }}
                                  title={e.id}
                                >
                                  {e.id}
                                </td>
                                <td className="px-4">{e.closedDate}</td>
                                <td className="px-4">{e.fileStatus}</td>
                                <td className="px-4">{e.propertyAddress}</td>
                                <td className="px-4">{e.transactionType}</td>
                                <td className="px-4">{e.fileType}</td>
                                <td className="px-4">fees</td>
                                <td className="px-4">{e.propertyCounty}</td>
                              </tr>
                            </>
                          ))}
                        </>
                      )}
                    </>
                  )}
                </tbody>
              </table>
            </div>
            <Pagination
              onPageChange={handlePageChange}
              pageCount={orderData?.totalPages}
            />
          </CardLayout>

          <div className=" w-[49%]  flex flex-col  gap-6">
            <CardLayout className="w-full">
              <MainTitle title="Fee Type" />
              <div className="w-full overflow-y-auto max-h-[300px]">
                <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F]">
                  <thead className="text-sm font-normal text-start border-b-[1px] border-[#F4EFE9] bg-white sticky top-0 z-10">
                    <tr>
                      <th className="text-start font-medium">Fee Category</th>
                      <th className="text-start font-medium px-2"> Amount</th>
                      <th className="text-start font-medium px-2">Amount %</th>
                    </tr>
                  </thead>

                  <tbody>
                    {isLoading ? (
                      <TableSkeleton columns={8} />
                    ) : (
                      <>
                        {orderData?.feeType?.length === 0 ? (
                          <NoDataRow colSpan={8} />
                        ) : (
                          <>
                            {orderData?.feeType
                              ?.filter((e: any) => e.feeCategory !== "Total")
                              .map((e: any, i: number) => (
                                <tr
                                  key={i}
                                  className="font-Jakarta text-sm font-normal text-[#15120F] h-[60px] border-b-[1px] border-[#F4EFE9] cursor-pointer  
      transition-colors duration-300 ease-in-out hover:bg-gray-100"
                                >
                                  <td>{e.feeCategory}</td>
                                  <td className="px-2">
                                    {formatNumberWithoutDecimals(e.amount)}
                                  </td>
                                  <td className="px-2">
                                    {formatNumber(e.amountPercentage)}
                                  </td>
                                </tr>
                              ))}
                          </>
                        )}
                      </>
                    )}
                  </tbody>

                  <tfoot>
                    <tr className="bg-[#F3F3F3]">
                      <td className="py-3 px-2 font-medium text-sm text-[#15120F]">
                        Total
                      </td>
                      <td></td>
                      <td
                        className="py-3  font-medium text-sm text-[#15120F]"
                        colSpan={3}
                      >
                        {formatNumber(orderData?.totalFee) || ""}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </CardLayout>

            {/*  */}
            <CardLayout className="w-full">
              <MainTitle title="Fee Description" />
              <div className="w-full overflow-y-auto max-h-[300px]">
                <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F]">
                  <thead className="text-sm font-normal text-start border-b-[1px] border-[#F4EFE9] bg-white sticky top-0 z-10">
                    <tr>
                      <th className="text-start font-medium">Account</th>
                      <th className="text-start font-medium px-2"> Amount</th>
                      <th className="text-start font-medium px-2">Category</th>
                      <th className="text-start font-medium"> Description</th>
                    </tr>
                  </thead>

                  <tbody>
                    {isLoading ? (
                      <TableSkeleton columns={8} />
                    ) : (
                      <>
                        {orderData?.feeDescriptions?.length === 0 ? (
                          <NoDataRow colSpan={8} />
                        ) : (
                          <>
                            {orderData?.feeDescriptions?.map(
                              (e: any, i: number) => (
                                <tr
                                  key={i}
                                  className={`font-Jakarta text-sm font-normal text-[#15120F] h-[60px] border-b-[1px] border-[#F4EFE9] cursor-pointer  
                        transition-colors duration-500 ease-in-out bg-gray-300"
                           `}
                                >
                                  <td>{e.account}</td>
                                  <td className="px-2">{e.feeAmount}</td>
                                  <td className="px-2">{e.feeCategory}</td>
                                  <td>{e.feeDescription}</td>
                                </tr>
                              )
                            )}
                          </>
                        )}
                      </>
                    )}
                  </tbody>

                  <tfoot>
                    <tr className="bg-[#F3F3F3]">
                      <td className="py-3 px-2 font-medium text-sm text-[#15120F]">
                        Total
                      </td>
                      <td></td>
                      <td></td>
                      <td
                        className="py-3  font-medium text-sm text-[#15120F]"
                        colSpan={4}
                      >
                        {formatNumber(orderData?.totalFee) || ""}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </CardLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeDetail;
