import StatsCard from "../../components/orders/StatsCard";
import Breadcrumb from "../../components/common/BreadCrumb";
import FilterPopup from "../../components/ui/FilterPopup";
import { useEffect, useState } from "react";
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
import ExpandedComponentFeeType from "../../components/orders/ExpandedComponentFeeType";
import { useForm } from "react-hook-form";
import { OrderDataType } from "../../utils/types";
import SearchInput from "../../components/inputs/SearchInput";
import SelectField from "../../components/inputs/SelectField";
import {
  countyOptions,
  fileStatusOption,
  fileTypeOptions,
  transactionOption,
} from "../../utils/options";

const FeeDetail = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string>("");
  const [page, setPage] = useState(1);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});
  const {
    formState: { errors },
    reset,
    watch,
    setValue,
    control,
  } = useForm<OrderDataType>();

  const selectedPropertyCounty = watch("propertyCounty") || "";
  const selectedFileStatus = watch("fileStatus") || "";
  const selectedFileType = watch("fileType") || "";
  const selectTransactionType = watch("transactionType") || "";
  const {
    data: orderData,
    isLoading,
    refetch,
  } = useGetOrdersQuery({
    status: selectedFileStatus,
    type: selectedFileType,
    propertyCounty: selectedPropertyCounty,
    transactionType: selectTransactionType,
    keyword: searchTerm,
    page,
    limit: 10,
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
  const removeFilter = (
    key: "propertyCounty" | "fileStatus" | "fileType" | "transactionType"
  ) => {
    setValue(key, "");
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev };
      delete updatedFilters[key];
      return updatedFilters;
    });
  };
  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm.toLowerCase());
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

  useEffect(() => {
    setSelectedFilters({
      propertyCounty: selectedPropertyCounty,
      fileStatus: selectedFileStatus,
      fileType: selectedFileType,
      transactionType: selectTransactionType,
    });
  }, [
    selectedPropertyCounty,
    selectedFileStatus,
    selectedFileType,
    selectTransactionType,
  ]);
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
        <div className="flex justify-between items-center flex-col gap-1 w-full mt-3">
          <form className="font-Poppins flex justify-between items-center w-full  gap-2">
            <SearchInput
              debounceTimeout={500}
              placeholder="Search Keyword"
              onChange={handleSearch}
              className="w-[27%]"
            />
            <div className="flex items-center gap-1.5">
              <SelectField
                name="propertyCounty"
                control={control}
                options={countyOptions}
                placeholder="County"
                error={errors.propertyCounty?.message}
                required={false}
                className="w-[113px]"
                height="44px"
              />
              <SelectField
                name="fileStatus"
                control={control}
                options={fileStatusOption}
                placeholder="Status"
                error={errors.fileStatus?.message}
                required={false}
                className="w-[100px]"
                height="44px"
              />
              <SelectField
                name="fileType"
                control={control}
                options={fileTypeOptions}
                placeholder="File type"
                error={errors.fileType?.message}
                required={false}
                className="w-[180px]"
                height="44px"
              />
              <SelectField
                name="transactionType"
                control={control}
                options={transactionOption}
                placeholder="Type"
                error={errors.transactionType?.message}
                required={false}
                className="w-[90px]"
                height="44px"
              />
            </div>
          </form>
          <div className="flex gap-2 w-full">
            {Object.entries(selectedFilters).map(([key, value]) =>
              value ? (
                <div
                  key={key}
                  className="flex items-center bg-[#E5E5E5] px-4 py-1 rounded-[27px] text-sm h-[40px]"
                >
                  <button
                    onClick={() =>
                      removeFilter(
                        key as
                          | "propertyCounty"
                          | "transactionType"
                          | "fileType"
                          | "fileStatus"
                      )
                    }
                    className="mr-2 text-(--secondary)"
                  >
                    ✖
                  </button>
                  {value}
                </div>
              ) : null
            )}
          </div>
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
            <div className="flex justify-between items-center w-full">
              <MainTitle title="Orders" />
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-600 active:scale-95 transition"
              >
                Reset
              </button>
            </div>

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
                    expandableRowsComponent={ExpandedComponentFeeType}
                    expandableRowsHideExpander
                    expandableRowExpanded={(row) =>
                      expandedRow === row.feeCategory
                    }
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
                    {/* <DataTable
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
                    /> */}
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
