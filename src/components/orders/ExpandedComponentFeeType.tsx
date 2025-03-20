// import DataTable from "react-data-table-component";
// import { formatNumberWithoutDecimals } from "../../utils/functions";

// const ExpandedComponentFeeType = ({ data }: { data: any }) => (
//   <div>
//     <DataTable
//       columns={[
//         {
//           name: "",
//           selector: (row: any) => "",
//           sortable: false,
//           maxWidth: "30px",
//         },
//         {
//           name: "",
//           selector: (row: any) => row.account,
//           sortable: false,
//           maxWidth: "140px",
//         },
//         {
//           name: "",
//           selector: (row: any) => row.totalAmount,
//           cell: (row: any) => formatNumberWithoutDecimals(row.totalAmount),
//           sortable: false,
//         },
//       ]}
//       data={data.accountSums}
//       noHeader
//       noDataComponent={
//         <div className="text-gray-500">No accounts available</div>
//       }
//       striped
//       highlightOnHover
//     />
//   </div>
// );

// export default ExpandedComponentFeeType;

import DataTable from "react-data-table-component";
import { formatNumberWithoutDecimals } from "../../utils/functions";

const ExpandedComponentFeeType = ({ data }: { data: any }) => (
  <div>
    <DataTable
      columns={[
        {
          name: "",
          selector: (row: any) => "",
          sortable: false,
          maxWidth: "30px",
        },
        {
          selector: (row: any) => row.account,
          sortable: false,
          maxWidth: "150px",
        },
        {
          selector: (row: any) => row.totalAmount,
          cell: (row: any) => formatNumberWithoutDecimals(row.totalAmount),
          sortable: false,
        },
      ]}
      data={data.accountSums}
      noHeader
      dense
      noDataComponent={
        <div className="text-gray-500">No accounts available</div>
      }
      highlightOnHover
      customStyles={{
        headRow: {
          style: {
            display: "none",
          },
        },
        rows: {
          style: {
            backgroundColor: "#f5f5f5",
          },
        },
        cells: {
          style: {
            padding: "8px",
          },
        },
      }}
    />
  </div>
);

export default ExpandedComponentFeeType;
