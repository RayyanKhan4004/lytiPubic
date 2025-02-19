import LeaderboardsDashboardUserCard from "./LeaderboardsDashboardUserCard";
import dummyImage from "../../../../assets/images/Dummy.jpg";

interface UserListProps {
  heading: string;
  totalCount: number;
  users: Array<{ rank: number; name: string; count: number }>;
}

const LeaderboardsDashboardColumn = ({
  heading,
  totalCount,
  users,
}: UserListProps) => {
  return (
    <div className="w-[32%] flex flex-col gap-3 mb-7">
      <div className="flex justify-between items-center px-3 h-[74px] rounded-xl bg-(--primary) text-white text-base font-medium">
        <h2>{heading}</h2>
        <h2>{totalCount}</h2>
      </div>

      <div className="bg-[#F5F7FA] rounded-xl flex justify-between px-4 items-center w-full flex-wrap pb-4">
        {users.map((user) => (
          <LeaderboardsDashboardUserCard
            key={user.rank}
            image={dummyImage}
            rank={user.rank}
            name={user.name}
            count={user.count}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderboardsDashboardColumn;
