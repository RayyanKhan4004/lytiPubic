import React from "react";
import { useNavigate } from "react-router-dom";

const OrderActionsPopup = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute right-0 -mt-72 w-48 bg-white border rounded shadow-lg">
      <ul className="flex flex-col">
        <li
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => navigate("/orders/edit-order")}
        >
          Edit Order
        </li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer">Log Activity</li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer">
          Send Welcome Email
        </li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer">
          Send Password Reset
        </li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer">
          Change Password
        </li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer">History</li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer">
          Reassign Transactions
        </li>
      </ul>
    </div>
  );
};

export default OrderActionsPopup;
