import React from "react";
import dollarIcon from "../../assets/icons/CurrencyDollar.svg";

interface OrderStatsProps {
  value: string;
  label: string;
  description: string;
}

const OrderStatsCard: React.FC<OrderStatsProps> = ({
  value,
  label,
  description,
}) => {
  return (
    <div className="shadow-(--cardShadow) rounded-2xl w-[24%] bg-white px-4 py-6 relative text-xs">
      <h1 className="text-(--secondary) text-2xl font-semibold">{value}</h1>
      <h3>{label}</h3>
      <p>{description}</p>
      <div className="bg-(--primary) p-3 absolute top-5 right-3 rounded-full flex justify-center items-center">
        <img src={dollarIcon} alt="Dollar Icon" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default OrderStatsCard;
