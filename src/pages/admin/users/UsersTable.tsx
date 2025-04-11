import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  useDeleteUserMutation,
  useFetchUsersQuery,
} from "../../../lib/rtkQuery/userApi";
import { DummyData, userTableHeaders } from "../../../utils/DummyData";
import {
  fileStatusOption,
  filterOption,
  roleOption,
} from "../../../utils/options";

import Breadcrumb from "../../../components/common/BreadCrumb";
import Pagination from "../../../components/common/Pagination";
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
import PopoverMenu from "../../../components/ui/popup/PopupMenu";
import toast from "react-hot-toast";
import { UserTableType } from "../../../utils/types";
import MainTitle from "../../../components/ui/typography/MainTitle";
import CardLayout from "../../../components/layouts/CardLayout";
import { useAppSelector } from "../../../lib/store/hooks";
type FilterType = {
  key: string;
  value: string;
};

const UsersTable = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  const [deleteUser] = useDeleteUserMutation();
  const [selectedFilters, setSelectedFilters] = useState<FilterType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    formState: { errors },
    watch,
    control,
    setValue,
  } = useForm<UserTableType>();

  const selectedRole = watch("role") || "";

  const handleSearch = (value: string) => {
    const term = value.toLowerCase();
    setSearchTerm(term);
    updateFilter("search", term);
  };

  useEffect(() => {
    updateFilter("role", selectedRole);
  }, [selectedRole]);
  const userId = useAppSelector((state: any) => state?.auth?.user?.id);
  const { data, error, isLoading, refetch } = useFetchUsersQuery({
    keyword: searchTerm,
    page,
    limit: 10,
    role: selectedRole,
  });

  const updateFilter = (key: string, value: string) => {
    setSelectedFilters((prev) => {
      const updated = prev.filter((f) => f.key !== key);
      if (value) {
        updated.push({ key, value });
      }
      return updated;
    });
  };

  const removeFilter = (key: string) => {
    setSelectedFilters((prev) => prev.filter((f) => f.key !== key));

    // Reset form fields
    if (key === "role") {
      setValue("role", "");
    }
    if (key === "search") {
      setSearchTerm("");
    }
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    if (newPage >= 1 && newPage <= data?.totalPages) {
      setPage(newPage);
    }
  };

  const handleAction = async (action: string, userData?: any) => {
    if (action === "edit" && userData) {
      navigate(`/admin/edit-user`, { state: { userData } });
    }

    if (action === "delete" && userData) {
      setLoading(userData?.id);
      try {
        await deleteUser(userData?.id).unwrap();
        toast.success("User deleted successfully");
        refetch();
      } catch (err: any) {
        toast.error(err?.data?.message || "Cannot delete user");
      } finally {
        setLoading("");
      }
    }
  };

  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className="w-full px-4 my-8">
      <Breadcrumb items={["Admin", "User"]} />
      <CardLayout>
        <div className="font-Poppins flex justify-between items-center w-full flex-col">
          <div className="w-full flex justify-between items-center">
            <MainTitle title="Users" />
            <form className="flex items-center gap-3">
              <SearchInput
                debounceTimeout={500}
                placeholder="Search..."
                onChange={handleSearch}
              />
              <SelectField
                label=""
                name="role"
                control={control}
                options={roleOption}
                placeholder="Role"
                error={errors.role?.message}
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

          <div className="flex gap-2 mt-2 flex-wrap justify-end w-full">
            {selectedFilters.map((filter) =>
              filter.value ? (
                <div
                  key={filter.key}
                  className="flex items-center bg-[#E5E5E5] px-4 py-1 rounded-[27px] text-sm h-[40px]"
                >
                  <button
                    onClick={() => removeFilter(filter.key)}
                    className="mr-2 text-gray-700"
                  >
                    ✖
                  </button>
                  {filter.value}
                </div>
              ) : null
            )}
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F] mt-6">
            <thead className="text-sm font-normal text-start">
              <tr className="border-b-[1px] border-[#F4EFE9] ">
                <th className="px-6"></th>
                <th className="text-start font-medium min-w-[100px]">Id</th>
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
                      {data?.users
                        ?.filter((user: any) => user.id !== userId)
                        .map(
                          (e: any, i: number) => (
                            <tr
                              key={i}
                              className="font-Jakarta text-sm font-normal text-[#15120F] h-[70px] border-b-[1px] border-[#F4EFE9] cursor-pointer 
                            bg-white hover:bg-gray-100 transition-colors duration-500 ease-in-out"
                            >
                              <td>
                                {loading == e?.id ? (
                                  <Spinner />
                                ) : (
                                  <>
                                    <PopoverMenu
                                      triggerImage={menu}
                                      options={[
                                        {
                                          label: "Edit User",
                                          onClick: () =>
                                            handleAction("edit", e),
                                        },
                                        // {
                                        //   label: "Documents",
                                        //   onClick: () =>
                                        //     handleAction("documents"),
                                        // },
                                        // {
                                        //   label: "Comments",
                                        //   onClick: () => handleAction("comments"),
                                        // },
                                        // {
                                        //   label: "History",
                                        //   onClick: () => handleAction("history"),
                                        // },
                                        // {
                                        //   label: "Services",
                                        //   onClick: () => handleAction("services"),
                                        // },
                                        // {
                                        //   label: "Client Portal",
                                        //   onClick: () =>
                                        //     handleAction("client_portal"),
                                        // },
                                        // {
                                        //   label: "Lock",
                                        //   onClick: () => handleAction("lock"),
                                        // },
                                        // {
                                        //   label: "Lost",
                                        //   onClick: () => handleAction("lost"),
                                        // },
                                        // {
                                        //   label: "Duplicate",
                                        //   onClick: () =>
                                        //     handleAction("duplicate"),
                                        // },
                                        {
                                          label: "Delete",
                                          onClick: () =>
                                            handleAction("delete", e),
                                        },
                                      ]}
                                    />
                                  </>
                                )}
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
                                {e.exclude_challenges_leaderboards
                                  ? "Yes"
                                  : "No"}
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

export default UsersTable;
