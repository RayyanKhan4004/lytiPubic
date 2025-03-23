import AdminDashboardStatsCard from "../../../components/dashboard/teamDashboard/AdminDashboardStatsCard";
import equal from "../../../assets/icons/Equals.svg";
import arrowUpDown from "../../../assets/icons/ArrowsDownUp.svg";
import { useGetAdminDashboardStatsQuery } from "../../../lib/rtkQuery/dashboardApi";
import DataTable, { TableColumn } from "react-data-table-component";
import CardLayout from "../../../components/layouts/CardLayout";
import MainTitle from "../../../components/ui/typography/MainTitle";
import TablesSkeleton from "../../../components/ui/skeleton/TablesSkeleton";
import {
  formatNumber,
  formatNumberWithoutDecimals,
} from "../../../utils/functions";

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
  const { data: adminData, isLoading } = useGetAdminDashboardStatsQuery();
  const titleInformationColumns: TableColumn<any>[] = [
    {
      name: "",
      selector: (row: any) => row.category,
      cell: (row: any) => (
        <div className="rowStyle font-semibold w-[60px]">{row.category}</div>
      ),
      maxWidth: "60px",
    },
    {
      name: "Total",
      selector: (row: any) => row.total,
      cell: (row: any) => <div className="rowStyle">{row.total}</div>,
      maxWidth: "130px",
    },
    {
      name: "Pending",
      selector: (row: any) => row.pending,
      cell: (row: any) => <div className="rowStyle">{row.pending}</div>,
      maxWidth: "130px",
    },
    {
      name: "Closed",
      selector: (row: any) => row.closed,
      cell: (row: any) => <div className="rowStyle">{row.closed}</div>,
      maxWidth: "200px",
    },
  ];

  const titleInformationData = [
    {
      category: "Units",
      total:
        formatNumberWithoutDecimals(adminData?.title.totalTitleOrder) ?? "0",
      pending:
        formatNumberWithoutDecimals(adminData?.title.titleOpenOrder) ?? "0",
      closed:
        formatNumberWithoutDecimals(adminData?.title.titleClosedOrder) ?? "0",
    },
    {
      category: "Volume",
      total: `$${
        formatNumberWithoutDecimals(adminData?.title.salePriceTitleOrder) ?? "0"
      }`,
      pending: `$${
        formatNumberWithoutDecimals(adminData?.title.salePriceTitleOrderOpen) ??
        "0"
      }`,
      closed: `$${
        formatNumberWithoutDecimals(
          adminData?.title.salePriceTitleOrderClosed
        ) ?? "0"
      }`,
    },
    {
      category: "Revenue",
      total: `$${formatNumber(adminData?.title.sumOfFeesTitleOrder) ?? "0"}`,
      pending: `$${
        formatNumberWithoutDecimals(adminData?.title.sumOfFeesTitleOrderOpen) ??
        "0"
      }`,
      closed: `$${
        formatNumber(adminData?.title.sumOfFeesTitleOrderClosed) ?? "0"
      }`,
    },
  ];
  const escrowInformationColumns: TableColumn<any>[] = [
    {
      name: "",
      selector: (row: any) => row.category,
      cell: (row: any) => (
        <div className="rowStyle font-semibold w-[60px]">{row.category}</div>
      ),
      maxWidth: "60px",
    },
    {
      name: "Total",
      selector: (row: any) => row.total,
      cell: (row: any) => <div className="rowStyle">{row.total}</div>,
      maxWidth: "130px",
    },
    {
      name: "Pending",
      selector: (row: any) => row.pending,
      cell: (row: any) => <div className="rowStyle">{row.pending}</div>,
      maxWidth: "130px",
    },
    {
      name: "Closed",
      selector: (row: any) => row.closed,
      cell: (row: any) => <div className="rowStyle">{row.closed}</div>,
      maxWidth: "200px",
    },
  ];
  const escrowInformationData = [
    {
      category: "Units",
      total:
        formatNumberWithoutDecimals(adminData?.escrow.totalEscrowOrder) ?? "0",
      pending:
        formatNumberWithoutDecimals(adminData?.escrow.escrowOpenOrder) ?? "0",
      closed:
        formatNumberWithoutDecimals(adminData?.escrow.escrowClosedOrder) ?? "0",
    },
    {
      category: "Volume",
      total: `$${
        formatNumberWithoutDecimals(adminData?.escrow.salePriceEscrowOrder) ??
        "0"
      }`,
      pending: `$${
        formatNumberWithoutDecimals(
          adminData?.escrow.salePriceEscrowOrderOpen
        ) ?? "0"
      }`,
      closed: `$${
        formatNumberWithoutDecimals(
          adminData?.escrow.salePriceEscrowOrderClosed
        ) ?? "0"
      }`,
    },
    {
      category: "Revenue",
      total: `$${formatNumber(adminData?.escrow.sumOfFeesEscrowOrder) ?? "0"}`,
      pending: `$${
        formatNumberWithoutDecimals(
          adminData?.escrow.sumOfFeesEscrowOrderOpen
        ) ?? "0"
      }`,
      closed: `$${
        formatNumber(adminData?.escrow.sumOfFeesEscrowOrderClosed) ?? "0"
      }`,
    },
  ];

  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-between w-full gap-3 ">
        <CardLayout className="w-[48%] shadow-(--cardShadow) rounded-xl py-4">
          <MainTitle title="Title Information" />

          <div className="w-full overflow-y-auto max-h-[300px]">
            {isLoading ? (
              <TablesSkeleton
                columnCount={titleInformationColumns.length}
                rowCount={3}
              />
            ) : (
              <div className="w-full">
                <DataTable
                  columns={titleInformationColumns}
                  data={titleInformationData}
                  highlightOnHover
                  striped
                  className="head-row table-row"
                  noDataComponent={
                    <div
                      className="w-full text-center py-6 px-6 text-gray-500 bg-gray-100 rounded"
                      style={{ minWidth: "100%", width: "100%" }}
                    >
                      No data found
                    </div>
                  }
                  fixedHeader
                  fixedHeaderScrollHeight="300px"
                />
              </div>
            )}
          </div>
        </CardLayout>

        <CardLayout className="w-[48%] shadow-(--cardShadow) rounded-xl py-4">
          <MainTitle title="Escrow Information" />

          <div className="w-full overflow-y-auto max-h-[300px]">
            {isLoading ? (
              <TablesSkeleton
                columnCount={escrowInformationColumns.length}
                rowCount={3}
              />
            ) : (
              <div className="w-full">
                <DataTable
                  columns={escrowInformationColumns}
                  data={escrowInformationData}
                  highlightOnHover
                  striped
                  className="head-row table-row"
                  noDataComponent={
                    <div
                      className="w-full text-center py-6 px-6 text-gray-500 bg-gray-100 rounded"
                      style={{ minWidth: "100%", width: "100%" }}
                    >
                      No data found
                    </div>
                  }
                  fixedHeader
                  fixedHeaderScrollHeight="300px"
                />
              </div>
            )}
          </div>
        </CardLayout>
      </div>

      <div className="flex flex-col gap-3 p-4 w-full shadow-(--cardShadow) rounded-xl">
        <h1 className="font-semibold text-[18px] text-(--primary)">
          Fee Passthroughs
        </h1>
        <div className="w-full flex gap-3 items-center justify-between">
          <AdminDashboardStatsCard value="$72356431" label="Closed GCI" />
          <AdminDashboardStatsCard value="$72356431" label="Net" />
          <AdminDashboardStatsCard value="$72356431" label="Expense" />
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
                    Closed Orders <img src={arrowUpDown} alt="Sort" />
                  </div>
                </th>
                <th className="text-start text-xs font-normal">
                  <div className="flex gap-2 items-center">
                    Revenue <img src={arrowUpDown} alt="Sort" />
                  </div>
                </th>
                <th className="text-start text-xs font-normal">
                  <div className="flex gap-2 items-center">
                    Net Revenue <img src={arrowUpDown} alt="Sort" />
                  </div>
                </th>
                <th className="text-start text-xs font-normal">
                  <div className="flex gap-2 items-center">
                    Closed Title <img src={arrowUpDown} alt="Sort" />
                  </div>
                </th>
                <th className="text-start text-xs font-normal">
                  <div className="flex gap-2 items-center">
                    Closed Escrows <img src={arrowUpDown} alt="Sort" />
                  </div>
                </th>
                <th className="text-start text-xs font-normal">
                  <div className="flex gap-2 items-center">
                    Open Orders <img src={arrowUpDown} alt="Sort" />
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
