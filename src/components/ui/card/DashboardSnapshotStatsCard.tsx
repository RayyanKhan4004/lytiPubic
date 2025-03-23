import arrow from "../../../assets/icons/ArrowRight.svg";

interface DashboardSnapshotStatsCardProps {
  title: string;
  totalCount: number;
  escrowCount: number;
  titleCount: number;
  mtdCount?: number;
  onMTDClick?: () => void;
  onItemClick?: (item: string) => void;
}

const DashboardSnapshotStatsCard: React.FC<DashboardSnapshotStatsCardProps> = ({
  title,
  totalCount,
  escrowCount,
  titleCount,
  mtdCount,
  onMTDClick,
  onItemClick,
}) => {
  return (
    <div className="shadow-md rounded-lg flex flex-col justify-between min-w-[24%] p-4 my-5 bg-white font-poppin h-fit gap-3 relative">
      <div
        className="rounded-full p-1.5 absolute bg-(--primary) top-2 right-3 cursor-pointer"
        onClick={() => onItemClick?.("year")}
      >
        <img src={arrow} alt="Arrow Icon" />
      </div>

      <h2
        className="text-xs cursor-pointer hover:underline"
        onClick={() => onItemClick?.("year")}
      >
        {title}
      </h2>
      <div className="text-sm text-(--secondary) flex items-center gap-2 cursor-pointer ">
        <div
          className="text-2xl text-(--secondary) font-semibold hover:underline"
          onClick={() => onItemClick?.("year")}
        >
          {totalCount}
        </div>
        <div
          className="font-semibold text-xs cursor-pointer hover:underline"
          onClick={onMTDClick}
        >
          Total MTD:
        </div>{" "}
        {mtdCount}
      </div>
      <div className="flex gap-4 text-xs">
        <div
          className="flex flex-col cursor-pointer hover:underline"
          onClick={() => onItemClick?.("year")}
        >
          <span>Escrow</span>
          <span className="text-gray-800 font-semibold">{escrowCount}</span>
        </div>
        <div
          className="flex flex-col cursor-pointer hover:underline"
          onClick={() => onItemClick?.("year")}
        >
          <span>Title</span>
          <span className="text-gray-800 font-semibold">{titleCount}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSnapshotStatsCard;
