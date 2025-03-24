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
import { useGetGraphDataQuery } from "../../../lib/rtkQuery/dashboardApi";
import CardLayout from "../../layouts/CardLayout";
import CustomizableSkeleton from "../../ui/skeleton/CustomizableSkeleton";

const OpenLineChart: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("Open");
  const {
    data: graphData,
    error,
    isLoading,
  } = useGetGraphDataQuery(selectedFilter);

  return (
    <CardLayout className="w-[49%]">
      <CustomizableDropdown
        height="h-[44px]"
        options={["Open", "Closed"]}
        selected={selectedFilter}
        setSelected={setSelectedFilter}
      />

      {isLoading ? (
        <CustomizableSkeleton height={430} />
      ) : (
        <ResponsiveContainer width="100%" height={450}>
          <LineChart
            data={graphData?.data}
            margin={{ top: 20, right: 0, left: -42, bottom: 5 }}
          >
            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
            <YAxis
              tickFormatter={(value) => `${value}`}
              domain={[0, "auto"]}
              tick={{ fontSize: 10 }}
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
              formatter={(value) => (
                <span
                  style={{ color: "#777", fontWeight: "500", fontSize: "14px" }}
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
              dataKey="2025"
              stroke="#FF9900"
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
      )}
    </CardLayout>
  );
};

export default OpenLineChart;
