import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import add from "../../assets/icons/Add.svg";

import Breadcrumb from "../../components/common/BreadCrumb";
import InputField from "../../components/inputs/InputFields";
import SelectField from "../../components/inputs/SelectField";
import CustomDatePicker from "../../components/inputs/CustomDatePicker";

import { useCreateOrderMutation } from "../../lib/rtkQuery/orderApi";

import {
  accountOptions,
  aeLeadStageOptions,
  countyOptions,
  feeCategoryOptions,
  fileStatusOption,
  fileTypeOptions,
  roleOption,
  transactionOption,
} from "../../utils/options";
import { OrderDataType } from "../../utils/types";
import MainTitle from "../../components/ui/typography/MainTitle";
import CardLayout from "../../components/layouts/CardLayout";
import PrimaryButton from "../../components/ui/button/PrimaryButton";

const CreateOrder = () => {
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<OrderDataType>({
    defaultValues: {
      fees: [
        {
          feeDescription: "",
          account: "",
          feeCategory: "",
          feeAmount: undefined,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fees",
  });

  const onSubmit: SubmitHandler<OrderDataType> = async (data) => {
    console.log(data, "==formData===");

    const formattedData = {
      ...data,
    };
    try {
      const res = await createOrder(formattedData).unwrap();
      console.log(res, "==res==");
      navigate("/orders/orders");
      toast.success("Order Created Successfully");
      reset();
    } catch (err: any) {
      toast.error(err?.data?.message || "Order creation failed");
    }
  };

  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Orders", "Create New Order"]} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardLayout>
          <MainTitle title="Create New Order" />
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
              type="text"
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
            />
            <CustomDatePicker
              name="appointmentSetDate"
              control={control}
              label="Appointment Set Date"
              placeholder="8-21-15"
            />
            <CustomDatePicker
              name="appointmentMetDate"
              control={control}
              label="Appointment Met Date"
              placeholder="8-21-15"
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
        <CardLayout>
          <MainTitle title="Fee Details" />

          {fields.map((field, index) => (
            <div
              key={field.id}
              className="w-full grid grid-cols-5 gap-x-2.5 gap-y-5 py-4"
            >
              <InputField
                label="Fee Description"
                name={`fees.${index}.feeDescription`}
                control={control}
                type="text"
                placeholder="Enter fee description"
                error={errors.fees?.[index]?.feeDescription?.message}
              />

              <SelectField
                label="Account"
                name={`fees.${index}.account`}
                control={control}
                options={accountOptions}
                placeholder="Select account"
                error={errors.fees?.[index]?.account?.message}
                required={false}
              />

              <SelectField
                label="Fee Category"
                name={`fees.${index}.feeCategory`}
                control={control}
                options={feeCategoryOptions}
                placeholder="Fee category"
                error={errors.fees?.[index]?.feeCategory?.message}
                required={false}
              />

              <InputField
                label="Fee Amount"
                name={`fees.${index}.feeAmount`}
                control={control}
                type="number"
                placeholder="Enter fee amount"
                error={errors.fees?.[index]?.feeAmount?.message}
              />

              <div className="flex justify-end items-end w-full">
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-red-500 text-white px-4  h-[55px] w-full rounded-[10px]"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="w-full justify-end flex ">
            <button
              type="button"
              onClick={() =>
                append({
                  feeDescription: "",
                  account: "",
                  feeCategory: "",
                  feeAmount: 0,
                })
              }
              className=" text-(--secondary) font-medium mt-4 flex  gap-2 items-center text-xs "
            >
              <div className="bg-(--secondary)  rounded-full p-[2px]">
                <img src={add} alt="" className="h-[15px] w-[15px]" />
              </div>
              Add More
            </button>
          </div>
        </CardLayout>

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

export default CreateOrder;
