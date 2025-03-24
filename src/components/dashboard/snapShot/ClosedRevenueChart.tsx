import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useGetGraphDataQuery } from "../../../lib/rtkQuery/dashboardApi";
import CardLayout from "../../layouts/CardLayout";
import CustomizableSkeleton from "../../ui/skeleton/CustomizableSkeleton";
import { graphOption, graphOptions } from "../../../utils/options";
import SelectField from "../../inputs/SelectField";
import { useForm } from "react-hook-form";
import { graphType } from "../../../utils/types";

const ClosedRevenueChart: React.FC = () => {
  const {
    formState: { errors },
    reset,
    watch,
    setValue,
    control,
  } = useForm<graphType>({
    defaultValues: { filter: "openOrder" },
  });
  const selectedFilter = watch("filter") || "";

  useEffect(() => {
    setValue("filter", "closedRevenue");
  }, [setValue]);
  const {
    data: graphData,
    error,
    isLoading,
  } = useGetGraphDataQuery(selectedFilter);

  return (
    <CardLayout className="w-[49%]">
      <SelectField
        name="filter"
        control={control}
        options={graphOption}
        placeholder="Filter"
        error={errors.filter?.message}
        required={false}
        height="h-[38px]"
      />

      {isLoading ? (
        <CustomizableSkeleton height={430} />
      ) : (
        <ResponsiveContainer width="100%" height={450}>
          <LineChart data={graphData} margin={{ top: 20, right: 0, bottom: 5 }}>
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

export default ClosedRevenueChart;
