import React from "react";
import AdminDashboardStatsCard from "../../../components/dashboard/teamDashboard/AdminDashboardStatsCard";
import equal from "../../../assets/icons/Equals.svg";
import arrowUpDown from "../../../assets/icons/ArrowsDownUp.svg";

const data = [
  {
    month: "January",
    closedUnits: 12,
    closedGCI: "$15,000",
    closedNetGCI: "$12,000",
    closedListings: 5,
    closedBuyers: 7,
    pendingUnits: 3,
    pendingVolume: "$8,000",
  },
  {
    month: "Ferbruary",
    closedUnits: 12,
    closedGCI: "$15,000",
    closedNetGCI: "$12,000",
    closedListings: 5,
    closedBuyers: 7,
    pendingUnits: 3,
    pendingVolume: "$8,000",
  },
];
const AdminDashboard = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-between w-full gap-3 ">
        <div className=" w-[48%] shadow-(--cardShadow) rounded-xl py-4">
          <h2 className="text-lg font-semibold mb-2 text-(--primary) px-4">
            Title Information
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-(--smoke)">
                  <th className="text-left p-2 font-medium"></th>
                  <th className="text-left p-2 font-medium">Total</th>
                  <th className="text-left p-2 font-medium">Pending</th>
                  <th className="text-left p-2 font-medium">Closed</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-(--smoke)">
                  <td className="px-4 font-semibold">Units</td>
                  <td className="p-2">66</td>
                  <td className="p-2">42</td>
                  <td className="p-2">24</td>
                </tr>
                <tr className="border-b border-(--smoke)">
                  <td className="px-4 font-semibold">Volume</td>
                  <td className="p-2">$105.55</td>
                  <td className="p-2">$948.55</td>
                  <td className="p-2">$601.13</td>
                </tr>
                <tr>
                  <td className="px-4 font-semibold">Revenue</td>
                  <td className="p-2">$202.87</td>
                  <td className="p-2">$446.61</td>
                  <td className="p-2">$779.58</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" w-[48%] shadow-(--cardShadow) rounded-xl py-4">
          <h2 className="text-lg font-semibold mb-2 text-(--primary) px-4">
            Escrow Information
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-(--smoke)">
                  <th className="text-left p-2 font-medium"></th>
                  <th className="text-left p-2 font-medium">Total</th>
                  <th className="text-left p-2 font-medium">Pending</th>
                  <th className="text-left p-2 font-medium">Closed</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-(--smoke)">
                  <td className="px-4 font-semibold">Units</td>
                  <td className="p-2">66</td>
                  <td className="p-2">42</td>
                  <td className="p-2">24</td>
                </tr>
                <tr className="border-b border-(--smoke)">
                  <td className="px-4 font-semibold">Volume</td>
                  <td className="p-2">$105.55</td>
                  <td className="p-2">$948.55</td>
                  <td className="p-2">$601.13</td>
                </tr>
                <tr>
                  <td className="px-4 font-semibold">Revenue</td>
                  <td className="p-2">$202.87</td>
                  <td className="p-2">$446.61</td>
                  <td className="p-2">$779.58</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-4 w-full shadow-(--cardShadow) rounded-xl">
        <h1 className="font-semibold text-[18px] text-(--primary)">
          Fee Passthroughs
        </h1>
        <div className="w-full flex gap-3 items-center justify-between">
          <AdminDashboardStatsCard value="$72356431" label="Closed GCI" />
          <AdminDashboardStatsCard value="$72356431" label="Closed GCI" />
          <AdminDashboardStatsCard value="$72356431" label="Closed GCI" />
          <img src={equal} alt="" />
          <AdminDashboardStatsCard
            value="$72356431"
            label="Closed GCI"
            darkMode={true}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 p-4 w-full shadow-(--cardShadow) rounded-xl">
        <h1 className="font-semibold text-[18px] text-(--primary)">
          Title & Escrow Avgs
        </h1>
        <div className="w-full flex gap-3 items-center justify-between">
          <AdminDashboardStatsCard
            value="$72356431"
            label="Title Avg Sales Price"
          />
          <AdminDashboardStatsCard
            value="$72356431"
            label="Title Avg Revenue"
          />
          <AdminDashboardStatsCard
            value="$72356431"
            label="Escrow Avg Sales Price"
          />
          <AdminDashboardStatsCard
            value="$72356431"
            label="Escrow Avg Revenue"
          />
        </div>
      </div>

      <div className="shadow-(--cardShadow) w-full rounded-xl p-4">
        <div className="border border-(--inputBorder) overflow-hidden rounded-xl w-full ">
          <table className="w-full">
            <thead>
              <tr className="border-b-[1px] border-[#F4EFE9] bg-(--smoke)">
                <th className="text-start text-xs font-normal p-2">Month</th>
                <th className="text-start text-xs font-normal">
                  <div className="flex gap-2 items-center">
                    Closed Units <img src={arrowUpDown} alt="Sort" />
                  </div>
                </th>
                <th className="text-start text-xs font-normal">
                  <div className="flex gap-2 items-center">
                    Closed GCI <img src={arrowUpDown} alt="Sort" />
                  </div>
                </th>
                <th className="text-start text-xs font-normal">
                  <div className="flex gap-2 items-center">
                    Closed Net GCI <img src={arrowUpDown} alt="Sort" />
                  </div>
                </th>
                <th className="text-start text-xs font-normal">
                  <div className="flex gap-2 items-center">
                    Closed Listings <img src={arrowUpDown} alt="Sort" />
                  </div>
                </th>
                <th className="text-start text-xs font-normal">
                  <div className="flex gap-2 items-center">
                    Closed Buyers <img src={arrowUpDown} alt="Sort" />
                  </div>
                </th>
                <th className="text-start text-xs font-normal">
                  <div className="flex gap-2 items-center">
                    Pending Units <img src={arrowUpDown} alt="Sort" />
                  </div>
                </th>
                <th className="text-start text-xs font-normal">
                  <div className="flex gap-2 items-center">
                    Pending Volume <img src={arrowUpDown} alt="Sort" />
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b-[1px] border-[#F4EFE9]">
                  <td className="text-start text-xs p-2">{row.month}</td>
                  <td className="text-start text-xs">{row.closedUnits}</td>
                  <td className="text-start text-xs">{row.closedGCI}</td>
                  <td className="text-start text-xs">{row.closedNetGCI}</td>
                  <td className="text-start text-xs">{row.closedListings}</td>
                  <td className="text-start text-xs">{row.closedBuyers}</td>
                  <td className="text-start text-xs">{row.pendingUnits}</td>
                  <td className="text-start text-xs">{row.pendingVolume}</td>
                </tr>
              ))}
              <tr className="border-b-[1px] border-[#F4EFE9] bg-(--secondary) text-white">
                <td className="text-start text-xs p-2">Total</td>
                <td className="text-start text-xs p-2">50</td>
                <td className="text-start text-xs p-2">$100,000</td>
                <td className="text-start text-xs p-2">$85,000</td>
                <td className="text-start text-xs p-2">25</td>
                <td className="text-start text-xs p-2">30</td>
                <td className="text-start text-xs p-2">10</td>
                <td className="text-start text-xs p-2">$40,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
