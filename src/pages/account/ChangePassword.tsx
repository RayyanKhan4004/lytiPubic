import { useState } from "react";
import Eye from "../../assets/icons/Eye.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import Breadcrumb from "../../components/common/BreadCrumb";
import Spinner from "../../components/common/Spinner";

type FormValues = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const [isLoading, setIsLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {};

  return (
    <div className="w-full px-4 my-8">
      <Breadcrumb items={["Account", "Change Password"]} />
      <div className="font-Jakarta px-5 my-12 py-4 w-[600px] rounded-2xl shadow-(--cardShadow)">
        <h1 className="font-semibold text-lg mt-4 text-(--primary)">
          Change Password
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-full pt-6 flex flex-col justify-between relative"
        >
          <div>
            <div className="relative flex flex-col gap-1.5">
              <label
                className="text-greyText mb-2 text-sm"
                htmlFor="currentPassword"
              >
                Current Password
              </label>
              <input
                type={showCurrentPassword ? "text" : "password"}
                id="currentPassword"
                className={`border ${
                  errors.currentPassword ? "border-red-500" : "border-[#F4EFE9]"
                } rounded-lg p-3 mb-4 w-full bg-transparent text-gray-700 outline-none`}
                placeholder="********"
                {...register("currentPassword", {
                  required: "Current password is required",
                })}
              />
              <img
                src={Eye}
                alt="Show Password"
                className="absolute my-auto top-4 bottom-0 right-2 cursor-pointer"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              />
            </div>
            {errors.currentPassword && (
              <span className="text-red-500 text-xs">
                {errors.currentPassword.message}
              </span>
            )}

            <div className="relative flex flex-col gap-1.5">
              <label
                className="text-greyText mb-2 text-sm"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                className={`border ${
                  errors.newPassword ? "border-red-500" : "border-[#F4EFE9]"
                } rounded-lg p-3 mb-4 w-full bg-transparent text-gray-700 outline-none`}
                placeholder="********"
                {...register("newPassword", {
                  required: "New password is required",
                })}
              />
              <img
                src={Eye}
                alt="Show Password"
                className="absolute my-auto top-4 bottom-0 right-2 cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              />
            </div>
            {errors.newPassword && (
              <span className="text-red-500 text-xs">
                {errors.newPassword.message}
              </span>
            )}

            <div className="relative flex flex-col gap-1.5">
              <label
                className="text-greyText mb-2 text-sm"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className={`border ${
                  errors.confirmPassword ? "border-red-500" : "border-[#F4EFE9]"
                } rounded-lg p-3 mb-4 w-full bg-transparent text-gray-700 outline-none`}
                placeholder="********"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("newPassword") || "Passwords do not match",
                })}
              />
              <img
                src={Eye}
                alt="Show Password"
                className="absolute my-auto top-4 bottom-0 right-2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>
            {errors.confirmPassword && (
              <span className="text-red-500 text-xs">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-(--primary) text-white h-[48px] w-[170px] font-semibold rounded-lg self-end mt-6 cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
