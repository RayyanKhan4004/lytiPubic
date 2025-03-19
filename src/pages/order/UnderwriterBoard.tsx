import { useState } from "react";

import Breadcrumb from "../../components/common/BreadCrumb";
import CardLayout from "../../components/layouts/CardLayout";
import MainTitle from "../../components/ui/typography/MainTitle";
import Pagination from "../../components/common/Pagination";
import StatsCard from "../../components/orders/StatsCard";

import {
  useGetOrdersQuery,
  useGetPropertyCountiesQuery,
  useGetTitleOfficesQuery,
  useGetUnderwritersQuery,
} from "../../lib/rtkQuery/orderApi";
import CustomizableSkeleton from "../../components/ui/skeleton/CustomizableSkeleton";
import {
  formatNumber,
  formatNumberWithoutDecimals,
} from "../../utils/functions";
import TablesSkeleton from "../../components/ui/skeleton/TablesSkeleton";
import DataTable, { TableColumn } from "react-data-table-component";

const UnderwriterBoard = () => {
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
    orderId: "",
  });

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
          onClick={(e) => {
            e.stopPropagation();
            handleRowClick(row.id);
          }}
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
  const underwriterColumns: TableColumn<any>[] = [
    {
      name: "Underwriter",
      selector: (row: any) => row.underwriter,
      cell: (row: any, index: number) => (
        <div
          className="rowStyle w-[200px] cursor-pointer"
          title={row.underwriter}
          onClick={(e) => {
            e.stopPropagation();
            handleUnderwriterClick(index, row.underwriter);
          }}
        >
          {row.underwriter}
        </div>
      ),
      maxWidth: "200px",
    },
    {
      name: "Orders",
      selector: (row: any) => row.orderCount,
      cell: (row: any, index: number) => (
        <div
          className="rowStyle w-[100px] cursor-pointer"
          title={row.orderCount}
          onClick={(e) => {
            e.stopPropagation();
            handleUnderwriterClick(index, row.underwriter);
          }}
        >
          {row.orderCount}
        </div>
      ),
      sortable: false,
      maxWidth: "100px",
    },
    {
      name: "Orders %",
      selector: (row: any) => row.orderPercentage,
      cell: (row: any, index: number) => (
        <div
          className="rowStyle w-[100px] cursor-pointer"
          title={row.orderPercentage}
          onClick={(e) => {
            e.stopPropagation();
            handleUnderwriterClick(index, row.underwriter);
          }}
        >
          {Number(row.orderPercentage).toFixed(2)}
        </div>
      ),
      sortable: false,
      maxWidth: "100px",
    },
    {
      name: "Fees",
      selector: (row: any) => row.orderFeeTotal,
      cell: (row: any, index: number) => (
        <div
          className="rowStyle w-[100px] cursor-pointer"
          title={row.orderFeeTotal}
          onClick={(e) => {
            e.stopPropagation();
            handleUnderwriterClick(index, row.underwriter);
          }}
        >
          {row.orderFeeTotal}
        </div>
      ),
      sortable: false,
      maxWidth: "100px",
    },
    {
      name: "Fees %",
      selector: (row: any) => row.feePercentage,
      cell: (row: any, index: number) => (
        <div
          className="rowStyle w-[100px] cursor-pointer"
          title={row.feePercentage}
          onClick={(e) => {
            e.stopPropagation();
            handleUnderwriterClick(index, row.underwriter);
          }}
        >
          {Number(row.feePercentage).toFixed(2)}
        </div>
      ),
      sortable: false,
      maxWidth: "100px",
    },
    {
      name: "Last Access",
      selector: (row: any) => row.lastAccess,
      cell: (row: any, index: number) => (
        <div
          className="rowStyle w-[150px] cursor-pointer"
          title={row.lastAccess}
          onClick={(e) => {
            e.stopPropagation();
            handleUnderwriterClick(index, row.underwriter);
          }}
        >
          {row.lastAccess}
        </div>
      ),
      maxWidth: "150px",
    },
  ];
  const officeColumns: TableColumn<any>[] = [
    {
      name: "Office",
      selector: (row) => row.titleOffice,
      cell: (row) => (
        <div
          className="rowStyle w-[150px]"
          title={row.titleOffice}
          onClick={(e) => {
            e.stopPropagation();
            handleTitleOfficeClick(row.index, row.titleOffice);
          }}
        >
          {row.titleOffice}
        </div>
      ),
      maxWidth: "150px",
    },
    {
      name: "Orders",
      selector: (row) => row.orderCount,
      cell: (row) => (
        <div
          className="rowStyle w-[100px]"
          title={String(row.orderCount)}
          onClick={(e) => {
            e.stopPropagation();
            handleTitleOfficeClick(row.index, row.titleOffice);
          }}
        >
          {row.orderCount}
        </div>
      ),
      maxWidth: "100px",
    },
    {
      name: "Orders %",
      selector: (row) => row.orderPercentage,
      cell: (row) => (
        <div
          className="rowStyle w-[100px]"
          title={`${Number(row.orderPercentage).toFixed(2)}%`}
          onClick={(e) => {
            e.stopPropagation();
            handleTitleOfficeClick(row.index, row.titleOffice);
          }}
        >
          {Number(row.orderPercentage).toFixed(2)}%
        </div>
      ),
      maxWidth: "100px",
    },
    {
      name: "Fees",
      selector: (row) => row.orderFeeTotal,
      cell: (row) => (
        <div
          className="rowStyle w-[100px]"
          title={String(row.orderFeeTotal)}
          onClick={(e) => {
            e.stopPropagation();
            handleTitleOfficeClick(row.index, row.titleOffice);
          }}
        >
          {row.orderFeeTotal}
        </div>
      ),
      maxWidth: "100px",
    },
    {
      name: "Fees %",
      selector: (row) => row.feePercentage,
      cell: (row) => (
        <div
          className="rowStyle w-[100px]"
          title={`${Number(row.feePercentage).toFixed(2)}%`}
          onClick={(e) => {
            e.stopPropagation();
            handleTitleOfficeClick(row.index, row.titleOffice);
          }}
        >
          {Number(row.feePercentage).toFixed(2)}%
        </div>
      ),
      maxWidth: "100px",
    },
  ];
  const countyColumns: TableColumn<any>[] = [
    {
      name: "County",
      selector: (row: any) => row.propertyCounty,
      cell: (row: any, index: number) => (
        <div
          className="rowStyle w-[200px] cursor-pointer"
          title={row.propertyCounty}
          onClick={(e) => {
            e.stopPropagation();
            handlePropertyCountyClick(index, row.propertyCounty);
          }}
        >
          {row.propertyCounty}
        </div>
      ),
      maxWidth: "200px",
    },
    {
      name: "Orders",
      selector: (row: any) => row.orderCount,
      cell: (row: any, index: number) => (
        <div
          className="rowStyle w-[100px] cursor-pointer"
          title={row.orderCount}
          onClick={(e) => {
            e.stopPropagation();
            handlePropertyCountyClick(index, row.propertyCounty);
          }}
        >
          {row.orderCount}
        </div>
      ),
      sortable: false,
      maxWidth: "100px",
    },
    {
      name: "Orders %",
      selector: (row: any) => row.orderPercentage,
      cell: (row: any, index: number) => (
        <div
          className="rowStyle w-[100px] cursor-pointer"
          title={row.orderPercentage}
          onClick={(e) => {
            e.stopPropagation();
            handlePropertyCountyClick(index, row.propertyCounty);
          }}
        >
          {Number(row.orderPercentage).toFixed(2)}
        </div>
      ),
      sortable: false,
      maxWidth: "100px",
    },
    {
      name: "Fees",
      selector: (row: any) => row.orderFeeTotal,
      cell: (row: any, index: number) => (
        <div
          className="rowStyle w-[100px] cursor-pointer"
          title={row.orderFeeTotal}
          onClick={(e) => {
            e.stopPropagation();
            handlePropertyCountyClick(index, row.propertyCounty);
          }}
        >
          {row.orderFeeTotal}
        </div>
      ),
      sortable: false,
      maxWidth: "100px",
    },
    {
      name: "Fees %",
      selector: (row: any) => row.feePercentage,
      cell: (row: any, index: number) => (
        <div
          className="rowStyle w-[100px] cursor-pointer"
          title={row.feePercentage}
          onClick={(e) => {
            e.stopPropagation();
            handlePropertyCountyClick(index, row.propertyCounty);
          }}
        >
          {Number(row.feePercentage).toFixed(2)}
        </div>
      ),
      sortable: false,
      maxWidth: "100px",
    },
    {
      name: "Last Access",
      selector: (row: any) => row.lastAccess,
      cell: (row: any, index: number) => (
        <div
          className="rowStyle w-[150px] cursor-pointer"
          title={row.lastAccess}
          onClick={(e) => {
            e.stopPropagation();
            handlePropertyCountyClick(index, row.propertyCounty);
          }}
        >
          {row.lastAccess}
        </div>
      ),
      maxWidth: "150px",
    },
  ];
  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <div className="flex  justify-between">
        <Breadcrumb items={["Orders", "Underwiter Board"]} />
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

      <div className="w-full flex justify-between ">
        <CardLayout className="w-[49%] max-h-[710px] h-auto">
          <div className="flex justify-between items-center w-full">
            <MainTitle title="Orders" />
            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 transition"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="w-full overflow-y-auto max-h-[700px]">
            {isLoading ? (
              <TablesSkeleton columnCount={orderColumns.length} rowCount={10} />
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

        <div className="w-[49%] gap-4 flex flex-col">
          <CardLayout className="w-full">
            <MainTitle title="Underwriter" />

            <div className="w-full overflow-y-auto max-h-[300px]">
              {underwriterDataLoading ? (
                <TablesSkeleton
                  columnCount={underwriterColumns.length}
                  rowCount={3}
                />
              ) : (
                <div className="w-full">
                  <DataTable
                    columns={underwriterColumns}
                    data={underwriterData?.data?.underwriters || []}
                    highlightOnHover
                    striped
                    className="head-row table-row"
                    noDataComponent={
                      <div
                        className="w-full text-center py-6 px-20 text-gray-500 bg-gray-100 rounded"
                        style={{ minWidth: "100%", width: "100%" }}
                      >
                        No data found
                      </div>
                    }
                    fixedHeader
                    fixedHeaderScrollHeight="300px"
                    onRowClicked={(row, event) => {
                      handleUnderwriterClick(row.index, row.underwriter);
                    }}
                  />
                </div>
              )}
            </div>

            <div className="bg-[#F3F3F3] py-3 px-4 font-medium text-sm text-[#15120F] flex justify-between w-full">
              <span>Total:</span>
              <span>{underwriterData?.data?.totalOrderCount || ""}</span>
              <span>{underwriterData?.data?.totalOrderPercentage || ""}</span>
              <span>{underwriterData?.data?.totalFeeCount || ""}</span>
              <span>{underwriterData?.data?.totalFeePercentage || ""}</span>
            </div>
          </CardLayout>

          <CardLayout className="w-full">
            <MainTitle title="Office" />

            <div className="w-full overflow-y-auto max-h-[300px]">
              {titleOfficeDataLoading ? (
                <TablesSkeleton
                  columnCount={orderColumns.length}
                  rowCount={10}
                />
              ) : (
                <div className="w-full">
                  <DataTable
                    columns={officeColumns}
                    data={titleOfficeData?.data?.titleOffices || []}
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
                    onRowClicked={(row) =>
                      handleTitleOfficeClick(row.index, row.titleOffice)
                    }
                  />
                </div>
              )}
            </div>

            <div className="bg-[#F3F3F3] py-3 px-2 font-medium text-sm text-[#15120F] flex justify-between w-full">
              <span>Total:</span>
              <span>{titleOfficeData?.data?.totalOrderCount || ""}</span>
              <span>{titleOfficeData?.data?.totalOrderPercentage || ""}</span>
              <span>{titleOfficeData?.data?.totalFeeCount || ""}</span>
              <span>{titleOfficeData?.data?.totalFeePercentage || ""}</span>
            </div>
          </CardLayout>

          <CardLayout className="w-full">
            <MainTitle title="County" />

            <div className="w-full overflow-y-auto max-h-[300px]">
              {propertyCountyDataLoading ? (
                <TablesSkeleton
                  columnCount={countyColumns.length}
                  rowCount={3}
                />
              ) : (
                <div className="w-full">
                  <DataTable
                    columns={countyColumns}
                    data={propertyCountyData?.data?.propertyCounties || []}
                    highlightOnHover
                    striped
                    className="head-row table-row"
                    noDataComponent={
                      <div
                        className="w-full text-center py-6 px-20 text-gray-500 bg-gray-100 rounded"
                        style={{ minWidth: "100%", width: "100%" }}
                      >
                        No data found
                      </div>
                    }
                    fixedHeader
                    fixedHeaderScrollHeight="300px"
                    onRowClicked={(row, _event) => {
                      handlePropertyCountyClick(row.index, row.propertyCounty);
                    }}
                    conditionalRowStyles={[
                      {
                        when: (_row, index?: number) =>
                          index !== undefined &&
                          selectedPropertyCountyId === index,
                        classNames: ["bg-gray-300"],
                      },
                    ]}
                  />
                </div>
              )}
            </div>

            <div className="bg-[#F3F3F3] py-3 px-4 font-medium text-sm text-[#15120F] flex justify-between w-full">
              <span>Total:</span>
              <span>{propertyCountyData?.data?.totalOrderCount || ""}</span>
              <span>
                {propertyCountyData?.data?.totalOrderPercentage || ""}
              </span>
              <span>{propertyCountyData?.data?.totalFeeCount || ""}</span>
              <span>{propertyCountyData?.data?.totalFeePercentage || ""}</span>
            </div>
          </CardLayout>
        </div>
      </div>
    </div>
  );
};

export default UnderwriterBoard;
