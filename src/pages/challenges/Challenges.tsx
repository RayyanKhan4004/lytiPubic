import { useState } from "react";
import add from "../../assets/icons/Add.svg";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/common/BreadCrumb";
import Pagination from "../../components/common/Pagination";
import {
  useDeleteChallengeMutation,
  useGetChallengesQuery,
} from "../../lib/rtkQuery/challengeApi";
import TablesSkeleton from "../../components/ui/skeleton/TablesSkeleton";
import DataTable, { TableColumn } from "react-data-table-component";
import MainTitle from "../../components/ui/typography/MainTitle";
import CardLayout from "../../components/layouts/CardLayout";
import SearchInput from "../../components/inputs/SearchInput";
import Spinner from "../../components/ui/loader/Spinner";
import PopoverMenu from "../../components/ui/popup/PopupMenu";
import menu from "../../assets/icons/Menu.svg";
import toast from "react-hot-toast";

const Challenges = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();

  const { data, isLoading, refetch } = useGetChallengesQuery({
    keyword: searchTerm,
    page,
    limit: 10,
  });

  const [deleteChallenge] = useDeleteChallengeMutation();

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    if (newPage >= 1 && newPage <= data?.totalPages) {
      setPage(newPage);
    }
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm.toLowerCase());
  };

  const handleAction = async (action: string, rowData: any) => {
    if (action === "edit" && rowData) {
      navigate("/challenge-edit", { state: { rowData } });
    }
    if (action === "delete" && rowData) {
      setLoading(rowData?.id);
      try {
        await deleteChallenge(rowData?.id).unwrap();
        toast.success("Order deleted successfully");
        refetch();
      } catch (err: any) {
        toast.error(err?.data?.message || "Cannot delete user");
      } finally {
        setLoading("");
      }
    }
  };

  const challengeColumns: TableColumn<any>[] = [
    {
      name: "",
      cell: (row: any) =>
        loading === row?.id ? (
          <Spinner />
        ) : (
          <PopoverMenu
            triggerImage={menu}
            options={[
              { label: "Edit", onClick: () => handleAction("edit", row) },
              { label: "Delete", onClick: () => handleAction("delete", row) },
            ]}
          />
        ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "Challenge Name",
      selector: (row: any) => row.challengeName,
      cell: (row: any) => (
        <div className="rowStyle w-[200px]" title={row.challengeName}>
          {row.challengeName}
        </div>
      ),
      maxWidth: "200px",
    },
    {
      name: "Category",
      selector: (row: any) => row.category.categoryName,
      cell: (row: any) => (
        <div className="rowStyle w-[300px]" title={row.category.categoryName}>
          {row.category.categoryName}
        </div>
      ),
      maxWidth: "300px",
    },
    {
      name: "Challenge Type",
      selector: (row: any) => row.challengeType,
      cell: (row: any) => (
        <div className="rowStyle w-[200px]" title={row.challengeType}>
          {row.challengeType}
        </div>
      ),
      maxWidth: "200px",
    },
    {
      name: "Start Date",
      selector: (row: any) => row.startDate,
      cell: (row: any) => (
        <div className="rowStyle" title={row.startDate}>
          {row.startDate}
        </div>
      ),
    },
    {
      name: "End Date",
      selector: (row: any) => row.endDate,
      cell: (row: any) => (
        <div className="rowStyle" title={row.endDate}>
          {row.endDate}
        </div>
      ),
    },
    {
      name: "Points",
      selector: (row: any) => row.points,
      cell: (row: any) => (
        <div className="rowStyle" title={String(row.points)}>
          {row.points}
        </div>
      ),
    },
  ];
  // const challengeColumns: TableColumn<any>[] = [
  //   {
  //     name: "Challenge Name",
  //     selector: (row: any) => row.challengeName,
  //     cell: (row: any) => (
  //       <div className="rowStyle w-[200px]" title={row.challengeName}>
  //         {row.challengeName}
  //       </div>
  //     ),
  //     maxWidth: "200px",
  //   },
  //   {
  //     name: "Category",
  //     selector: (row: any) => row.category.categoryName,
  //     cell: (row: any) => (
  //       <div className="rowStyle w-[200px]" title={row.category.categoryName}>
  //         {row.category.categoryName}
  //       </div>
  //     ),
  //     maxWidth: "200px",
  //   },
  //   {
  //     name: "Challenge Type",
  //     selector: (row: any) => row.challengeType,
  //     cell: (row: any) => (
  //       <div className="rowStyle w-[150px]" title={row.challengeType}>
  //         {row.challengeType}
  //       </div>
  //     ),
  //     maxWidth: "150px",
  //   },
  //   {
  //     name: "Start Date",
  //     selector: (row: any) => row.startDate,
  //     cell: (row: any) => (
  //       <div className="rowStyle w-[150px]" title={row.startDate}>
  //         {row.startDate}
  //       </div>
  //     ),
  //     maxWidth: "150px",
  //   },
  //   {
  //     name: "End Date",
  //     selector: (row: any) => row.endDate,
  //     cell: (row: any) => (
  //       <div className="rowStyle w-[150px]" title={row.endDate}>
  //         {row.endDate}
  //       </div>
  //     ),
  //     maxWidth: "150px",
  //   },
  //   {
  //     name: "Points",
  //     selector: (row: any) => row.points,
  //     cell: (row: any) => (
  //       <div className="rowStyle w-[100px]" title={String(row.points)}>
  //         {row.points}
  //       </div>
  //     ),
  //     maxWidth: "100px",
  //   },
  // ];
  return (
    <div className="w-full px-4 my-8">
      <Breadcrumb items={["Challenges"]} />
      <CardLayout>
        <div className="font-Poppins flex justify-between items-center w-full pt-3">
          <MainTitle title="Challenges" />
          <div className="flex items-center gap-3">
            <SearchInput
              debounceTimeout={500}
              placeholder="Search Keyword"
              onChange={handleSearch}
            />
            <div
              className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white"
              onClick={() => navigate("/create-challenge")}
            >
              <img src={add} alt="" />
              Add Challenges
            </div>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          {isLoading ? (
            <TablesSkeleton
              columnCount={challengeColumns.length}
              rowCount={10}
            />
          ) : (
            <div className="w-full max-w-full">
              <DataTable
                columns={challengeColumns}
                data={data?.data || []}
                highlightOnHover
                striped
                className="head-row table-row"
                noDataComponent={
                  <div className="w-full text-center py-6 px-6 text-gray-500 bg-gray-100 rounded">
                    No data found
                  </div>
                }
                fixedHeader
                fixedHeaderScrollHeight="700px"
              />
            </div>
          )}
        </div>
      </CardLayout>

      <div className="w-full flex justify-end gap-5 items-center">
        <Pagination
          onPageChange={handlePageChange}
          pageCount={data?.totalPages}
        />
      </div>
    </div>
  );
};

export default Challenges;
