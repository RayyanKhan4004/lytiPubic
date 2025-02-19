import React, { useState } from "react";
import trend from "../../assets/icons/TrendUp.svg";
import arrow from "../../assets/icons/ArrowLongDark.svg";
import Breadcrumb from "../../components/common/BreadCrumb";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";
import LineChartComponent from "../../components/dashboard/snapShot/LineChartComponent";
import StackedBarChart from "../../components/dashboard/snapShot/StackedBarChart";
import SlimBarChart from "../../components/dashboard/snapShot/SlimBarChart";

const SnapShot = () => {
  const [selectedFilter, setSelectedFilter] = useState("Active");
  const [selectedYear, setSelectedYear] = useState("2023");
  const [isMonthly, setIsMonthly] = useState(true);

  const data = [
    { name: "JAN", 2023: 10, 2024: 20, Goals: 5 },
    { name: "FEB", 2023: 30, 2024: 50, Goals: 15 },
    { name: "MAR", 2023: 50, 2024: 60, Goals: 10 },
    { name: "APR", 2023: 70, 2024: 80, Goals: 40 },
    { name: "MAY", 2023: 50, 2024: 60, Goals: 70 },
    { name: "JUN", 2023: 40, 2024: 70, Goals: 60 },
    { name: "JUL", 2023: 60, 2024: 90, Goals: 80 },
    { name: "AUG", 2023: 80, 2024: 100, Goals: 70 },
    { name: "SEP", 2023: 90, 2024: 95, Goals: 85 },
    { name: "OCT", 2023: 100, 2024: 85, Goals: 90 },
    { name: "NOV", 2023: 95, 2024: 70, Goals: 95 },
    { name: "DEC", 2023: 90, 2024: 100, Goals: 98 },
  ];
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

      <div className="flex gap-3 w-full my-5">
        {["1", "2", "3"].map((i) => (
          <div
            key={i}
            className="shadow-(--cardShadow) rounded-xl w-[250px] px-3 py-5 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-(--secondary) font-semibold text-2xl">65</h2>
              <div className="flex gap-1.5 items-center text-xs font-normal ">
                Total MTD:65
                <img src={arrow} alt="" />
              </div>
            </div>

            <p className="flex gap-2 text-xs ">YTD order</p>
            <div className="flex items-center gap-4">
              <div className="flex gap-2 text-xs ">
                sellers <span>20</span>
              </div>
              <div className="flex gap-2 text-xs ">
                Buyers <span>20</span>
              </div>
            </div>
          </div>
        ))}
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
