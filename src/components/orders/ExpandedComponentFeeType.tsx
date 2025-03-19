import DataTable from "react-data-table-component";
import { formatNumberWithoutDecimals } from "../../utils/functions";

const ExpandedComponentFeeType = ({ data }: { data: any }) => (
  <div>
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
