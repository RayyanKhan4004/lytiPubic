import React, { useEffect, useState } from "react";
import trend from "../../assets/icons/TrendUp.svg";
import Breadcrumb from "../../components/common/BreadCrumb";
import SlimBarChart from "../../components/dashboard/snapShot/SlimBarChart";
import CustomizableSkeleton from "../../components/ui/skeleton/CustomizableSkeleton";
import DashboardSnapshotStatsCard from "../../components/ui/card/DashboardSnapshotStatsCard";
import {
  useGetDashboardStatsQuery,
  useGetGraphDataQuery,
} from "../../lib/rtkQuery/dashboardApi";
import SelectField from "../../components/inputs/SelectField";
import { useForm } from "react-hook-form";
import { OrderDataType } from "../../utils/types";
import { yearOptions } from "../../utils/options";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import OpenOrderChart from "../../components/dashboard/snapShot/OpenOrderChart";
import OpenVolumeChart from "../../components/dashboard/snapShot/OpenVolumeChart";
import OpenRevenueChart from "../../components/dashboard/snapShot/OpenRevenueChart";
import ClosedOrderChart from "../../components/dashboard/snapShot/ClosedOrderChart";
import ClosedRevenueChart from "../../components/dashboard/snapShot/ClosedRevenueChart";
import ClosedVolumeChart from "../../components/dashboard/snapShot/ClosedVolumeChart";

