import { useState } from "react";
import upload from "../../assets/icons/UploadSimple.svg";
import add from "../../assets/icons/AlignLeft.svg";
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
import TableHeader from "../../components/table/TableHeader";
import { useGetOrdersQuery } from "../../lib/rtkQuery/orderApi";

const OrdersTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("Active");
  const navigate = useNavigate();

  const options: string[] = [
    "10 Items Per Page",
    "20 Items Per Page",
    "30 Items Per Page",
  ];
  const users = DummyData();
  const { data } = useGetOrdersQuery({ filter: "" });

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const tableHeaders = [
    { text: "id", arrowIcon: true },
    { text: "titleOfficer", arrowIcon: true },
    { text: "titleOffice", arrowIcon: true },
    { text: "titleRep", arrowIcon: true },
    { text: "titleRepPct", arrowIcon: true },
    { text: "openDate", arrowIcon: true },
    { text: "estimatedClosingDate", arrowIcon: true },
    { text: "closedDate", arrowIcon: true },
    { text: "fileType", arrowIcon: true },
    { text: "orderNumber", arrowIcon: true },
    { text: "fileStatus", arrowIcon: true },
    { text: "salePrice", arrowIcon: true },
    { text: "loanAmount", arrowIcon: true },
    { text: "propertyAddress", arrowIcon: true },
    { text: "propertyCounty", arrowIcon: true },
    { text: "propertyState", arrowIcon: true },
    { text: "escrowOfficer", arrowIcon: true },
    { text: "listingAgentCompany", arrowIcon: true },
    { text: "listingAgentContactName", arrowIcon: true },
    { text: "listingAgentContactEmail", arrowIcon: true },
    { text: "listingAgentPhone", arrowIcon: true },
    { text: "sellingAgentCompany", arrowIcon: true },
    { text: "sellingAgentContactName", arrowIcon: true },
    { text: "sellingAgentContactEmail", arrowIcon: true },
    { text: "sellingAgentPhone", arrowIcon: true },
    { text: "mortgageBrokerCompany", arrowIcon: true },
    { text: "mortgageBrokerContact", arrowIcon: true },
    { text: "mortgageBrokerContactEmail", arrowIcon: true },
    { text: "mortgageBrokerPhone", arrowIcon: true },
    { text: "underwriter", arrowIcon: true },
    { text: "createdAt", arrowIcon: true },
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
              height="h-[44px]"
              options={["All", "Active", "InActive"]}
              selected={selectedFilter}
              setSelected={(e) => setSelectedFilter(e)}
              width="w-[180px]"
            />
            <div className="rounded-xl flex justify-center items-center bg-(--smoke) w-[44px] h-[44px]">
              <img src={upload} alt="" />
            </div>
            <div
              className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white"
              // onClick={() => navigate("/admin/add-user")}
            >
              <img src={add} alt="" />
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
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full flex justify-end gap-5 items-center">
        <CustomizableDropdown
          options={options}
          selected={`${itemsPerPage} Items Per Page`}
          setSelected={() => ""}
          width="w-60"
        />

        <Pagination onPageChange={() => ""} pageCount={4} />
      </div>
    </div>
  );
};

export default OrdersTable;
