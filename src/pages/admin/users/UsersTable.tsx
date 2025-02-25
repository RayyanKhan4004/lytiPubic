import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useFetchUsersQuery } from "../../../lib/rtkQuery/userApi";
import { DummyData, userTableHeaders } from "../../../utils/DummyData";
import { filterOption } from "../../../utils/options";

import Breadcrumb from "../../../components/common/BreadCrumb";
import Pagination from "../../../components/common/Pagination";
import UserActionsPopup from "../../../components/admin/users/UserActionsPopup";
import TableHeader from "../../../components/ui/table/TableHeader";
import SearchInput from "../../../components/inputs/SearchInput";
import SelectField from "../../../components/inputs/SelectField";
import NoData from "../../../components/ui/NoData";
import NoDataRow from "../../../components/ui/NoDataRow";
import Spinner from "../../../components/common/Spinner";
import TableSkeleton from "../../../components/ui/skeleton/TableSkeleton";

import upload from "../../../assets/icons/UploadSimple.svg";
import add from "../../../assets/icons/Add.svg";
import menu from "../../../assets/icons/Menu.svg";
import arrowUpDown from "../../../assets/icons/ArrowsDownUp.svg";
import dummyImage from "../../../assets/images/Dummy.jpg";

interface FormValues {
  filter: string;
  type: string;
}

const UsersTable = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<FormValues>();

  const { data, error, isLoading } = useFetchUsersQuery({
    keyword: searchTerm,
    page,
    limit: 10,
  });

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    if (newPage >= 1 && newPage <= data?.totalPages) {
      setPage(newPage);
    }
  };

  const handleDetailPage = (userData: any) => {
    navigate(`/admin/edit-user`, { state: { userData } });
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm.toLowerCase());
  };
  return (
    <div className="w-full px-4 my-8">
      <Breadcrumb items={["Admin", "User"]} />
      <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full px-4 min-h-screen my-6">
        <div className="font-Poppins flex justify-between items-center w-full pt-3">
          <h2 className="text-lg text-(--primary) font-semibold">Users</h2>
          <form className="flex items-center gap-3">
            <SearchInput
              debounceTimeout={500}
              placeholder="Search..."
              onChange={handleSearch}
            />
            <SelectField
              name="type"
              control={control}
              options={filterOption}
              placeholder="Type"
              error={errors.type?.message}
              required={false}
              className="w-[120px]"
              height="44px"
            />

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
          </form>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F] mt-6">
            <thead className="text-sm font-normal text-start">
              <tr className="border-b-[1px] border-[#F4EFE9] ">
                {userTableHeaders.map(({ text, arrowIcon }) => (
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