const SnapShot = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});
  const {
    formState: { errors },
    reset,
    watch,
    setValue,
    control,
  } = useForm<OrderDataType>();

  const formatDate = (date: any) => {
    return date ? new Date(date).toISOString().split("T")[0] : "";
  };
  const selectedYear = watch("year") || "";

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const currentMonth = dayjs().format("MM");
    const yearToUse = selectedYear || dayjs().format("YYYY");
    const daysInMonth = dayjs(`${yearToUse}-${currentMonth}`).daysInMonth();

    setStartDate(`${yearToUse}-${currentMonth}-01`);
    setEndDate(`${yearToUse}-${currentMonth}-${daysInMonth}`);
  }, [selectedYear]);

  const selectedStartDate = startDate;
  const selectedEndDate = endDate;

  const { data: dashboardStats, isLoading } = useGetDashboardStatsQuery({
    startDate: selectedStartDate,
    endDate: selectedEndDate,
    year: selectedYear,
  });

  useEffect(() => {
    setSelectedFilters({
      year: selectedYear,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
    });
  }, [selectedYear, selectedStartDate, selectedEndDate]);

  const removeFilter = (key: "year" | "startDate" | "endDate") => {
    setValue(key, "");
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev };
      delete updatedFilters[key];
      return updatedFilters;
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    setValue("year", "2025");
  }, [setValue]);
  const handleItemClick = () => {
    navigate("/orders/orders", { state: { selectedYear, type: "year" } });
  };

  const handleMTDClick = () => {
    navigate("/orders/orders", { state: { selectedYear, type: "month" } });
  };

  return (
    <div className="w-full px-4 mb-8 font-Poppins">
      <div className="flex items-center justify-between mt-2">
        <Breadcrumb items={["Dashboard", "SnapShot"]} />
        <form className="font-Poppins flex justify-between items-center  gap-2">
          {/* <CustomDatePicker
            name="startDate"
            control={control}
            label=""
            placeholder="Start Date"
          />
          <CustomDatePicker
            name="endDate"
            control={control}
            label=""
            placeholder="End Date"
          /> */}
          <SelectField
            name="year"
            control={control}
            options={yearOptions}
            placeholder="Year"
            error={errors.year?.message}
            required={false}
            className="w-[113px]"
            height="h-[53px]"
          />

          <div className="flex gap-3">
            <div className="bg-(--primary) w-[44px] h-[44px] flex items-center justify-center rounded-[10px]">
              <img src={trend} alt="" />
            </div>
          </div>
        </form>
      </div>
      {/* <div className="flex gap-2 mt-2 justify-end">
        {Object.entries(selectedFilters).map(([key, value]) => {
          if (!value) return null;

          const displayValue =
            key === "startDate" || key === "endDate"
              ? new Date(value).toLocaleDateString()
              : value;

          return (
            <div
              key={key}
              className="flex items-center bg-[#E5E5E5] px-4 py-1 rounded-[27px] text-sm h-[40px]"
            >
              <button
                onClick={() =>
                  removeFilter(key as "year" | "startDate" | "endDate")
                }
                className="mr-2 text-(--secondary)"
              >
                ✖
              </button>
              {displayValue}
            </div>
          );
        })}
      </div> */}

      <div className="w-full flex gap-4 ">
        {isLoading ? (
          <div className="w-full flex gap-4 mt-2">
            <CustomizableSkeleton height={156} width="24%" />
            <CustomizableSkeleton height={156} width="24%" />
            <CustomizableSkeleton height={156} width="24%" />
            <CustomizableSkeleton height={156} width="24%" />
          </div>
        ) : (
          <div className="w-full flex gap-4 mt-2 justify-between">
            <DashboardSnapshotStatsCard
              title="YTD (All order count)"
              totalCount={
                Number(dashboardStats?.data?.allOrderCount?.[0]?.count) || 0
              }
              escrowCount={
                Number(dashboardStats?.data?.allOrderCount?.[0]?.escrow) || 0
              }
              titleCount={
                Number(dashboardStats?.data?.allOrderCount?.[0]?.title) || 0
              }
              mtdCount={
                Number(dashboardStats?.data?.allOrderCount?.[0]?.count_mtd) || 0
              }
              onMTDClick={handleMTDClick}
              onItemClick={handleItemClick}
            />
            <DashboardSnapshotStatsCard
              title="YTD open order"
              totalCount={
                Number(dashboardStats?.data?.openOrdersByYear?.[0]?.count) || 0
              }
              escrowCount={
                Number(dashboardStats?.data?.openOrdersByYear?.[0]?.escrow) || 0
              }
              titleCount={
                Number(dashboardStats?.data?.openOrdersByYear?.[0]?.title) || 0
              }
              mtdCount={
                Number(
                  dashboardStats?.data?.openOrdersByYear?.[0]?.count_mtd
                ) || 0
              }
              onMTDClick={handleMTDClick}
              onItemClick={handleItemClick}
            />
            <DashboardSnapshotStatsCard
              title="YTD prelim"
              totalCount={
                Number(
                  dashboardStats?.data?.prelimCommitmentOrdersByYear?.[0]?.count
                ) || 0
              }
              escrowCount={
                Number(
                  dashboardStats?.data?.prelimCommitmentOrdersByYear?.[0]
                    ?.escrow
                ) || 0
              }
              titleCount={
                Number(
                  dashboardStats?.data?.prelimCommitmentOrdersByYear?.[0]?.title
                ) || 0
              }
              mtdCount={
                Number(
                  dashboardStats?.data?.prelimCommitmentOrdersByYear?.[0]
                    ?.count_mtd
                ) || 0
              }
              onMTDClick={handleMTDClick}
              onItemClick={handleItemClick}
            />
            <DashboardSnapshotStatsCard
              title="YTD closed"
              totalCount={
                Number(dashboardStats?.data?.closedOrdersByYear?.[0]?.count) ||
                0
              }
              escrowCount={
                Number(dashboardStats?.data?.closedOrdersByYear?.[0]?.escrow) ||
                0
              }
              titleCount={
                Number(dashboardStats?.data?.closedOrdersByYear?.[0]?.title) ||
                0
              }
              mtdCount={
                Number(
                  dashboardStats?.data?.closedOrdersByYear?.[0]?.count_mtd
                ) || 0
              }
              onMTDClick={handleMTDClick}
              onItemClick={handleItemClick}
            />
          </div>
        )}
      </div>
      <div className="w-full flex justify-end mb-8">
        <div className="flex justify-between shadow-(--cardShadow) items-center bg-white rounded-lg w-[300px] h-[60px] px-2.5">
          <button
            className={`px-4 h-[48px] w-[48%] text-sm font-medium rounded-lg transition-colors duration-300 ${
              isMonthly ? "bg-(--primary) text-white" : "text-black"
            }`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly
          </button>
          <button
            className={`px-4 h-[48px] w-[48%] text-sm font-medium rounded-lg transition-colors duration-300 ${
              !isMonthly ? "bg-(--primary) text-white" : "text-black"
            }`}
            onClick={() => setIsMonthly(false)}
          >
            Annually
          </button>
        </div>
      </div>

      <div className="w-full flex justify-between flex-wrap gap-2">
        <OpenOrderChart />
        <OpenVolumeChart />
        <div className="flex justify-between mt-5 w-full">
          <OpenRevenueChart />
          <ClosedOrderChart />
        </div>
        <div className="flex justify-between mt-5 w-full">
          <ClosedRevenueChart />
          <ClosedVolumeChart />
        </div>
      </div>
    </div>
  );
};

export default SnapShot;
