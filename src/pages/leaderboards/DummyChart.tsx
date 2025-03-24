// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   BarChart,
//   Bar,
//   Cell,
//   ResponsiveContainer,
// } from "recharts";

// // Data for the chart
// const data = [
//   { month: "Jan", value: 30, barValue: 20 },
//   { month: "Feb", value: 40, barValue: 30 },
//   { month: "Mar", value: 50, barValue: 40 },
//   { month: "Apr", value: 60, barValue: 50 },
//   { month: "May", value: 70, barValue: 60 },
//   { month: "Jun", value: 75, barValue: 65 },
//   { month: "Jul", value: 80, barValue: 85 }, // Highlighted bar
//   { month: "Aug", value: 85, barValue: 75 },
//   { month: "Sep", value: 95, barValue: 85 },
//   { month: "Oct", value: 70, barValue: 90 },
//   { month: "Nov", value: 100, barValue: 95 },
//   { month: "Dec", value: 65, barValue: 90 },
// ];

// const CustomChart = () => {
//   return (
//     <ResponsiveContainer width="100%" height={350}>
//       <div style={{ position: "relative", width: "100%", height: "100%" }}>
//         {/* Background Bar Chart */}
//         <BarChart data={data} barSize={20} width={500} height={300}>
//           <Bar dataKey="barValue" radius={5}>
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={entry.month === "Jul" ? "#2C3746" : "#E5E8EC"} // Dark color for July
//               />
//             ))}
//           </Bar>
//         </BarChart>

//         {/* Line Chart on Top */}
//         <LineChart
//           data={data}
//           width={500}
//           height={300}
//           style={{ position: "absolute", top: 0, left: 0 }}
//         >
//           <CartesianGrid vertical={false} stroke="#E5E8EC" />
//           <XAxis dataKey="month" tick={{ fill: "#666" }} />
//           <YAxis tick={{ fill: "#666" }} domain={[10, 100]} />
//           <Tooltip />
//           <Line
//             type="monotone"
//             dataKey="value"
//             stroke="#2C3746"
//             strokeWidth={2}
//             dot={false}
//           />
//         </LineChart>
//       </div>
//     </ResponsiveContainer>
//   );
// };

// export default CustomChart;

import React from "react";
import {
  Bar,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "JAN", bar: 30, line: 25 },
  { name: "FEB", bar: 40, line: 35 },
  { name: "MAR", bar: 50, line: 45 },
  { name: "APR", bar: 60, line: 55 },
  { name: "MAY", bar: 70, line: 65 },
  { name: "JUN", bar: 75, line: 70 },
  { name: "JUL", bar: 80, line: 68 },
  { name: "AUG", bar: 90, line: 78 },
  { name: "SEP", bar: 95, line: 92 },
  { name: "OCT", bar: 98, line: 76 },
  { name: "NOV", bar: 100, line: 98 },
  { name: "DEC", bar: 99, line: 85 },
];

const DummyChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 0, left: -35, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#6c42a0" tick={{ fontSize: 10 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip />
        <Bar dataKey="bar" fill="#d1d5db" barSize={30} />
        <Bar dataKey="bar" fill="#1e293b" barSize={30} radius={[5, 5, 0, 0]} />
        <Line type="monotone" dataKey="line" stroke="#2d3748" strokeWidth={2} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default DummyChart;
