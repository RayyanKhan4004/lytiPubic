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
import Breadcrumb from "../../components/common/BreadCrumb";
import FilterPopup from "../../components/ui/FilterPopup";
import { useState } from "react";
import { useGetOrdersQuery } from "../../lib/rtkQuery/orderApi";
import MainTitle from "../../components/ui/typography/MainTitle";
import CardLayout from "../../components/layouts/CardLayout";
import Pagination from "../../components/common/Pagination";
import CustomizableSkeleton from "../../components/ui/skeleton/CustomizableSkeleton";
import {
  formatNumber,
  formatNumberWithoutDecimals,
} from "../../utils/functions";
import DataTable from "react-data-table-component";
import { TableColumn } from "react-data-table-component";
import TablesSkeleton from "../../components/ui/skeleton/TablesSkeleton";
import add from "../../assets/icons/Add.svg";
import minus from "../../assets/icons/Minus.svg";
import { FiPlus, FiMinus } from "react-icons/fi";

const FeeDetail = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string>("");
  const [page, setPage] = useState(1);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

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

  const handleRowClick = (orderId: string) => {
    console.log("==click==", orderId);

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
  const handleReset = () => {
    setSelectedOrderId("");
  };

  const feeDescriptionColumn: TableColumn<any>[] = [
    {
      name: "Account",
      selector: (row: any) => row.account,
      cell: (row: any) => (
        <div className="rowStyle w-[250px]" title={row.account}>
          {row.account}
        </div>
      ),
      sortable: false,
    },
    {
      name: "Amount",
      selector: (row: any) => row.feeAmount,
      cell: (row: any) => (
        <div className="rowStyle w-[100px]" title={row.feeAmount}>
          {row.feeAmount}
        </div>
      ),
      sortable: false,
      maxWidth: "100px",
    },
    {
      name: "Category",
      selector: (row: any) => row.feeCategory,
      cell: (row: any) => (
        <div className="rowStyle w-[150px]" title={row.feeCategory}>
          {row.feeCategory}
        </div>
      ),
      sortable: false,
      maxWidth: "150px",
    },
    {
      name: "Description",
      selector: (row: any) => row.feeDescription,
      cell: (row: any) => (
        <div className="rowStyle w-[150px]" title={row.feeDescription}>
          {row.feeDescription}
        </div>
      ),
      maxWidth: "150px",
    },
  ];

  const orderColumns: TableColumn<any>[] = [
    {
      name: "Id",
      selector: (row: any) => row.id,
      cell: (row: any) => (
        <div
          className="rowStyle w-[30px]"
          title={String(row.id)}
          onClick={(e) => {
            e.stopPropagation();
            handleRowClick(row.id);
          }}
        >
          {row.id}
        </div>
      ),
      maxWidth: "30px",
    },
    {
      name: "Closed Date",
      selector: (row: any) => row.closedDate || "",
      cell: (row: any) => (
        <div
          className="rowStyle w-[120px]"
          title={row.closedDate || ""}
          onClick={(e) => e.stopPropagation()}
        >
          {row.closedDate}
        </div>
      ),
      maxWidth: "120px",
    },
    {
      name: "Status",
      selector: (row: any) => row.fileStatus || "",
      cell: (row: any) => (
        <div
          className="rowStyle w-[100px]"
          title={row.fileStatus || ""}
          onClick={(e) => {
            e.stopPropagation();
            handleRowClick(row.id);
          }}
        >
          {row.fileStatus}
        </div>
      ),
      maxWidth: "100px",
    },
    {
      name: "Property Address",
      selector: (row: any) => row.propertyAddress || "",
      cell: (row: any) => (
        <div
          className="rowStyle w-[300px]"
          title={row.propertyAddress || ""}
          onClick={(e) => {
            e.stopPropagation();
            handleRowClick(row.id);
          }}
        >
          {row.propertyAddress}
        </div>
      ),
      maxWidth: "300px",
    },
    {
      name: "Transaction Type",
      selector: (row: any) => row.transactionType || "",
      cell: (row: any) => (
        <div
          className="rowStyle w-[155px]"
          title={row.transactionType || ""}
          onClick={(e) => {
            e.stopPropagation();
            handleRowClick(row.id);
          }}
        >
          {row.transactionType}
        </div>
      ),
      maxWidth: "155px",
    },
    {
      name: "Order Type",
      selector: (row: any) => row.fileType || "",
      cell: (row: any) => (
        <div
          className="rowStyle w-[150px]"
          title={row.fileType || ""}
          onClick={(e) => {
            e.stopPropagation();
            handleRowClick(row.id);
          }}
        >
          {row.fileType}
        </div>
      ),
      maxWidth: "150px",
    },
    {
      name: "County",
      selector: (row: any) => row.propertyCounty || "",
      cell: (row: any) => (
        <div
          className="rowStyle w-[200px]"
          title={row.propertyCounty || ""}
          onClick={(e) => e.stopPropagation()}
        >
          {row.propertyCounty}
        </div>
      ),
      maxWidth: "200px",
    },
  ];

  const feeTypeColumn: TableColumn<any>[] = [
    {
      name: "Sums",
      cell: (row: any) => (
        <button
          className=" border border-secondary flex items-center cursor-pointer text-sm h-[24px] w-[24px] justify-center rounded-md text-gray-700 bg-(--secondary)"
          onClick={() =>
            setExpandedRow((prev) =>
              prev === row.feeCategory ? null : row.feeCategory
            )
          }
          disabled={!row.accountSums?.length}
        >
          {expandedRow === "Title Charges" ? (
            <FiMinus size={16} color="red" />
          ) : (
            <FiPlus size={16} color="red" />
          )}
        </button>
      ),
      sortable: false,
      maxWidth: "30px",
    },

    {
      name: "Fee Category",
      selector: (row: any) => row.feeCategory,
      cell: (row: any) => (
        <div className="rowStyle w-[230px]" title={row.feeCategory}>
          {row.feeCategory}
        </div>
      ),
      sortable: false,
      maxWidth: "180px",
    },
    {
      name: "Amount",
      selector: (row: any) => row.amount,
      cell: (row: any) => (
        <div
          className="rowStyle w-[120px]"
          title={formatNumberWithoutDecimals(row.amount)}
        >
          {formatNumberWithoutDecimals(row.amount)}
        </div>
      ),
      sortable: false,
      maxWidth: "120px",
    },
    {
      name: "Amount %",
      selector: (row: any) => row.amountPercentage,
      cell: (row: any) => (
        <div
          className="rowStyle w-[100px]"
          title={formatNumber(row.amountPercentage)}
        >
          {formatNumber(row.amountPercentage)}
        </div>
      ),
      sortable: false,
      maxWidth: "180px",
    },
    {
      name: "OOC TFI",
      selector: (row: any) => 0,
      sortable: false,
    },
    {
      name: "Fee Deposit",
      selector: (row: any) => 0,
      sortable: false,
    },
  ];
  const ExpandedComponent = ({ data }: { data: any }) => (
    <div className="p-4 bg-gray-100 rounded">
      <h3 className="font-semibold text-gray-700 mb-2">Account Sums</h3>
      <DataTable
        columns={[
          {
            name: "Account",
            selector: (row: any) => row.account,
            sortable: false,
          },
          {
            name: "Total Amount",
            selector: (row: any) => row.totalAmount,
            cell: (row: any) => formatNumberWithoutDecimals(row.totalAmount),
            sortable: false,
          },
        ]}
        data={data.accountSums}
        noDataComponent={
          <div className="text-gray-500">No accounts available</div>
        }
        striped
        highlightOnHover
      />
    </div>
  );

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
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-600 active:scale-95 transition"
          >
            Reset
          </button>
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
          <CardLayout className="w-[49%] max-h-[710px] h-auto">
            <MainTitle title="Orders" />

            <div className="w-full overflow-y-auto max-h-[700px]">
              {isLoading ? (
                <TablesSkeleton
                  columnCount={orderColumns.length}
                  rowCount={10}
                />
              ) : (
                <div className="w-full">
                  <DataTable
                    columns={orderColumns}
                    data={orderData?.orders || []}
                    highlightOnHover
                    pointerOnHover
                    striped
                    className="head-row table-row"
                    onRowClicked={(row) => {
                      console.log("Row clicked:", row);
                      handleRowClick(row.id);
                    }}
                    noDataComponent={
                      <div className="w-full text-center py-6 px-6 text-gray-500 bg-gray-100 rounded">
                        No data found
                      </div>
                    }
                    fixedHeader
                    fixedHeaderScrollHeight="300px"
                  />
                </div>
              )}
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
                {isLoading ? (
                  <TablesSkeleton
                    columnCount={feeTypeColumn.length}
                    rowCount={3}
                  />
                ) : (
                  <DataTable
                    columns={feeTypeColumn}
                    data={
                      orderData?.feeType?.filter(
                        (e: any) => e.feeCategory !== "Total"
                      ) || []
                    }
                    highlightOnHover
                    striped
                    className="head-row table-row"
                    noDataComponent={
                      <div className="w-full text-center py-6 px-6 text-gray-500 bg-gray-100 rounded">
                        No data found
                      </div>
                    }
                    expandableRows
                    expandableRowDisabled={(row) => !row.accountSums?.length}
                    expandableRowsComponent={ExpandedComponent}
                    expandableRowsHideExpander // Hides the default expand button
                    expandableRowExpanded={(row) =>
                      expandedRow === row.feeCategory
                    } // Controls expansion manually
                    onRowExpandToggled={(expanded, row) =>
                      setExpandedRow(expanded ? row.feeCategory : null)
                    }
                  />
                )}
              </div>
              <div className="bg-[#F3F3F3] py-3 px-2 font-medium text-sm text-[#15120F]">
                <span>Total:</span>
                <span className="float-right">
                  {formatNumber(orderData?.totalFee) || ""}
                </span>
              </div>
            </CardLayout>

            <CardLayout className="w-full">
              <MainTitle title="Fee Description" />

              <div className="w-full overflow-y-auto max-h-[300px]">
                {isLoading ? (
                  <TablesSkeleton
                    columnCount={feeDescriptionColumn.length}
                    rowCount={3}
                  />
                ) : (
                  <div className="w-full">
                    <DataTable
                      columns={feeDescriptionColumn}
                      data={orderData?.feeDescriptions || []}
                      highlightOnHover
                      striped
                      className="head-row table-row"
                      noDataComponent={
                        <div
                          className="w-full text-center py-6 px-6 text-gray-500 bg-gray-100 rounded"
                          style={{ minWidth: "100%", width: "100%" }}
                        >
                          No data found
                        </div>
                      }
                      fixedHeader
                      fixedHeaderScrollHeight="300px"
                    />
                  </div>
                )}
              </div>

              <div className="bg-[#F3F3F3] py-3 px-2 font-medium text-sm text-[#15120F]">
                <span>Total:</span>
                <span className="float-right">
                  {" "}
                  {formatNumber(orderData?.totalFee) || ""}
                </span>
              </div>
            </CardLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeDetail;
