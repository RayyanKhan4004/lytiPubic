import { useState } from "react";
import upload from "../../../assets/icons/UploadSimple.svg";
import add from "../../../assets/icons/Add.svg";
import menu from "../../../assets/icons/Menu.svg";
import arrowUpDown from "../../../assets/icons/ArrowsDownUp.svg";
import { useNavigate } from "react-router-dom";
import { DummyData } from "../../../utils/DummyData";
import Breadcrumb from "../../../components/common/BreadCrumb";
import SearchInput from "../../../components/common/SearchInput";
import CustomizableDropdown from "../../../components/common/CustomizableDropdown";
import UserActionsPopup from "../../../components/admin/users/UserActionsPopup";
import Pagination from "../../../components/common/Pagination";
import { useForm } from "react-hook-form";
import { useFetchUsersQuery } from "../../../lib/rtkQuery/userApi";
import TableHeader from "../../../components/ui/table/TableHeader";
import dummyImage from "../../../assets/images/Dummy.jpg";
import NoData from "../../../components/ui/NoData";
import NoDataRow from "../../../components/ui/NoDataRow";
import Spinner from "../../../components/common/Spinner";
import TableSkeleton from "../../../components/ui/skeleton/TableSkeleton";
interface FormValues {
  filter: string;
}

const UsersTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("Active");
  const navigate = useNavigate();

  const options: string[] = [
    "10 Items Per Page",
    "20 Items Per Page",
    "30 Items Per Page",
  ];

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<FormValues>();
  const filterOption = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "excluded", label: "Excluded" },
  ];
  const [page, setPage] = useState(1);

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    if (newPage >= 1 && newPage <= data?.totalPages) {
      setPage(newPage);
    }
  };

  const { data, error, isLoading } = useFetchUsersQuery({
    keyword: searchValue,
    page,
    limit: 10,
  });
  const tableHeaders = [
    { text: "ID", arrowIcon: false },
    { text: "User", arrowIcon: false },
    { text: "Email", arrowIcon: false },
    { text: "Alternative Email", arrowIcon: false },
    { text: "Business Entity", arrowIcon: false },
    { text: "Career Path", arrowIcon: false },
    { text: "Lead Source", arrowIcon: false },
    { text: "AE Commission Threshold", arrowIcon: false },
    { text: "AE Escrow Commission", arrowIcon: false },
    { text: "AE Title Commission", arrowIcon: false },
    { text: "Exclude Challenges Leaderboards", arrowIcon: false },
    { text: "Send Welcome Email", arrowIcon: false },
    { text: "Download Transactions", arrowIcon: false },
    { text: "Notes", arrowIcon: false },
    { text: "Start Date", arrowIcon: false },
    { text: "Created At", arrowIcon: false },
  ];

  const handleDetailPage = (userData: any) => {
    navigate(`/admin/edit-user`, { state: { userData } });
  };
  return (
    <div className="w-full px-4 my-8">
      <Breadcrumb items={["Admin", "User"]} />
      <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full px-4 min-h-screen my-6">
        <div className="font-Poppins flex justify-between items-center w-full pt-3">
          <h2 className="text-lg text-(--primary) font-semibold">Users</h2>
          <div className="flex items-center gap-3">
            <SearchInput value={searchValue} onChange={setSearchValue} />

            <CustomizableDropdown
              height="h-[44px]"
              options={["All", "Active", "InActive"]}
              selected={selectedFilter}
              setSelected={(e) => setSelectedFilter(e)}
              width="w-[180px]"
            />
            {/* <SelectField
              label=""
              name="filter"
              control={control}
              options={filterOption}
              placeholder="Select..."
              error={errors.filter?.message}
              required={false}
              className="w-[150px]  "
            /> */}
            <div className="rounded-xl flex justify-center items-center bg-(--smoke) w-[44px] h-[44px]">
              <img src={upload} alt="" />
            </div>
            <div
              className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white"
              onClick={() => navigate("/admin/add-user")}
            >
              <img src={add} alt="" />
              Add User
            </div>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F] mt-6">
            <thead className="text-sm font-normal text-start">
              <tr className="border-b-[1px] border-[#F4EFE9] ">
                {tableHeaders.map(({ text, arrowIcon }) => (
                  <TableHeader key={text} text={text} arrowIcon={arrowIcon} />
                ))}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <TableSkeleton columns={30} />
              ) : (
                <>
                  {data?.users?.length === 0 ? (
                    <NoDataRow colSpan={4} />
                  ) : (
                    <>
                      {data?.users?.map(
                        (e: any, i: number) => (
                          <tr
                            key={i}
                            className="font-Jakarta text-sm font-normal text-[#15120F] h-[80px] border-b-[1px] border-[#F4EFE9] cursor-pointer"
                            onClick={() => handleDetailPage(e)}
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
                            <td>
                              <div className="flex items-center gap-2">
                                <img
                                  src={e.profileImage || dummyImage}
                                  alt=""
                                  className="w-[40px] h-[40px] rounded-full"
                                />
                                <div>
                                  <h3 className="font-medium ">
                                    {e.firstname}
                                  </h3>
                                  <h3 className="text-xs text-(--secondary)">
                                    {e.role}
                                  </h3>
                                </div>
                              </div>
                            </td>

                            <td>{e.email}</td>
                            <td>{e.alternativemail}</td>
                            <td>{e.business_entity}</td>
                            <td>{e.career_path}</td>
                            <td>{e.lead_source}</td>
                            <td>{e.ae_commission_threshold}</td>
                            <td>{e.ae_escrow_commission}</td>
                            <td>{e.ae_title_commission}</td>
                            <td>
                              {e.exclude_challenges_leaderboards ? "Yes" : "No"}
                            </td>
                            <td>{e.send_welcome_email ? "Yes" : "No"}</td>
                            <td>{e.download_transactions ? "Yes" : "No"}</td>
                            <td>{e.notes}</td>

                            <td>{e.startdate}</td>
                            <td>
                              {new Date(e.createdAt).toLocaleDateString()}
                            </td>
                          </tr>
                        ),
                        []
                      )}
                    </>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full flex justify-end gap-5 items-center">
        {/* <CustomizableDropdown
          options={options}
          selected={`${itemsPerPage} Items Per Page`}
          setSelected={() => ""}
          width="w-60"
        /> */}

        <Pagination
          onPageChange={handlePageChange}
          pageCount={data?.totalPages}
        />
      </div>
    </div>
  );
};

export default UsersTable;
