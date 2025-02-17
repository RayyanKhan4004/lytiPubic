import { useState } from "react";
import Breadcrumb from "../../components/common/BreadCrumb";
import ProgressBar from "../../components/orders/ProgressBar";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";

const UnderwriterBoard = () => {
  const data: any[] = [
    {
      name: "WFG Title Insurance Co...",
      orders: 400,
      orderPercentage: "35.16%",
      fees: 400,
      feePercentage: "66%",
    },
    {
      name: "Westcor Land Title In ...",
      orders: 35,
      orderPercentage: "68.20%",
      fees: 35,
      feePercentage: "18.9%",
    },
    {
      name: "Work Share",
      orders: 280,
      orderPercentage: "75%",
      fees: 280,
      feePercentage: "22.07%",
    },
    {
      name: "PCT-Westcor",
      orders: 200,
      orderPercentage: "23.05%",
      fees: 200,
      feePercentage: "50%",
    },
  ];
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Orders", "Underwiter Board"]} />

      <div className="flex w-full">
        <div className="shadow-(--cardShadow) rounded-lg flex flex-col gap-4 min-w-[24%] w-auto  px-4 py-5 my-5">
          <h2 className="text-lg text-(--secondary) font-semibold">Title</h2>
          <div className="flex gap-3 ">
            <div className="text-(--secondary) font-semibold text-2xl flex flex-col gap-2.5">
              20.7k{" "}
              <span className="font-normal text-black text-xs">
                Title Units
              </span>
            </div>
            <div className="text-(--secondary) font-semibold text-2xl flex flex-col gap-2.5">
              20.7k{" "}
              <span className="font-normal text-black text-xs">
                Title Revenue
              </span>
            </div>
            <div className="text-(--secondary) font-semibold text-2xl flex flex-col gap-2.5">
              20.7k{" "}
              <span className="font-normal text-black text-xs">
                Avg Title Revenue
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between ">
        <div className="w-[49%] flex justify-between flex-col gap-7">
          <div className="font-sm shadow-(--cardShadow) p-3 rounded-xl w-full">
            <h1 className="text-lg font-semibold leading-[27px] px-2">
              Underwriter
            </h1>
            <table className="w-full">
              <thead className=" font-medium ">
                <th className="font-medium text-sm text-start p-2.5">
                  Underwriter
                </th>
                <th className="font-medium text-sm text-start">Orders</th>
                <th className="font-medium text-sm text-start">Orders%</th>
                <th className="font-medium text-sm text-start">Fees</th>
                <th className="font-medium text-sm text-start">Fees%</th>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className=" border-t ">
                    <td className="font-normal text-sm text-start p-3">
                      {item.name}
                    </td>
                    <td>
                      <ProgressBar maxValue={400} currentValue={item.orders} />
                    </td>
                    <td className="font-normal text-sm text-start">
                      {item.orderPercentage}
                    </td>
                    <td>
                      <ProgressBar maxValue={400} currentValue={item.fees} />
                    </td>
                    <td className="font-normal text-sm text-start">
                      {item.feePercentage}
                    </td>
                  </tr>
                ))}
                <tr className=" bg-gray-100 font-semibold text-sm">
                  <td className="p-2.5">Total</td>
                  <td className="p-2.5">900</td>
                  <td className="p-2.5">100%</td>
                  <td className="p-2.5">900</td>
                  <td className="p-2.5">100%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="font-sm shadow-(--cardShadow) p-3 rounded-xl w-full">
            <h1 className="text-lg font-semibold leading-[27px] px-2">
              Office
            </h1>
            <table className="w-full">
              <thead className=" font-medium ">
                <th className="font-medium text-sm text-start p-2.5">Office</th>
                <th className="font-medium text-sm text-start">Office</th>
                <th className="font-medium text-sm text-start">Order</th>
                <th className="font-medium text-sm text-start">Orders%</th>
                <th className="font-medium text-sm text-start">Fees%</th>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className=" border-t ">
                    <td className="font-normal text-sm text-start p-3">
                      {item.name}
                    </td>
                    <td>
                      <ProgressBar maxValue={400} currentValue={item.orders} />
                    </td>
                    <td className="font-normal text-sm text-start">
                      {item.orderPercentage}
                    </td>
                    <td>
                      <ProgressBar maxValue={400} currentValue={item.fees} />
                    </td>
                    <td className="font-normal text-sm text-start">
                      {item.feePercentage}
                    </td>
                  </tr>
                ))}
                <tr className=" bg-gray-100 font-semibold text-sm">
                  <td className="p-2.5">Total</td>
                  <td className="p-2.5">900</td>
                  <td className="p-2.5">100%</td>
                  <td className="p-2.5">900</td>
                  <td className="p-2.5">100%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="font-sm shadow-(--cardShadow) p-3 rounded-xl w-full">
            <h1 className="text-lg font-semibold leading-[27px] px-2">
              County
            </h1>
            <table className="w-full">
              <thead className=" font-medium ">
                <th className="font-medium text-sm text-start p-2.5">County</th>
                <th className="font-medium text-sm text-start">Orders</th>
                <th className="font-medium text-sm text-start">Orders%</th>
                <th className="font-medium text-sm text-start">Fees</th>
                <th className="font-medium text-sm text-start">Fees%</th>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className=" border-t ">
                    <td className="font-normal text-sm text-start p-3">
                      {item.name}
                    </td>
                    <td>
                      <ProgressBar maxValue={400} currentValue={item.orders} />
                    </td>
                    <td className="font-normal text-sm text-start">
                      {item.orderPercentage}
                    </td>
                    <td>
                      <ProgressBar maxValue={400} currentValue={item.fees} />
                    </td>
                    <td className="font-normal text-sm text-start">
                      {item.feePercentage}
                    </td>
                  </tr>
                ))}
                <tr className=" bg-gray-100 font-semibold text-sm">
                  <td className="p-2.5">Total</td>
                  <td className="p-2.5">900</td>
                  <td className="p-2.5">100%</td>
                  <td className="p-2.5">900</td>
                  <td className="p-2.5">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="font-sm shadow-(--cardShadow) p-3 rounded-xl w-[49%] h-fit">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold leading-[27px] px-2">
              Orders
            </h1>
            <CustomizableDropdown
              height="h-[44px]"
              options={["All", "Active", "InActive"]}
              selected={selectedFilter}
              setSelected={(e) => setSelectedFilter(e)}
              width="w-[180px]"
            />
          </div>
          <table className="w-full">
            <thead className=" font-medium ">
              <th className="font-medium text-sm text-start p-2.5">
                Closed Date
              </th>
              <th className="font-medium text-sm text-start">Orders</th>
              <th className="font-medium text-sm text-start">Status</th>
              <th className="font-medium text-sm text-start">
                Property Address
              </th>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className=" border-t ">
                  <td className="font-normal text-sm text-start p-3">
                    {item.name}
                  </td>
                  <td className="font-normal text-sm text-start">
                    {item.orderPercentage}
                  </td>
                  <td className="font-normal text-sm text-start">
                    {item.orderPercentage}
                  </td>{" "}
                  <td className="font-normal text-sm text-start">
                    {item.orderPercentage}
                  </td>
                </tr>
              ))}
              <tr className=" bg-gray-100 font-semibold text-sm">
                <td className="p-2.5">Total</td>
                <td className="p-2.5">900</td>
                <td className="p-2.5">100%</td>
                <td className="p-2.5">900</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UnderwriterBoard;
