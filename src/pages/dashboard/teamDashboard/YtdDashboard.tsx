import YtdDashboardStatsCard from "../../../components/dashboard/teamDashboard/ytdDashboard/YtdDashboardStatsCard";

const YtdDashboard = () => {
  const statsData = [
    { value: 41, heading: "Live Listings" },
    { value: 99, heading: "Units Pending" },
    { value: "$82.4M", heading: "Volume Pending" },
    { value: "2.41%", heading: "AVG GCI %" },
    { value: "$82.4M", heading: "Avg Sales Price" },
    { value: 99, heading: "Avg Escrow Fee" },
    { value: "$82.4M", heading: "Avg Title Fee" },
    { value: "$82.4M", heading: "Avg Days To Close (DTC)" },
    { value: 99, heading: "Orders Closed" },
    { value: "$82.4M", heading: "Sales Closed Volume" },
    { value: "2.41%", heading: "Buyers Sold" },
    { value: 99, heading: "Units Pending" },
  ];

  return (
    <div>
      <div className="flex gap-3 items-center w-full flex-wrap font-poppins">
        {statsData.map((stat, index) => (
          <YtdDashboardStatsCard
            key={index}
            value={stat.value}
            heading={stat.heading}
          />
        ))}
      </div>
    </div>
  );
};

export default YtdDashboard;
