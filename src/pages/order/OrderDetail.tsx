// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Controller, SubmitHandler, useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// import chat from "../../assets/icons/ChatCircle.svg";

// import Breadcrumb from "../../components/common/BreadCrumb";
// import TabNavigation from "../../components/common/TabNavigation";
// import Spinner from "../../components/common/Spinner";

// import InputField from "../../components/inputs/InputFields";
// import SelectField from "../../components/inputs/SelectField";
// import CustomDatePicker from "../../components/inputs/CustomDatePicker";

// import { useDeleteOrderMutation } from "../../lib/rtkQuery/orderApi";

// import {
//   countyOptions,
//   fileStatusOption,
//   fileTypeOptions,
//   roleOption,
// } from "../../utils/options";
// import { OrderDataType } from "../../utils/types";

// const OrderDetail = () => {
//   const [deleteOrder, { isLoading }] = useDeleteOrderMutation();
//   const navigate = useNavigate();
//   const data = useLocation();
//   const {
//     handleSubmit,
//     formState: { errors },
//     setValue,
//     control,
//   } = useForm<OrderDataType>();

//   const { orderData } = data.state || {};

//   const onSubmit: SubmitHandler<OrderDataType> = async (data) => {
//     try {
//       const res = await deleteOrder(orderData?.id).unwrap();
//       toast.success("Order delete Successfully");
//       navigate("/orders/orders");
//     } catch (err: any) {
//       toast.error(err?.data?.message || "Order creation failed");
//     }
//   };

//   useEffect(() => {
//     if (orderData) {
//       setValue("titleOffice", orderData.titleOffice || "");
//       setValue("agent", orderData.agent || "");
//       setValue("titleRepPct", orderData.titleRepPct || "");
//       setValue("openDate", orderData.openDate || "");
//       setValue("estimatedClosingDate", orderData.estimatedClosingDate || "");
//       setValue("closedDate", orderData.closedDate || "");
//       setValue("cancelDate", orderData.cancelDate || "");
//       setValue("transactionType", orderData.transactionType || "");
//       setValue("orderNumber", orderData.orderNumber || "");
//       setValue("orderStatus", orderData.orderStatus || "");
//       setValue("propertyAddress", orderData.propertyAddress || "");
//       setValue("propertyCounty", orderData.propertyCounty || "");
//       setValue("propertyState", orderData.propertyState || "");
//       setValue("fileStatus", orderData.fileStatus || "");
//       setValue("titleOfficer", orderData.titleOfficer || "");
//       setValue("escrowOfficer", orderData.escrowOfficer || "");
//       setValue("listingAgentCompany", orderData.listingAgentCompany || "");
//       setValue(
//         "listingAgentContactName",
//         orderData.listingAgentContactName || ""
//       );
//       setValue(
//         "listingAgentContactEmail",
//         orderData.listingAgentContactEmail || ""
//       );
//       setValue("listingAgentPhone", orderData.listingAgentPhone || "");
//       setValue("sellingAgentCompany", orderData.sellingAgentCompany || "");
//       setValue(
//         "sellingAgentContactName",
//         orderData.sellingAgentContactName || ""
//       );
//       setValue(
//         "sellingAgentContactEmail",
//         orderData.sellingAgentContactEmail || ""
//       );
//       setValue("sellingAgentPhone", orderData.sellingAgentPhone || "");
//       setValue("mortgageBrokerCompany", orderData.mortgageBrokerCompany || "");
//       setValue("mortgageBrokerContact", orderData.mortgageBrokerContact || "");
//       setValue(
//         "mortgageBrokerContactEmail",
//         orderData.mortgageBrokerContactEmail || ""
//       );
//       setValue("mortgageBrokerPhone", orderData.mortgageBrokerPhone || "");
//       setValue("underwriter", orderData.underwriter || "");
//       setValue("fileType", orderData.fileType || "");
//     }
//   }, [orderData, setValue]);

//   return (
//     <div className="w-full px-4 my-8 font-Poppins">
//       <Breadcrumb items={["Orders", "Orders Table", " Order detail"]} />

