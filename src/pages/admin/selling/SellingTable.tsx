import React, { useState } from "react";
import Pagination from "../../../components/common/Pagination";
import CardLayout from "../../../components/layouts/CardLayout";
import MainTitle from "../../../components/ui/typography/MainTitle";
import TableSkeleton from "../../../components/ui/skeleton/TableSkeleton";
import NoDataRow from "../../../components/ui/NoDataRow";
import {
  useCreateSellingAgentMutation,
  useCreateSellingOfficeMutation,
  useDeleteSellingAgentMutation,
  useDeleteSellingOfficeMutation,
  useGetSellingOfficesWithAgentQuery,
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
import DataTable, { TableColumn } from "react-data-table-component";
const SellingTable = () => {
  const [loading, setLoading] = useState("");

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm<ListingOfficeDataType>({
    defaultValues: { name: "" },
  });

  const [page, setPage] = useState(1);
  const [expandedRowId, setExpandedRowId] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddAgentInListingPopupOpen, setIsAddAgentInListingPopupOpen] =
    useState(false);

  const togglePopup = () => setIsPopupOpen((prev) => !prev);
  const toggleAddAgentInListingPopup = () =>
    setIsAddAgentInListingPopupOpen((prev) => !prev);

  const {
    data: listingOfficeData,
    isLoading,
    refetch,
  } = useGetSellingOfficesWithAgentQuery({ page, limit: 10 });

  const selectedRow = listingOfficeData?.data?.find(
    (item: any) => item.id === expandedRowId
  );

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    if (newPage >= 1 && newPage <= listingOfficeData?.totalPages) {
      setPage(newPage);
    }
  };

  const [deleteSellingOffice] = useDeleteSellingOfficeMutation();
  const [createSellingOffice, { isLoading: createListingOfficeLoading }] =
    useCreateSellingOfficeMutation();
  const [createSellingAgent, { isLoading: createListingAgentLoading }] =
    useCreateSellingAgentMutation();
  const [deleteSellingAgent, { isLoading: deleteLoading }] =
    useDeleteSellingAgentMutation();

  const handleAction = async (action: string, rowData: any) => {
    if (action === "detail") {
      setExpandedRowId(rowData.id);
    }
    if (action === "delete" && rowData) {
      setLoading(rowData?.id);
      try {
        const res = await deleteSellingOffice({ id: rowData?.id }).unwrap();
        toast.success(res?.message || "Order deleted successfully");
        refetch();
      } catch (err: any) {
        toast.error(err?.data?.message || "Cannot delete user");
      } finally {
        setLoading("");
      }
    }
  };

  const onSubmit: SubmitHandler<ListingOfficeDataType> = async (data) => {
    try {
      const res = await createSellingOffice(data).unwrap();
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
      sellingOfficeId: selectedRow?.id || 0,
      contactName: data.contactName || "",
    };
    try {
      const res = await createSellingAgent(formattedData).unwrap();
      console.log(res, "==res==");
      toast.success("Agent Added Successfully");
      reset();
      refetch();
      toggleAddAgentInListingPopup();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to add agent");
    }
  };

  const handleDeleteAgent = async (agentId: number) => {
    try {
      const res = await deleteSellingAgent({ id: agentId }).unwrap();
      toast.success(res?.message || "Agent deleted successfully");
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to delete agent");
    }
  };

  const listingOfficeColumns: TableColumn<any>[] = [
    {
      name: "",
      cell: (row: any) =>
        loading === row?.id ? (
          <Spinner />
        ) : (
          <PopoverMenu
            triggerImage={menu}
            options={[
              { label: "Edit", onClick: () => handleAction("edit", row) },
              { label: "Detail", onClick: () => handleAction("detail", row) },
              { label: "Delete", onClick: () => handleAction("delete", row) },
            ]}
          />
        ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "Id",
      selector: (row: any) => row.id,
      cell: (row: any) => (
        <div className="px-3" title={row.id}>
          {row.id}
        </div>
      ),
    },
    {
      name: "Selling Office",
      selector: (row: any) => row.name,
    },
    {
      name: "Orders",
      selector: (row: any) => row.orderCount,
    },
    {
      name: "Orders %",
      selector: (row: any) => formatNumber(row.orderPercentage),
    },
    {
      name: "Fees",
      selector: (row: any) => row.orderFeeTotal,
    },
    {
      name: "Fees %",
      selector: (row: any) => formatNumber(row.feePercentage),
    },
  ];

  const listingAgentColumns: TableColumn<any>[] = [
    {
      name: "Agent ID",
      selector: (row: any) => row.id,
    },
    {
      name: "Contact Name",
      selector: (row: any) => row.contactName,
    },
    {
      name: "Actions",
      cell: (row: any) => (
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          onClick={() => handleDeleteAgent(row.id)}
          disabled={deleteLoading}
        >
          Delete
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

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
              <MainTitle title="Add Selling Office" />
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
          <div className="w-full flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <MainTitle title="Selling Offices" />
              <div
                className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white"
                onClick={togglePopup}
              >
                <img src={add} alt="" />
              </div>
            </div>

            <DataTable
              columns={listingOfficeColumns}
              data={listingOfficeData?.data || []}
              highlightOnHover
              striped
              className="head-row table-row"
              noDataComponent={
                <div className="w-full text-center py-6 px-6 text-gray-500 bg-gray-100 rounded">
                  No data found
                </div>
              }
              progressPending={isLoading}
              fixedHeader
            />
          </div>
        </CardLayout>
      ) : (
        <CardLayout>
          <div className="w-full flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <MainTitle title="Selling Agent" />
              <div
                className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white"
                onClick={toggleAddAgentInListingPopup}
              >
                <img src={add} alt="" />
              </div>
            </div>

            <DataTable
              columns={listingAgentColumns}
              data={selectedRow?.sellingAgents || []}
              highlightOnHover
              striped
              className="head-row table-row"
              noDataComponent={
                <div className="w-full text-center py-6 px-6 text-gray-500 bg-gray-100 rounded">
                  No data found
                </div>
              }
              fixedHeader
              fixedHeaderScrollHeight="300px"
            />

            <button
              onClick={() => setExpandedRowId(null)}
              className="text-sm text-blue-500 hover:underline mt-4"
            >
              Back to selling company
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

export default SellingTable;
