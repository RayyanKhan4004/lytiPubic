import React, { useState } from "react";
import trend from "../../assets/icons/TrendUp.svg";
import arrow from "../../assets/icons/ArrowLongDark.svg";
import Breadcrumb from "../../components/common/BreadCrumb";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";
import LineChartComponent from "../../components/dashboard/snapShot/LineChartComponent";
import StackedBarChart from "../../components/dashboard/snapShot/StackedBarChart";
import SlimBarChart from "../../components/dashboard/snapShot/SlimBarChart";
import StatsCard from "../../components/orders/StatsCard";
import { useGetOrdersQuery } from "../../lib/rtkQuery/orderApi";
import CustomizableSkeleton from "../../components/ui/skeleton/CustomizableSkeleton";
import {
  formatNumber,
  formatNumberWithoutDecimals,
} from "../../utils/functions";

const SnapShot = () => {
  const [selectedFilter, setSelectedFilter] = useState("Active");
  const [selectedYear, setSelectedYear] = useState("2023");
  const [isMonthly, setIsMonthly] = useState(true);

  const { data, isLoading, refetch } = useGetOrdersQuery({
    status: "",
    type: "",
    propertyCounty: "",
    transactionType: "",
    page: 1,
    limit: 10,
    keyword: "",
    titleOffice: "",
    underwriter: "",
  });
  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <div className="flex items-center justify-between">
        <Breadcrumb items={["Dashboard", "SnapShot"]} />
        <div className="flex gap-3">
          <CustomizableDropdown
            height="h-[44px]"
            options={["All", "Active", "InActive"]}
            selected={selectedFilter}
            setSelected={(e) => setSelectedFilter(e)}
            width="w-[200px]"
          />
          <CustomizableDropdown
            height="h-[44px]"
            options={["2023", "2024", "2025", "2026"]}
            selected={selectedYear}
            setSelected={(e) => setSelectedYear(e)}
            width="w-[130px]"
          />
          <CustomizableDropdown
            height="h-[44px]"
            options={["All", "Active", "InActive"]}
            selected={selectedFilter}
            setSelected={(e) => setSelectedFilter(e)}
            width="w-[180px]"
          />
          <div className="bg-(--primary) w-[44px] h-[44px] flex items-center justify-center rounded-[10px]">
            <img src={trend} alt="" />
          </div>
        </div>
      </div>

      <div className="w-full flex gap-4 mt-6">
        {isLoading ? (
          <div className="w-full flex gap-4 mt-2">
            <CustomizableSkeleton height={156} width="32%" />
            <CustomizableSkeleton height={156} width="32%" />
            <CustomizableSkeleton height={156} width="32%" />
          </div>
        ) : (
          <div className="w-full flex gap-4 mt-2">
            <StatsCard
              heading="Orders"
              stats={[
                {
                  value: `${formatNumberWithoutDecimals(
                    data?.totalOrderCount
                  )}`,
                  text: "Total Orders",
                },
                {
                  value: `$${formatNumber(data?.totalFee)}`,
                  text: "Total Amount",
                },
                { value: "0", text: "Avg /Order" },
              ]}
            />
            <StatsCard
              heading="Title"
              stats={[
                {
                  value: `${formatNumberWithoutDecimals(
                    data?.titleChargesOrderCount
                  )}`,
                  text: "Total Units",
                },
                {
                  value: `$${formatNumber(data?.titleChargesTotalFee)}`,
                  text: "Title charges",
                },
                { value: "0", text: "Avg Title " },
              ]}
            />
            <StatsCard
              heading="Escrow"
              stats={[
                {
                  value: `${formatNumberWithoutDecimals(
                    data?.escrowChargesOrderCount
                  )}`,
                  text: "Escrow Units",
                },
                {
                  value: `$${formatNumber(data?.escrowChargesTotalFee)}`,
                  text: "Escrow charges",
                },
                { value: "0", text: "Avg Escrow" },
              ]}
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
        <LineChartComponent />
        <StackedBarChart />
        <div className="flex justify-between mt-5 w-full">
          <SlimBarChart />
          <LineChartComponent />
        </div>
      </div>
    </div>
  );
};

export default SnapShot;
