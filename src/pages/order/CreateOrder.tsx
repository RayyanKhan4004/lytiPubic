import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Breadcrumb from "../../components/common/BreadCrumb";
import Spinner from "../../components/common/Spinner";
import InputField from "../../components/inputs/InputFields";
import SelectField from "../../components/inputs/SelectField";
import CustomDatePicker from "../../components/inputs/CustomDatePicker";

import { useCreateOrderMutation } from "../../lib/rtkQuery/orderApi";

import {
  countyOptions,
  fileStatusOption,
  fileTypeOptions,
  roleOption,
} from "../../utils/options";

interface FormValues {
  titleOffice: string;
  titleRep: string;
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
  fileType: string;
}

const CreateOrder = () => {
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formattedData = {
      ...data,
    };
    try {
      const res = await createOrder(formattedData).unwrap();
      navigate("/orders/orders");
      toast.success("Order Created Successfully");
    } catch (err: any) {
      toast.error(err?.data?.message || "Order creation failed");
    }
  };

  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Orders", "Orders Table", "Create Order"]} />

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
              name="titleRep"
              control={control}
              options={roleOption}
              placeholder="Select..."
              error={errors.titleRep?.message}
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
              label="Title Officer"
              name="titleOfficer"
              control={control}
              type="text"
              placeholder="Enter title officer"
              error={errors.titleOfficer?.message}
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
              type="number"
              placeholder="Enter sale price"
              error={errors.salePrice?.message}
              className="w-[48%]"
            />

            <InputField
              label="Loan Amount"
              name="loanAmount"
              control={control}
              type="number"
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
                {isLoading ? <Spinner /> : "Create Order"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
