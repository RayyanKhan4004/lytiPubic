import react, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomizableDropdown from "../../common/CustomizableDropdown";

const data = [
  { name: "JAN", 2023: 30, 2024: 50 },
  { name: "FEB", 2023: 40, 2024: 90 },
  { name: "MAR", 2023: 25, 2024: 70 },
  { name: "APR", 2023: 20, 2024: 95 },
  { name: "MAY", 2023: 50, 2024: 80 },
  { name: "JUN", 2023: 30, 2024: 75 },
  { name: "JUL", 2023: 25, 2024: 60 },
  { name: "AUG", 2023: 15, 2024: 50 },
  { name: "SEP", 2023: 40, 2024: 90 },
  { name: "OCT", 2023: 20, 2024: 55 },
  { name: "NOV", 2023: 35, 2024: 65 },
  { name: "DEC", 2023: 50, 2024: 85 },
];

const SlimBarChart = () => {
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
          <BarChart data={data}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />

            <YAxis
              tickFormatter={(value) => `${value}`}
              domain={[10, 100]}
              ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              tick={{ fontSize: 12 }}
            />

            <Tooltip />

            <Legend
              iconType="circle"
              wrapperStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
              formatter={(value, entry) => (
                <span
                  style={{
                    color: entry.color,
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  {value}
                </span>
              )}
            />

            <Bar
              dataKey="2023"
              fill="#2D3F50"
              radius={[12, 12, 0, 0]}
              barSize={10}
            />
            <Bar
              dataKey="2024"
              fill="#333333"
              radius={[12, 12, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SlimBarChart;
