import { Controller, SubmitHandler, useForm } from "react-hook-form";
import chat from "../../assets/icons/ChatCircle.svg";
import phone from "../../assets/icons/Phone.svg";
import plane from "../../assets/icons/PaperPlaneTilt.svg";
import dummy from "../../assets/images/Dummy.jpg";
import { useEffect, useState } from "react";
import Breadcrumb from "../../components/common/BreadCrumb";
import TabNavigation from "../../components/common/TabNavigation";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";
import DateInput from "../../components/common/DateInput";
import InputField from "../../components/inputs/InputFields";
import SelectField from "../../components/inputs/SelectField";
import CustomDatePicker from "../../components/inputs/CustomDatePicker";
import { formatDate } from "../../utils/formatDate";
import {
  useCreateOrderMutation,
  useDeleteOrderMutation,
} from "../../lib/rtkQuery/orderApi";
import toast from "react-hot-toast";
import { useAppSelector } from "../../lib/store/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../components/common/Spinner";

interface FormValues {
  titleOffice: string;
  agent: string;
  titleRepPct: string;
  openDate: string;
  estimatedClosingDate: string;
  closedDate: string;
  cancelDate: string;
  transactionType: string;
  orderNumber: string;
  orderStatus: string;
  // salePrice: string;
  // loanAmount: string;
  propertyAddress: string;
  propertyCounty: string;
  propertyState: string;
  fileStatus: string;
  titleOfficer: string;
  escrowOfficer: string;
  listingAgentCompany: string;
  listingAgentContactName: string;
  listingAgentContactEmail: string;
  listingAgentPhone: string;
  sellingAgentCompany: string;
  sellingAgentContactName: string;
  sellingAgentContactEmail: string;
  sellingAgentPhone: string;
  mortgageBrokerCompany: string;
  mortgageBrokerContact: string;
  mortgageBrokerContactEmail: string;
  mortgageBrokerPhone: string;
  underwriter: string;
  fileType: string;
}

