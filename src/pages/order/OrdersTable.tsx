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
} from "../../utils/functions";
import dayjs from "dayjs";

const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState("");
  const [page, setPage] = useState(1);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const {
    formState: { errors },
    reset,
    watch,
    setValue,
    control,
  } = useForm<OrderDataType>();
  const navigate = useNavigate();
  const [deleteOrder] = useDeleteOrderMutation();

  const selectedPropertyCounty = watch("propertyCounty") || "";
  const selectedFileStatus = watch("fileStatus") || "";
  const selectedFileType = watch("fileType") || "";
  const selectTransactionType = watch("transactionType") || "";
  const location = useLocation();
  const yearFromCard = location.state?.selectedYear;
  const type = location.state?.type;
  const selectedYear = watch("year") || yearFromCard || "";
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  console.log(type, "==type==");

  useEffect(() => {
    if (type === "year") {
      if (selectedYear) {
        setStartDate(`${selectedYear}-01-01`);
        setEndDate(`${selectedYear}-12-31`);
      } else {
        const currentYear = dayjs().format("YYYY");
        setStartDate(`${currentYear}-01-01`);
        setEndDate(`${currentYear}-12-31`);
      }
    } else if (type === "month") {
      const currentYear = selectedYear || dayjs().format("YYYY");
      const currentMonth = dayjs().format("MM");
      const daysInMonth = dayjs(`${currentYear}-${currentMonth}`).daysInMonth();
      setStartDate(`${currentYear}-${currentMonth}-01`);
      setEndDate(`${currentYear}-${currentMonth}-${daysInMonth}`);
    } else {
      setStartDate("");
      setEndDate("");
    }
  }, [selectedYear, type]);

  const adjustedStatus =
    type === "open"
      ? `Open${selectedFileStatus ? `, ${selectedFileStatus}` : ""}`
      : type === "closed"
      ? `Closed${selectedFileStatus ? `, ${selectedFileStatus}` : ""}`
      : selectedFileStatus;

  const adjustedType =
    type === "pending" ? "Prelim/Commitment" : selectedFileType;

  const { data, isLoading, refetch } = useGetOrdersQuery({
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
    if (action == "detail" && orderData) {
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
    setSelectedFilters({
      propertyCounty: selectedPropertyCounty,
      fileStatus: adjustedStatus, // Updated status with "Open" or "Closed"
      fileType: adjustedType, // Updated type with "Prelim/Commitment"
      transactionType: selectTransactionType,
      year: selectedYear,
    });
  }, [
    selectedPropertyCounty,
    adjustedStatus,
    adjustedType,
    selectTransactionType,
    selectedYear,
  ]);

  const removeFilter = (
    key:
      | "propertyCounty"
      | "fileStatus"
      | "fileType"
      | "transactionType"
      | "year"
  ) => {
    setValue(key, "");

    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev };
      delete updatedFilters[key];
      return updatedFilters;
    });

    if (key === "year") {
      setStartDate("");
      setEndDate("");
    }
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
      {
        <FilterPopup
          isModelOpen={isModelOpen}
          setIsModelOpen={setIsModelOpen}
        />
      }
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
                  value: `${formatNumberWithoutDecimals(
                    data?.totalOrderCount
                  )}`,
                  text: "Total Orders",
                },
                {
                  value: `$${formatNumber(data?.totalFee)}`,
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
                    data?.titleChargesOrderCount
                  )}`,
                  text: "Total Units",
                },
                {
                  value: `$${formatNumber(data?.titleChargesTotalFee)}`,
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
                    data?.escrowChargesOrderCount
                  )}`,
                  text: "Escrow Units",
                },
                {
                  value: `$${formatNumber(data?.escrowChargesTotalFee)}`,
                  text: "Escrow charges",
                },
                { value: "0", text: "Avg Escrow" },
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
          <div className="flex gap-2 mt-2">
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
                          | "year"
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
                              <td>{e.titleRep}</td>
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
