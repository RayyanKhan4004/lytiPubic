import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Breadcrumb from "../../components/common/BreadCrumb";
import MainTitle from "../../components/ui/typography/MainTitle";
import SelectField from "../../components/inputs/SelectField";
import SearchInput from "../../components/inputs/SearchInput";
import Pagination from "../../components/common/Pagination";
import TableSkeleton from "../../components/ui/skeleton/TableSkeleton";
import NoDataRow from "../../components/ui/NoDataRow";

import {
  useGetListingOfficesWithAgentQuery,
  useGetTitleOfficesQuery,
} from "../../lib/rtkQuery/orderApi";

import { countyOptions } from "../../utils/options";
import { ChartData, OrderDataType } from "../../utils/types";

import CardLayout from "../../components/layouts/CardLayout";
import DummyChart from "./DummyChart";

const ListingCompanyLeaderBoard = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState(1);
  const [expandedRows, setExpandedRows] = useState<{ [key: number]: boolean }>(
    {}
  );
  const { data: titleOfficeData, isLoading: titleOfficeDataLoading } =
    useGetTitleOfficesQuery({ orderId: "" });

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

      <div className="w-full justify-between items-center  gap-3 flex ">
        <CardLayout>
          <MainTitle title="All Sales Orders" />
          <DummyChart />
        </CardLayout>
        {/* <CardLayout className="w-[48%]">
          <MainTitle title="Office" />
          <div className="w-full overflow-y-auto max-h-[300px]">
            <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F]">
              <thead className="text-sm font-normal text-start border-b-[1px] border-[#F4EFE9] bg-white sticky top-0 z-10">
                <tr>
                  <th className="text-start font-medium">Office</th>
                  <th className="text-start font-medium pr-2">Orders</th>
                  <th className="text-start font-medium px-2">
                    <div className="flex gap-0.5 items-center">
                      Orders <span>%</span>
                    </div>
                  </th>
                  <th className="text-start font-medium">Fees</th>
                  <th className="text-start font-medium  pr-2">
                    <div className="flex gap-0.5 items-center">
                      Fees <span>%</span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {titleOfficeDataLoading ? (
                  <TableSkeleton columns={8} />
                ) : (
                  <>
                    {titleOfficeData?.data?.titleOffices?.length === 0 ? (
                      <NoDataRow colSpan={8} />
                    ) : (
                      <>
                        {titleOfficeData?.data?.titleOffices?.map(
                          (e: any, i: number) => (
                            <tr
                              key={e.id}
                              className={`font-Jakarta text-sm font-normal text-[#15120F] h-[60px] border-b-[1px] border-[#F4EFE9] cursor-pointer  
            transition-colors duration-500 ease-in-out bg-white hover:bg-gray-100"
            `}
                            >
                              <td>{e.titleOffice}</td>
                              <td>{e.orderCount}</td>
                              <td className="px-2">
                                {Number(e.orderPercentage).toFixed(2)}
                              </td>
                              <td>{e.orderFeeTotal}</td>
                              <td>{Number(e.feePercentage).toFixed(2)}</td>
                              <td>{e.lastAccess}</td>
                            </tr>
                          )
                        )}
                      </>
                    )}
                  </>
                )}
              </tbody>

              <tfoot>
                <tr className="bg-[#F3F3F3]">
                  <td className="py-3 px-4 font-medium text-sm text-[#15120F]">
                    Total
                  </td>
                  <td className="py-3  font-medium text-sm text-[#15120F]">
                    {titleOfficeData?.data?.totalOrderCount || ""}
                  </td>
                  <td className="py-3 px-2 font-medium text-sm text-[#15120F]">
                    {titleOfficeData?.data?.totalOrderPercentage || ""}
                  </td>
                  <td className="py-3 px-4 font-medium text-sm text-[#15120F]">
                    {titleOfficeData?.data?.totalFeeCount || ""}
                  </td>
                  <td className="py-3 px-4 font-medium text-sm text-[#15120F]">
                    {titleOfficeData?.data?.totalFeePercentage || ""}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </CardLayout> */}
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
