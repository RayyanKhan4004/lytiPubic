// import YtdDashboardStatsCard from "../../../components/dashboard/teamDashboard/ytdDashboard/YtdDashboardStatsCard";
// import CustomizableSkeleton from "../../../components/ui/skeleton/CustomizableSkeleton";
// import { useGetYtdStatsQuery } from "../../../lib/rtkQuery/dashboardApi";
// import {
//   formatNumber,
//   formatNumberWithoutDecimals,
// } from "../../../utils/functions";

// const YtdDashboard = () => {
//   const { data, isLoading } = useGetYtdStatsQuery();

//   const formatHeading = (key: string) => {
//     return key
//       .replace(/([A-Z])/g, " $1")
//       .replace(/^./, (str) => str.toUpperCase());
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <div className="flex justify-between gap-2 flex-wrap">
//           <CustomizableSkeleton width="24%" />
//           <CustomizableSkeleton width="24%" />
//           <CustomizableSkeleton width="24%" />
//           <CustomizableSkeleton width="24%" />
//           <CustomizableSkeleton width="24%" />
//           <CustomizableSkeleton width="24%" />
//           <CustomizableSkeleton width="24%" />
//           <CustomizableSkeleton width="24%" />
//         </div>
//       ) : (
//         <div className="flex gap-2 items-center w-full flex-wrap font-poppins">
//           <YtdDashboardStatsCard
//             heading={formatHeading("titleOrdersCount")}
//             value={formatNumberWithoutDecimals(data.titleOrdersCount)}
//           />
//           <YtdDashboardStatsCard
//             heading={formatHeading("openTitleOnlyOrdersCount")}
//             value={formatNumberWithoutDecimals(data.openTitleOnlyOrdersCount)}
//           />
//           <YtdDashboardStatsCard
//             heading={formatHeading("openTitleOnlySalePriceSum")}
//             value={`$${formatNumber(Number(data.openTitleOnlySalePriceSum))}`}
//           />
//           <YtdDashboardStatsCard
//             heading={formatHeading("openEscrowOnlySalePriceSum")}
//             value={`$${formatNumber(Number(data.openEscrowOnlySalePriceSum))}`}
//           />
//           <YtdDashboardStatsCard
//             heading={formatHeading("openTitleOnlyRefiSalePriceSum")}
//             value={`$${formatNumber(
//               Number(data.openTitleOnlyRefiSalePriceSum)
//             )}`}
//           />
//           <YtdDashboardStatsCard
//             heading={formatHeading("openEscrowOnlyRefiSalePriceSum")}
//             value={`$${formatNumber(
//               Number(data.openEscrowOnlyRefiSalePriceSum)
//             )}`}
//           />
//           <YtdDashboardStatsCard
//             heading={formatHeading("avgTitleChargesFeeAmount")}
//             value={`$${formatNumber(Number(data.avgTitleChargesFeeAmount))}`}
//           />
//           <YtdDashboardStatsCard
//             heading={formatHeading("avgEscrowChargesFeeAmount")}
//             value={`$${formatNumber(Number(data.avgEscrowChargesFeeAmount))}`}
//           />
//           <YtdDashboardStatsCard
//             heading={formatHeading("avgSalePrice")}
//             value={`$${formatNumber(Number(data.avgSalePrice))}`}
//           />
//           <YtdDashboardStatsCard
//             heading={formatHeading("avgDaysToClose")}
//             value={formatNumberWithoutDecimals(data.avgDaysToClose)}
//           />
//           <YtdDashboardStatsCard
//             heading={formatHeading("avgCancellationRate")}
//             value={formatNumberWithoutDecimals(data.avgCancellationRate)}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default YtdDashboard;

