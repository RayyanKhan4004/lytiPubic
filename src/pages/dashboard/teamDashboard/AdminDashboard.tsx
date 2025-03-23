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
      name: "Open",
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
      name: "Open",
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

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthlyBreakdownColumn: TableColumn<any>[] = [
    {
      name: "Month",
      selector: (row: any) => row.month,
      cell: (row: any) => <div>{monthNames[row.month - 1]}</div>,
      maxWidth: "130px",
    },
    {
      name: "Closed Orders",
      selector: (row: any) => row["Closed Order"],
      cell: (row: any) => <div>{row["Closed Order"]}</div>,
      sortable: true,
      maxWidth: "150px",
    },
    {
      name: "Revenue",
      selector: (row: any) => row.Revenue,
      cell: (row: any) => <div>${row.Revenue}</div>,
      sortable: true,
      maxWidth: "200px",
    },
    {
      name: "Net Revenue",
      selector: (row: any) => row["Net Revenue"],
      cell: (row: any) => <div>${row["Net Revenue"]}</div>,
      sortable: true,
      maxWidth: "200px",
    },
    {
      name: "Closed Titles",
      selector: (row: any) => row["Closed Title"],
      cell: (row: any) => <div>{row["Closed Title"]}</div>,
      sortable: true,
      maxWidth: "150px",
    },
    {
      name: "Closed Escrows",
      selector: (row: any) => row["Closed Escrow"],
      cell: (row: any) => <div>{row["Closed Escrow"]}</div>,
      sortable: true,
      maxWidth: "150px",
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
          <AdminDashboardStatsCard value="$0" label="Closed GCI" />
          <AdminDashboardStatsCard value="$0" label="Net" />
          <AdminDashboardStatsCard value="$0" label="Expense" />
          <img src={equal} alt="" />
          <AdminDashboardStatsCard
            value="$0"
            label="Closed GCI"
            darkMode={true}
          />
        </div>
      </div>

      <CardLayout className="py-5">
        <MainTitle title="Title & Escrow Avgs" />
        <div className="w-full flex gap-3 items-center justify-between">
          <AdminDashboardStatsCard
            value={`$${
              formatNumber(
                adminData?.titleAndEscrowAvg?.avgSalePriceTitleOrder
              ) ?? "0"
            }`}
            label="Title Avg Sales Price"
          />
          <AdminDashboardStatsCard
            value={`$${
              formatNumber(
                adminData?.titleAndEscrowAvg?.avgFeeAmountTitleOrder
              ) ?? "0"
            }`}
            label="Title Avg Revenue"
          />
          <AdminDashboardStatsCard
            value={`$${
              formatNumber(
                adminData?.titleAndEscrowAvg?.avgSalePriceEscrowOrder
              ) ?? "0"
            }`}
            label="Escrow Avg Sales Price"
          />
          <AdminDashboardStatsCard
            value={`$${
              formatNumber(
                adminData?.titleAndEscrowAvg?.avgFeeAmountEscrowOrder
              ) ?? "0"
            }`}
            label="Escrow Avg Revenue"
          />
        </div>
      </CardLayout>

      <CardLayout>
        <MainTitle title="Monthly Breakdown" />
        {isLoading ? (
          <TablesSkeleton
            columnCount={monthlyBreakdownColumn.length}
            rowCount={10}
          />
        ) : (
          <DataTable
            columns={monthlyBreakdownColumn}
            data={adminData?.monthlyBreakDown}
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
          />
        )}
      </CardLayout>
    </div>
  );
};

export default AdminDashboard;
