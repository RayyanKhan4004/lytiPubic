import Dummy from "../../assets/images/Dummy.jpg";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Breadcrumb from "../../components/common/BreadCrumb";
import MainTitle from "../../components/ui/typography/MainTitle";
import CardLayout from "../../components/layouts/CardLayout";
import { useAppDispatch, useAppSelector } from "../../lib/store/hooks";
import pencil from "../../assets/icons/PencilSimple.svg";
import { UserDataType } from "../../utils/types";
import image from "../../assets/icons/Image.svg";
import CustomDatePicker from "../../components/inputs/CustomDatePicker";
import SelectField from "../../components/inputs/SelectField";
import InputField from "../../components/inputs/InputFields";
import { roleOption } from "../../utils/options";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "../../lib/rtkQuery/userApi";
import toast from "react-hot-toast";
import { clearAuth, setAuth } from "../../lib/store/slices/authSlice";
import Spinner from "../../components/ui/loader/Spinner";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<UserDataType>();
  const [isChallenge, setIsChallenge] = useState<boolean>(false);
  const [isDownload, setIsDownload] = useState<boolean>(false);
  const [isWelcome, setIsWelcome] = useState<boolean>(false);
  const userData = useAppSelector((state: any) => state?.auth?.user);
  const dispatch = useAppDispatch();

  const profileImage = watch("profileImage");
  const profileImagePreview =
    profileImage instanceof File
      ? URL.createObjectURL(profileImage)
      : typeof profileImage === "string"
      ? profileImage
      : null;

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
  console.log(userData, "userData");
  useEffect(() => {
    if (userData) {
      setValue("profileImage", userData.profileImage || null);
      setValue("firstname", userData.firstname || "");
      setValue("lastname", userData.lastname || "");
      setValue("alternativemail", userData.alternativemail || "");
      setValue("business_entity", userData.business_entity || "");
      setValue("email", userData.email || "");
      setValue("role", userData.role || "");
      setValue("startdate", userData.startdate || "");
      setValue("notes", userData.notes || "");
      setValue(
        "ae_commission_threshold",
        userData.ae_commission_threshold || 0
      );
      setValue("ae_escrow_commission", userData.ae_escrow_commission || 0);
      setValue("ae_title_commission", userData.ae_title_commission || 0);
      setValue("career_path", userData.career_path || 0);
      setValue("lead_source", userData.lead_source || 0);
      setIsChallenge(userData.exclude_challenges_leaderboards || false);
      setIsDownload(userData.download_transactions || false);
      setIsWelcome(userData.send_welcome_email || false);
    }
  }, [userData, setValue]);
  const navigate = useNavigate();
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const [deleteUser, { isLoading: isDeleteLoading }] = useDeleteUserMutation();

  const onSubmit: SubmitHandler<UserDataType> = async (data: UserDataType) => {
    const formData = new FormData();

    formData.append("firstname", data.firstname || "");
    formData.append("lastname", data.lastname || "");
    formData.append("alternativemail", data.alternativemail || "");
    formData.append("business_entity", data.business_entity || "");
    formData.append("email", data.email || "");
    formData.append("role", data.role || "");
    formData.append(
      "startdate",
      data.startdate ? new Date(data.startdate).toISOString() : ""
    );
    formData.append("notes", data.notes || "");
    formData.append("career_path", data.career_path || "");
    formData.append("lead_source", data.lead_source || "");
    if (data.profileImage instanceof File) {
      formData.append("profileImage", data.profileImage);
    }
    formData.append(
      "ae_commission_threshold",
      JSON.stringify(data.ae_commission_threshold ?? 0)
    );
    formData.append(
      "ae_escrow_commission",
      JSON.stringify(data.ae_escrow_commission ?? 0)
    );
    formData.append(
      "ae_title_commission",
      JSON.stringify(data.ae_title_commission ?? 0)
    );

    // Boolean toggles
    formData.append("exclude_challenges_leaderboards", String(isChallenge));
    formData.append("download_transactions", String(isDownload));
    formData.append("send_welcome_email", String(isWelcome));

    try {
      const res = await updateUser({
        id: userData.id,
        formData,
      }).unwrap();
      dispatch(setAuth(res?.user));
      toast.success("User updated successfully");
      // navigate("/admin/users-table");
      console.log(res, "===res====");
    } catch (error: any) {
      toast.error(error?.data?.message || "Can't update user");
    }
  };

  const handleDeleteUser = async () => {
    try {
      await deleteUser(userData?.id).unwrap();
      toast.success("Account  deleted successfully");
      dispatch(clearAuth());
      localStorage.clear();
      navigate("/");
    } catch (err: any) {
      toast.error(err?.data?.message || "Can not delete user");
    }
  };
  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Account", "Profile"]} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex justify-between my-6"
      >
        <div className="w-[49%] flex flex-col gap-5">
          <CardLayout className="my-0">
            <MainTitle title="User" />

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                {profileImagePreview ? (
                  <div className=" relative w-[146px] h-[146px] rounded-full border border-(--inputBorder) ">
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
                      accept="image/png, image/jpeg, image/jpg, image/webp, image/gif"
                      onChange={(e) => {
                        const file = e.target.files ? e.target.files[0] : null;
                        setValue("profileImage", file);
                        e.target.value = "";
                      }}
                      className="hidden"
                    />
                  )}
                />
                <div>
                  <h3 className="font-medium text-base">
                    {userData?.firstname} {userData?.lastname}
                  </h3>
                  <h3 className="font-normal text-sm">{userData?.role}</h3>
                </div>
              </div>
              <button className="bg-[#24B036] text-sm text-white rounded-md px-4 h-[30px] text-center">
                Active
              </button>
            </div>
          </CardLayout>

          <CardLayout>
            <MainTitle title="User information" />
            <div className="w-full flex justify-between ">
              <div className="w-[48%]  flex flex-col gap-4">
                <InputField
                  label="First Name"
                  name="firstname"
                  control={control}
                  type="text"
                  placeholder="Enter your name"
                  error={errors.firstname?.message}
                />
                <InputField
                  label="Email Address"
                  name="email"
                  control={control}
                  type="email"
                  placeholder="Enter your Email Address"
                  error={errors.email?.message}
                />
                <InputField
                  label="Alternative Email"
                  name="alternativemail"
                  control={control}
                  type="email"
                  required={true}
                  placeholder="Enter your Alternative Email"
                  error={errors.alternativemail?.message}
                />
                <InputField
                  label="Business Entity"
                  name="business_entity"
                  control={control}
                  // required={true}
                  type="text"
                  placeholder="Enter your business entity"
                  error={errors.business_entity?.message}
                />
              </div>

              <div className=" w-[48%] flex flex-col gap-4">
                <InputField
                  label="Last Name"
                  name="lastname"
                  control={control}
                  type="text"
                  placeholder="Enter your last name"
                  error={errors.lastname?.message}
                />

                <SelectField
                  label="Role"
                  name="role"
                  control={control}
                  options={roleOption}
                  placeholder="Select..."
                  error={errors.role?.message}
                  required={false}
                />

                <CustomDatePicker
                  name="startdate"
                  control={control}
                  label="Start Date"
                  placeholder="8-21-15"
                  // rules={{ required: "Date is required" }}
                />
              </div>
            </div>
          </CardLayout>

          <CardLayout className="my-0">
            <MainTitle title="Notes " />
            <div className=" flex flex-col gap-1.5 w-full">
              <Controller
                name="notes"
                control={control}
                defaultValue=""
                // rules={{ required: "Notes are required" }}
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
          </CardLayout>
        </div>

        <div className="w-[49%] flex flex-col gap-5">
          {/* <div className="shadow-(--cardShadow) rounded-2xl w-full bg-white  px-4   py-4 flex flex-col gap-3">
            <h1 className="text-lg font-semibold text-(--primary)">
              User Address{" "}
            </h1>
            <div className="w-full flex justify-between items-center flex-wrap gap-4">
              <div className="text-(--greyText) flex flex-col gap-1.5 w-full">
                <label
                  htmlFor="firstName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Address 1
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  className={`h-[55px] border-2 ${
                    errors.firstName
                      ? "border-red-500"
                      : "border-(--inputBorder)"
                  } rounded-[10px] w-full px-5 text-blackText`}
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="text-(--greyText) flex flex-col gap-1.5 w-full">
                <label
                  htmlFor="firstName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Address 2
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  className={`h-[55px] border-2 ${
                    errors.firstName
                      ? "border-red-500"
                      : "border-(--inputBorder)"
                  } rounded-[10px] w-full px-5 text-blackText`}
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="text-(--greyText) flex flex-col gap-1.5 w-full">
                <label
                  htmlFor="firstName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  City
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  className={`h-[55px] border-2 ${
                    errors.firstName
                      ? "border-red-500"
                      : "border-(--inputBorder)"
                  } rounded-[10px] w-full px-5 text-blackText`}
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="w-full flex justify-between items-center flex-wrap gap-4">
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="firstName"
                    className="text-[14px] leading-[18px] font-medium"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    className={`h-[55px] border-2 ${
                      errors.firstName
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                  <label
                    htmlFor="lastName"
                    className="text-[14px] leading-[18px] font-medium"
                  >
                    Post code
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    className={`h-[55px] border-2 ${
                      errors.lastName
                        ? "border-red-500"
                        : "border-(--inputBorder)"
                    } rounded-[10px] w-full px-5 text-blackText`}
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div> */}

          <CardLayout className="my-0">
            <MainTitle title="Cap & Split Settings" />
            <div className="w-full flex justify-between flex-wrap gap-4">
              <InputField
                label="AE Commission Threshold"
                name="ae_commission_threshold"
                control={control}
                type="number"
                placeholder="Enter AE Commission Threshold"
                error={errors.ae_commission_threshold?.message}
                className="w-[48%]"
              />
              <InputField
                label="AE Escrow Commission"
                name="ae_escrow_commission"
                control={control}
                type="number"
                placeholder="Enter AE Escrow Commission"
                error={errors.ae_escrow_commission?.message}
                className="w-[48%]"
              />
              <InputField
                label="AE Title Commission"
                name="ae_title_commission"
                control={control}
                type="number"
                placeholder="Enter AE Title Commission"
                error={errors.ae_title_commission?.message}
                className="w-[48%]"
              />
            </div>
          </CardLayout>
          <CardLayout>
            <div className="flex flex-col gap-2">
              <div className="gap-4 flex items-center">
                <input
                  type="checkbox"
                  id="exclude_challenges_leaderboards"
                  className="accent-(--primary) outline-(--greyText) w-5 h-5"
                  checked={isChallenge}
                  onChange={() => setIsChallenge(!isChallenge)}
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
                  checked={isDownload}
                  onChange={() => setIsDownload(!isDownload)}
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
                  checked={isWelcome}
                  onChange={() => setIsWelcome(!isWelcome)}
                />
                <label htmlFor="challenges" className="text-sm">
                  Send Welcome Email
                </label>
              </div>
            </div>
          </CardLayout>

          <div className="flex justify-end gap-4">
            {/* <button
              type="button"
              className="bg-red-500 flex items-center cursor-pointer gap-1.5 text-sm h-[44px] w-fit px-8  rounded-xl text-white"
              onClick={handleDeleteUser}
            >
              {isDeleteLoading ? <Spinner /> : "Delete"}
            </button> */}
            <button
              type="submit"
              className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] w-fit px-8  rounded-xl text-white"
            >
              {isLoading ? <Spinner /> : "Save Chnages"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
