import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
} from "../../lib/rtkQuery/orderApi";
import { tableHeaders } from "../../utils/DummyData";
import {
  countyOptions,
  fileStatusOption,
  fileTypeOptions,
  transactionOption,
  useOptionsAddNew,
  yearOptions,
} from "../../utils/options";

import Breadcrumb from "../../components/common/BreadCrumb";
import Pagination from "../../components/common/Pagination";
import StatsCard from "../../components/ui/card/StatsCard";
import TableHeader from "../../components/ui/table/TableHeader";
import SelectField from "../../components/inputs/SelectField";
import SearchInput from "../../components/inputs/SearchInput";
import NoDataRow from "../../components/ui/NoDataRow";
import TableSkeleton from "../../components/ui/skeleton/TableSkeleton";

import upload from "../../assets/icons/UploadSimple.svg";
import filter from "../../assets/icons/AlignLeft.svg";
import add from "../../assets/icons/Add.svg";
import menu from "../../assets/icons/Menu.svg";
import Spinner from "../../components/common/Spinner";
import PopoverMenu from "../../components/ui/popup/PopupMenu";
import toast from "react-hot-toast";
import { OrderDataType } from "../../utils/types";
import CardLayout from "../../components/layouts/CardLayout";
import FilterPopup from "../../components/ui/FilterPopup";
import CustomizableSkeleton from "../../components/ui/skeleton/CustomizableSkeleton";
import {
  formatNumber,
  formatNumberWithoutDecimals,
  formatToK,
} from "../../utils/functions";
import dayjs from "dayjs";
import { AiOutlineClose } from "react-icons/ai";
import MainTitle from "../../components/ui/typography/MainTitle";

