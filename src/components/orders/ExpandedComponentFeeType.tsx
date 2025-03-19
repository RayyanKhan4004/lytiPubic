import DataTable from "react-data-table-component";
import { formatNumberWithoutDecimals } from "../../utils/functions";

const ExpandedComponentFeeType = ({ data }: { data: any }) => (
  <div className="p-4 bg-gray-100 rounded">
    <h3 className="font-semibold text-gray-700 mb-2">Account Sums</h3>
    <DataTable
      columns={[
        {
          name: "Account",
          selector: (row: any) => row.account,
          sortable: false,
        },
        {
          name: "Total Amount",
          selector: (row: any) => row.totalAmount,
          cell: (row: any) => formatNumberWithoutDecimals(row.totalAmount),
          sortable: false,
        },
      ]}
      data={data.accountSums}
      noDataComponent={
        <div className="text-gray-500">No accounts available</div>
      }
      striped
      highlightOnHover
    />
  </div>
);

export default ExpandedComponentFeeType;
