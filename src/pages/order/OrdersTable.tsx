import { useEffect, useState } from "react";
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
import { SubmitHandler, useForm } from "react-hook-form";
interface FormValues {
  propertyCounty: string;
  fileStatus: string;
  fileType: string;
}
const OrdersTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<FormValues>();

  const [page, setPage] = useState(1);

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    if (newPage >= 1 && newPage <= data?.totalPages) {
      setPage(newPage);
    }
  };

  const selectedPropertyCounty = watch("propertyCounty") || "";
  const selectedFileStatus = watch("fileStatus") || "";
  const selectedFileType = watch("fileType") || "";

  const { data, isLoading, refetch } = useGetOrdersQuery({
    status: selectedFileStatus,
    type: selectedFileType,
    propertyCounty: selectedPropertyCounty,
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

  const handleDetailPage = (orderData: any) => {
    navigate(`/orders/order-detail`, { state: { orderData } });
  };
  useEffect(() => {
    refetch();
  }, []);

  const fileStatusOption = [
    { value: "Open", label: "Open" },
    { value: "Closed", label: "Closed" },
    { value: "On Hold", label: "On Hold" },
    { value: "Cancelled", label: "Cancelled" },
  ];
  const countyOptions = [
    { value: "Alameda", label: "Alameda" },
    { value: "Bedford", label: "Bedford" },
    { value: "Contra Costa", label: "Contra Costa" },
    { value: "Fresno", label: "Fresno" },
    { value: "Imperial", label: "Imperial" },
    { value: "Inyo", label: "Inyo" },
    { value: "Kern", label: "Kern" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "Mendocino", label: "Mendocino" },
    { value: "Modoc", label: "Modoc" },
    { value: "Napa", label: "Napa" },
    { value: "Orange", label: "Orange" },
    { value: "Riverside", label: "Riverside" },
    { value: "Sacramento", label: "Sacramento" },
    { value: "San Bernardino", label: "San Bernardino" },
    { value: "San Diego", label: "San Diego" },
    { value: "San Luis Obispo", label: "San Luis Obispo" },
    { value: "San Mateo", label: "San Mateo" },
    { value: "Santa Barbara", label: "Santa Barbara" },
    { value: "Santa Clara", label: "Santa Clara" },
    { value: "Stanislaus", label: "Stanislaus" },
    { value: "Tulare", label: "Tulare" },
    { value: "Ventura", label: "Ventura" },
  ];
  const fileTypeOptions = [
    { value: "Title Only - REFI", label: "Title Only - REFI" },
    { value: "Title Only - SALE", label: "Title Only - SALE" },
    { value: "Prelim/Commitment", label: "Prelim/Commitment" },
    { value: "Escrow Only - Sale", label: "Escrow Only - Sale" },
    { value: "Escrow Only - REFI", label: "Escrow Only - REFI" },
    { value: "Title and Escrow - SALE", label: "Title and Escrow - SALE" },
    { value: "Title and Escrow - REFI", label: "Title and Escrow - REFI" },
    { value: "Commercial Escrow - REFI", label: "Commercial Escrow - REFI" },
    { value: "Commercial Title - REFI", label: "Commercial Title - REFI" },
    { value: "Commercial Title - SALE", label: "Commercial Title - SALE" },
    { value: "LCP", label: "LCP" },
    { value: "Other", label: "Other" },
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
        <form className="font-Poppins flex justify-between items-center w-full pt-3 gap-2">
          <SearchInput
            value={searchValue}
            onChange={(e: any) => setSearchValue(e.target.value)}
          />
          <div className="flex items-center gap-1.5">
            <SelectField
              name="propertyCounty"
              control={control}
              options={countyOptions}
              placeholder="County"
              error={errors.propertyCounty?.message}
              required={false}
              className="w-[150px]"
              height="44px"
            />
            <SelectField
              name="fileStatus"
              control={control}
              options={fileStatusOption}
              placeholder="Status"
              error={errors.fileStatus?.message}
              required={false}
              className="w-[120px]"
              height="44px"
            />
            <SelectField
              name="fileType"
              control={control}
              options={fileTypeOptions}
              placeholder="Type"
              error={errors.fileType?.message}
              required={false}
              className="w-[180px]"
              height="44px"
            />

            <button className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white">
              <img src={filter} alt="" />
            </button>
            <div className="rounded-xl flex justify-center items-center bg-(--smoke) w-[44px] h-[44px]">
              <img src={upload} alt="" />
            </div>

            <div
              className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white"
              onClick={() => navigate("/orders/add-order")}
            >
              <img src={add} alt="" />
              Add Order
            </div>
          </div>
        </form>

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
                            className="font-Jakarta text-sm font-normal text-[#15120F] h-[80px] border-b-[1px] border-[#F4EFE9] cursor-pointer "
                            onClick={() => handleDetailPage(e)}
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
