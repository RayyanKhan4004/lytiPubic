import Dummy from "../../assets/images/Dummy.jpg";
import { Controller, useForm } from "react-hook-form";
import Breadcrumb from "../../components/common/BreadCrumb";
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  notes: string;
}

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<FormValues>();

  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Account", "Profile"]} />
      <div className="w-full flex justify-between my-6">
        <div className="w-[49%] flex flex-col gap-5">
          <div className="shadow-(--cardShadow) rounded-2xl w-full bg-white  px-4   py-7 flex flex-col gap-3">
            <h1 className="text-lg font-semibold text-(--primary)">User</h1>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src={Dummy}
                  alt=""
                  className="w-[80px] h-[80px] rounded-full"
                />
                <div>
                  <h3 className="font-medium text-base">John Doe</h3>
                  <h3 className="font-normal text-sm">Senior developer</h3>
                </div>
              </div>
              <button className="bg-[#24B036] text-sm text-white rounded-md px-4 h-[30px] text-center">
                Active
              </button>
            </div>
          </div>

          <div className="shadow-(--cardShadow) rounded-2xl w-full bg-white  px-4   py-4 flex flex-col gap-3">
            <h1 className="text-lg font-semibold text-(--primary)">
              User information
            </h1>
            <div className="w-full flex justify-between items-center flex-wrap gap-4">
              <div className="text-greyText flex flex-col gap-1.5 w-[48%]">
                <label
                  htmlFor="firstName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  First Name
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
              <div className="text-greyText flex flex-col gap-1.5 w-[48%]">
                <label
                  htmlFor="lastName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Last Name
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
              <div className="text-greyText flex flex-col gap-1.5 w-[48%]">
                <label
                  htmlFor="email"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="bill.sanders@example.com"
                  className={`h-[55px] border-2 ${
                    errors.email ? "border-red-500" : "border-(--inputBorder)"
                  } rounded-[10px] w-full px-5 text-blackText`}
                  {...register("email", {
                    required: "Alternative Email is required",
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
              <div className="text-greyText flex flex-col gap-1.5 w-[48%]">
                <label
                  htmlFor="firstName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Phone No.
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
              <div className="text-greyText flex flex-col gap-1.5 w-[48%]">
                <label
                  htmlFor="firstName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Time zone
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
              <div className="text-greyText flex flex-col gap-1.5 w-[48%]">
                <label
                  htmlFor="firstName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Default landing page
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
              <div className="text-greyText flex flex-col gap-1.5 w-[48%]">
                <label
                  htmlFor="firstName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Business entity
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
            </div>
          </div>

          <div className="shadow-(--cardShadow) rounded-2xl w-full bg-white  px-4   py-4 flex flex-col gap-3">
            <div className="text-greyText flex flex-col gap-1.5 w-full">
              <label
                htmlFor="notes"
                className="text-lg font-semibold text-(--primary)"
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
          </div>
        </div>

        <div className="w-[49%] flex flex-col gap-5">
          <div className="shadow-(--cardShadow) rounded-2xl w-full bg-white  px-4   py-4 flex flex-col gap-3">
            <h1 className="text-lg font-semibold text-(--primary)">
              User Address{" "}
            </h1>
            <div className="w-full flex justify-between items-center flex-wrap gap-4">
              <div className="text-greyText flex flex-col gap-1.5 w-full">
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
              <div className="text-greyText flex flex-col gap-1.5 w-full">
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
              <div className="text-greyText flex flex-col gap-1.5 w-full">
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
                <div className="text-greyText flex flex-col gap-1.5 w-[48%]">
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
                <div className="text-greyText flex flex-col gap-1.5 w-[48%]">
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
          </div>

          <div className="shadow-(--cardShadow) rounded-2xl w-full bg-white  px-4   py-4 flex flex-col gap-3">
            <h1 className="text-lg font-semibold text-(--primary)">
              Cap & Split Settings{" "}
            </h1>
            <div className="w-full flex justify-between items-center flex-wrap gap-4">
              <div className="text-greyText flex flex-col gap-1.5 w-[48%]">
                <label
                  htmlFor="firstName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Brokerage Year Anniversary
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
              <div className="text-greyText flex flex-col gap-1.5 w-[48%]">
                <label
                  htmlFor="lastName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  AE Commission Threshold
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
              <div className="text-greyText flex flex-col gap-1.5 w-[48%]">
                <label
                  htmlFor="firstName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  AE Escrow Split
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
              <div className="text-greyText flex flex-col gap-1.5 w-[48%]">
                <label
                  htmlFor="lastName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  AE Title Split
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

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] w-fit px-8  rounded-xl text-white"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
