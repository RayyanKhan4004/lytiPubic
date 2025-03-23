import DoubleCircularProgress from "./DoubleCircularProgressProps ";

type StatusType = "Not on pace" | "Goal achieved" | "On pace";

interface DataItem {
  label: string;
  value: number;
  total: number;
  target: number;
  maxTarget: number;
  status: StatusType;
}
const CircleStatsSection = () => {
  const agentData: DataItem[] = [
    {
      label: "Agent Appointments Set",
      value: 0,
      total: 0,
      target: 0,
      maxTarget: 0,
      status: "Not on pace",
    },
    {
      label: "Agent Appointments Met",
      value: 0,
      total: 0,
      target: 0,
      maxTarget: 0,
      status: "Not on pace",
    },
    {
      label: "Agent Verbal Commitments",
      value: 0,
      total: 0,
      target: 0,
      maxTarget: 0,
      status: "Not on pace",
    },
    {
      label: "Agent Open Orders",
      value: 0,
      total: 0,
      target: 0,
      maxTarget: 0,
      status: "Not on pace",
    },
    {
      label: "Agent Closed Orders",
      value: 0,
      total: 0,
      target: 0,
      maxTarget: 0,
      status: "Not on pace",
    },
  ];

  const lenderData: DataItem[] = [
    {
      label: "Lender Appointments Set",
      value: 0,
      total: 0,
      target: 0,
      maxTarget: 0,
      status: "Not on pace",
    },
    {
      label: "Lender Appointments Met",
      value: 0,
      total: 0,
      target: 0,
      maxTarget: 0,
      status: "Not on pace",
    },
    {
      label: "Lender Verbal Commitments",
      value: 0,
      total: 0,
      target: 0,
      maxTarget: 0,
      status: "Not on pace",
    },
    {
      label: "Lender Open Orders",
      value: 0,
      total: 0,
      target: 0,
      maxTarget: 0,
      status: "Not on pace",
    },
    {
      label: "Lender Closed Orders",
      value: 0,
      total: 0,
      target: 0,
      maxTarget: 0,
      status: "Not on pace",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center space-x-4  flex-col">
        <span className="text-sm mt-2">Conversations</span>

        <div className="w-32 h-32">
          <DoubleCircularProgress
            currentValue={0}
            currentTotal={0}
            currentTarget={0}
            targetTotal={0}
            status={
              "Not on pace" as "Goal achieved" | "Not on pace" | "On pace"
            }
            size={120}
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-6 mt-8">
        {agentData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-center text-sm mt-2">{item.label}</span>

            <DoubleCircularProgress
              currentValue={item.value}
              currentTotal={item.total}
              currentTarget={item.target}
              targetTotal={item.maxTarget}
              status={item.status}
              size={100}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-6 mt-8">
        {lenderData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <DoubleCircularProgress
              currentValue={item.value}
              currentTotal={item.total}
              currentTarget={item.target}
              targetTotal={item.maxTarget}
              status={item.status}
              size={100}
            />
            <span className="text-center text-sm mt-2">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleStatsSection;
