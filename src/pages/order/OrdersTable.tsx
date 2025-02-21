import { useState } from "react";
import upload from "../../assets/icons/UploadSimple.svg";
import filter from "../../assets/icons/AlignLeft.svg";
import add from "../../assets/icons/Add.svg";
import menu from "../../assets/icons/Menu.svg";
import arrowUpDown from "../../assets/icons/ArrowsDownUp.svg";
import { useNavigate } from "react-router-dom";
import { DummyData } from "../../utils/DummyData";
import Breadcrumb from "../../components/common/BreadCrumb";
import StatsCard from "../../components/orders/StatsCard";
import SearchInput from "../../components/common/SearchInput";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";
import OrderActionsPopup from "../../components/orders/OrderActionsPopup";
import Pagination from "../../components/common/Pagination";
import TableHeader from "../../components/ui/table/TableHeader";
import { useGetOrdersQuery } from "../../lib/rtkQuery/orderApi";
import SelectField from "../../components/inputs/SelectField";
import TableSkeleton from "../../components/ui/skeleton/TableSkeleton";
import NoDataRow from "../../components/ui/NoDataRow";
import DropdownInput from "../../components/inputs/DropdownInput";
import { useForm } from "react-hook-form";

const OrdersTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedFileType, setSelectedFileType] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const navigate = useNavigate();

  const options: string[] = [
    "10 Items Per Page",
    "20 Items Per Page",
    "30 Items Per Page",
  ];
  const [page, setPage] = useState(1);

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    if (newPage >= 1 && newPage <= data?.totalPages) {
      setPage(newPage);
    }
  };
  const { data, isLoading } = useGetOrdersQuery({
    status: selectedFilter,
    type: selectedFileType,
    page,
    limit: 10,
  });

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const tableHeaders = [
    { text: "ID", arrowIcon: true },
    { text: "Title Officer", arrowIcon: true },
    { text: "Title Office", arrowIcon: true },
    { text: "Title Rep", arrowIcon: true },
    { text: "Title Rep Pct", arrowIcon: true },
    { text: "Open Date", arrowIcon: true },
    { text: "Estimated Closing Date", arrowIcon: true },
    { text: "Closed Date", arrowIcon: true },
    { text: "File Type", arrowIcon: true },
    { text: "Order Number", arrowIcon: true },
    { text: "File Status", arrowIcon: true },
    { text: "Sale Price", arrowIcon: true },
    { text: "Loan Amount", arrowIcon: true },
    { text: "Property Address", arrowIcon: true },
    { text: "Property County", arrowIcon: true },
    { text: "Property State", arrowIcon: true },
    { text: "Escrow Officer", arrowIcon: true },
    { text: "Listing Agent Company", arrowIcon: true },
    { text: "Listing Agent Contact Name", arrowIcon: true },
    { text: "Listing Agent Contact Email", arrowIcon: true },
    { text: "Listing Agent Phone", arrowIcon: true },
    { text: "Selling Agent Company", arrowIcon: true },
    { text: "Selling Agent Contact Name", arrowIcon: true },
    { text: "Selling Agent Contact Email", arrowIcon: true },
    { text: "Selling Agent Phone", arrowIcon: true },
    { text: "Mortgage Broker Company", arrowIcon: true },
    { text: "Mortgage Broker Contact", arrowIcon: true },
    { text: "Mortgage Broker Contact Email", arrowIcon: true },
    { text: "Mortgage Broker Phone", arrowIcon: true },
    { text: "Underwriter", arrowIcon: true },
    { text: "Created At", arrowIcon: true },
  ];

  const documentTypes = [
    "Title Only - REFI",
    "Title Only - SALE",
    "Prelim/Commitment",
    "Escrow Only - Sale",
    "Escrow Only - REFI",
    "Title and Escrow - SALE",
    "Title and Escrow - REFI",
    "Commercial Escrow - REFI",
    "Commercial Title - REFI",
    "Commercial Title - SALE",
    "LCP",
    "Other",
  ];

  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Orders", "Orders"]} />
      <div className="w-full flex gap-4 mt-6">
        <StatsCard
          heading="Orders"
          stats={[
            { value: "20.7k", text: "Total Orders" },
            { value: "3k", text: "Total Amount" },
            { value: "57k", text: "Avg /Order" },
          ]}
        />
        <StatsCard
          heading="Title"
          stats={[
            { value: "9k", text: "Total Units" },
            { value: "2k", text: "Title charges" },
            { value: "27k", text: "Avg Title " },
          ]}
        />
        <StatsCard
          heading="Escrow"
          stats={[
            { value: "98k", text: "Escrow Units" },
            { value: "78k", text: "Escrow charges" },
            { value: "9k", text: "Avg Escrow" },
          ]}
        />
      </div>
      <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full px-4 min-h-screen my-6">
        <div className="font-Poppins flex justify-between items-center w-full pt-3">
          <SearchInput
            value={searchValue}
            onChange={(e: any) => setSearchValue(e.target.value)}
          />
          <div className="flex items-center gap-3">
            <CustomizableDropdown
              placeholder="Type"
              height="h-[44px]"
              options={documentTypes}
              selected={selectedFileType}
              setSelected={(e) => setSelectedFileType(e)}
              width="w-[180px]"
            />
            <CustomizableDropdown
              placeholder="Status"
              height="h-[44px]"
              options={["Open", "Closed", "On Hold", "Cancelled"]}
              selected={selectedFilter}
              setSelected={(e) => setSelectedFilter(e)}
              width="w-[130px]"
            />
            <div className="rounded-xl flex justify-center items-center bg-(--smoke) w-[44px] h-[44px]">
              <img src={upload} alt="" />
            </div>
            <div className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white">
              <img src={filter} alt="" />
            </div>
            <div
              className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white"
              onClick={() => navigate("/orders/add-order")}
            >
              <img src={add} alt="" />
              Add Order
            </div>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F] mt-6">
            <thead className="text-sm font-normal text-start">
              <tr className="border-b-[1px] border-[#F4EFE9] ">
                <th className="text-start py-4 font-medium px-6"> </th>
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
                            className="font-Jakarta text-sm font-normal text-[#15120F] h-[80px] border-b-[1px] border-[#F4EFE9]"
                          >
                            <td>
                              <input
                                type="checkbox"
                                name=""
                                id=""
                                className="w-[21px] h-[21px] accent-(--primary) "
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
                            <td>{e.fileType}</td>
                            <td>{e.orderNumber}</td>
                            <td>{e.fileStatus}</td>
                            <td>{e.salePrice}</td>
                            <td>{e.loanAmount}</td>
                            <td>{e.propertyAddress}</td>
                            <td>{e.propertyCounty}</td>
                            <td>{e.propertyState}</td>
                            <td>{e.escrowOfficer}</td>
                            <td>{e.listingAgentCompany}</td>
                            <td>{e.listingAgentContactName}</td>
                            <td>{e.listingAgentContactEmail}</td>
                            <td>{e.listingAgentPhone}</td>
                            <td>{e.sellingAgentCompany}</td>
                            <td>{e.sellingAgentContactName}</td>
                            <td>{e.sellingAgentContactEmail}</td>
                            <td>{e.sellingAgentPhone}</td>
                            <td>{e.mortgageBrokerCompany}</td>
                            <td>{e.mortgageBrokerContact}</td>
                            <td>{e.mortgageBrokerContactEmail}</td>
                            <td>{e.mortgageBrokerPhone}</td>
                            <td>{e.underwriter}</td>
                            <td>{e.createdAt}</td>
                            <td>
                              <img
                                src={menu}
                                alt=""
                                onClick={() => {
                                  toggleDropdown(i);
                                }}
                              />
                              {activeIndex === i && <OrderActionsPopup />}
                            </td>
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
      </div>

      <div className="w-full flex justify-end gap-5 items-center">
        <Pagination
          onPageChange={handlePageChange}
          pageCount={data?.totalPages}
        />
      </div>
    </div>
  );
};

export default OrdersTable;
