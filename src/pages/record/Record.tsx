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

const Record = () => {
  const userId = useAppSelector((state: any) => state?.auth?.user?.id);
  const { data } = useGetUserActivitiesQuery();
  const [counts, setCounts] = useState<{
    [key: string]: { activityId: number; count: number };
  }>({});

  const [incrementActivity] = useIncrementActivityMutation();
  const [decrementActivity] = useDecrementActivityMutation();

  useEffect(() => {
    if (data?.activities) {
      const newCounts: {
        [key: string]: { activityId: number; count: number };
      } = {};
      data.activities.forEach((activity: any) => {
        newCounts[activity.activityName] = {
          activityId: activity.activityId,
          count: activity.totalCount,
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
      toast.error(error?.data?.message || "Can't delete ");
      console.error("Error updating activity count:", error);
    }
  };

  return (
    <div className="w-full px-4 my-6 font-Poppins">
      <Breadcrumb items={["Home", "Record"]} />

      <CardLayout>
        <MainTitle title="Activities" />
        <div className="flex justify-between items-center gap-3">
          {Object.entries(counts).map(([name, data]) => (
            <CardLayout className="py-3">
              <div key={name} className="flex flex-col gap-3">
                <h3 className="text-md font-semibold text-(--primary)">
                  {name}
                </h3>{" "}
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
                    className="w-32 text-center border-t border-b h-8 border-gray-300"
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
      </CardLayout>
    </div>
  );
};

export default Record;
