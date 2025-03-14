import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Breadcrumb from "../../components/common/BreadCrumb";
import MainTitle from "../../components/ui/typography/MainTitle";
import SelectField from "../../components/inputs/SelectField";
import SearchInput from "../../components/inputs/SearchInput";
import Pagination from "../../components/common/Pagination";
import TableSkeleton from "../../components/ui/skeleton/TableSkeleton";
import NoDataRow from "../../components/ui/NoDataRow";
import add from "../../assets/icons/Add.svg";
import minus from "../../assets/icons/Minus.svg";
import dummyImage from "../../assets/images/Dummy.jpg";

import {
  useGetListingOfficesWithAgentQuery,
  useGetTop5ListingAgentsQuery,
} from "../../lib/rtkQuery/orderApi";

import { countyOptions } from "../../utils/options";
import { ChartData, OrderDataType } from "../../utils/types";

import CardLayout from "../../components/layouts/CardLayout";
import DummyChart from "./DummyChart";
import { users } from "../../utils/DummyData";
import TopAgentCard from "../../components/ui/card/TopAgentCard";
import CustomizableSkeleton from "../../components/ui/skeleton/CustomizableSkeleton";

const ListingCompanyLeaderBoard = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState(1);
  const [expandedRows, setExpandedRows] = useState<{ [key: number]: boolean }>(
    {}
  );
  const { data: topAgentData, isLoading: isLoadingListingAgent } =
    useGetTop5ListingAgentsQuery();

  const { data: listingOfficeData, isLoading } =
    useGetListingOfficesWithAgentQuery({
      page,
      limit: 10,
    });

  const {
    formState: { errors },
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

      <div className="w-full justify-between items-center  gap-3 flex  mt-3">
        <CardLayout className="w-[49%]">
          <MainTitle title="All Sales Orders" />
          <DummyChart />
        </CardLayout>
        <CardLayout className="w-[49%]">
          <MainTitle title="Top 5 agents" />
          {isLoadingListingAgent ? (
            <CustomizableSkeleton
              width="w-full"
              height={300}
              borderRadius={30}
            />
          ) : (
            <div className="flex flex-wrap w-full justify-between">
              {topAgentData?.data?.map((e: any, i: number) => (
                <TopAgentCard
                  count={e.orderCount}
                  image={dummyImage}
                  name={e.contactName}
                  key={i}
                  rank={i + 1}
                  // percentage={e.percentage}
                  width="w-[48%]"
                />
              ))}
            </div>
          )}
        </CardLayout>
      </div>
      <div className="w-full flex flex-col gap-4 my-4">
        <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full px-4 min-h-full my-6 overflow-auto ">
          <div className="font-Poppins flex justify-between items-center w-full pt-3 ">
            {/* <form className="font-Poppins flex justify-between items-center w-full  gap-2">
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
            </form> */}
            <MainTitle title="Listing Offices" />
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
                              {/* {expandedRows[e.id] ? "-" : "+"} */}
                              <div
                                onClick={() => toggleRow(e.id)}
                                className={` ${
                                  expandedRows[e.id]
                                    ? "bg-white border border-(--secondary)"
                                    : "bg-(--primary)"
                                } flex items-center cursor-pointer  text-sm h-[24px] w-[24px] justify-center rounded-md text-white`}
                              >
                                {expandedRows[e.id] ? (
                                  <img src={minus} alt="" />
                                ) : (
                                  <img src={add} alt="" className="w-4 h-4" />
                                )}
                              </div>
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
                            <td>{parseFloat(e.orderPercentage).toFixed(2)}</td>

                            <td>{e.orderFeeTotal}</td>

                            <td>{parseFloat(e.feePercentage).toFixed(2)}</td>

                            <td>{e.lastAccess}</td>
                          </tr>

                          {/* Render listing agents if expanded */}
                          {expandedRows[e.id] &&
                            e.listingAgents?.length > 0 && (
                              <tr>
                                <td colSpan={8} className="bg-gray-50 p-3">
                                  <table className="w-full ">
                                    <tbody>
                                      {e.listingAgents.map((agent: any) => (
                                        <tr key={agent.id} className="">
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