//       <div className="shadow-(--cardShadow) rounded-2xl bg-white px-4 min-h-auto my-6 w-[74%] py-6 flex flex-col gap-3 ">
//         <div className="w-full flex flex-col gap-3 pt-2">
//           <p className="text-(--greyText) text-sm ">
//             This is the main form in the system that you see in a spreadsheet
//             style view when you go into transactions. Rearranging, adding or
//             removing fields here will affect the columns you see in the
//             "transactions" screen and also the order you see them in.
//           </p>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="w-full flex justify-between items-center flex-wrap py-4 gap-4"
//           >
//             <InputField
//               label="Title Office"
//               name="titleOffice"
//               control={control}
//               type="text"
//               placeholder="Enter your title Office"
//               error={errors.titleOffice?.message}
//               className="w-[48%]"
//             />
//             <SelectField
//               label="Agent"
//               name="agent"
//               control={control}
//               options={roleOption}
//               placeholder="Select..."
//               error={errors.agent?.message}
//               required={false}
//               className="w-[48%] "
//             />
//             <CustomDatePicker
//               name="openDate"
//               control={control}
//               label="Open Date"
//               placeholder="8-21-15"
//               // rules={{ required: "Date is required" }}
//               className="w-[48%]"
//             />

//             <CustomDatePicker
//               name="estimatedClosingDate"
//               control={control}
//               label="Estimated Closing Date"
//               placeholder="8-21-15"
//               // rules={{ required: "Date is required" }}
//               className="w-[48%]"
//             />
//             <CustomDatePicker
//               name="closedDate"
//               control={control}
//               label="Closing Date"
//               placeholder="8-21-15"
//               // rules={{ required: "Date is required" }}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Title Office"
//               name="fileType"
//               control={control}
//               type="text"
//               placeholder="Enter your file type"
//               error={errors.fileType?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Order Number"
//               name="orderNumber"
//               control={control}
//               type="text"
//               placeholder="Enter your order number"
//               error={errors.orderNumber?.message}
//               className="w-[48%]"
//             />

//             <SelectField
//               label="File Status"
//               name="fileStatus"
//               control={control}
//               options={fileStatusOption}
//               placeholder="Select..."
//               error={errors.fileStatus?.message}
//               required={false}
//               className="w-[48%] "
//             />
//             <SelectField
//               label="File Type"
//               name="fileType"
//               control={control}
//               options={fileTypeOptions}
//               placeholder="Select..."
//               error={errors.fileType?.message}
//               required={false}
//               className="w-[48%] "
//             />

//             <InputField
//               label="Sale Price"
//               name="salePrice"
//               control={control}
//               type="number"
//               placeholder="Enter sale price"
//               error={errors.salePrice?.message}
//               className="w-[48%]"
//             />
//             <InputField
//               label="Title RepPct"
//               name="titleRepPct"
//               control={control}
//               type="number"
//               placeholder="Enter your value"
//               error={errors.titleRepPct?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Loan Amount"
//               name="loanAmount"
//               control={control}
//               type="number"
//               placeholder="Enter loan amount"
//               error={errors.loanAmount?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Property Address"
//               name="propertyAddress"
//               control={control}
//               type="text"
//               placeholder="Enter property address"
//               error={errors.propertyAddress?.message}
//               className="w-[48%]"
//             />

//             <SelectField
//               label="Property County"
//               name="propertyCounty"
//               control={control}
//               options={countyOptions}
//               placeholder="Select..."
//               error={errors.propertyCounty?.message}
//               required={false}
//               className="w-[48%] "
//             />

