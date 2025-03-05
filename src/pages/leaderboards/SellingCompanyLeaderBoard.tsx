import React, { useState } from "react";
import Breadcrumb from "../../components/common/BreadCrumb";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";
import LeaderboardsDashboardUserCard from "../../components/dashboard/teamDashboard/leaderboardsDashboard/LeaderboardsDashboardUserCard";
import dummyImage from "../../assets/images/Dummy.jpg";
import { PieChart, Pie, Cell } from "recharts";
import arrowUpDown from "../../assets/icons/ArrowsDownUp.svg";
import { DummyData, users } from "../../utils/DummyData";
import MainTitle from "../../components/ui/typography/MainTitle";
import SelectField from "../../components/inputs/SelectField";
import SearchInput from "../../components/inputs/SearchInput";
import { countyOptions } from "../../utils/options";
import { OrderDataType } from "../../utils/types";
import { useForm } from "react-hook-form";
import Pagination from "../../components/common/Pagination";

interface ChartData {
  name: string;
  value: number;
  color: string;
}
const SellingCompanyLeaderBoard = () => {
  const [selectedFilter, setSelectedFilter] = useState("Devclan");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    formState: { errors },
    reset,
    watch,
    setValue,
    control,
  } = useForm<OrderDataType>();
  const data: ChartData[] = [
    { name: "Segment 1", value: 25, color: "#EC662A" },
    { name: "Segment 2", value: 15, color: "#3B3B3B" },
    { name: "Segment 3", value: 15, color: "#0EA5E9" },
    { name: "Segment 4", value: 20, color: "#F4A51C" },
    { name: "Segment 5", value: 25, color: "#8B6DF2" },
  ];
  const dummyData = DummyData();

  return (
    <div className="w-full px-4 my-8 font-Poppins min-h-full">
      <Breadcrumb items={["Leaderboards", "Selling Company LeaderBoard"]} />

      <div className="w-full flex flex-col gap-4 my-4">
        <div className="shadow-(--cardShadow) rounded-2xl bg-white p-4 w-full ">
          <div className="flex justify-between items-center">
            <MainTitle title="Selling Company LeaderBoard" />

            <div>
              <CustomizableDropdown
                height="h-[44px]"
                options={["Devclan", "Techify", "Lyti", "Title King"]}
                selected={selectedFilter}
                setSelected={(e) => setSelectedFilter(e)}
                width="180px"
              />
            </div>
          </div>

          <div className="flex justify-between gapp-3 items-center w-full">
            <div className=" w-[70%] flex flex-wrap gap-2 items-center">
              {users.map((user) => (
                <LeaderboardsDashboardUserCard
                  key={user.rank}
                  image={dummyImage}
                  rank={user.rank}
                  name={user.name}
                  count={user.count}
                  width="w-[30%]"
                  border="border border-(--inputBorder)"
                />
              ))}
            </div>

            <div className="relative flex justify-center items-center">
              <PieChart width={400} height={400}>
                {" "}
                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={120}
                  outerRadius={150}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={2}
                  stroke="white"
                  cornerRadius={7}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>

              <div className="absolute text-center">
                <p className="text-xl font-semibold text-(--secondary)">
                  2,000
                </p>
                <p className=" text-base">Total Appointment Set</p>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full px-4 min-h-full my-6 overflow-auto ">
          <div className="font-Poppins flex justify-between items-center w-full pt-3 ">
            <form className="font-Poppins flex justify-between items-center w-full  gap-2">
              <SearchInput
                debounceTimeout={500}
                placeholder="Search Keyword"
                onChange={(e) => setSearchTerm(e)}
                className="w-[27%]"
              />
              <div className="flex items-center gap-1.5">
                <SelectField
                  name="propertyCounty"
                  control={control}
                  options={countyOptions}
                  placeholder="County"
                  error={errors.propertyCounty?.message}
                  required={false}
                  className="w-[113px]"
                  height="44px"
                />
                <SelectField
                  name="propertyCounty"
                  control={control}
                  options={countyOptions}
                  placeholder="County"
                  error={errors.propertyCounty?.message}
                  required={false}
                  className="w-[113px]"
                  height="44px"
                />
                <SelectField
                  name="propertyCounty"
                  control={control}
                  options={countyOptions}
                  placeholder="County"
                  error={errors.propertyCounty?.message}
                  required={false}
                  className="w-[113px]"
                  height="44px"
                />
              </div>
            </form>
          </div>

          <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F] mt-7">
            <thead className="text-sm font-normal text-start ">
              <tr className="border-b-[1px] border-[#F4EFE9] ">
                <th className="text-start font-medium ">Listing Office</th>
                <th className="text-start font-medium ">Orders</th>
                <th className="text-start font-medium ">
                  <div className="flex  gap-2 items-center">
                    Orders <span>%</span>
                  </div>
                </th>
                <th className="text-start font-medium ">Fees</th>
                <th className="text-start font-medium ">
                  <div className="flex  gap-2 items-center">
                    Fees <span>%</span>
                  </div>
                </th>
                <th className="text-start font-medium ">
                  <div className="flex  gap-2 items-center">
                    Avg <span>$</span> Order
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {dummyData?.map(
                (e: any, i: number) => (
                  <tr
                    key={i}
                    className="font-Jakarta text-sm font-normal text-[#15120F] h-[60px] border-b-[1px] border-[#F4EFE9] cursor-pointer  
                            bg-white hover:bg-gray-100 transition-colors duration-500 ease-in-out
                            "
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
                    <td>{e.lastAccess}</td>
                    <td>{e.lastAccess}</td>
                  </tr>
                ),
                []
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full flex justify-end gap-5 items-center">
        <Pagination onPageChange={() => ""} pageCount={5} />
      </div>
    </div>
  );
};

export default SellingCompanyLeaderBoard;