import YtdDashboardStatsCard from "../../../components/dashboard/teamDashboard/ytdDashboard/YtdDashboardStatsCard";
import CustomizableSkeleton from "../../../components/ui/skeleton/CustomizableSkeleton";
import { useGetYtdStatsQuery } from "../../../lib/rtkQuery/dashboardApi";
import {
  formatNumber,
  formatNumberWithoutDecimals,
} from "../../../utils/functions";

const YtdDashboard = () => {
  const { data, isLoading } = useGetYtdStatsQuery();

  const formatHeading = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  //   {
  //     "titleOrdersCount": 599,
  //     "openTitleOnlyOrdersCount": 124,
  //     "openEscrowOnlyOrdersCount": 27,
  //     "openTitleOnlySalePriceSum": "83075842",
  //     "openEscrowOnlySalePriceSum": "4895388",
  //     "openTitleOnlyRefiSalePriceSum": "6050000",
  //     "openEscrowOnlyRefiSalePriceSum": "0",
  //     "avgTitleChargesFeeAmount": "440.1397641587776117",
  //     "avgEscrowChargesFeeAmount": "408.5688567990373045",
  //     "avgSalePrice": "616372.377858613590",
  //     "avgDaysToClose": 0,
  //     "avgCancellationRate": 0
  // }
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-between gap-2 flex-wrap">
          <CustomizableSkeleton width="24%" />
          <CustomizableSkeleton width="24%" />
          <CustomizableSkeleton width="24%" />
          <CustomizableSkeleton width="24%" />
          <CustomizableSkeleton width="24%" />
          <CustomizableSkeleton width="24%" />
          <CustomizableSkeleton width="24%" />
          <CustomizableSkeleton width="24%" />
        </div>
      ) : (
        <div className="flex gap-2 items-center w-full flex-wrap font-poppins">
          <YtdDashboardStatsCard
            heading={"Open Order"}
            value={formatNumberWithoutDecimals(data.titleOrdersCount)}
          />
          <YtdDashboardStatsCard
            heading={"Title Open Orders"}
            value={formatNumberWithoutDecimals(data.openTitleOnlyOrdersCount)}
          />

          <YtdDashboardStatsCard
            heading={"Escrow Open Orders"}
            value={`$${formatNumber(Number(data.openEscrowOnlyOrdersCount))}`}
          />

          <YtdDashboardStatsCard
            heading={"Title Sales Volume Open"}
            value={`$${formatNumber(Number(data.openTitleOnlySalePriceSum))}`}
          />
          <YtdDashboardStatsCard
            heading={"Escrow Sales Volume Open"}
            value={`$${formatNumber(Number(data.openEscrowOnlySalePriceSum))}`}
          />
          <YtdDashboardStatsCard
            heading={"Refi Title Volume Open"}
            value={`$${formatNumber(
              Number(data.openTitleOnlyRefiSalePriceSum)
            )}`}
          />
          <YtdDashboardStatsCard
            heading={"Refi Escrow Volume Open"}
            value={`$${formatNumber(
              Number(data.openEscrowOnlyRefiSalePriceSum)
            )}`}
          />
          <YtdDashboardStatsCard
            heading={"Avg Title Revenue"}
            value={`$${formatNumber(Number(data.avgTitleChargesFeeAmount))}`}
          />
          <YtdDashboardStatsCard
            heading={"Avg. Escrow Revenue"}
            value={`$${formatNumber(Number(data.avgEscrowChargesFeeAmount))}`}
          />
          <YtdDashboardStatsCard
            heading={"Avg Sales Price"}
            value={`${formatNumberWithoutDecimals(data.avgSalePrice)}%`}
          />
          <YtdDashboardStatsCard
            heading={"Avg Days Closed"}
            value={`${formatNumberWithoutDecimals(data.avgDaysToClose)}%`}
          />
          <YtdDashboardStatsCard
            heading={"Avg Cancellation Rate"}
            value={`${formatNumberWithoutDecimals(data.avgCancellationRate)}%`}
          />
        </div>
      )}
    </div>
  );
};

export default YtdDashboard;