//             <InputField
//               label="Property State"
//               name="propertyState"
//               control={control}
//               type="text"
//               placeholder="Enter property state"
//               error={errors.propertyState?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Title Officer"
//               name="titleOfficer"
//               control={control}
//               type="text"
//               placeholder="Enter title officer"
//               error={errors.titleOfficer?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Escrow Officer"
//               name="escrowOfficer"
//               control={control}
//               type="text"
//               placeholder="Enter escrow officer"
//               error={errors.escrowOfficer?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Listing Agent Company"
//               name="listingAgentCompany"
//               control={control}
//               type="text"
//               placeholder="Enter listing agent company"
//               error={errors.listingAgentCompany?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Listing Agent Contact Name"
//               name="listingAgentContactName"
//               control={control}
//               type="text"
//               placeholder="Enter listing agent contact name"
//               error={errors.listingAgentContactName?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Listing Agent Contact Email"
//               name="listingAgentContactEmail"
//               control={control}
//               type="email"
//               placeholder="Enter listing agent contact email"
//               error={errors.listingAgentContactEmail?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Listing Agent Phone"
//               name="listingAgentPhone"
//               control={control}
//               type="text"
//               placeholder="Enter listing agent phone"
//               error={errors.listingAgentPhone?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Selling Agent Company"
//               name="sellingAgentCompany"
//               control={control}
//               type="text"
//               placeholder="Enter selling agent company"
//               error={errors.sellingAgentCompany?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Selling Agent Contact Name"
//               name="sellingAgentContactName"
//               control={control}
//               type="text"
//               placeholder="Enter selling agent contact name"
//               error={errors.sellingAgentContactName?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Selling Agent Contact Email"
//               name="sellingAgentContactEmail"
//               control={control}
//               type="email"
//               placeholder="Enter selling agent contact email"
//               error={errors.sellingAgentContactEmail?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Selling Agent Phone"
//               name="sellingAgentPhone"
//               control={control}
//               type="text"
//               placeholder="Enter selling agent phone"
//               error={errors.sellingAgentPhone?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Mortgage Broker Company"
//               name="mortgageBrokerCompany"
//               control={control}
//               type="text"
//               placeholder="Enter mortgage broker company"
//               error={errors.mortgageBrokerCompany?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Mortgage Broker Contact"
//               name="mortgageBrokerContact"
//               control={control}
//               type="text"
//               placeholder="Enter mortgage broker contact"
//               error={errors.mortgageBrokerContact?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Mortgage Broker Contact Email"
//               name="mortgageBrokerContactEmail"
//               control={control}
//               type="email"
//               placeholder="Enter mortgage broker contact email"
//               error={errors.mortgageBrokerContactEmail?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Mortgage Broker Phone"
//               name="mortgageBrokerPhone"
//               control={control}
//               type="text"
//               placeholder="Enter mortgage broker phone"
//               error={errors.mortgageBrokerPhone?.message}
//               className="w-[48%]"
//             />

//             <InputField
//               label="Underwriter"
//               name="underwriter"
//               control={control}
//               type="text"
//               placeholder="Enter underwriter"
//               error={errors.underwriter?.message}
//               className="w-[48%]"
//             />

//             <div className="flex justify-end w-full my-3">
//               <button
//                 type="submit"
//                 className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] w-fit px-8  rounded-xl text-white"
//               >
//                 {isLoading ? <Spinner /> : "Delete Order"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderDetail;

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Breadcrumb from "../../components/common/BreadCrumb";
import InputField from "../../components/inputs/InputFields";
import SelectField from "../../components/inputs/SelectField";
import CustomDatePicker from "../../components/inputs/CustomDatePicker";

import { useCreateOrderMutation } from "../../lib/rtkQuery/orderApi";

import {
  aeLeadStageOptions,
  countyOptions,
  fileStatusOption,
  fileTypeOptions,
  roleOption,
  transactionOption,
} from "../../utils/options";
import { OrderDataType } from "../../utils/types";
import MainTitle from "../../components/ui/typography/MainTitle";
import CardLayout from "../../components/layouts/CardLayout";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import { useEffect } from "react";

