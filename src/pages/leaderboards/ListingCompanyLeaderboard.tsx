import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PieChart, Pie, Cell } from "recharts";

import Breadcrumb from "../../components/common/BreadCrumb";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";
import LeaderboardsDashboardUserCard from "../../components/dashboard/teamDashboard/leaderboardsDashboard/LeaderboardsDashboardUserCard";
import MainTitle from "../../components/ui/typography/MainTitle";
import SelectField from "../../components/inputs/SelectField";
import SearchInput from "../../components/inputs/SearchInput";
import Pagination from "../../components/common/Pagination";
import TableSkeleton from "../../components/ui/skeleton/TableSkeleton";
import NoDataRow from "../../components/ui/NoDataRow";

import { useGetListingOfficesWithAgentQuery } from "../../lib/rtkQuery/orderApi";

import { DummyData, ListingGraphData, users } from "../../utils/DummyData";
import { countyOptions } from "../../utils/options";
import { ChartData, OrderDataType } from "../../utils/types";

import dummyImage from "../../assets/images/Dummy.jpg";
import arrowUpDown from "../../assets/icons/ArrowsDownUp.svg";

const ListingCompanyLeaderBoard = () => {
  const [selectedFilter, setSelectedFilter] = useState("Devclan");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState(1);
  const [expandedRows, setExpandedRows] = useState<{ [key: number]: boolean }>(
    {}
  );

  const { data: listingOfficeData, isLoading } =
    useGetListingOfficesWithAgentQuery({
      page,
      limit: 10,
    });

  const {
    formState: { errors },
    reset,
    watch,
    setValue,
    control,
  } = useForm<OrderDataType>();

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    if (newPage >= 1 && newPage <= listingOfficeData?.totalPages) {
      setPage(newPage);
    }
  };

  const toggleRow = (id: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full px-4 my-8 font-Poppins min-h-full">
      <Breadcrumb items={["Leaderboards", "Listing Company LeaderBoard"]} />

      <div className="w-full flex flex-col gap-4 my-4">
        <div className="shadow-(--cardShadow) rounded-2xl bg-white p-4 w-full ">
          <div className="flex justify-between items-center">
            <MainTitle title="Listing Company LeaderBoard" />

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
                  data={ListingGraphData}
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
                  {ListingGraphData.map((entry, index) => (
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
            <thead className="text-sm font-normal text-start  border-b-[1px] border-[#F4EFE9] ">
              <tr>
                <th></th>
                <th className="text-start font-medium  ">Id</th>
                <th className="text-start font-medium  ">Listing Office</th>
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
              {isLoading ? (
                <TableSkeleton columns={8} />
              ) : (
                <>
                  {listingOfficeData?.data?.length === 0 ? (
                    <NoDataRow colSpan={8} />
                  ) : (
                    <>
                      {listingOfficeData?.data?.map((e: any, i: number) => (
                        <>
                          <tr
                            key={e.id}
                            className="font-Jakarta text-sm font-normal text-[#15120F] h-[55px] border-b-[1px] border-[#F4EFE9] cursor-pointer  
                    bg-white hover:bg-gray-100 transition-colors duration-500 ease-in-out"
                          >
                            <td className="px-3">
                              <button
                                onClick={() => toggleRow(e.id)}
                                className="w-5 h-5 flex items-center justify-center border rounded-full bg-green-500 text-white"
                              >
                                {expandedRows[e.id] ? "-" : "+"}
                              </button>
                            </td>
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
                            <td>{e.name}</td>
                            <td>{e.orderCount}</td>
                            <td>{e.orderPercentage}</td>
                            <td>{e.orderFeeTotal}</td>
                            <td>{e.feePercentage}</td>
                            <td>{e.lastAccess}</td>
                          </tr>

                          {/* Render listing agents if expanded */}
                          {expandedRows[e.id] &&
                            e.listingAgents?.length > 0 && (
                              <tr>
                                <td colSpan={8} className="bg-gray-50 p-3">
                                  <table className="w-full border-t border-gray-300">
                                    <thead>
                                      <tr className="bg-gray-200 text-gray-700">
                                        <th className="p-2 text-left">
                                          Agent ID
                                        </th>
                                        <th className="p-2 text-left">
                                          Agent Name
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {e.listingAgents.map((agent: any) => (
                                        <tr key={agent.id} className="border-t">
                                          <td className="p-2">{agent.id}</td>
                                          <td className="p-2">
                                            {agent.contactName}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            )}
                        </>
                      ))}
                    </>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full flex justify-end gap-5 items-center">
        <Pagination
          onPageChange={handlePageChange}
          pageCount={listingOfficeData?.totalPages}
        />
      </div>
    </div>
  );
};

export default ListingCompanyLeaderBoard;
