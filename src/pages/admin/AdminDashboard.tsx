import React from "react";
import { useForm } from "react-hook-form";
import Breadcrumb from "../../components/common/BreadCrumb";
interface FormValues {
  DashboardName: string;
}

const AdminDashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<FormValues>();
  return (
    <div className="w-full px-4 my-8">
      <Breadcrumb items={["Admin", "Dashboard"]} />
      <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full px-4 min-h-screen my-6 font-Poppins flex flex-col gap-4 py-6">
        <h2 className="text-lg text-(--primary) font-semibold">
          Edit Dashboard
        </h2>
        <div className="w-full flex justify-between">
          {["1", "2", "3", "4"].map(() => (
            <div className=" relative w-[24%] flex flex-col gap-5 border-[1px] rounded-xl px-3 py-4 border-(--inputBorder)">
              <div className="text-(--greyText) flex flex-col gap-1.5 ">
                <label
                  htmlFor="DashboardName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Dashboard Name
                </label>
                <input
                  type="text"
                  id="DashboardName"
                  placeholder="John"
                  className={`h-[55px] border-2 ${
                    errors.DashboardName
                      ? "border-red-500"
                      : "border-(--inputBorder)"
                  } rounded-[10px] w-full px-5 text-blackText`}
                  {...register("DashboardName", {
                    required: "First Name is required",
                  })}
                />
                {errors.DashboardName && (
                  <span className="text-red-500 text-sm">
                    {errors.DashboardName.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] w-full justify-center rounded-xl text-white"
              >
                Save Changes
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