const OrderDetail = () => {
  const data = useLocation();
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const { orderData } = data.state || {};

  console.log(orderData);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
    reset,
  } = useForm<OrderDataType>();

  const onSubmit: SubmitHandler<OrderDataType> = async (data) => {
    console.log(data, "==formData===");

    const formattedData = {
      ...data,
    };
    try {
      // const res = await createOrder(formattedData).unwrap();
      // console.log(res, "==res==");

      // navigate("/orders/orders");
      toast.success("Order Created Successfully");
      reset();
    } catch (err: any) {
      toast.error(err?.data?.message || "Order creation failed");
    }
  };

  useEffect(() => {
    if (orderData) {
      setValue("titleOffice", orderData.titleOffice || "");
      setValue("agent", orderData.agent || "");
      setValue("titleRep", orderData.titleRep || "");
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
      setValue("transactionType", orderData.transactionType || "");
      setValue("aeLeadStage", orderData.aeLeadStage || "");

      setValue("contact", orderData.contact ?? 0);
      setValue("titleRepPct", orderData.titleRepPct ?? 0);
      setValue("salePrice", orderData.salePrice ?? 0);
      setValue("loanAmount", orderData.loanAmount ?? 0);
    }
  }, [orderData, setValue]);

  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Orders", "Orders table", "Update Order"]} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardLayout>
          <MainTitle title="Update Order" />
          <div className="w-full flex  items-center flex-wrap py-4 gap-4">
            <SelectField
              label="Transaction Type"
              name="transactionType"
              control={control}
              options={transactionOption}
              placeholder="Select transaction type"
              error={errors.transactionType?.message}
              required={false}
              className="w-[34%] "
            />
            <InputField
              label="Add contact"
              name="contact"
              control={control}
              type="number"
              placeholder="Enter contact"
              error={errors.contact?.message}
              className="w-[34%]"
            />
          </div>
        </CardLayout>
        <CardLayout>
          <MainTitle title="Transaction Details" />
          <p className="text-(--greyText) text-sm ">
            This is the main form in the system that you see in a spreadsheet
            style view when you go into transactions. Rearranging, adding or
            removing fields here will affect the columns you see in the
            "transactions" screen and also the order you see them in.
          </p>
          <div className="w-full grid grid-cols-4 gap-x-2.5 gap-y-5 py-4">
            <InputField
              label="Title Office"
              name="titleOffice"
              control={control}
              type="text"
              placeholder="Enter your title Office"
              error={errors.titleOffice?.message}
            />
            <SelectField
              label="Agent"
              name="titleRep"
              control={control}
              options={roleOption}
              placeholder="Select..."
              error={errors.titleRep?.message}
              required={false}
            />
            <CustomDatePicker
              name="openDate"
              control={control}
              label="Open Date"
              placeholder="8-21-15"
              // rules={{ required: "Date is required" }}
            />
            <CustomDatePicker
              name="estimatedClosingDate"
              control={control}
              label="Estimated Closing Date"
              placeholder="8-21-15"
              // rules={{ required: "Date is required" }}
            />
            <CustomDatePicker
              name="closedDate"
              control={control}
              label="Closing Date"
              placeholder="8-21-15"
              // rules={{ required: "Date is required" }}
            />
            <InputField
              label="Title Officer"
              name="titleOfficer"
              control={control}
              type="text"
              placeholder="Enter title officer"
              error={errors.titleOfficer?.message}
            />
            <InputField
              label="Order Number"
              name="orderNumber"
              control={control}
              type="text"
              placeholder="Enter your order number"
              error={errors.orderNumber?.message}
            />
            <SelectField
              label="File Status"
              name="fileStatus"
              control={control}
              options={fileStatusOption}
              placeholder="Select..."
              error={errors.fileStatus?.message}
              required={false}
            />
            <SelectField
              label="File Type"
              name="fileType"
              control={control}
              options={fileTypeOptions}
              placeholder="Select type"
              error={errors.fileType?.message}
              required={false}
            />
            <SelectField
              label="Ae Lead Stage"
              name="aeLeadStage"
              control={control}
              options={aeLeadStageOptions}
              placeholder="Select stage"
              error={errors.aeLeadStage?.message}
              required={false}
            />
            {/* aeLeadStage */}
            <InputField
              label="Sale Price"
              name="salePrice"
              control={control}
              type="number"
              placeholder="Enter sale price"
              error={errors.salePrice?.message}
            />
            <InputField
              label="Title RepPct"
              name="titleRepPct"
              control={control}
              type="number"
              placeholder="Enter your value"
              error={errors.titleRepPct?.message}
            />
            <InputField
              label="Loan Amount"
              name="loanAmount"
              control={control}
              type="number"
              placeholder="Enter loan amount"
              error={errors.loanAmount?.message}
            />
            <InputField
              label="Property Address"
              name="propertyAddress"
              control={control}
              type="text"
              placeholder="Enter property address"
              error={errors.propertyAddress?.message}
            />
            <SelectField
              label="Property County"
              name="propertyCounty"
              control={control}
              options={countyOptions}
              placeholder="Select..."
              error={errors.propertyCounty?.message}
              required={false}
            />
            <InputField
              label="Property State"
              name="propertyState"
              control={control}
              type="text"
              placeholder="Enter property state"
              error={errors.propertyState?.message}
            />
            <InputField
              label="Escrow Officer"
              name="escrowOfficer"
              control={control}
              type="text"
              placeholder="Enter escrow officer"
              error={errors.escrowOfficer?.message}
            />
            <InputField
              label="Listing Agent Company"
              name="listingAgentCompany"
              control={control}
              type="text"
              placeholder="Enter listing agent company"
              error={errors.listingAgentCompany?.message}
            />
            <InputField
              label="Listing Agent Contact Name"
              name="listingAgentContactName"
              control={control}
              type="text"
              placeholder="Enter listing agent contact name"
              error={errors.listingAgentContactName?.message}
            />
            <InputField
              label="Listing Agent Contact Email"
              name="listingAgentContactEmail"
              control={control}
              type="email"
              placeholder="Enter listing agent contact email"
              error={errors.listingAgentContactEmail?.message}
            />
            <InputField
              label="Listing Agent Phone"
              name="listingAgentPhone"
              control={control}
              type="text"
              placeholder="Enter listing agent phone"
              error={errors.listingAgentPhone?.message}
            />
            <InputField
              label="Selling Agent Company"
              name="sellingAgentCompany"
              control={control}
              type="text"
              placeholder="Enter selling agent company"
              error={errors.sellingAgentCompany?.message}
            />
            <InputField
              label="Selling Agent Contact Name"
              name="sellingAgentContactName"
              control={control}
              type="text"
              placeholder="Enter selling agent contact name"
              error={errors.sellingAgentContactName?.message}
            />
            <InputField
              label="Selling Agent Contact Email"
              name="sellingAgentContactEmail"
              control={control}
              type="email"
              placeholder="Enter selling agent contact email"
              error={errors.sellingAgentContactEmail?.message}
            />
            <InputField
              label="Selling Agent Phone"
              name="sellingAgentPhone"
              control={control}
              type="text"
              placeholder="Enter selling agent phone"
              error={errors.sellingAgentPhone?.message}
            />
            <InputField
              label="Mortgage Broker Company"
              name="mortgageBrokerCompany"
              control={control}
              type="text"
              placeholder="Enter mortgage broker company"
              error={errors.mortgageBrokerCompany?.message}
            />
            <InputField
              label="Mortgage Broker Contact"
              name="mortgageBrokerContact"
              control={control}
              type="text"
              placeholder="Enter mortgage broker contact"
              error={errors.mortgageBrokerContact?.message}
            />
            <InputField
              label="Mortgage Broker Contact Email"
              name="mortgageBrokerContactEmail"
              control={control}
              type="email"
              placeholder="Enter mortgage broker contact email"
              error={errors.mortgageBrokerContactEmail?.message}
            />
            <InputField
              label="Mortgage Broker Phone"
              name="mortgageBrokerPhone"
              control={control}
              type="text"
              placeholder="Enter mortgage broker phone"
              error={errors.mortgageBrokerPhone?.message}
            />
            <InputField
              label="Underwriter"
              name="underwriter"
              control={control}
              type="text"
              placeholder="Enter underwriter"
              error={errors.underwriter?.message}
            />
          </div>
        </CardLayout>
        {/* <CardLayout>
          <MainTitle title="Fee Details" />

          <div className="w-full grid grid-cols-4 gap-x-2.5 gap-y-5 py-4">
            <InputField
              label="Description"
              name="titleOffice"
              control={control}
              type="number"
              placeholder="Enter contact"
              error={errors.titleOffice?.message}
            />
            <SelectField
              label="Account"
              name="titleRep"
              control={control}
              options={roleOption}
              placeholder="Select..."
              error={errors.titleRep?.message}
              required={false}
            />
            <SelectField
              label="Fee Category"
              name="titleRep"
              control={control}
              options={roleOption}
              placeholder="Select..."
              error={errors.titleRep?.message}
              required={false}
            />
            <InputField
              label="Amount"
              name="titleOffice"
              control={control}
              type="number"
              placeholder="Enter contact"
              error={errors.titleOffice?.message}
            />
          </div>
        </CardLayout> */}

        <div className="flex justify-end w-full my-3">
          <PrimaryButton
            text="Create Order"
            type="submit"
            isLoading={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default OrderDetail;
