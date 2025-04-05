import React, { useState, useEffect } from "react";
import { Minus, Plus } from "lucide-react";
import Breadcrumb from "../../components/common/BreadCrumb";
import {
  useGetUserActivitiesQuery,
  useIncrementActivityMutation,
  useDecrementActivityMutation,
} from "../../lib/rtkQuery/dashboardApi";
import { useAppSelector } from "../../lib/store/hooks";
import toast from "react-hot-toast";
import CardLayout from "../../components/layouts/CardLayout";
import MainTitle from "../../components/ui/typography/MainTitle";
import CustomizableSkeleton from "../../components/ui/skeleton/CustomizableSkeleton";
import add from "../../assets/icons/Add.svg";
const Record = () => {
  const userId = useAppSelector((state: any) => state?.auth?.user?.id);
  const { data, isLoading } = useGetUserActivitiesQuery({ userId });

  const [counts, setCounts] = useState<{
    [key: string]: { activityId: number; count: number };
  }>({});

  const [incrementActivity] = useIncrementActivityMutation();
  const [decrementActivity] = useDecrementActivityMutation();

  useEffect(() => {
    if (data?.userActivities) {
      const newCounts: {
        [key: string]: { activityId: number; count: number };
      } = {};
      data.userActivities.forEach((userActivity: any) => {
        newCounts[userActivity.activityName] = {
          activityId: userActivity.activityId,
          count: userActivity.totalCount,
        };
      });
      setCounts(newCounts);
    }
  }, [data]);

  const updateCount = async (activityName: string, value: number) => {
    if (!userId || !counts[activityName]) return;

    const { activityId } = counts[activityName];

    try {
      if (value === 1) {
        await incrementActivity({ userId, activityId }).unwrap();
      } else {
        await decrementActivity({ userId, activityId }).unwrap();
      }

      toast.success(`${activityName} count updated successfully!`);

      setCounts((prev) => ({
        ...prev,
        [activityName]: {
          ...prev[activityName],
          count: Math.max(0, prev[activityName].count + value),
        },
      }));
    } catch (error: any) {
      toast.error(error?.data?.message || "Can't update activity count");
      console.error("Error updating activity count:", error);
    }
  };
  const stages = [
    "Appointment Set",
    "Appointment Met",
    "Signed",
    "Under Contract",
    "Closed",
  ];
  return (
    <div className="w-full px-4 my-6 font-Poppins">
      <Breadcrumb items={["Home", "Record"]} />
      <CardLayout className="py-5 my-6">
        <div className="flex justify-between items-center ">
          <MainTitle title="Transactions" />
          <div className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[40px] px-3 rounded-xl text-white">
            <img src={add} alt="" />
            Add Transaction
          </div>
        </div>
        <div className="flex justify-between gap-2 mt-3">
          {stages.map((stage) => (
            <div
              key={stage}
              className="flex flex-col items-center justify-center w-48 h-24 bg-gray-100 rounded-md shadow-sm"
            >
              <p className="text-gray-700">{stage}</p>
              <div className="mt-2 bg-(--secondary) rounded-full p-0.5">
                <img src={add} alt="Add" className="h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
      </CardLayout>
      <CardLayout className="py-5">
        <MainTitle title="Activities" />
        {isLoading ? (
          <div className="flex justify-between gap-5">
            <CustomizableSkeleton />
            <CustomizableSkeleton />
            <CustomizableSkeleton />
            <CustomizableSkeleton />
          </div>
        ) : (
          <div className="flex justify-between items-center gap-2">
            {Object.entries(counts).map(([name, data]) => (
              <CardLayout key={name} className="py-3">
                <div className="flex flex-col gap-3">
                  <h3 className="text-md font-semibold text-(--primary)">
                    {name}
                  </h3>
                  <div className="flex items-center">
                    <button
                      className="bg-(--secondary) text-white px-4 py-2 rounded-l-lg"
                      onClick={() => updateCount(name, -1)}
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="text"
                      name={name}
                      value={data.count}
                      readOnly
                      className="w-[70%] text-center border-t border-b h-8 border-gray-300"
                    />
                    <button
                      className="bg-(--secondary) text-white px-4 py-2 rounded-r-lg"
                      onClick={() => updateCount(name, 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </CardLayout>
            ))}
          </div>
        )}
      </CardLayout>
    </div>
  );
};

export default Record;
