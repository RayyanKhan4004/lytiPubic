import YtdDashboardStatsCard from "../../../components/dashboard/teamDashboard/ytdDashboard/YtdDashboardStatsCard";
import { useGetYtdStatsQuery } from "../../../lib/rtkQuery/dashboardApi";
import {
  formatNumber,
  formatNumberWithoutDecimals,
} from "../../../utils/functions";

const YtdDashboard = () => {
  const { data } = useGetYtdStatsQuery();

  const formatHeading = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <div>
      <div className="flex gap-2 items-center w-full flex-wrap font-poppins">
        {data &&
          Object.entries(data).map(([key, value], index) => {
            let formattedValue;

            if (typeof value === "string" || typeof value === "number") {
              const numValue =
                typeof value === "string" ? parseFloat(value) : value;

              if (!isNaN(numValue)) {
                formattedValue = Number.isInteger(numValue)
                  ? formatNumberWithoutDecimals(numValue)
                  : formatNumber(numValue);
              } else {
                formattedValue = "Invalid Number";
              }
            } else {
              formattedValue = "N/A";
            }

            return (
              <YtdDashboardStatsCard
                key={index}
                value={formattedValue}
                heading={formatHeading(key)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default YtdDashboard;
