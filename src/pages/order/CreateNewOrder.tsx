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
import ArrowBlack from "../../assets/icons/ArrowBlack.svg";
import {
  useCreateListingAgentMutation,
  useCreateListingOfficeMutation,
  useCreateOrderMutation,
  useGetListingOfficeByIdQuery,
  useGetSellingOfficeByIdQuery,
} from "../../lib/rtkQuery/orderApi";

import {
  accountOptions,
  aeLeadStageOptions,
  countyOptions,
  feeCategoryOptions,
  fileStatusOption,
  fileTypeOptions,
  transactionOption,
  useOptions,
  useOptionsAddNew,
} from "../../utils/options";
import { ListingOfficeDataType, OrderDataType } from "../../utils/types";
import MainTitle from "../../components/ui/typography/MainTitle";
import CardLayout from "../../components/layouts/CardLayout";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import { useState } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Spinner from "../../components/ui/loader/Spinner";

const CreateNewOrder = () => {
  const [activeTab, setActiveTab] = useState("transactionDetails");
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const [createListingOffice, { isLoading: createListingOfficeLoading }] =
    useCreateListingOfficeMutation();
  const [createListingAgent, { isLoading: createListingAgentLoading }] =
    useCreateListingAgentMutation();
  const {
    agentsOption,
    listingOfficeOption,
    sellingOfficesOption,
    refetchListingOffices,
  } = useOptionsAddNew();
  const navigate = useNavigate();

  const {
    handleSubmit: handleOrderSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm<OrderDataType>({
    defaultValues: {
      fees: [
        {
          feeDescription: "",
          account: "",
          feeCategory: "",
          feeAmount: 0,
        },
      ],
    },
  });

  const {
    handleSubmit: handleNewListingSubmit,
    control: newListingControl,
    formState: { errors: newListingErrors },
    setValue,
  } = useForm<ListingOfficeDataType>({
    defaultValues: {
      name: "",
      agentName: "",
    },
  });

  const selectedListingOfficeId = watch("listingOfficeId");
  const selectedSellingOfficeId = watch("sellingOfficeId");

  const { data: listingData, refetch: refetchListingAgents } =
    useGetListingOfficeByIdQuery(selectedListingOfficeId as number, {
      skip: !selectedListingOfficeId,
    });
  const { data: sellingData } = useGetSellingOfficeByIdQuery(
    selectedSellingOfficeId as number,
    {
      skip: !selectedSellingOfficeId,
    }
  );

  const listingAgentNameOption = [
    { value: "addNew", label: "Add new agent" },
    ...(listingData?.listingAgents?.map(
      (agent: { contactName: string; id: number }) => ({
        value: agent.id,
        label: agent.contactName,
      })
    ) || []),
  ];

  const sellingAgentNameOption =
    sellingData?.sellingAgents?.map(
      (agent: { contactName: string; id: number }) => ({
        value: agent.id,
        label: agent.contactName,
      })
    ) || [];

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fees",
  });

  const onSubmit: SubmitHandler<OrderDataType> = async (data) => {
    const formattedData = { ...data };

    try {
      const res = await createOrder(formattedData).unwrap();
      navigate("/orders/orders");
      toast.success("Order Created Successfully");
      reset();
    } catch (err: any) {
      toast.error(err?.data?.message || "Order creation failed");
    }
  };

  const [isAddNewListingCompanyPopupOpen, setIsAddNewListingCompanyPopupOpen] =
    useState(false);
  const [
    isAddNewListingCompanyAgentPopupOpen,
    setIsAddNewListingCompanyAgentPopupOpen,
  ] = useState(false);

  const onAddNewLsitingCompanySubmit: SubmitHandler<
    ListingOfficeDataType
  > = async (data) => {
    try {
      await createListingOffice(data).unwrap();
      toast.success("Company Created Successfully");

      setIsAddNewListingCompanyPopupOpen(false);
      refetchListingOffices();
    } catch (err: any) {
      toast.error(err?.data?.message || "Company creation failed");
    }
  };
  const onAddNewListingCompanyAgentSubmit: SubmitHandler<
    ListingOfficeDataType
  > = async (data) => {
    const formattedData = {
      listingOfficeId: selectedListingOfficeId || 0,
      contactName: data.agentName || "",
    };
    try {
      const res = await createListingAgent(formattedData).unwrap();
      console.log(res, "==res==");
      toast.success("Agent Added Successfully");
      setValue("agentName", "");
      setIsAddNewListingCompanyAgentPopupOpen(false);
      refetchListingAgents();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to add agent");
    }
  };

  const handleAddNew = () => {
    setIsAddNewListingCompanyPopupOpen(true);
  };

  const handleAddNewAgent = () => {
    if (!selectedListingOfficeId) {
      toast.error("Please select a listing company first");
    } else {
      setIsAddNewListingCompanyAgentPopupOpen(true);
    }
  };
  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Dialog
        open={isAddNewListingCompanyAgentPopupOpen}
        onOpenChange={setIsAddNewListingCompanyAgentPopupOpen}
      >
        <DialogOverlay className="fixed inset-0 bg-black/50 z-[100]" />
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg w-96 z-[100]">
          <form
            onSubmit={handleNewListingSubmit(onAddNewListingCompanyAgentSubmit)}
            key={isAddNewListingCompanyAgentPopupOpen ? "open" : "closed"}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Add Agent</h2>
              <button
                type="button"
                onClick={() => setIsAddNewListingCompanyAgentPopupOpen(false)}
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <InputField
              label="Agent Name"
              name="agentName"
              control={newListingControl}
              type="text"
              placeholder="Devclan"
              error={newListingErrors.agentName?.message}
              required={true}
            />
            <button
              type="submit"
              className="w-full bg-(--secondary) text-white py-2 rounded-md mt-5"
            >
              {createListingAgentLoading ? <Spinner /> : "Create"}
            </button>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={isAddNewListingCompanyPopupOpen}
        onOpenChange={setIsAddNewListingCompanyPopupOpen}
      >
        <DialogOverlay className="fixed inset-0 bg-black/50 z-[100]" />
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg w-96 z-[100]">
          <form
            onSubmit={handleNewListingSubmit(onAddNewLsitingCompanySubmit)}
            key={isAddNewListingCompanyPopupOpen ? "open" : "closed"}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Add Listing Office</h2>
              <button
                type="button"
                onClick={() => setIsAddNewListingCompanyPopupOpen(false)}
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <InputField
              label="Company Name"
              name="name"
              control={newListingControl}
              type="text"
              placeholder="Devclan"
              error={newListingErrors.name?.message}
              required={true}
            />
            <button
              type="submit"
              className="w-full bg-(--secondary) text-white py-2 rounded-md mt-5"
            >
              {createListingOfficeLoading ? <Spinner /> : "Create"}
            </button>
          </form>
        </DialogContent>
      </Dialog>
      <Breadcrumb items={["Orders", "Create New Order"]} />
      <form onSubmit={handleOrderSubmit(onSubmit)}>
        <CardLayout>
          <div className="w-full flex justify-between">
            <MainTitle title="Create New Order" />
            <img
              src={ArrowBlack}
              alt=""
              className=""
              onClick={() => {
                setActiveTab("CreateNewOrder");
              }}
            />
          </div>
          <div className="w-full grid grid-cols-4 gap-x-2.5 gap-y-5 py-4">
            <SelectField
              label="Transaction Type"
              name="transactionType"
              control={control}
              options={transactionOption}
              placeholder="Select transaction type"
              error={errors.transactionType?.message}
              required={false}
            />
            <InputField
              label="First name"
              name="firstname"
              control={control}
              type="text"
              placeholder="John"
              error={errors.firstname?.message}
            />
            <InputField
              label="Last name"
              name="lastname"
              control={control}
              type="text"
              placeholder="Doe"
              error={errors.lastname?.message}
            />
            <InputField
              label="Add contact"
              name="contact"
              control={control}
              type="text"
              placeholder="Enter contact"
              error={errors.contact?.message}
            />
          </div>
        </CardLayout>
        <CardLayout>
          <div className="flex w-full justify-between">
            <MainTitle title="Transaction Details" />
            <img
              src={ArrowBlack}
              alt=""
              className=""
              onClick={() => {
                setActiveTab("transactionDetails");
              }}
            />
          </div>
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
              options={agentsOption}
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
            />
            <CustomDatePicker
              name="closedDate"
              control={control}
              label="Closing Date"
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
              label="Statuses"
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

            <SelectField
              label="Listing Agent Company"
              name="listingOfficeId"
              control={control}
              options={listingOfficeOption}
              placeholder="Select..."
              error={errors.listingAgentCompany?.message}
              required={false}
              addNew={handleAddNew}
            />
            <SelectField
              label="Listing Agent "
              name="listingAgentId"
              control={control}
              options={listingAgentNameOption}
              placeholder="Select..."
              error={errors.listingAgentId?.message}
              required={false}
              addNew={handleAddNewAgent}
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

            {/* <SelectField
              label="Selling Agent Company"
              name="sellingAgentCompany"
              control={control}
              options={sellingOfficesOption}
              placeholder="Select selling office"
              error={errors.sellingAgentCompany?.message}
              required={false}
            /> */}
            <SelectField
              label="Selling Agent Company"
              name="sellingOfficeId"
              control={control}
              options={sellingOfficesOption}
              placeholder="Select selling office"
              error={errors.sellingAgentCompany?.message}
              required={false}
            />
            <SelectField
              label="Selling Agent name"
              name="sellingAgentId"
              control={control}
              options={sellingAgentNameOption}
              placeholder="Select agent name"
              error={errors.sellingAgentId?.message}
              required={false}
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
          <div className="flex w-full justify-between">
            <MainTitle title="Fee Details" />
            <img
              src={ArrowBlack}
              alt=""
              className=""
              onClick={() => {
                setActiveTab("feeDetails");
              }}
            />
          </div>

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
                required={true}
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
                required={true}
              />

              <SelectField
                label="Fee Category"
                name={`fees.${index}.feeCategory`}
                control={control}
                options={feeCategoryOptions}
                placeholder="Fee category"
                error={errors.fees?.[index]?.feeCategory?.message}
                required={true}
              />

              <InputField
                label="Fee Amount"
                name={`fees.${index}.feeAmount`}
                control={control}
                type="number"
                required={true}
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

export default CreateNewOrder;
