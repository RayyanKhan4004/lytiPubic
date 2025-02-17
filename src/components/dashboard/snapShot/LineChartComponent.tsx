import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomizableDropdown from "../../common/CustomizableDropdown";

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

const LineChartComponent: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("Devclan");
  return (
    <div className="w-[49%]  bg-white rounded-lg  shadow-(--cardShadow) font-Poppins flex flex-col justify-center items-center py-7 gap-4 ">
      <div className="px-4 w-full">
        <CustomizableDropdown
          height="h-[44px]"
          options={["Devclan", "Techify", "Lyti", "Title King"]}
          selected={selectedFilter}
          setSelected={(e) => setSelectedFilter(e)}
        />
      </div>

      <div className="w-full pr-10  ">
        <ResponsiveContainer width="100%" height={450}>
          <LineChart data={data}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis
              tickFormatter={(value) => `${value}`}
              domain={[10, 100]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              tick={{ fontSize: 12 }}
            />
            <Tooltip />
            <Legend
              iconType="circle"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                gap: 20,
              }}
              formatter={(value, entry) => (
                <span
                  style={{
                    color: "#777",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  {value}
                </span>
              )}
            />

            <Line
              type="monotone"
              dataKey="2023"
              stroke="#F4A79D"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="2024"
              stroke="#333333"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Goals"
              stroke="#66CC4B"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartComponent;
