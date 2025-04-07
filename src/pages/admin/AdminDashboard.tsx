import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Breadcrumb from "../../components/common/BreadCrumb";
import add from "../../assets/icons/Add.svg";
import CardLayout from "../../components/layouts/CardLayout";
import { Dialog, DialogOverlay, DialogContent } from "@radix-ui/react-dialog";
import MainTitle from "../../components/ui/typography/MainTitle";
import { X } from "lucide-react";
import { DashboardDataType } from "../../utils/types";
import InputField from "../../components/inputs/InputFields";

import { useState as useReactState } from "react";
import {
  useCreateDashboardMutation,
  useGetDashboardQuery,
  useUpdateDashboardMutation,
} from "../../lib/rtkQuery/dashboardApi";
import toast from "react-hot-toast";
import Spinner from "../../components/ui/loader/Spinner";

const AdminDashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
    reset,
  } = useForm<DashboardDataType>();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [createDashboard, { isLoading }] = useCreateDashboardMutation();
  const {
    data: dashboards,
    error,
    isLoading: isFetching,
    refetch,
  } = useGetDashboardQuery();

  const [dashboardName, setDashboardName] = useReactState("");
  const [selectedDashboardId, setSelectedDashboardId] = useState<number | null>(
    null
  );
  const [updatingDashboardId, setUpdatingDashboardId] = useState<number | null>(
    null
  );

  const [updateDashboard, { isLoading: isUpdating }] =
    useUpdateDashboardMutation();

  const togglePopup = () => setIsPopupOpen((prev) => !prev);

  const onSubmit: SubmitHandler<DashboardDataType> = async (data) => {
    try {
      const res = await createDashboard({ name: data.name }).unwrap();
      toast.success("Dashboard Created Successfully");
      reset();
      togglePopup();
    } catch (err: any) {
      toast.error(err?.data?.message || "Dashboard creation failed");
    }
  };

  const handleUpdateDashboard = async (id: number) => {
    try {
      const res = await updateDashboard({ id, name: dashboardName }).unwrap();
      toast.success("Dashboard Updated Successfully");
      setSelectedDashboardId(null);
      setUpdatingDashboardId(null);
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Dashboard update failed");
    }
  };

  if (isFetching) return <p>Loading Dashboards...</p>;

  return (
    <div className="w-full px-4 my-8">
      <Breadcrumb items={["Admin", "Dashboard"]} />
      <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/50 z-[100]" />
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg w-96 z-[100]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            key={isPopupOpen ? "open" : "closed"}
          >
            <div className="flex justify-between items-center mb-4">
              <MainTitle title="Add Dashboard" />
              <button onClick={togglePopup}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <InputField
              label="Dashboard Name"
              name="name"
              control={control}
              type="text"
              placeholder="Admin dashboard"
              error={errors.name?.message}
            />
            <button
              type="submit"
              className="w-full bg-(--secondary) text-white py-2 rounded-md mt-5"
              disabled={isLoading}
            >
              {isLoading ? "Creating..." : "Create"}
            </button>
          </form>
        </DialogContent>
      </Dialog>

      <CardLayout>
        <div className="flex justify-between items-center">
          <h2 className="text-lg text-(--primary) font-semibold">
            Manage Dashboards
          </h2>
          <div
            className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white"
            onClick={togglePopup}
          >
            <img src={add} alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
          {dashboards?.data?.map((dashboard: any) => (
            <CardLayout key={dashboard.id}>
              <div className="">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">{dashboard.name}</h3>
                </div>
                {selectedDashboardId === dashboard.id ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={dashboardName}
                      onChange={(e) => setDashboardName(e.target.value)}
                      className=" border border-gray-200 rounded-md p-2"
                      placeholder="Update Dashboard Name"
                    />
                    <button
                      onClick={() => handleUpdateDashboard(dashboard.id)}
                      className="bg-(--primary) text-white px-4 py-2 rounded-md"
                      disabled={isUpdating}
                    >
                      {isUpdating && updatingDashboardId === dashboard.id ? (
                        <Spinner />
                      ) : (
                        "Update"
                      )}
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setSelectedDashboardId(dashboard.id);
                      setDashboardName(dashboard.name);
                    }}
                    className="bg-(--secondary) text-white px-4 py-2 rounded-md"
                  >
                    Edit
                  </button>
                )}
              </div>
            </CardLayout>
          ))}
        </div>
      </CardLayout>
    </div>
  );
};

export default AdminDashboard;

{
  /* <div className="w-full flex justify-between">
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
            errors.DashboardName ? "border-red-500" : "border-(--inputBorder)"
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
</div>; */
}
