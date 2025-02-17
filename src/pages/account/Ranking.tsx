import { DummyData } from "../../utils/DummyData";
import React, { useState } from "react";
import arrowUpDown from "../../assets/icons/ArrowsDownUp.svg";
import Breadcrumb from "../../components/common/BreadCrumb";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";
import Pagination from "../../components/common/Pagination";

const Ranking = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isMonthly, setIsMonthly] = useState(true);
  const options: string[] = [
    "10 Items Per Page",
    "20 Items Per Page",
    "30 Items Per Page",
  ];
  const data = DummyData();
  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Account", "Ranking & Achievements"]} />
      <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full px-4 min-h-screen my-6">
        <div className="font-Poppins flex justify-between items-center w-full pt-3 ">
          <h2 className="text-lg text-(--primary) font-semibold">
            Platform Rankings
          </h2>
          <div className="flex justify-between shadow-(--cardShadow) items-center p-1 bg-white rounded-lg w-[300px]">
            <button
              className={`px-4 py-2 w-[48%] text-sm font-medium rounded-lg transition-colors duration-300 ${
                isMonthly ? "bg-(--primary) text-white" : "text-black"
              }`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 w-[48%] text-sm font-medium rounded-lg transition-colors duration-300 ${
                !isMonthly ? "bg-(--primary) text-white" : "text-black"
              }`}
              onClick={() => setIsMonthly(false)}
            >
              Annually
            </button>
          </div>
        </div>

        <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F] mt-3">
          <thead className="text-sm font-normal text-start ">
            <tr className="border-b-[1px] border-[#F4EFE9] ">
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Metric <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  PR <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Current Value <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Rank <img src={arrowUpDown} alt="" />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.map(
              (e: any, i: number) => (
                <tr
                  key={i}
                  className="font-Jakarta text-sm font-normal text-[#15120F] h-[80px] border-b-[1px] border-[#F4EFE9]"
                >
                  <td
                    className="cursor-pointer px-3 "
                    style={{
                      maxWidth: "50px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                    title={e.id}
                  >
                    {e.id}
                  </td>

                  <td>{e.phone}</td>
                  <td>{e.added}</td>
                  <td>{e.lastAccess}</td>
                </tr>
              ),
              []
            )}
          </tbody>
        </table>
      </div>

      <div className="w-full flex justify-end gap-5 items-center">
        <CustomizableDropdown
          options={options}
          selected={`${itemsPerPage} Items Per Page`}
          setSelected={() => ""}
          width="w-60"
        />

        <Pagination onPageChange={() => ""} pageCount={4} />
      </div>
    </div>
  );
};

export default Ranking;
