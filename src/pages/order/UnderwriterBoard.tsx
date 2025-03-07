import { useState } from "react";
import Breadcrumb from "../../components/common/BreadCrumb";
import ProgressBar from "../../components/orders/ProgressBar";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";
import CardLayout from "../../components/layouts/CardLayout";
import MainTitle from "../../components/ui/typography/MainTitle";
import TableSkeleton from "../../components/ui/skeleton/TableSkeleton";
import NoDataRow from "../../components/ui/NoDataRow";
import {
  useGetOrdersQuery,
  useGetUnderwritersQuery,
} from "../../lib/rtkQuery/orderApi";
import Pagination from "../../components/common/Pagination";

const UnderwriterBoard = () => {
  const [page, setPage] = useState(1);
  const { data: underwriterData } = useGetUnderwritersQuery();
  const {
    data: orderData,
    isLoading,
    refetch,
  } = useGetOrdersQuery({
    page,
    limit: 10,
    status: "",
    type: "",
    propertyCounty: "",
    transactionType: "",
    keyword: "",
  });

  const data: any[] = [
    {
      name: "WFG Title Insurance Co...",
      orders: 400,
      orderPercentage: "35.16%",
      fees: 400,
      feePercentage: "66%",
    },
    {
      name: "Westcor Land Title In ...",
      orders: 35,
      orderPercentage: "68.20%",
      fees: 35,
      feePercentage: "18.9%",
    },
    {
      name: "Work Share",
      orders: 280,
      orderPercentage: "75%",
      fees: 280,
      feePercentage: "22.07%",
    },
    {
      name: "PCT-Westcor",
      orders: 200,
      orderPercentage: "23.05%",
      fees: 200,
      feePercentage: "50%",
    },
  ];

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    if (newPage >= 1 && newPage <= orderData?.totalPages) {
      setPage(newPage);
    }
  };
  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Orders", "Underwiter Board"]} />

      <div className="flex w-full">
        <div className="shadow-(--cardShadow) rounded-lg flex flex-col gap-4 min-w-[24%] w-auto  px-4 py-5 my-5">
          <h2 className="text-lg text-(--secondary) font-semibold">Title</h2>
          <div className="flex gap-3 ">
            <div className="text-(--secondary) font-semibold text-2xl flex flex-col gap-2.5">
              20.7k{" "}
              <span className="font-normal text-black text-xs">
                Title Units
              </span>
            </div>
            <div className="text-(--secondary) font-semibold text-2xl flex flex-col gap-2.5">
              20.7k{" "}
              <span className="font-normal text-black text-xs">
                Title Revenue
              </span>
            </div>
            <div className="text-(--secondary) font-semibold text-2xl flex flex-col gap-2.5">
              20.7k{" "}
              <span className="font-normal text-black text-xs">
                Avg Title Revenue
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between flex-col">
        <div className="w-full flex justify-between flex-wrap gap-2">
          <CardLayout className="w-[48%]">
            <MainTitle title="Underwriter" />
            <div className="w-full overflow-y-auto max-h-[300px]">
              <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F]">
                <thead className="text-sm font-normal text-start border-b-[1px] border-[#F4EFE9] bg-white sticky top-0 z-10">
                  <tr>
                    <th className="text-start font-medium">Underwriter</th>
                    <th className="text-start font-medium">Orders</th>
                    <th className="text-start font-medium">
                      <div className="flex gap-2 items-center">
                        Orders <span>%</span>
                      </div>
                    </th>
                    <th className="text-start font-medium">Fees</th>
                    <th className="text-start font-medium">
                      <div className="flex gap-2 items-center">
                        Fees <span>%</span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {isLoading ? (
                    <TableSkeleton columns={8} />
                  ) : (
                    <>
                      {underwriterData?.data?.underwriters?.length === 0 ? (
                        <NoDataRow colSpan={8} />
                      ) : (
                        <>
                          {underwriterData?.data?.underwriters?.map(
                            (e: any, i: number) => (
                              <tr
                                key={e.id}
                                className="font-Jakarta text-sm font-normal text-[#15120F] h-[55px] border-b-[1px] border-[#F4EFE9] cursor-pointer bg-white hover:bg-gray-100 transition-colors duration-500 ease-in-out"
                              >
                                <td>{e.underwriter}</td>
                                <td>{e.orderCount}</td>
                                <td>{Number(e.orderPercentage).toFixed(2)}</td>
                                <td>{e.orderFeeTotal}</td>
                                <td>{Number(e.feePercentage).toFixed(2)}</td>
                                <td>{e.lastAccess}</td>
                              </tr>
                            )
                          )}
                        </>
                      )}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </CardLayout>

          <div className="font-sm shadow-(--cardShadow) p-3 rounded-xl w-[49%]">
            <h1 className="text-lg font-semibold leading-[27px] px-2">
              Office
            </h1>
            <table className="w-full">
              <thead className=" font-medium ">
                <th className="font-medium text-sm text-start p-2.5">Office</th>
                <th className="font-medium text-sm text-start">Office</th>
                <th className="font-medium text-sm text-start">Order</th>
                <th className="font-medium text-sm text-start">Orders%</th>
                <th className="font-medium text-sm text-start">Fees%</th>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className=" border-t ">
                    <td className="font-normal text-sm text-start p-3">
                      {item.name}
                    </td>
                    <td>
                      <ProgressBar maxValue={400} currentValue={item.orders} />
                    </td>
                    <td className="font-normal text-sm text-start">
                      {item.orderPercentage}
                    </td>
                    <td>
                      <ProgressBar maxValue={400} currentValue={item.fees} />
                    </td>
                    <td className="font-normal text-sm text-start">
                      {item.feePercentage}
                    </td>
                  </tr>
                ))}
                <tr className=" bg-gray-100 font-semibold text-sm">
                  <td className="p-2.5">Total</td>
                  <td className="p-2.5">900</td>
                  <td className="p-2.5">100%</td>
                  <td className="p-2.5">900</td>
                  <td className="p-2.5">100%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="font-sm shadow-(--cardShadow) p-3 rounded-xl w-[49%]">
            <h1 className="text-lg font-semibold leading-[27px] px-2">
              County
            </h1>
            <table className="w-full">
              <thead className=" font-medium ">
                <th className="font-medium text-sm text-start p-2.5">County</th>
                <th className="font-medium text-sm text-start">Orders</th>
                <th className="font-medium text-sm text-start">Orders%</th>
                <th className="font-medium text-sm text-start">Fees</th>
                <th className="font-medium text-sm text-start">Fees%</th>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className=" border-t ">
                    <td className="font-normal text-sm text-start p-3">
                      {item.name}
                    </td>
                    <td>
                      <ProgressBar maxValue={400} currentValue={item.orders} />
                    </td>
                    <td className="font-normal text-sm text-start">
                      {item.orderPercentage}
                    </td>
                    <td>
                      <ProgressBar maxValue={400} currentValue={item.fees} />
                    </td>
                    <td className="font-normal text-sm text-start">
                      {item.feePercentage}
                    </td>
                  </tr>
                ))}
                <tr className=" bg-gray-100 font-semibold text-sm">
                  <td className="p-2.5">Total</td>
                  <td className="p-2.5">900</td>
                  <td className="p-2.5">100%</td>
                  <td className="p-2.5">900</td>
                  <td className="p-2.5">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="font-sm shadow-(--cardShadow) p-3 rounded-xl w-full my-7">
          <div className="flex justify-between items-center">
            <MainTitle title="Orders" />
          </div>
          <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F] mt-7">
            <thead className="text-sm font-normal text-start  border-b-[1px] border-[#F4EFE9] ">
              <tr>
                <th className="text-start font-medium  ">Id</th>
                <th className="text-start font-medium  ">Closed Date</th>
                <th className="text-start font-medium ">Status</th>
                <th className="text-start font-medium ">Property Address</th>
                <th className="text-start font-medium ">Transaction type</th>
                <th className="text-start font-medium ">Order type</th>
                <th className="text-start font-medium ">Fees</th>
                <th className="text-start font-medium ">County</th>
                {/* <TableCell content={"Id"} maxWidth="40px" />
                <TableCell content={"Closed Date"} maxWidth="80px" />
                <TableCell content={"Status"} maxWidth="80px" />
                <TableCell content={"Property Address"} maxWidth="80px" />
                <TableCell content={"Transaction type"} maxWidth="80px" />
                <TableCell content={"Order type"} maxWidth="70px" />
                <TableCell content={"County"} maxWidth="80px" /> */}
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
                            className="font-Jakarta text-sm font-normal text-[#15120F] h-[55px] border-b-[1px] border-[#F4EFE9] cursor-pointer  
                    bg-white hover:bg-gray-100 transition-colors duration-500 ease-in-out"
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
                            <td>{e.closedDate}</td>
                            <td>{e.fileStatus}</td>
                            <td>{e.propertyAddress}</td>
                            <td>{e.transactionType}</td>
                            <td>{e.fileType}</td>
                            <td>fees</td>
                            <td>{e.propertyCounty}</td>
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

        <div className="w-full flex justify-end gap-5 items-center">
          <Pagination
            onPageChange={handlePageChange}
            pageCount={orderData?.totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default UnderwriterBoard;
