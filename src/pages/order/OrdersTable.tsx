import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
} from "../../lib/rtkQuery/orderApi";
import { DummyData, tableHeaders } from "../../utils/DummyData";
import {
  countyOptions,
  fileStatusOption,
  fileTypeOptions,
  transactionOption,
} from "../../utils/options";

import Breadcrumb from "../../components/common/BreadCrumb";
import Pagination from "../../components/common/Pagination";
import StatsCard from "../../components/orders/StatsCard";
import TableHeader from "../../components/ui/table/TableHeader";
import SelectField from "../../components/inputs/SelectField";
import SearchInput from "../../components/inputs/SearchInput";
import NoDataRow from "../../components/ui/NoDataRow";
import TableSkeleton from "../../components/ui/skeleton/TableSkeleton";

import upload from "../../assets/icons/UploadSimple.svg";
import filter from "../../assets/icons/AlignLeft.svg";
import add from "../../assets/icons/Add.svg";
import menu from "../../assets/icons/Menu.svg";
import arrowUpDown from "../../assets/icons/ArrowsDownUp.svg";
import Spinner from "../../components/common/Spinner";
import PopoverMenu from "../../components/ui/popup/PopupMenu";
import toast from "react-hot-toast";
import { OrderDataType } from "../../utils/types";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import CardLayout from "../../components/layouts/CardLayout";

const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState("");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const {
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<OrderDataType>();

  const selectedPropertyCounty = watch("propertyCounty") || "";
  const selectedFileStatus = watch("fileStatus") || "";
  const selectedFileType = watch("fileType") || "";
  const selectTransactionType = watch("transactionType") || "";

  const [deleteOrder] = useDeleteOrderMutation();
  const { data, isLoading, refetch } = useGetOrdersQuery({
    status: selectedFileStatus,
    type: selectedFileType,
    propertyCounty: selectedPropertyCounty,
    transactionType: selectTransactionType,
    page,
    limit: 10,
    keyword: searchTerm,
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
      navigate(`/orders/order-detail`, { state: { orderData } });
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

  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className="w-full px-4 my-8 font-poppin">
      <Breadcrumb items={["Orders", "Orders"]} />
      <div className="w-full flex gap-4 mt-2">
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
                <th className="px-6"></th>

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
                                        onClick: () => handleAction("edit", e),
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
  );
};

export default OrdersTable;
