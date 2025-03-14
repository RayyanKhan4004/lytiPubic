import { useState } from "react";

// Components
import Breadcrumb from "../../components/common/BreadCrumb";
import ProgressBar from "../../components/orders/ProgressBar";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";
import CardLayout from "../../components/layouts/CardLayout";
import MainTitle from "../../components/ui/typography/MainTitle";
import TableSkeleton from "../../components/ui/skeleton/TableSkeleton";
import NoDataRow from "../../components/ui/NoDataRow";
import Pagination from "../../components/common/Pagination";
import StatsCard from "../../components/orders/StatsCard";

// RTK Queries
import {
  useGetOrdersQuery,
  useGetPropertyCountiesQuery,
  useGetTitleOfficesQuery,
  useGetUnderwritersQuery,
} from "../../lib/rtkQuery/orderApi";
import CustomizableSkeleton from "../../components/ui/skeleton/CustomizableSkeleton";

const UnderwriterBoard = () => {
  // State management
  const [page, setPage] = useState(1);
  const [selectedOrderId, setSelectedOrderId] = useState<string>("");
  const [selectedTitleOffice, setSelectedTitleOffice] = useState<string>("");
  const [selectedUnderwriterId, setSelectedUnderwriterId] = useState<
    number | null
  >(null);
  const [selectedPropertyCounty, setSelectedPropertyCounty] =
    useState<string>("");
  const [selectedTitleOfficeId, setSelectedTitleOfficeId] = useState<
    number | null
  >(null);
  const [selectedPropertyCountyId, setSelectedPropertyCountyId] = useState<
    number | null
  >(null);
  const [selectedUnderwriter, setSelectedUnderwriter] = useState<string>("");

  // API queries
  const { data: underwriterData, isLoading: underwriterDataLoading } =
    useGetUnderwritersQuery({ orderId: selectedOrderId });
  const { data: titleOfficeData, isLoading: titleOfficeDataLoading } =
    useGetTitleOfficesQuery({ orderId: selectedOrderId });
  const { data: propertyCountyData, isLoading: propertyCountyDataLoading } =
    useGetPropertyCountiesQuery({ orderId: selectedOrderId });
  const {
    data: orderData,
    isLoading,
    refetch,
  } = useGetOrdersQuery({
    page,
    limit: 10,
    status: "",
    type: "",
    transactionType: "",
    keyword: "",
    propertyCounty: selectedPropertyCounty,
    titleOffice: selectedTitleOffice,
    underwriter: selectedUnderwriter,
  });

  // Handlers
  const handleRowClick = (orderId: string) => {
    if (selectedOrderId !== orderId) {
      setSelectedOrderId(orderId);
    }
  };

  const handleTitleOfficeClick = (id: number, titleOffice: string) => {
    setSelectedTitleOfficeId(id);
    setSelectedTitleOffice(titleOffice);
  };

  const handlePropertyCountyClick = (id: number, propertyCounty: string) => {
    setSelectedPropertyCountyId(id);
    setSelectedPropertyCounty(propertyCounty);
  };

  const handleUnderwriterClick = (id: number, underwriter: string) => {
    setSelectedUnderwriterId(id);
    setSelectedUnderwriter(underwriter);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    if (newPage >= 1 && newPage <= orderData?.totalPages) {
      setPage(newPage);
    }
  };

  const handleReset = () => {
    setSelectedOrderId("");
    setSelectedTitleOffice("");
    setSelectedUnderwriterId(null);
    setSelectedPropertyCounty("");
    setSelectedTitleOfficeId(null);
    setSelectedPropertyCountyId(null);
    setSelectedUnderwriter("");
  };
  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <div className="flex  justify-between">
        <Breadcrumb items={["Orders", "Underwiter Board"]} />
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
        <div className="w-full flex gap-4 mt-2 justify-between">
          <StatsCard
            heading="Orders"
            stats={[
              {
                value: `${orderData?.totalOrderCount || 0}`,
                text: "Total Orders",
              },
              {
                value: `${orderData?.totalFee || 0}`,
                text: "Total Amount",
              },
              { value: "57k", text: "Avg /Order" },
            ]}
          />
          <StatsCard
            heading="Title"
            stats={[
              {
                value: `${orderData?.titleChargesOrderCount || 0}`,
                text: "Total Units",
              },
              {
                value: `${orderData?.titleChargesTotalFee || 0}`,
                text: "Title charges",
              },
              { value: "27k", text: "Avg Title " },
            ]}
          />
          <StatsCard
            heading="Escrow"
            stats={[
              {
                value: `${orderData?.escrowChargesOrderCount || 0}`,
                text: "Escrow Units",
              },
              {
                value: `${orderData?.escrowChargesTotalFee || 0}`,
                text: "Escrow charges",
              },
              { value: "9k", text: "Avg Escrow" },
            ]}
          />
        </div>
      )}

      <div className="w-full flex justify-between ">
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
        <div className="w-[49%] gap-4 flex flex-col">
          <CardLayout className="w-full">
            <MainTitle title="Underwriter" />
            <div className="w-full overflow-y-auto max-h-[300px]">
              <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F]">
                <thead className="text-sm font-normal text-start border-b-[1px] border-[#F4EFE9] bg-white sticky top-0 z-10">
                  <tr>
                    <th className="text-start font-medium">Underwriter</th>
                    <th className="text-start font-medium pr-2">Orders</th>
                    <th className="text-start font-medium px-2">
                      <div className="flex gap-0.5 items-center">
                        Orders <span>%</span>
                      </div>
                    </th>
                    <th className="text-start font-medium">Fees</th>
                    <th className="text-start font-medium  pr-2">
                      <div className="flex gap-0.5 items-center">
                        Fees <span>%</span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {underwriterDataLoading ? (
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
                                key={i}
                                onClick={() =>
                                  handleUnderwriterClick(i, e.underwriter)
                                }
                                className={`font-Jakarta text-sm font-normal text-[#15120F] h-[60px] border-b-[1px] border-[#F4EFE9] cursor-pointer  
            transition-colors duration-500 ease-in-out ${
              selectedUnderwriterId === i
                ? "bg-gray-300"
                : "bg-white hover:bg-gray-100"
            }`}
                              >
                                <td>{e.underwriter}</td>
                                <td>{e.orderCount}</td>
                                <td className="px-2">
                                  {Number(e.orderPercentage).toFixed(2)}
                                </td>
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

                <tfoot>
                  <tr className="bg-[#F3F3F3]">
                    <td className="py-3 px-4 font-medium text-sm text-[#15120F]">
                      Total
                    </td>
                    <td className="py-3  font-medium text-sm text-[#15120F]">
                      {underwriterData?.data?.totalOrderCount || ""}
                    </td>
                    <td className="py-3 px-2 font-medium text-sm text-[#15120F]">
                      {underwriterData?.data?.totalOrderPercentage || ""}
                    </td>
                    <td className="py-3 px-4 font-medium text-sm text-[#15120F]">
                      {underwriterData?.data?.totalFeeCount || ""}
                    </td>
                    <td className="py-3 px-4 font-medium text-sm text-[#15120F]">
                      {underwriterData?.data?.totalFeePercentage || ""}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </CardLayout>

          <CardLayout className="w-full">
            <MainTitle title="Office" />
            <div className="w-full overflow-y-auto max-h-[300px]">
              <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F]">
                <thead className="text-sm font-normal text-start border-b-[1px] border-[#F4EFE9] bg-white sticky top-0 z-10">
                  <tr>
                    <th className="text-start font-medium">Office</th>
                    <th className="text-start font-medium pr-2">Orders</th>
                    <th className="text-start font-medium px-2">
                      <div className="flex gap-0.5 items-center">
                        Orders <span>%</span>
                      </div>
                    </th>
                    <th className="text-start font-medium">Fees</th>
                    <th className="text-start font-medium  pr-2">
                      <div className="flex gap-0.5 items-center">
                        Fees <span>%</span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {titleOfficeDataLoading ? (
                    <TableSkeleton columns={8} />
                  ) : (
                    <>
                      {titleOfficeData?.data?.titleOffices?.length === 0 ? (
                        <NoDataRow colSpan={8} />
                      ) : (
                        <>
                          {titleOfficeData?.data?.titleOffices?.map(
                            (e: any, i: number) => (
                              <tr
                                key={e.id}
                                onClick={() =>
                                  handleTitleOfficeClick(i, e.titleOffice)
                                }
                                className={`font-Jakarta text-sm font-normal text-[#15120F] h-[60px] border-b-[1px] border-[#F4EFE9] cursor-pointer  
            transition-colors duration-500 ease-in-out ${
              selectedTitleOfficeId === i
                ? "bg-gray-300"
                : "bg-white hover:bg-gray-100"
            }`}
                              >
                                <td>{e.titleOffice}</td>
                                <td>{e.orderCount}</td>
                                <td className="px-2">
                                  {Number(e.orderPercentage).toFixed(2)}
                                </td>
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

                <tfoot>
                  <tr className="bg-[#F3F3F3]">
                    <td className="py-3 px-4 font-medium text-sm text-[#15120F]">
                      Total
                    </td>
                    <td className="py-3  font-medium text-sm text-[#15120F]">
                      {titleOfficeData?.data?.totalOrderCount || ""}
                    </td>
                    <td className="py-3 px-2 font-medium text-sm text-[#15120F]">
                      {titleOfficeData?.data?.totalOrderPercentage || ""}
                    </td>
                    <td className="py-3 px-4 font-medium text-sm text-[#15120F]">
                      {titleOfficeData?.data?.totalFeeCount || ""}
                    </td>
                    <td className="py-3 px-4 font-medium text-sm text-[#15120F]">
                      {titleOfficeData?.data?.totalFeePercentage || ""}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </CardLayout>
          <CardLayout className="w-full">
            <MainTitle title="County" />
            <div className="w-full overflow-y-auto max-h-[300px]">
              <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F]">
                <thead className="text-sm font-normal text-start border-b-[1px] border-[#F4EFE9] bg-white sticky top-0 z-10">
                  <tr>
                    <th className="text-start font-medium">County</th>
                    <th className="text-start font-medium pr-2">Orders</th>
                    <th className="text-start font-medium px-2">
                      <div className="flex gap-0.5 items-center">
                        Orders <span>%</span>
                      </div>
                    </th>
                    <th className="text-start font-medium">Fees</th>
                    <th className="text-start font-medium  pr-2">
                      <div className="flex gap-0.5 items-center">
                        Fees <span>%</span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {propertyCountyDataLoading ? (
                    <TableSkeleton columns={8} />
                  ) : (
                    <>
                      {propertyCountyData?.data?.propertyCounties?.length ===
                      0 ? (
                        <NoDataRow colSpan={8} />
                      ) : (
                        <>
                          {propertyCountyData?.data?.propertyCounties?.map(
                            (e: any, i: number) => (
                              <tr
                                key={e.id}
                                onClick={() =>
                                  handlePropertyCountyClick(i, e.propertyCounty)
                                }
                                className={`font-Jakarta text-sm font-normal text-[#15120F] h-[60px] border-b-[1px] border-[#F4EFE9] cursor-pointer  
            transition-colors duration-500 ease-in-out 
            ${
              selectedPropertyCountyId === i
                ? "bg-gray-300"
                : "bg-white hover:bg-gray-100"
            }
            `}
                              >
                                <td>{e.propertyCounty}</td>
                                <td>{e.orderCount}</td>
                                <td className="px-2">
                                  {Number(e.orderPercentage).toFixed(2)}
                                </td>
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

                <tfoot>
                  <tr className="bg-[#F3F3F3]">
                    <td className="py-3 px-4 font-medium text-sm text-[#15120F]">
                      Total
                    </td>
                    <td className="py-3  font-medium text-sm text-[#15120F]">
                      {titleOfficeData?.data?.totalOrderCount || ""}
                    </td>
                    <td className="py-3 px-2 font-medium text-sm text-[#15120F]">
                      {titleOfficeData?.data?.totalOrderPercentage || ""}
                    </td>
                    <td className="py-3 px-4 font-medium text-sm text-[#15120F]">
                      {titleOfficeData?.data?.totalFeeCount || ""}
                    </td>
                    <td className="py-3 px-4 font-medium text-sm text-[#15120F]">
                      {titleOfficeData?.data?.totalFeePercentage || ""}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </CardLayout>
        </div>
      </div>
    </div>
  );
};

export default UnderwriterBoard;
