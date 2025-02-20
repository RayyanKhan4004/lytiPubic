import React from "react";
import Breadcrumb from "../../components/common/BreadCrumb";

const CreateOrder = () => {
  return (
    <div className="w-full px-4 my-8 font-(--poppin)">
      <Breadcrumb items={["Orders", "Create New Order"]} />

      <div>
        <h1 className="text-[18px] font-semibold text-(--primary)">
          Create New Order
        </h1>
      </div>
    </div>
  );
};

export default CreateOrder;
