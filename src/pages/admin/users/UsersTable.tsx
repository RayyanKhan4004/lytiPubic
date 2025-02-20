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
import SelectField from "../../../components/inputs/SelectField";
import { useForm } from "react-hook-form";

interface FormValues {
  filter: string;
}

const UsersTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("Active");
  const navigate = useNavigate();

  const options: string[] = [
    "10 Items Per Page",
    "20 Items Per Page",
    "30 Items Per Page",
  ];

  const users = DummyData();

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
  return (
    <div className="w-full px-4 my-8">
      <Breadcrumb items={["Admin", "User"]} />
      <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full px-4 min-h-screen my-6">
        <div className="font-Poppins flex justify-between items-center w-full pt-3">
          <h2 className="text-lg text-(--primary) font-semibold">Users</h2>
          <div className="flex items-center gap-3">
            <SearchInput
              value={searchValue}
              onChange={(e: any) => setSearchValue(e.target.value)}
            />
            <CustomizableDropdown
              height="h-[44px]"
              options={["All", "Active", "InActive"]}
              selected={selectedFilter}
              setSelected={(e) => setSelectedFilter(e)}
              width="w-[180px]"
            />
            <SelectField
              label=""
              name="filter"
              control={control}
              options={filterOption}
              placeholder="Select..."
              error={errors.filter?.message}
              required={false}
              className="w-[150px]  "
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
          </div>
        </div>

        <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F] mt-3">
          <thead className="text-sm font-normal text-start">
            <tr className="border-b-[1px] border-[#F4EFE9] ">
              <th className="text-start py-4 font-medium">User ID </th>
              <th className="text-start font-medium">User</th>
              <th className="text-start font-medium">Phone No</th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Added <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Last Access <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Status <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium">Excluded</th>
              <th className="text-start font-medium ">Download Trans.</th>{" "}
              <th className="text-start font-medium">Active Trans.</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              (e: any, i: number) => (
                <tr
                  key={i}
                  className="font-Jakarta text-sm font-normal text-[#15120F] h-[80px] border-b-[1px] border-[#F4EFE9]"
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
                        src={e.image}
                        alt=""
                        className="w-[40px] h-[40px] rounded-full"
                      />
                      <div>
                        <h3 className="font-medium ">{e.name}</h3>
                        <h3 className="font-normal">{e.role}</h3>
                      </div>
                    </div>
                  </td>
                  <td>{e.phone}</td>
                  <td>{e.added}</td>
                  <td>{e.lastAccess}</td>
                  <td>{e.status}</td>
                  <td>{e.excluded ? "Yes" : "No"}</td>
                  <td>{e.downloadTrans ? "Yes" : "No"}</td>
                  <td>{e.activeTrans}</td>
                  <td>
                    <img
                      src={menu}
                      alt=""
                      onClick={() => {
                        toggleDropdown(i);
                      }}
                    />
                    {activeIndex === i && <UserActionsPopup />}
                  </td>
                </tr>
              ),
              []
            )}
          </tbody>
        </table>
      </div>

      <div className="w-full flex justify-end gap-5 items-center">
        <CustomizableDropdown
          options={options}
          selected={`${itemsPerPage} Items Per Page`}
          setSelected={() => ""}
          width="w-60"
        />

        <Pagination onPageChange={() => ""} pageCount={4} />
      </div>
    </div>
  );
};

export default UsersTable;
