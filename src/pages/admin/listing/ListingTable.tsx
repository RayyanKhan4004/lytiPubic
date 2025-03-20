import React, { useState } from "react";
import Pagination from "../../../components/common/Pagination";
import CardLayout from "../../../components/layouts/CardLayout";
import MainTitle from "../../../components/ui/typography/MainTitle";
import TableSkeleton from "../../../components/ui/skeleton/TableSkeleton";
import NoDataRow from "../../../components/ui/NoDataRow";
import {
  useCreateListingAgentMutation,
  useCreateListingOfficeMutation,
  useDeleteListingAgentMutation,
  useDeleteListingOfficeMutation,
  useGetListingOfficesWithAgentQuery,
} from "../../../lib/rtkQuery/orderApi";
import Breadcrumb from "../../../components/common/BreadCrumb";
import menu from "../../../assets/icons/Menu.svg";
import PopoverMenu from "../../../components/ui/popup/PopupMenu";
import add from "../../../assets/icons/Add.svg";
import { Dialog, DialogOverlay, DialogContent } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ListingOfficeDataType } from "../../../utils/types";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../../../components/inputs/InputFields";
import toast from "react-hot-toast";
import Spinner from "../../../components/common/Spinner";
import { formatNumber } from "../../../utils/functions";
const ListingTable = () => {
  const [loading, setLoading] = useState("");

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm<ListingOfficeDataType>({
    defaultValues: {
      name: "",
    },
  });

  const [page, setPage] = useState(1);
  const [expandedRowId, setExpandedRowId] = useState<number | null>(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddAgentInListingPopupOpen, setIsAddAgentInListingPopupOpen] =
    useState(false);
  const [createListingAgent, { isLoading: createListingAgentLoading }] =
    useCreateListingAgentMutation();
  const togglePopup = () => setIsPopupOpen((prev) => !prev);
  const toggleAddAgentInListingPopup = () =>
    setIsAddAgentInListingPopupOpen((prev) => !prev);

  const {
    data: listingOfficeData,
    isLoading,
    refetch,
  } = useGetListingOfficesWithAgentQuery({
    page,
    limit: 10,
  });
  const selectedRow = listingOfficeData?.data?.find(
    (item: any) => item.id === expandedRowId
  );

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    if (newPage >= 1 && newPage <= listingOfficeData?.totalPages) {
      setPage(newPage);
    }
  };

  const [deleteListingOffice] = useDeleteListingOfficeMutation();
  const handleAction = async (action: string, rowData: any) => {
    if (action === "detail") {
      setExpandedRowId(rowData.id);
    }
    if (action === "delete" && rowData) {
      setLoading(rowData?.id);
      try {
        const res = await deleteListingOffice({ id: rowData?.id }).unwrap();
        toast.success(res?.message || "Order deleted successfully");
        refetch();
      } catch (err: any) {
        toast.error(err?.data?.message || "Cannot delete user");
      } finally {
        setLoading("");
      }
    }
  };

  const [createListingOffice, { isLoading: createListingOfficeLoading }] =
    useCreateListingOfficeMutation();
  const onSubmit: SubmitHandler<ListingOfficeDataType> = async (data) => {
    const formattedData = {
      ...data,
    };
    try {
      const res = await createListingOffice(formattedData).unwrap();
      console.log(res, "==res==");
      toast.success("Company Created Successfully");
      reset();
      togglePopup();
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Company creation failed");
    }
  };
  const onListingAgentSubmit: SubmitHandler<ListingOfficeDataType> = async (
    data
  ) => {
    const formattedData = {
      listingOfficeId: selectedRow?.id || 0,
      contactName: data.contactName || "",
    };
    try {
      const res = await createListingAgent(formattedData).unwrap();
      console.log(res, "==res==");
      toast.success("Agent Added Successfully");
      reset();
      refetch();
      toggleAddAgentInListingPopup();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to add agent");
    }
  };
  const [deleteListingAgent, { isLoading: deleteLoading }] =
    useDeleteListingAgentMutation();

  const handleDeleteAgent = async (agentId: number) => {
    try {
      const res = await deleteListingAgent({ id: agentId }).unwrap();

      toast.success(res?.message || "Agent deleted successfully");
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to delete agent");
    }
  };

  return (
    <div className="w-full px-4 my-8 font-Poppins min-h-full">
      <Breadcrumb items={["Admin", "Listing "]} />

      <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/50 z-[100]" />
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg w-96 z-[100]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            key={isPopupOpen ? "open" : "closed"}
          >
            <div className="flex justify-between items-center mb-4">
              <MainTitle title="Add Listing Office" />
              <button onClick={togglePopup}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <InputField
              label="Company Name"
              name="name"
              control={control}
              type="text"
              placeholder="Devclan"
              error={errors.name?.message}
            />
            <button
              type="submit"
              className="w-full bg-(--secondary) text-white py-2 rounded-md mt-5"
            >
              {createListingOfficeLoading ? <Spinner /> : "Send"}
            </button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isAddAgentInListingPopupOpen}
        onOpenChange={setIsAddAgentInListingPopupOpen}
      >
        <DialogOverlay className="fixed inset-0 bg-black/50 z-[100]" />
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg w-96 z-[100]">
          <form
            onSubmit={handleSubmit(onListingAgentSubmit)}
            key={isAddAgentInListingPopupOpen ? "open" : "closed"}
          >
            <div className="flex justify-between items-center mb-4">
              <MainTitle title="Add Agent" />
              <button onClick={toggleAddAgentInListingPopup}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <InputField
              label="Contact Name"
              name="contactName"
              control={control}
              type="text"
              placeholder="Enter name"
              error={errors.contactName?.message}
            />
            <button
              type="submit"
              className="w-full bg-(--secondary) text-white py-2 rounded-md mt-5"
            >
              {createListingAgentLoading ? <Spinner /> : "Send"}
            </button>
          </form>
        </DialogContent>
      </Dialog>

      {expandedRowId === null ? (
        <CardLayout>
          <div className="w-full flex flex-col gap-4 ">
            <div className="flex justify-between items-center">
              <MainTitle title="Listing Offices" />
              <div
                className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white"
                onClick={togglePopup}
              >
                <img src={add} alt="" />
              </div>
            </div>

            <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F] mt-7">
              <thead className="text-sm font-normal text-start border-b-[1px] border-[#F4EFE9] ">
                <tr>
                  <th></th>
                  <th className="text-start font-medium">Id</th>
                  <th className="text-start font-medium">Listing Office</th>
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
                  <TableSkeleton columns={7} />
                ) : listingOfficeData?.data?.length === 0 ? (
                  <NoDataRow colSpan={7} />
                ) : (
                  listingOfficeData?.data?.map((e: any) => (
                    <tr
                      key={e.id}
                      className="font-Jakarta text-sm font-normal text-[#15120F] h-[55px] border-b-[1px] border-[#F4EFE9] bg-white hover:bg-gray-100 transition-colors duration-500 ease-in-out"
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
                                  label: "Edit ",
                                  onClick: () => handleAction("edit", e),
                                },
                                {
                                  label: "Detail",
                                  onClick: () => handleAction("detail", e),
                                },
                                {
                                  label: "Delete",
                                  onClick: () => handleAction("delete", e),
                                },
                              ]}
                            />
                          </>
                        )}
                      </td>
                      <td className="px-3" title={e.id}>
                        {e.id}
                      </td>
                      <td>{e.name}</td>
                      <td>{e.orderCount}</td>
                      <td>{formatNumber(e.orderPercentage)}</td>
                      <td>{e.orderFeeTotal}</td>
                      <td>{formatNumber(e.feePercentage)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardLayout>
      ) : (
        <CardLayout>
          <div className="w-full flex flex-col gap-4 ">
            <div className="flex justify-between items-center">
              <MainTitle title="Listing Detail" />
              <div
                className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white"
                onClick={toggleAddAgentInListingPopup}
              >
                <img src={add} alt="" />
              </div>
            </div>

            <table className="w-full text-sm font-normal text-[#15120F] mt-4">
              <thead className="text-start border-b-[1px] border-[#F4EFE9]">
                <tr>
                  <th className="p-2 text-start">Agent ID</th>
                  <th className="p-2 text-start">Contact Name</th>
                </tr>
              </thead>

              <tbody>
                {selectedRow?.listingAgents.map((agent: any) => (
                  <tr
                    key={agent.id}
                    className="border-b-[1px] border-[#F4EFE9]"
                  >
                    <td className="p-2">{agent.id}</td>
                    <td className="p-2">{agent.contactName}</td>
                    <td className="p-2">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        onClick={() => handleDeleteAgent(agent.id)}
                        disabled={deleteLoading}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              onClick={() => setExpandedRowId(null)}
              className="text-sm text-blue-500 hover:underline mt-4"
            >
              Back to Listing
            </button>
          </div>
        </CardLayout>
      )}

      {expandedRowId === null && (
        <div className="w-full flex justify-end gap-5 items-center">
          <Pagination
            onPageChange={handlePageChange}
            pageCount={listingOfficeData?.totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default ListingTable;
