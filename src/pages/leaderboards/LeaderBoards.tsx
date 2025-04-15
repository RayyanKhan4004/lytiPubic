import React, { useState } from "react";
import Breadcrumb from "../../components/common/BreadCrumb";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";
import LeaderboardsDashboardUserCard from "../../components/dashboard/teamDashboard/leaderboardsDashboard/LeaderboardsDashboardUserCard";
import dummyImage from "../../assets/images/Dummy.jpg";
import { PieChart, Pie, Cell } from "recharts";
import SearchInput from "../../components/common/SearchInput";
import { useGetLeaderboardQuery } from "../../lib/rtkQuery/orderApi";
import TableSkeleton from "../../components/ui/skeleton/TableSkeleton";
import NoDataRow from "../../components/ui/NoDataRow";
import SelectField from "../../components/inputs/SelectField";
import { useForm } from "react-hook-form";
import { UserTableType } from "../../utils/types";
import { leaderboardOption } from "../../utils/options";
import ProgressBar from "../../components/ui/card/ProgressBar";

interface ChartData {
  name: string;
  value: number;
  color: string;
}
const LeaderBoards = () => {
  const [searchValue, setSearchValue] = useState("");

  const {
    formState: { errors },
    watch,
    control,
    setValue,
  } = useForm<UserTableType>();
  const selectedRole = watch("role");
  const { data: leaderData, isLoading } = useGetLeaderboardQuery({
    report: selectedRole,
  });
  const totalOrderCount =
    leaderData?.leaderboard?.reduce(
      (sum: any, item: any) => sum + item.orderCount,
      0
    ) || 0;

  const rankColors: Record<number, string> = {
    1: "#FE5100",
    2: "#0098CE",
    3: "#F8A219",
    4: "#404041",
    5: "#8775FF",
  };

  const data: ChartData[] =
    leaderData?.leaderboard?.slice(0, 5).map((user: any) => ({
      name: user.name,
      value: parseFloat(user.percentage.replace("%", "")),
      color: rankColors[user.rank] || "#ccc",
    })) || [];

  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Leaderboards", "Agent Leaderboard"]} />
      <div className="w-full flex flex-col gap-4 my-7">
        <div className="shadow-(--cardShadow) rounded-2xl bg-white p-4 w-full ">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg text-(--primary)">
              Leaderboards
            </h1>
            <div>
              <SelectField
                label=""
                name="role"
                control={control}
                options={leaderboardOption}
                placeholder="Select..."
                error={errors.role?.message}
                required={false}
                className="w-[200px]"
                height="h-[38px]"
              />
            </div>
          </div>

          <div className="flex justify-between gapp-3 items-center w-full">
            <div className="w-[70%] flex flex-wrap gap-2 items-center">
              {leaderData?.leaderboard
                ?.slice(0, 5)
                .map((user: any, i: number) => (
                  <LeaderboardsDashboardUserCard
                    key={user.rank}
                    image={user.profileImage || dummyImage}
                    rank={user.rank}
                    name={user.name}
                    count={user.orderCount}
                    percentage={user.percentage}
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
                {!isLoading && (
                  <div className="text-xl font-semibold text-(--secondary)">
                    {totalOrderCount}
                  </div>
                )}

                <p className=" text-base">Total Appointment Met</p>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full px-4 min-h-screen my-6">
          <div className="font-Poppins flex justify-between items-center w-full pt-3 ">
            <h2 className="text-lg text-(--primary) font-semibold">
              Appointment Met
            </h2>
            <SearchInput
              value={searchValue}
              onChange={(e: any) => setSearchValue(e.target.value)}
            />
          </div>

          <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F] mt-7">
            <thead className="text-sm font-normal border-b-[1px] border-[#F4EFE9]">
              <tr>
                <th className="text-start font-medium">Rank</th>

                <th className="text-start font-medium">Name</th>
                <th className="text-start font-medium">Total count</th>
                <th className="text-start font-medium">
                  <div className="flex gap-2 items-center">
                    <span>%</span> of total
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <TableSkeleton columns={6} />
              ) : (
                <>
                  {leaderData?.leaderboard?.length === 0 ? (
                    <NoDataRow colSpan={6} />
                  ) : (
                    leaderData?.leaderboard?.map((e: any, i: number) => (
                      <tr
                        key={e.userId}
                        className="font-Jakarta text-sm font-normal text-[#15120F] h-[70px] border-b-[1px] border-[#F4EFE9] bg-white hover:bg-gray-100 transition-colors duration-500 ease-in-out"
                      >
                        <td>{e.rank}</td>

                        <td>
                          <div className="flex items-center gap-2">
                            <img
                              src={e.profileImage || dummyImage}
                              alt=""
                              className="w-[40px] h-[40px] rounded-full"
                            />
                            <div>
                              <h3 className="font-medium ">{e.name}</h3>
                              <h3 className="text-xs text-(--secondary)">
                                Account Executive
                              </h3>
                            </div>
                          </div>
                        </td>
                        <td>{e.orderCount}</td>
                        <td>
                          <ProgressBar key={e.id} percentage={e.percentage} />
                        </td>
                      </tr>
                    ))
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoards;