const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState("");
  const [page, setPage] = useState(1);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [isYearManuallyCleared, setIsYearManuallyCleared] = useState(false);
  const [filtersVersion, setFiltersVersion] = useState(0);
  const { agentsOption } = useOptionsAddNew();

  const {
    formState: { errors },
    reset,
    watch,
    setValue,
    control,
  } = useForm<OrderDataType>();

  const navigate = useNavigate();
  const [deleteOrder] = useDeleteOrderMutation();
  const location = useLocation();

  const selectedPropertyCounty = watch("propertyCounty") || "";
  const selectedFileStatus = watch("fileStatus") || "";
  const selectedFileType = watch("fileType") || "";
  const selectTransactionType = watch("transactionType") || "";
  const selectedUser = watch("userId") || "";
  const formYear = watch("year") || "";

  const [locationType, setLocationType] = useState(location.state?.type || "");
  const yearFromCard = location.state?.selectedYear || "";

  useEffect(() => {
    const effectiveYear = isYearManuallyCleared ? "" : formYear || yearFromCard;

    if (effectiveYear) {
      const start = `${effectiveYear}-01-01`;
      const end = `${effectiveYear}-12-31`;

      setStartDate(start);
      setEndDate(end);
      setFiltersVersion((v) => v + 1);
      setIsYearManuallyCleared(false);
    } else {
      setStartDate("");
      setEndDate("");
      setFiltersVersion((v) => v + 1);
    }
  }, [formYear, yearFromCard, isYearManuallyCleared]);

  const adjustedStatus =
    locationType === "open"
      ? `Open${selectedFileStatus ? `, ${selectedFileStatus}` : ""}`
      : locationType === "closed"
      ? `Closed${selectedFileStatus ? `, ${selectedFileStatus}` : ""}`
      : selectedFileStatus;

  const adjustedType =
    locationType === "pending" ? "Prelim/Commitment" : selectedFileType;

  const { data, isLoading, refetch } = useGetOrdersQuery({
    userId: selectedUser,
    status: adjustedStatus,
    type: adjustedType,
    propertyCounty: selectedPropertyCounty,
    transactionType: selectTransactionType,
    page,
    limit: 10,
    keyword: searchTerm,
    titleOffice: "",
    underwriter: "",
    orderId: "",
    startDate,
    endDate,
  });

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    if (newPage >= 1 && newPage <= data?.totalPages) {
      setPage(newPage);
    }
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm.toLowerCase());
  };

  const handleAction = async (action: string, orderData?: any) => {
    if (action === "edit" && orderData) {
      navigate(`/orders/edit-order`, { state: { orderData } });
    }

    if (action === "detail" && orderData) {
      navigate("/orders/order-detail", { state: { orderData } });
    }

    if (action === "delete" && orderData) {
      setLoading(orderData?.id);
      try {
        await deleteOrder(orderData?.id).unwrap();
        toast.success("Order deleted successfully");
        refetch();
      } catch (err: any) {
        toast.error(err?.data?.message || "Cannot delete user");
      } finally {
        setLoading("");
      }
    }
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const formattedDateRange =
      startDate && endDate
        ? `startDate: ${dayjs(startDate).format(
            "DD/MM/YYYY"
          )}, endDate: ${dayjs(endDate).format("DD/MM/YYYY")}`
        : "";

    setSelectedFilters({
      propertyCounty: selectedPropertyCounty,
      fileStatus: adjustedStatus,
      fileType: adjustedType,
      transactionType: selectTransactionType,
      dateRange: formattedDateRange,
      selectedUser,
    });

    refetch();
  }, [
    selectedPropertyCounty,
    adjustedStatus,
    adjustedType,
    selectTransactionType,
    startDate,
    endDate,
    filtersVersion,
    selectedUser,
  ]);

  useEffect(() => {
    if (formYear) {
      setIsYearManuallyCleared(false);
    }
  }, [formYear]);

  const removeFilter = (
    key:
      | "propertyCounty"
      | "fileStatus"
      | "fileType"
      | "transactionType"
      | "dateRange"
      | "selectedUser"
  ) => {
    if (key === "dateRange") {
      setStartDate("");
      setEndDate("");
      setValue("year", "");
      setIsYearManuallyCleared(true);
    } else {
      setValue(key, "");
    }
    if (key === "selectedUser") {
      setValue("userId", "");
    }
    if (key === "fileStatus" || key === "fileType") {
      setLocationType("");
    }

    setSelectedFilters((prev) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });

    refetch();
  };

  const handleExportPDF = () => {
    if (selectedRows.length === 0) {
      toast.error("Please select at least one row!");
      return;
    }

    const doc = new jsPDF();
    let yPos = 10;

    doc.text("Exported Order Data", 10, yPos);
    yPos += 10;

    selectedRows.forEach((rowId, index) => {
      const order = data?.orders?.find((order: any) => order.id === rowId);
      if (!order) return;

      doc.text(`Order #${index + 1}`, 10, yPos);
      yPos += 5;

      const orderDetails = [
        ["Contact", order.contact],
        ["First Name", order.firstname],
        ["Last Name", order.lastname],
        ["Title Office", order.titleOffice],
        ["Title Rep", order.titleRep],
        ["Title Rep %", order.titleRepPct],
        ["Open Date", order.openDate],
        ["Estimated Closing Date", order.estimatedClosingDate],
        ["Closed Date", order.closedDate || "N/A"],
        ["File Type", order.fileType],
        ["Transaction Type", order.transactionType],
        ["Order Number", order.orderNumber],
        ["File Status", order.fileStatus],
        ["AE Lead Stage", order.aeLeadStage],
        ["Sale Price", order.salePrice],
        ["Loan Amount", order.loanAmount],
        ["Property Address", order.propertyAddress],
        ["County", order.propertyCounty],
        ["State", order.propertyState],
        ["Title Officer", order.titleOfficer],
        ["Escrow Officer", order.escrowOfficer],
        ["Underwriter", order.underwriter],
      ];

      orderDetails.forEach((detail) => {
        doc.text(`${detail[0]}: ${detail[1]}`, 10, yPos);
        yPos += 6;
        if (yPos > 280) {
          doc.addPage();
          yPos = 10;
        }
      });

      if (order.fees && order.fees.length > 0) {
        doc.text("Fees:", 10, yPos);
        yPos += 6;

        autoTable(doc, {
          startY: yPos,
          head: [["Fee Description", "Account", "Category", "Amount"]],
          body: order.fees.map((fee: any) => [
            fee.feeDescription,
            fee.account,
            fee.feeCategory,
            `$${fee.feeAmount}`,
          ]),
        });

        yPos = (doc as any).lastAutoTable?.finalY + 10 || yPos;
      }

      yPos += 10;
      if (yPos > 280) {
        doc.addPage();
        yPos = 10;
      }
    });

    doc.save("exported-orders.pdf");
  };

  return (
    <>
      {isModelOpen && (
        <div className="fixed inset-0 bg-black/30 w-screen h-screen flex items-center justify-end z-50">
          <form className="bg-white rounded-[16px] max-w-[700px] w-[90%] h-full overflow-y-auto shadow-xl animate-slide-in-right relative">
            <button
              onClick={() => setIsModelOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
            >
              <AiOutlineClose />
            </button>

            <div className="pt-8 px-6 font-poppin flex flex-col gap-6">
              <MainTitle title="Filters" />

              <form>
                <SelectField
                  label="Agent"
                  name="userId"
                  control={control}
                  options={agentsOption}
                  placeholder="Select agent"
                  error={errors.userId?.message}
                  required={false}
                />
              </form>

              <div className="flex flex-row justify-end gap-4 h-10">
                <button
                  type="button"
                  onClick={() => {
                    reset();
                  }}
                  className="text-gray-500 bg-[#F3F3F3] rounded-[8px] font-poppin font-semibold text-[14px] leading-[21px] px-8"
                >
                  Reset
                </button>
                {/* <button
                  type="button"
                  onClick={() => {
                    setIsModelOpen(false);
                  }}
                  className="text-white bg-(--secondary) rounded-[8px] font-poppin font-semibold text-[14px] leading-[21px] px-8"
                >
                  Apply Filters
                </button> */}
              </div>
            </div>
          </form>
        </div>
      )}

      <div className="w-full px-4 my-8 font-poppin">
        <Breadcrumb items={["Orders", "Orders"]} />
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
                  value: `${formatToK(data?.totalOrderCount)}`,
                  subValue: `${formatNumberWithoutDecimals(
                    data?.totalOrderCount
                  )}`,
                  text: "Total Orders",
                },
                {
                  value: `$${formatToK(data?.totalFee)}`,
                  subValue: `$${formatNumber(data?.totalFee)}`,
                  text: "Total Amount",
                },
                {
                  value: `${formatToK(data?.totalFeeAvg)}`,
                  subValue: `${formatNumber(data?.totalFeeAvg)}`,
                  text: "Avg /Order",
                },
              ]}
            />
            <StatsCard
              heading="Title"
              stats={[
                {
                  value: `${formatToK(data?.titleChargesOrderCount)}`,
                  subValue: `${formatNumberWithoutDecimals(
                    data?.titleChargesOrderCount
                  )}`,
                  text: "Total Units",
                },
                {
                  value: `$${formatToK(data?.titleChargesTotalFee)}`,
                  subValue: `$${formatNumber(data?.titleChargesTotalFee)}`,
                  text: "Title Charges",
                },
                {
                  value: `${formatToK(data?.titleChargesFeeAvg)}`,
                  subValue: `${formatNumber(data?.titleChargesFeeAvg)}`,
                  text: "Avg Title",
                },
              ]}
            />

            <StatsCard
              heading="Escrow"
              stats={[
                {
                  value: `${formatToK(data?.escrowChargesOrderCount)}`,
                  subValue: `${formatNumberWithoutDecimals(
                    data?.escrowChargesOrderCount
                  )}`,
                  text: "Escrow Units",
                },
                {
                  value: `$${formatToK(data?.escrowChargesTotalFee)}`,
                  subValue: `$${formatNumber(data?.escrowChargesTotalFee)}`,
                  text: "Escrow Charges",
                },
                {
                  value: `${formatToK(data?.escrowChargesFeeAvg)}`,
                  subValue: `${formatNumber(data?.escrowChargesFeeAvg)}`,
                  text: "Avg Escrow",
                },
              ]}
            />
          </div>
        )}

        <CardLayout>
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
                className="w-[90px]"
                height="44px"
              />
              <SelectField
                name="fileType"
                control={control}
                options={fileTypeOptions}
                placeholder="File type"
                error={errors.fileType?.message}
                required={false}
                className="w-[134px]"
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
              <SelectField
                name="year"
                control={control}
                options={yearOptions}
                placeholder="Year"
                error={errors.year?.message}
                required={false}
                className="w-[90px]"
                height="h-[53px]"
              />

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModelOpen(true);
                  reset();
                }}
                className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white"
              >
                <img src={filter} alt="" />
              </button>
              <div
                onClick={handleExportPDF}
                className="rounded-xl flex justify-center items-center bg-(--smoke) w-[44px] h-[44px]"
              >
                <img src={upload} alt="" />
              </div>
              <div
                className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white"
                onClick={() => navigate("/orders/add-order")}
              >
                <img src={add} alt="" />
              </div>
            </div>
          </form>
          <div className="flex gap-2 mt-2 flex-wrap">
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
                          | "dateRange"
                          | "selectedUser"
                      )
                    }
                    className="mr-2 text-gray-700"
                  >
                    ✖
                  </button>
                  {value}
                </div>
              ) : null
            )}
          </div>

          <div className="w-full overflow-x-auto scroll-container ">
            <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F] mt-1">
              <thead className="text-sm font-normal text-start">
                <tr className="border-b-[1px] border-[#F4EFE9] ">
                  <th className="px-4"></th>
                  <th className=" pr-6">
                    <input
                      type="checkbox"
                      className="h-3 w-3 accent-(--secondary)"
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        setSelectedRows(
                          isChecked
                            ? data?.orders?.map((order: any) => order.id)
                            : []
                        );
                      }}
                      checked={
                        selectedRows.length === data?.orders?.length &&
                        data?.orders?.length > 0
                      }
                    />
                  </th>

                  <th className="text-start font-medium min-w-[100px]">Id</th>

                  {tableHeaders.map(({ text, arrowIcon }) => (
                    <TableHeader key={text} text={text} arrowIcon={arrowIcon} />
                  ))}
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <TableSkeleton columns={30} />
                ) : (
                  <>
                    {data?.orders?.length === 0 ? (
                      <NoDataRow colSpan={4} />
                    ) : (
                      <>
                        {data?.orders?.map(
                          (e: any, i: number) => (
                            <tr
                              key={i}
                              className="font-Jakarta text-sm font-normal text-[#15120F] h-[60px] border-b-[1px] border-[#F4EFE9] cursor-pointer  
                            bg-white hover:bg-gray-100 transition-colors duration-500 ease-in-out
                            "
                            >
                              <td>
                                {loading == e?.id ? (
                                  <Spinner />
                                ) : (
                                  <>
                                    <PopoverMenu
                                      triggerImage={menu}
                                      options={[
                                        {
                                          label: "Edit order",
                                          onClick: () =>
                                            handleAction("edit", e),
                                        },
                                        {
                                          label: "Detail",
                                          onClick: () =>
                                            handleAction("detail", e),
                                        },
                                        {
                                          label: "Delete",
                                          onClick: () =>
                                            handleAction("delete", e),
                                        },
                                      ]}
                                    />
                                  </>
                                )}
                              </td>
                              <td>
                                <input
                                  type="checkbox"
                                  checked={selectedRows.includes(e.id)}
                                  onChange={() => handleCheckboxChange(e.id)}
                                  className="h-3 w-3 accent-(--secondary)"
                                />
                              </td>

                              <td>{e.id}</td>
                              <td>{e.titleOfficer}</td>
                              <td>{e.titleOffice}</td>
                              <td>{e.user?.firstname}</td>
                              <td>{e.titleRepPct}</td>
                              <td>{e.openDate}</td>
                              <td>{e.estimatedClosingDate}</td>
                              <td>{e.closedDate}</td>
                              <td>{e.contact}</td>
                              <td>{e.aeLeadStage}</td>
                              <td>{e.transactionType}</td>
                              <td>{e.fileType}</td>
                              <td>{e.orderNumber}</td>
                              <td>{e.fileStatus}</td>
                              <td>{e.salePrice}</td>
                              <td>{e.loanAmount}</td>
                              <td>{e.propertyAddress}</td>
                              <td>{e.propertyCounty}</td>
                              <td>{e.propertyState}</td>
                              <td>{e.escrowOfficer}</td>
                              <td>{e.listingOffice?.name}</td>
                              <td>{e.listingAgentContactName}</td>
                              <td>{e.listingAgentContactEmail}</td>
                              <td>{e.listingAgentPhone}</td>
                              <td>{e.sellingOffice?.name}</td>
                              <td>{e.sellingAgentContactName}</td>
                              <td>{e.sellingAgentContactEmail}</td>
                              <td>{e.sellingAgentPhone}</td>
                              <td>{e.mortgageBrokerCompany}</td>
                              <td>{e.mortgageBrokerContact}</td>
                              <td>{e.mortgageBrokerContactEmail}</td>
                              <td>{e.mortgageBrokerPhone}</td>
                              <td>{e.underwriter}</td>
                              <td>{e.createdAt}</td>
                            </tr>
                          ),
                          []
                        )}
                      </>
                    )}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </CardLayout>

        <div className="w-full flex justify-end gap-5 items-center">
          <Pagination
            onPageChange={handlePageChange}
            pageCount={data?.totalPages}
          />
        </div>
      </div>
    </>
  );
};

export default OrdersTable;
