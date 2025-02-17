import { Controller, SubmitHandler, useForm } from "react-hook-form";
import chat from "../../assets/icons/ChatCircle.svg";
import phone from "../../assets/icons/Phone.svg";
import plane from "../../assets/icons/PaperPlaneTilt.svg";
import dummy from "../../assets/images/Dummy.jpg";
import { useState } from "react";
import Breadcrumb from "../../components/common/BreadCrumb";
import TabNavigation from "../../components/common/TabNavigation";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";
import DateInput from "../../components/common/DateInput";

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
  salePrice: string;
  loanAmount: string;
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
}

const OrderEdit = () => {
  const tabItems = ["Edit Details", "Fees"];
  const [activeTab, setActiveTab] = useState(tabItems[0]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {};

  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Orders", "Orders", "Edit"]} />
      <div className="my-8">
        <TabNavigation tabs={tabItems} onTabSelect={setActiveTab} />
      </div>

      {activeTab === "Edit Details" && (
        <div className="w-full flex justify-between">
          <div className="shadow-(--cardShadow) rounded-2xl bg-white px-4 min-h-auto my-6 w-[74%] py-6 flex flex-col gap-3">
            <div className="w-full flex flex-col gap-3 pt-2">
              <p className="text-(--greyText) text-sm ">
                This is the main form in the system that you see in a
                spreadsheet style view when you go into transactions.
                Rearranging, adding or removing fields here will affect the
                columns you see in the "transactions" screen and also the order
                you see them in.
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex justify-between items-center flex-wrap py-4 gap-4"
              >
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="titleOffice"
                    className="text-[14px] font-medium"
                  >
                    Title Office
                  </label>
                  <input
                    type="text"
                    id="titleOffice"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.titleOffice
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("titleOffice", {
                      required: "Title Office is required",
                    })}
                  />
                  {errors.titleOffice && (
                    <span className="text-red-500 text-sm">
                      {errors.titleOffice.message}
                    </span>
                  )}
                </div>

                {/* Agent Dropdown */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label htmlFor="agent" className="text-[14px] font-medium">
                    Agent
                  </label>
                  <Controller
                    name="agent"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Agent is required" }}
                    render={({ field }) => (
                      <CustomizableDropdown
                        height="h-[55px]"
                        options={["Ralph Edwards", "John Doe", "Jane Smith"]}
                        selected={field.value}
                        setSelected={field.onChange}
                        width="w-full"
                      />
                    )}
                  />
                  {errors.agent && (
                    <p className="text-red-500 text-sm">
                      {errors.agent.message}
                    </p>
                  )}
                </div>

                {/* Title Rep Pct */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="titleRepPct"
                    className="text-[14px] font-medium"
                  >
                    Title Rep Pct
                  </label>
                  <input
                    type="text"
                    id="titleRepPct"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.titleRepPct
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("titleRepPct", {
                      required: "Title Rep Pct is required",
                    })}
                  />
                  {errors.titleRepPct && (
                    <span className="text-red-500 text-sm">
                      {errors.titleRepPct.message}
                    </span>
                  )}
                </div>

                {/* Open Date */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label htmlFor="openDate" className="text-[14px] font-medium">
                    Open Date
                  </label>
                  <Controller
                    name="openDate"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Open Date is required" }}
                    render={({ field }) => (
                      <DateInput
                        value={field.value}
                        onChange={field.onChange}
                        height="h-[55px]"
                      />
                    )}
                  />
                  {errors.openDate && (
                    <p className="text-red-500 text-sm">
                      {errors.openDate.message}
                    </p>
                  )}
                </div>

                {/* Estimated Closing Date */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="estimatedClosingDate"
                    className="text-[14px] font-medium"
                  >
                    Estimated Closing Date
                  </label>
                  <Controller
                    name="estimatedClosingDate"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Estimated Closing Date is required" }}
                    render={({ field }) => (
                      <DateInput
                        value={field.value}
                        onChange={field.onChange}
                        height="h-[55px]"
                      />
                    )}
                  />
                  {errors.estimatedClosingDate && (
                    <p className="text-red-500 text-sm">
                      {errors.estimatedClosingDate.message}
                    </p>
                  )}
                </div>

                {/* Closed Date */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="closedDate"
                    className="text-[14px] font-medium"
                  >
                    Closed Date
                  </label>
                  <Controller
                    name="closedDate"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Closed Date is required" }}
                    render={({ field }) => (
                      <DateInput
                        value={field.value}
                        onChange={field.onChange}
                        height="h-[55px]"
                      />
                    )}
                  />
                  {errors.closedDate && (
                    <p className="text-red-500 text-sm">
                      {errors.closedDate.message}
                    </p>
                  )}
                </div>

                {/* Cancel Date */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="cancelDate"
                    className="text-[14px] font-medium"
                  >
                    Cancel Date
                  </label>
                  <Controller
                    name="cancelDate"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Cancel Date is required" }}
                    render={({ field }) => (
                      <DateInput
                        value={field.value}
                        onChange={field.onChange}
                        height="h-[55px]"
                      />
                    )}
                  />
                  {errors.cancelDate && (
                    <p className="text-red-500 text-sm">
                      {errors.cancelDate.message}
                    </p>
                  )}
                </div>

                {/* Transaction Type Dropdown */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="transactionType"
                    className="text-[14px] font-medium"
                  >
                    Transaction Type
                  </label>
                  <Controller
                    name="transactionType"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Transaction Type is required" }}
                    render={({ field }) => (
                      <CustomizableDropdown
                        height="h-[55px]"
                        options={["Prelim", "Final", "Pending"]}
                        selected={field.value}
                        setSelected={field.onChange}
                        width="w-full"
                      />
                    )}
                  />
                  {errors.transactionType && (
                    <p className="text-red-500 text-sm">
                      {errors.transactionType.message}
                    </p>
                  )}
                </div>

                {/* Order Number */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="orderNumber"
                    className="text-[14px] font-medium"
                  >
                    Order Number
                  </label>
                  <input
                    type="text"
                    id="orderNumber"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.orderNumber
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("orderNumber", {
                      required: "Order Number is required",
                    })}
                  />
                  {errors.orderNumber && (
                    <span className="text-red-500 text-sm">
                      {errors.orderNumber.message}
                    </span>
                  )}
                </div>

                {/* Order Status Dropdown */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="orderStatus"
                    className="text-[14px] font-medium"
                  >
                    Order Status
                  </label>
                  <Controller
                    name="orderStatus"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Order Status is required" }}
                    render={({ field }) => (
                      <CustomizableDropdown
                        height="h-[55px]"
                        options={["Cancelled", "Completed", "Pending"]}
                        selected={field.value}
                        setSelected={field.onChange}
                        width="w-full"
                      />
                    )}
                  />
                  {errors.orderStatus && (
                    <p className="text-red-500 text-sm">
                      {errors.orderStatus.message}
                    </p>
                  )}
                </div>

                {/* Sale Price */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="salePrice"
                    className="text-[14px] font-medium"
                  >
                    Sale Price
                  </label>
                  <input
                    type="text"
                    id="salePrice"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.salePrice
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("salePrice", {
                      required: "Sale Price is required",
                    })}
                  />
                  {errors.salePrice && (
                    <span className="text-red-500 text-sm">
                      {errors.salePrice.message}
                    </span>
                  )}
                </div>

                {/* Loan Amount */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="loanAmount"
                    className="text-[14px] font-medium"
                  >
                    Loan Amount
                  </label>
                  <input
                    type="text"
                    id="loanAmount"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.loanAmount
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("loanAmount", {
                      required: "Loan Amount is required",
                    })}
                  />
                  {errors.loanAmount && (
                    <span className="text-red-500 text-sm">
                      {errors.loanAmount.message}
                    </span>
                  )}
                </div>

                {/* Property Address */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="propertyAddress"
                    className="text-[14px] font-medium"
                  >
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="propertyAddress"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.propertyAddress
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("propertyAddress", {
                      required: "Property Address is required",
                    })}
                  />
                  {errors.propertyAddress && (
                    <span className="text-red-500 text-sm">
                      {errors.propertyAddress.message}
                    </span>
                  )}
                </div>

                {/* Property County */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="propertyCounty"
                    className="text-[14px] font-medium"
                  >
                    Property County
                  </label>
                  <input
                    type="text"
                    id="propertyCounty"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.propertyCounty
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("propertyCounty", {
                      required: "Property County is required",
                    })}
                  />
                  {errors.propertyCounty && (
                    <span className="text-red-500 text-sm">
                      {errors.propertyCounty.message}
                    </span>
                  )}
                </div>
                {/* Property State */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="propertyState"
                    className="text-[14px] font-medium"
                  >
                    Property State
                  </label>
                  <input
                    type="text"
                    id="propertyState"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.propertyState
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("propertyState", {
                      required: "Property State is required",
                    })}
                  />
                  {errors.propertyState && (
                    <span className="text-red-500 text-sm">
                      {errors.propertyState.message}
                    </span>
                  )}
                </div>

                {/* File Status */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="fileStatus"
                    className="text-[14px] font-medium"
                  >
                    File Status
                  </label>
                  <input
                    type="text"
                    id="fileStatus"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.fileStatus
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("fileStatus", {
                      required: "File Status is required",
                    })}
                  />
                  {errors.fileStatus && (
                    <span className="text-red-500 text-sm">
                      {errors.fileStatus.message}
                    </span>
                  )}
                </div>

                {/* Title Officer */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="titleOfficer"
                    className="text-[14px] font-medium"
                  >
                    Title Officer
                  </label>
                  <input
                    type="text"
                    id="titleOfficer"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.titleOfficer
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("titleOfficer", {
                      required: "Title Officer is required",
                    })}
                  />
                  {errors.titleOfficer && (
                    <span className="text-red-500 text-sm">
                      {errors.titleOfficer.message}
                    </span>
                  )}
                </div>

                {/* Escrow Officer */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="escrowOfficer"
                    className="text-[14px] font-medium"
                  >
                    Escrow Officer
                  </label>
                  <input
                    type="text"
                    id="escrowOfficer"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.escrowOfficer
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("escrowOfficer", {
                      required: "Escrow Officer is required",
                    })}
                  />
                  {errors.escrowOfficer && (
                    <span className="text-red-500 text-sm">
                      {errors.escrowOfficer.message}
                    </span>
                  )}
                </div>

                {/* Listing Agent Company */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="listingAgentCompany"
                    className="text-[14px] font-medium"
                  >
                    Listing Agent Company
                  </label>
                  <input
                    type="text"
                    id="listingAgentCompany"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.listingAgentCompany
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("listingAgentCompany", {
                      required: "Listing Agent Company is required",
                    })}
                  />
                  {errors.listingAgentCompany && (
                    <span className="text-red-500 text-sm">
                      {errors.listingAgentCompany.message}
                    </span>
                  )}
                </div>

                {/* Listing Agent Contact Name */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="listingAgentContactName"
                    className="text-[14px] font-medium"
                  >
                    Listing Agent Contact Name
                  </label>
                  <input
                    type="text"
                    id="listingAgentContactName"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.listingAgentContactName
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("listingAgentContactName", {
                      required: "Listing Agent Contact Name is required",
                    })}
                  />
                  {errors.listingAgentContactName && (
                    <span className="text-red-500 text-sm">
                      {errors.listingAgentContactName.message}
                    </span>
                  )}
                </div>

                {/* Listing Agent Phone */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="listingAgentPhone"
                    className="text-[14px] font-medium"
                  >
                    Listing Agent Phone
                  </label>
                  <input
                    type="text"
                    id="listingAgentPhone"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.listingAgentPhone
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("listingAgentPhone", {
                      required: "Listing Agent Phone is required",
                    })}
                  />
                  {errors.listingAgentPhone && (
                    <span className="text-red-500 text-sm">
                      {errors.listingAgentPhone.message}
                    </span>
                  )}
                </div>
                {/* Mortgage Broker Phone */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="mortgageBrokerPhone"
                    className="text-[14px] font-medium"
                  >
                    Mortgage Broker Phone
                  </label>
                  <input
                    type="text"
                    id="mortgageBrokerPhone"
                    placeholder="805title-Archive"
                    className={`h-[55px] border-2 ${
                      errors.mortgageBrokerPhone
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("mortgageBrokerPhone", {
                      required: "Mortgage Broker Phone is required",
                    })}
                  />
                  {errors.mortgageBrokerPhone && (
                    <span className="text-red-500 text-sm">
                      {errors.mortgageBrokerPhone.message}
                    </span>
                  )}
                </div>

                <div className="w-full">
                  {/* Underwriter */}
                  <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                    <label
                      htmlFor="underwriter"
                      className="text-[14px] font-medium"
                    >
                      Underwriter
                    </label>
                    <input
                      type="text"
                      id="underwriter"
                      placeholder="805title-Archive"
                      className={`h-[55px] border-2 ${
                        errors.underwriter
                          ? "border-red-500"
                          : "border-(--inputBorder)"
                      } rounded-[10px] w-full px-5 text-blackText`}
                      {...register("underwriter", {
                        required: "Underwriter is required",
                      })}
                    />
                    {errors.underwriter && (
                      <span className="text-red-500 text-sm">
                        {errors.underwriter.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-end w-full my-3">
                  <button
                    type="submit"
                    className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] w-fit px-8  rounded-xl text-white"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-col w-[24%] gap-6">
            <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full px-4  h-fit py-6 gap-3 flex flex-col">
              {/* agent  */}
              <div className="flex justify-between items-center">
                <h2 className="text-(--primary) text-lg font-semibold">
                  Agent
                </h2>
                <div className="flex gap-2 items-center">
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-(--primary)">
                    <img src={chat} alt="" />
                  </div>{" "}
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-(--primary)">
                    <img src={plane} alt="" />
                  </div>{" "}
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-(--primary)">
                    <img src={phone} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={dummy}
                  alt=""
                  className="w-[80px] h-[80px] rounded-full"
                />
                <div>
                  <h3 className="font-medium ">John doe</h3>
                  <h3 className="font-normal text-sm text-(--greyText)">
                    Reality group
                  </h3>
                </div>
              </div>
            </div>

            {/* snapshot  */}
            <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full px-4 h-fit py-6 gap-4 flex flex-col">
              <h2 className="text-(--primary) text-lg font-semibold">
                Snapshot
              </h2>
              <div className="w-full flex gap-5 items-center ">
                {/* Amount */}
                <div className="flex flex-wrap ">
                  <div className="flex flex-col gap-1.5">
                    <h2 className="text-(--secondary) text-base font-semibold">
                      34
                    </h2>
                    <h3 className="text-xs font-normal">Amount</h3>
                  </div>
                </div>
                {/* appt met  */}
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-(--secondary) text-base font-semibold">
                    Appt Met
                  </h2>
                  <h3 className="text-xs font-normal">Status</h3>
                </div>
                {/* buyer */}
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-(--secondary) text-base font-semibold">
                    Buyer
                  </h2>
                  <h3 className="text-xs font-normal">Type</h3>
                </div>
              </div>
              <div className="w-full flex gap-5 items-center ">
                {/* Lead Date */}
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-(--secondary) text-base font-semibold">
                    02-09-2025
                  </h2>
                  <h3 className="text-xs font-normal">Lead Date</h3>
                </div>

                {/* Status & ID */}
                <div className="flex flex-wrap gap-6">
                  <div className="flex flex-col gap-1.5">
                    <h2 className="text-(--secondary) text-base font-semibold">
                      389210
                    </h2>
                    <h3 className="text-xs font-normal">ID</h3>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-between items-center ">
                {/* Contact */}
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-(--secondary) text-base font-semibold">
                    (252) 555-0126
                  </h2>
                  <h3 className="text-xs font-normal">Contact</h3>
                </div>
                {/* Icons */}
                <div className="flex gap-2 items-center">
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-(--primary)">
                    <img src={chat} alt="Chat" />
                  </div>
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-(--primary)">
                    <img src={plane} alt="Send" />
                  </div>
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-(--primary)">
                    <img src={phone} alt="Call" />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-1.5">
                <h2 className="text-(--secondary) text-base font-semibold">
                  8502 Preston Rd. Inglewood, Maine 98380
                </h2>
                <h3 className="text-xs font-normal">Address</h3>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Fees" && (
        <div className="flex flex-col gap-8 my-12">
          <div className="font-sm  shadow-(--cardShadow) p-3 rounded-xl">
            <div className="grid grid-cols-8 gap-4  p-2 font-medium">
              <div>Order</div>
              <div>Closed Date</div>
              <div>Title Rep</div>
              <div>Escrow Officer</div>
              <div>County</div>
              <div>File Type</div>
              <div>Type</div>
              <div>Amount</div>
            </div>
            <div className="grid grid-cols-8  gap-4 p-2 border-t">
              <div>4839282</div>
              <div>11/7/16</div>
              <div>Andrew John</div>
              <div>None</div>
              <div>Los Angeles</div>
              <div>Title Only</div>
              <div>Sale</div>
              <div>$406.27</div>
            </div>
          </div>
          <div className="flex justify-between ">
            {/* FeeTypeTable */}
            <div className="font-sm shadow-(--cardShadow) p-3 rounded-xl w-[49%]">
              <h1 className="text-lg font-semibold leading-[27px] px-2 py-2">
                Fee type
              </h1>
              <div className="grid grid-cols-5 gap-4 p-2 font-medium ">
                <div>Fee Category</div>
                <div>Amount</div>
                <div>Amount%</div>
                <div>OOC TFI</div>
                <div>Fee Deposit</div>
              </div>
              <div className="grid grid-cols-5 gap-4 p-2 border-t">
                <div>Title Charges</div>
                <div>$948.55</div>
                <div>$169.43</div>
                <div>$406.27</div>
                <div>$782.01</div>
              </div>
              <div className="grid grid-cols-5 gap-4 p-2 border-t">
                <div>Title Fee Income</div>
                <div>$948.55</div>
                <div>$169.43</div>
                <div>$406.27</div>
                <div>$782.01</div>
              </div>
              <div className="grid grid-cols-5 gap-4 p-2 border-t  bg-gray-100 font-semibold">
                <div>Total</div>
                <div>$948.55</div>
                <div>$169.43</div>
                <div>$406.27</div>
                <div>$782.01</div>
              </div>
            </div>
            {/* FeeDescriptionTable */}
            <div className="font-sm shadow-(--cardShadow) p-3 rounded-xl w-[49%]">
              <h1 className="text-lg font-semibold leading-[27px] px-2 py-2">
                Fee Description
              </h1>
              <div className="grid grid-cols-4 gap-4 p-2 font-medium ">
                <div>Fee</div>
                <div>Account</div>
                <div>Fee Category</div>
                <div>Amount</div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-2 border-t">
                <div>ALTA Homeowner’s WC</div>
                <div>Title Fee Income</div>
                <div>Title Charges</div>
                <div>$406.27</div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-2 border-t">
                <div>ALTA Homeowner’s WC</div>
                <div>Title Fee Income</div>
                <div>Title Charges</div>
                <div>$406.27</div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-2 border-t bg-gray-100 font-semibold">
                <div>Total</div>
                <div></div>
                <div>$169.43</div>
                <div>$406.27</div>
              </div>
            </div>
          </div>
          {/* PCTWestcorCommissions */}
          <div className="font-sm shadow-(--cardShadow) p-3 rounded-xl w-full">
            <h1 className="text-lg font-semibold leading-[27px] px-2 py-2">
              PCT–Westcor Commissions
            </h1>
            <div className="grid grid-cols-6 gap-4 p-2 font-medium ">
              <div>Underwriter</div>
              <div>Fee Income</div>
              <div>Non-Commission</div>
              <div>Net Fee Income</div>
              <div>Commissions</div>
              <div>PCT Receivables</div>
            </div>
            <div className="grid grid-cols-6 gap-4 p-2 border-t">
              <div>PCTW</div>
              <div>$948.55</div>
              <div>$169.43</div>
              <div>$406.27</div>
              <div>$782.01</div>
              <div>$782.01</div>
            </div>
          </div>

          {/* NonPCTCommissions( */}
          <div className="font-sm shadow-(--cardShadow) p-3 rounded-xl w-full">
            <h1 className="text-lg font-semibold leading-[27px] px-2 py-2">
              Non-PCT - Commissions
            </h1>
            <div className="grid grid-cols-5 gap-4 p-2 font-medium ">
              <div>Underwriter</div>
              <div>Title Fee Income</div>
              <div>Sub Escrow Fee</div>
              <div>Net Title Fee Income</div>
              <div>Commissions</div>
            </div>
            <div className="grid grid-cols-5 gap-4 p-2 border-t">
              <div>PCTW</div>
              <div>$948.55</div>
              <div>$169.43</div>
              <div>$406.27</div>
              <div>$782.01</div>
            </div>
          </div>
          {/* CountyUnderwriterRemittance */}
          <div className="font-sm shadow-(--cardShadow) p-3 rounded-xl w-full">
            <h1 className="text-lg font-semibold leading-[27px] px-2 py-2">
              In County Underwriter Remittance
            </h1>
            <div className="grid grid-cols-8 gap-4 p-2 font-medium ">
              <div>Property County</div>
              <div>Total Fees</div>
              <div>Sub Escrow Fee</div>
              <div>Net Fees</div>
              <div>WFG Net</div>
              <div>Westcor Net</div>
              <div>WFG Remit</div>
              <div>Westcor Remit</div>
            </div>
            <div className="grid grid-cols-8 gap-4 p-2 border-t">
              <div>Santa Barbara</div>
              <div>$293.01</div>
              <div>$778.35</div>
              <div>$948.55</div>
              <div>$710.68</div>
              <div>$601.13</div>
              <div>$576.28</div>
              <div>$475.22</div>
            </div>
            <div className="grid grid-cols-8 gap-4 p-2 border-t">
              <div>Ventura</div>
              <div>$473.85</div>
              <div>$854.08</div>
              <div>$767.50</div>
              <div>$589.99</div>
              <div>$450.54</div>
              <div>$328.85</div>
              <div>$396.84</div>
            </div>
            <div className="grid grid-cols-8 gap-4 p-2 border-t bg-gray-100 font-semibold">
              <div>Total</div>
              <div>$219.78</div>
              <div>$779.58</div>
              <div>$105.55</div>
              <div>$202.87</div>
              <div>$351.02</div>
              <div>$106.58</div>
              <div>$630.44</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderEdit;
