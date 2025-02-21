import { useState } from "react";
import image from "../../../assets/icons/Image.svg";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import pencil from "../../../assets/icons/Edit.svg";
import CustomizableDropdown from "../../../components/common/CustomizableDropdown";
import DateInput from "../../../components/common/DateInput";
import Breadcrumb from "../../../components/common/BreadCrumb";
import SelectField from "../../../components/inputs/SelectField";
import CustomDatePicker from "../../../components/inputs/CustomDatePicker";
import InputField from "../../../components/inputs/InputFields";

interface FormValues {
  firstName: string;
  lastName: string;
  altEmail: string;
  businessEntity: string;
  email: string;
  role: string;
  startDate: string;
  profileImage: File | null;
  brokerageCap: string;
  yearAnniversary: string;
  agentTransactionFee: string;
  agentMonthlyFee: string;
  commissionTemplate: string;
  notes: string;
  aeEscrow: string;
  aeCommission: string;
  aeTitle: string;
}

const AddUser = () => {
  const [startDate, setStartDate] = useState("");
  const [selectedRole, setSelectedRole] = useState("Agent");
  const [isChallange, setIsChallange] = useState<boolean>(false);
  const handleSelectRole = (e: any) => {
    setSelectedRole(e);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<FormValues>();

  const roleOption = [
    { value: 2025, label: "2025" },
    { value: 2024, label: "2024" },
    { value: 2023, label: "2023" },
    { value: 2022, label: "2022" },
    { value: 2021, label: "2021" },
    { value: 2020, label: "2020" },
    { value: 2019, label: "2019" },
    { value: 2018, label: "2018" },
    { value: 2017, label: "2017" },
    { value: 2016, label: "2016" },
    { value: 2015, label: "2015" },
    { value: 2014, label: "2014" },
    { value: 2013, label: "2013" },
    { value: 2012, label: "2012" },
    { value: 2011, label: "2011" },
    { value: 2010, label: "2010" },
  ];

  const profileImagePreview =
    watch("profileImage") instanceof File
      ? URL.createObjectURL(watch("profileImage") as File)
      : null;

  console.log(profileImagePreview);

  const removeImage = (name: "profileImage") => {
    setValue(name, null);
    setTimeout(() => {
      const inputElement = document.getElementById(
        "profileImage"
      ) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = "";
      }
    }, 0);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {};
  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Admin", "User", "Add User"]} />
      <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full px-4 min-h-screen my-6">
        <h2 className="text-lg text-(--primary) font-semibold pt-3">
          Add User
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col  items-center"
        >
          {profileImagePreview ? (
            <div className=" relative w-[146px] h-[146px] rounded-full">
              <img
                src={profileImagePreview}
                alt="Profile Preview"
                className="w-full h-full object-cover rounded-full"
              />
              <label
                htmlFor="profileImage"
                className="absolute right-2 bottom-2 bg-(--primary) p-1 rounded-full cursor-pointer"
              >
                <img
                  src={pencil}
                  alt="Edit"
                  className="right-2 bottom-2"
                  onClick={() => {
                    removeImage("profileImage");
                  }}
                />
              </label>
            </div>
          ) : (
            <label
              htmlFor="profileImage"
              className="w-[146px] h-[146px] rounded-full flex justify-center items-center bg-(--smoke)"
            >
              <img src={image} alt="" />
            </label>
          )}

          <Controller
            name="profileImage"
            control={control}
            defaultValue={null}
            rules={{
              required: "Profile image is required",
            }}
            render={({ field }) => (
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files ? e.target.files[0] : null;
                  setValue("profileImage", file);
                  e.target.value = "";
                }}
                className="hidden"
              />
            )}
          />

          <div className="flex flex-col gap-5 w-full my-6">
            <div className="w-full flex justify-between ">
              <div className="w-[48%]  flex flex-col gap-4">
                <div className="flex justify-between items-center w-full">
                  <InputField
                    label="First Name"
                    name="firstName"
                    control={control}
                    type="text"
                    // required={true}
                    placeholder="Enter your name"
                    error={errors.firstName?.message}
                    className="w-[48%]"
                  />

                  <InputField
                    label="Last Name"
                    name="lastName"
                    control={control}
                    type="text"
                    // required={true}
                    placeholder="Enter your last name"
                    error={errors.lastName?.message}
                    className="w-[48%]"
                  />
                </div>

                <div className="text-(--greyText) flex flex-col gap-1.5 w-full">
                  <label
                    htmlFor="altEmail"
                    className="text-[14px] leading-[18px] font-medium"
                  >
                    Alternative Email
                  </label>
                  <input
                    type="email"
                    id="altEmail"
                    placeholder="bill.sanders@example.com"
                    className={`h-[55px] border-2 ${
                      errors.altEmail
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("altEmail", {
                      required: "Alternative Email is required",
                      pattern: {
                        value: /^\S+@\S+$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.altEmail && (
                    <span className="text-red-500 text-sm">
                      {errors.altEmail.message}
                    </span>
                  )}
                </div>

                <div className="text-(--greyText) flex flex-col gap-1.5 w-full">
                  <label
                    htmlFor="businessEntity"
                    className="text-[14px] leading-[18px] font-medium"
                  >
                    Business Entity
                  </label>
                  <input
                    type="text"
                    id="businessEntity"
                    placeholder="Razorx"
                    className={`h-[55px] border-2 ${
                      errors.businessEntity
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("businessEntity", {
                      required: "Business Entity is required",
                    })}
                  />
                  {errors.businessEntity && (
                    <span className="text-red-500 text-sm">
                      {errors.businessEntity.message}
                    </span>
                  )}
                </div>
              </div>

              <div className=" w-[48%] flex flex-col gap-4">
                <div className="text-(--greyText) flex flex-col gap-1.5 w-full">
                  <label
                    htmlFor="email"
                    className="text-[14px] leading-[18px] font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="bill.sanders@example.com"
                    className={`h-[55px] border-2 ${
                      errors.email ? "border-red-500" : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center w-full">
                  {/* <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%] mt-5">
                    <label
                      htmlFor="role"
                      className="text-[14px] leading-[18px] font-medium"
                    >
                      Role
                    </label>
                    <Controller
                      name="role"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Role is required" }}
                      render={({ field }) => (
                        <CustomizableDropdown
                          height="h-[55px]"
                          options={["Agent", "Users", "Admin"]}
                          selected={field.value}
                          setSelected={field.onChange}
                          width="w-full"
                        />
                      )}
                    />
                    {errors.role && (
                      <p className="text-red-500 text-sm">
                        {errors.role.message}
                      </p>
                    )}
                  </div> */}
                  <SelectField
                    label="Role"
                    name="role"
                    control={control}
                    options={roleOption}
                    placeholder="Select..."
                    error={errors.role?.message}
                    required={false}
                    className="w-[49%] hidden sm:block "
                  />

                  {/* <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%] mt-5">
                    <label
                      htmlFor="startDate"
                      className="text-[14px] leading-[18px] font-medium"
                    >
                      Start Date
                    </label>
                    <Controller
                      name="startDate"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Start Date is required" }}
                      render={({ field }) => (
                        <DateInput
                          value={field.value}
                          onChange={field.onChange}
                          height="h-[55px]"
                        />
                      )}
                    />
                    {errors.startDate && (
                      <p className="text-red-500 text-sm">
                        {errors.startDate.message}
                      </p>
                    )}
                  </div> */}
                  <CustomDatePicker
                    name="startDate"
                    control={control}
                    label="Select a Date"
                    placeholder="8-21-15"
                    // rules={{ required: "Date is required" }}
                    className="w-[48%]"
                  />
                </div>
              </div>
            </div>

            <div className="w-full border-t-[1.5px] border-(--smoke)"> </div>

            <div className="w-full flex justify-between ">
              <div className="w-[48%] flex flex-col gap-4">
                <div className="flex justify-between items-center w-full">
                  <div className="text-(--greyText) flex flex-col gap-1.5 w-full">
                    <label
                      htmlFor="aeCommission"
                      className="text-[14px] leading-[18px] font-medium"
                    >
                      AE Commission Threshold
                    </label>
                    <input
                      type="text"
                      id="aeCommission"
                      placeholder="John"
                      className={`h-[55px] border-2 ${
                        errors.aeCommission
                          ? "border-red-500"
                          : "border-(--inputBorder)"
                      } rounded-[10px] w-full px-5 text-blackText`}
                      {...register("aeCommission", {
                        required: "aeCommission is required",
                      })}
                    />
                    {errors.aeCommission && (
                      <span className="text-red-500 text-sm">
                        {errors.aeCommission.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-(--greyText) flex flex-col gap-1.5 w-full">
                  <label
                    htmlFor="aeEscrow"
                    className="text-[14px] leading-[18px] font-medium"
                  >
                    AE Escrow Commission
                  </label>
                  <input
                    type="text"
                    id="aeEscrow"
                    placeholder="John"
                    className={`h-[55px] border-2 ${
                      errors.firstName
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("aeEscrow", {
                      required: "aeEscrow is required",
                    })}
                  />
                  {errors.aeEscrow && (
                    <span className="text-red-500 text-sm">
                      {errors.aeEscrow.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="w-[48%] flex flex-col gap-4">
                {/* Year Anniversary */}
                <div className="text-(--greyText) flex flex-col gap-1.5 w-full">
                  <label
                    htmlFor="yearAnniversary"
                    className="text-[14px] leading-[18px] font-medium"
                  >
                    Year Anniversary
                  </label>
                  <Controller
                    name="yearAnniversary"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Year Anniversary is required" }}
                    render={({ field }) => (
                      <DateInput
                        value={field.value}
                        onChange={field.onChange}
                        height="h-[55px]"
                      />
                    )}
                  />
                  {errors.yearAnniversary && (
                    <p className="text-red-500 text-sm">
                      {errors.yearAnniversary.message}
                    </p>
                  )}
                </div>

                {/* Agent Monthly Fee */}
                <div className="flex justify-between items-center w-full">
                  <div className="text-(--greyText) flex flex-col gap-1.5 w-full">
                    <label
                      htmlFor="aeTitle"
                      className="text-[14px] leading-[18px] font-medium"
                    >
                      AE Title Commission
                    </label>
                    <input
                      type="text"
                      id="aeTitle"
                      placeholder="John"
                      className={`h-[55px] border-2 ${
                        errors.aeTitle
                          ? "border-red-500"
                          : "border-(--inputBorder)"
                      } rounded-[10px] w-full px-5 text-blackText`}
                      {...register("aeCommission", {
                        required: "AE Title is required",
                      })}
                    />
                    {errors.aeTitle && (
                      <span className="text-red-500 text-sm">
                        {errors.aeTitle.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t-[1.5px] border-(--smoke)"> </div>

            <div className="w-full flex justify-between flex-col gap-4">
              <div className="flex w-full justify-between ">
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="last"
                    className="text-[14px] leading-[18px] font-medium"
                  >
                    Alternative Email
                  </label>
                  <input
                    type="text"
                    id="last"
                    placeholder="bill.sanders@example.com"
                    className={`placeholder:text-[16px] placeholder:leading-[20px] placeholder:font-normal h-[55px] border-2 border-(--inputBorder)  rounded-[10px] w-full px-5 text-blackText`}
                  />
                </div>
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="last"
                    className="text-[14px] leading-[18px] font-medium"
                  >
                    Business Entity
                  </label>
                  <input
                    type="text"
                    id="last"
                    placeholder="Razorx"
                    className={`placeholder:text-[16px] placeholder:leading-[20px] placeholder:font-normal h-[55px] border-2 border-(--inputBorder)  rounded-[10px] w-full px-5 text-blackText`}
                  />
                </div>
              </div>
              <div className="text-(--greyText) flex flex-col gap-1.5 w-full">
                {/* Apply selected Commission Template(s) */}
                <label
                  htmlFor="commissionTemplate"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Apply selected Commission Template(s) when Transactions go
                  Under Contract
                </label>
                <Controller
                  name="commissionTemplate"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <CustomizableDropdown
                      height="h-[55px]"
                      options={["Agent", "Users", "Admin"]}
                      selected={field.value}
                      setSelected={field.onChange}
                      width="w-full"
                    />
                  )}
                />
                {errors.commissionTemplate && (
                  <p className="text-red-500 text-sm">
                    {errors.commissionTemplate.message}
                  </p>
                )}
              </div>

              {/* Notes */}
              <div className="text-(--greyText) flex flex-col gap-1.5 w-full">
                <label
                  htmlFor="notes"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Notes
                </label>
                <Controller
                  name="notes"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Notes are required" }}
                  render={({ field }) => (
                    <textarea
                      id="notes"
                      placeholder="Enter your notes here..."
                      className="placeholder:text-[16px] placeholder:leading-[20px] placeholder:font-normal h-[155px] border-2 border-(--inputBorder) rounded-[10px] w-full px-4 text-blackText resize-none py-2"
                      {...field}
                    ></textarea>
                  )}
                />
                {errors.notes && (
                  <p className="text-red-500 text-sm">{errors.notes.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <div className="gap-4 flex items-center">
                  <input
                    type="checkbox"
                    id="challenges"
                    className="accent-(--primary) outline-(--greyText) w-5 h-5"
                    checked={isChallange}
                    onChange={() => setIsChallange(!isChallange)}
                  />
                  <label htmlFor="challenges" className="text-sm">
                    Exclude from challenges & leaderboards
                  </label>
                </div>
                <div className="gap-4 flex items-center">
                  <input
                    type="checkbox"
                    id="challenges"
                    className="accent-(--primary) outline-(--greyText) w-5 h-5"
                    checked={isChallange}
                    onChange={() => setIsChallange(!isChallange)}
                  />
                  <label htmlFor="challenges" className="text-sm">
                    Download Transactions
                  </label>
                </div>
                <div className="gap-4 flex items-center">
                  <input
                    type="checkbox"
                    id="challenges"
                    className="accent-(--primary) outline-(--greyText) w-5 h-5"
                    checked={isChallange}
                    onChange={() => setIsChallange(!isChallange)}
                  />
                  <label htmlFor="challenges" className="text-sm">
                    Send Welcome Email
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] w-fit px-8  rounded-xl text-white"
              >
                Add User
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