const OrderDetail = () => {
  const [deleteOrder, { isLoading }] = useDeleteOrderMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<FormValues>();

  const data = useLocation();

  const { orderData } = data.state || {};
  console.log(orderData);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await deleteOrder(orderData?.id).unwrap();
      toast.success("Order delete Successfully");
      navigate("/orders/orders");
    } catch (err: any) {
      toast.error(err?.data?.message || "Order creation failed");
    }
  };

  const roleOption = [
    { value: "Agent 1", label: "Agent 1" },
    { value: "Agent 2", label: "Agent 2" },
    { value: "Agent 3", label: "Agent 3" },
    { value: "Agent 4", label: "Agent 4" },
  ];
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

  useEffect(() => {
    if (orderData) {
      setValue("titleOffice", orderData.titleOffice || "");
      setValue("agent", orderData.agent || "");
      setValue("titleRepPct", orderData.titleRepPct || "");
      setValue("openDate", orderData.openDate || "");
      setValue("estimatedClosingDate", orderData.estimatedClosingDate || "");
      setValue("closedDate", orderData.closedDate || "");
      setValue("cancelDate", orderData.cancelDate || "");
      setValue("transactionType", orderData.transactionType || "");
      setValue("orderNumber", orderData.orderNumber || "");
      setValue("orderStatus", orderData.orderStatus || "");
      setValue("propertyAddress", orderData.propertyAddress || "");
      setValue("propertyCounty", orderData.propertyCounty || "");
      setValue("propertyState", orderData.propertyState || "");
      setValue("fileStatus", orderData.fileStatus || "");
      setValue("titleOfficer", orderData.titleOfficer || "");
      setValue("escrowOfficer", orderData.escrowOfficer || "");
      setValue("listingAgentCompany", orderData.listingAgentCompany || "");
      setValue(
        "listingAgentContactName",
        orderData.listingAgentContactName || ""
      );
      setValue(
        "listingAgentContactEmail",
        orderData.listingAgentContactEmail || ""
      );
      setValue("listingAgentPhone", orderData.listingAgentPhone || "");
      setValue("sellingAgentCompany", orderData.sellingAgentCompany || "");
      setValue(
        "sellingAgentContactName",
        orderData.sellingAgentContactName || ""
      );
      setValue(
        "sellingAgentContactEmail",
        orderData.sellingAgentContactEmail || ""
      );
      setValue("sellingAgentPhone", orderData.sellingAgentPhone || "");
      setValue("mortgageBrokerCompany", orderData.mortgageBrokerCompany || "");
      setValue("mortgageBrokerContact", orderData.mortgageBrokerContact || "");
      setValue(
        "mortgageBrokerContactEmail",
        orderData.mortgageBrokerContactEmail || ""
      );
      setValue("mortgageBrokerPhone", orderData.mortgageBrokerPhone || "");
      setValue("underwriter", orderData.underwriter || "");
      setValue("fileType", orderData.fileType || "");
    }
  }, [orderData, setValue]);

  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Orders", "Orders Table", " Order detail"]} />

      <div className="shadow-(--cardShadow) rounded-2xl bg-white px-4 min-h-auto my-6 w-[74%] py-6 flex flex-col gap-3 ">
        <div className="w-full flex flex-col gap-3 pt-2">
          <p className="text-(--greyText) text-sm ">
            This is the main form in the system that you see in a spreadsheet
            style view when you go into transactions. Rearranging, adding or
            removing fields here will affect the columns you see in the
            "transactions" screen and also the order you see them in.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex justify-between items-center flex-wrap py-4 gap-4"
          >
            <InputField
              label="Title Office"
              name="titleOffice"
              control={control}
              type="text"
              placeholder="Enter your title Office"
              error={errors.titleOffice?.message}
              className="w-[48%]"
            />
            <SelectField
              label="Agent"
              name="agent"
              control={control}
              options={roleOption}
              placeholder="Select..."
              error={errors.agent?.message}
              required={false}
              className="w-[48%] "
            />
            <CustomDatePicker
              name="openDate"
              control={control}
              label="Open Date"
              placeholder="8-21-15"
              // rules={{ required: "Date is required" }}
              className="w-[48%]"
            />

            <CustomDatePicker
              name="estimatedClosingDate"
              control={control}
              label="Estimated Closing Date"
              placeholder="8-21-15"
              // rules={{ required: "Date is required" }}
              className="w-[48%]"
            />
            <CustomDatePicker
              name="closedDate"
              control={control}
              label="Closing Date"
              placeholder="8-21-15"
              // rules={{ required: "Date is required" }}
              className="w-[48%]"
            />

            <InputField
              label="Title Office"
              name="fileType"
              control={control}
              type="text"
              placeholder="Enter your file type"
              error={errors.fileType?.message}
              className="w-[48%]"
            />

            <InputField
              label="Order Number"
              name="orderNumber"
              control={control}
              type="text"
              placeholder="Enter your order number"
              error={errors.orderNumber?.message}
              className="w-[48%]"
            />

            <SelectField
              label="File Status"
              name="fileStatus"
              control={control}
              options={fileStatusOption}
              placeholder="Select..."
              error={errors.fileStatus?.message}
              required={false}
              className="w-[48%] "
            />
            <SelectField
              label="File Type"
              name="fileType"
              control={control}
              options={fileTypeOptions}
              placeholder="Select..."
              error={errors.fileType?.message}
              required={false}
              className="w-[48%] "
            />

            {/* <InputField
              label="Sale Price"
              name="salePrice"
              control={control}
              type="text"
              placeholder="Enter sale price"
              error={errors.salePrice?.message}
              className="w-[48%]"
            />

            <InputField
              label="Loan Amount"
              name="loanAmount"
              control={control}
              type="text"
              placeholder="Enter loan amount"
              error={errors.loanAmount?.message}
              className="w-[48%]"
            /> */}

            <InputField
              label="Property Address"
              name="propertyAddress"
              control={control}
              type="text"
              placeholder="Enter property address"
              error={errors.propertyAddress?.message}
              className="w-[48%]"
            />

            <SelectField
              label="Property County"
              name="propertyCounty"
              control={control}
              options={countyOptions}
              placeholder="Select..."
              error={errors.propertyCounty?.message}
              required={false}
              className="w-[48%] "
            />

            <InputField
              label="Property State"
              name="propertyState"
              control={control}
              type="text"
              placeholder="Enter property state"
              error={errors.propertyState?.message}
              className="w-[48%]"
            />

            <InputField
              label="Title Officer"
              name="titleOfficer"
              control={control}
              type="text"
              placeholder="Enter title officer"
              error={errors.titleOfficer?.message}
              className="w-[48%]"
            />

            <InputField
              label="Escrow Officer"
              name="escrowOfficer"
              control={control}
              type="text"
              placeholder="Enter escrow officer"
              error={errors.escrowOfficer?.message}
              className="w-[48%]"
            />

            <InputField
              label="Listing Agent Company"
              name="listingAgentCompany"
              control={control}
              type="text"
              placeholder="Enter listing agent company"
              error={errors.listingAgentCompany?.message}
              className="w-[48%]"
            />

            <InputField
              label="Listing Agent Contact Name"
              name="listingAgentContactName"
              control={control}
              type="text"
              placeholder="Enter listing agent contact name"
              error={errors.listingAgentContactName?.message}
              className="w-[48%]"
            />

            <InputField
              label="Listing Agent Contact Email"
              name="listingAgentContactEmail"
              control={control}
              type="email"
              placeholder="Enter listing agent contact email"
              error={errors.listingAgentContactEmail?.message}
              className="w-[48%]"
            />

            <InputField
              label="Listing Agent Phone"
              name="listingAgentPhone"
              control={control}
              type="text"
              placeholder="Enter listing agent phone"
              error={errors.listingAgentPhone?.message}
              className="w-[48%]"
            />

            <InputField
              label="Selling Agent Company"
              name="sellingAgentCompany"
              control={control}
              type="text"
              placeholder="Enter selling agent company"
              error={errors.sellingAgentCompany?.message}
              className="w-[48%]"
            />

            <InputField
              label="Selling Agent Contact Name"
              name="sellingAgentContactName"
              control={control}
              type="text"
              placeholder="Enter selling agent contact name"
              error={errors.sellingAgentContactName?.message}
              className="w-[48%]"
            />

            <InputField
              label="Selling Agent Contact Email"
              name="sellingAgentContactEmail"
              control={control}
              type="email"
              placeholder="Enter selling agent contact email"
              error={errors.sellingAgentContactEmail?.message}
              className="w-[48%]"
            />

            <InputField
              label="Selling Agent Phone"
              name="sellingAgentPhone"
              control={control}
              type="text"
              placeholder="Enter selling agent phone"
              error={errors.sellingAgentPhone?.message}
              className="w-[48%]"
            />

            <InputField
              label="Mortgage Broker Company"
              name="mortgageBrokerCompany"
              control={control}
              type="text"
              placeholder="Enter mortgage broker company"
              error={errors.mortgageBrokerCompany?.message}
              className="w-[48%]"
            />

            <InputField
              label="Mortgage Broker Contact"
              name="mortgageBrokerContact"
              control={control}
              type="text"
              placeholder="Enter mortgage broker contact"
              error={errors.mortgageBrokerContact?.message}
              className="w-[48%]"
            />

            <InputField
              label="Mortgage Broker Contact Email"
              name="mortgageBrokerContactEmail"
              control={control}
              type="email"
              placeholder="Enter mortgage broker contact email"
              error={errors.mortgageBrokerContactEmail?.message}
              className="w-[48%]"
            />

            <InputField
              label="Mortgage Broker Phone"
              name="mortgageBrokerPhone"
              control={control}
              type="text"
              placeholder="Enter mortgage broker phone"
              error={errors.mortgageBrokerPhone?.message}
              className="w-[48%]"
            />

            <InputField
              label="Underwriter"
              name="underwriter"
              control={control}
              type="text"
              placeholder="Enter underwriter"
              error={errors.underwriter?.message}
              className="w-[48%]"
            />

            <div className="flex justify-end w-full my-3">
              <button
                type="submit"
                className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] w-fit px-8  rounded-xl text-white"
              >
                {isLoading ? <Spinner /> : "Delete Order"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
