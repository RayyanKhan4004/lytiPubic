import { useState } from "react";
import upload from "../../../assets/icons/UploadSimple.svg";
import add from "../../../assets/icons/Add.svg";
import menu from "../../../assets/icons/Menu.svg";
import arrowUpDown from "../../../assets/icons/ArrowsDownUp.svg";
import dummy from "../../../assets/images/Dummy.jpg";

import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../components/common/BreadCrumb";
import SearchInput from "../../../components/common/SearchInput";
import UserActionsPopup from "../../../components/admin/users/UserActionsPopup";
import CustomizableDropdown from "../../../components/common/CustomizableDropdown";
import Pagination from "../../../components/common/Pagination";

const AdminChallengeTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const options: string[] = [
    "10 Items Per Page",
    "20 Items Per Page",
    "30 Items Per Page",
  ];
  //   dummy data
  const users = [
    {
      id: 6748,
      name: "Ralph Edwards",
      role: "Account Executive",
      image: dummy,
      phone: "(303) 555-0105",
      added: "8/15/17",
      lastAccess: "6/21/19",
      status: "Inactive",
      excluded: true,
      downloadTrans: false,
      activeTrans: 0,
    },
    {
      id: 6749,
      name: "John Doe",
      image: dummy,
      role: "Sales Manager",
      phone: "(404) 555-0123",
      added: "9/10/18",
      lastAccess: "5/14/20",
      status: "Active",
      excluded: false,
      downloadTrans: true,
      activeTrans: 3,
    },
    {
      id: 6748,
      name: "Ralph Edwards",
      role: "Account Executive",
      image: dummy,
      phone: "(303) 555-0105",
      added: "8/15/17",
      lastAccess: "6/21/19",
      status: "Inactive",
      excluded: true,
      downloadTrans: false,
      activeTrans: 0,
    },
    {
      id: 6749,
      name: "John Doe",
      image: dummy,
      role: "Sales Manager",
      phone: "(404) 555-0123",
      added: "9/10/18",
      lastAccess: "5/14/20",
      status: "Active",
      excluded: false,
      downloadTrans: true,
      activeTrans: 3,
    },
    {
      id: 6748,
      name: "Ralph Edwards",
      role: "Account Executive",
      image: dummy,
      phone: "(303) 555-0105",
      added: "8/15/17",
      lastAccess: "6/21/19",
      status: "Inactive",
      excluded: true,
      downloadTrans: false,
      activeTrans: 0,
    },
    {
      id: 6749,
      name: "John Doe",
      image: dummy,
      role: "Sales Manager",
      phone: "(404) 555-0123",
      added: "9/10/18",
      lastAccess: "5/14/20",
      status: "Active",
      excluded: false,
      downloadTrans: true,
      activeTrans: 3,
    },
    {
      id: 6748,
      name: "Ralph Edwards",
      role: "Account Executive",
      image: dummy,
      phone: "(303) 555-0105",
      added: "8/15/17",
      lastAccess: "6/21/19",
      status: "Inactive",
      excluded: true,
      downloadTrans: false,
      activeTrans: 0,
    },
    {
      id: 6749,
      name: "John Doe",
      image: dummy,
      role: "Sales Manager",
      phone: "(404) 555-0123",
      added: "9/10/18",
      lastAccess: "5/14/20",
      status: "Active",
      excluded: false,
      downloadTrans: true,
      activeTrans: 3,
    },
    {
      id: 6748,
      name: "Ralph Edwards",
      role: "Account Executive",
      image: dummy,
      phone: "(303) 555-0105",
      added: "8/15/17",
      lastAccess: "6/21/19",
      status: "Inactive",
      excluded: true,
      downloadTrans: false,
      activeTrans: 0,
    },
    {
      id: 6749,
      name: "John Doe",
      image: dummy,
      role: "Sales Manager",
      phone: "(404) 555-0123",
      added: "9/10/18",
      lastAccess: "5/14/20",
      status: "Active",
      excluded: false,
      downloadTrans: true,
      activeTrans: 3,
    },
    {
      id: 6748,
      name: "Ralph Edwards",
      role: "Account Executive",
      image: dummy,
      phone: "(303) 555-0105",
      added: "8/15/17",
      lastAccess: "6/21/19",
      status: "Inactive",
      excluded: true,
      downloadTrans: false,
      activeTrans: 0,
    },
    {
      id: 6749,
      name: "John Doe",
      image: dummy,
      role: "Sales Manager",
      phone: "(404) 555-0123",
      added: "9/10/18",
      lastAccess: "5/14/20",
      status: "Active",
      excluded: false,
      downloadTrans: true,
      activeTrans: 3,
    },
    {
      id: 6748,
      name: "Ralph Edwards",
      role: "Account Executive",
      image: dummy,
      phone: "(303) 555-0105",
      added: "8/15/17",
      lastAccess: "6/21/19",
      status: "Inactive",
      excluded: true,
      downloadTrans: false,
      activeTrans: 0,
    },
    {
      id: 6749,
      name: "John Doe",
      image: dummy,
      role: "Sales Manager",
      phone: "(404) 555-0123",
      added: "9/10/18",
      lastAccess: "5/14/20",
      status: "Active",
      excluded: false,
      downloadTrans: true,
      activeTrans: 3,
    },
    {
      id: 6748,
      name: "Ralph Edwards",
      role: "Account Executive",
      image: dummy,
      phone: "(303) 555-0105",
      added: "8/15/17",
      lastAccess: "6/21/19",
      status: "Inactive",
      excluded: true,
      downloadTrans: false,
      activeTrans: 0,
    },
    {
      id: 6749,
      name: "John Doe",
      image: dummy,
      role: "Sales Manager",
      phone: "(404) 555-0123",
      added: "9/10/18",
      lastAccess: "5/14/20",
      status: "Active",
      excluded: false,
      downloadTrans: true,
      activeTrans: 3,
    },
  ];

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="w-full px-4 my-8">
      <Breadcrumb items={["Admin", "Challenges"]} />
      <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full px-4 min-h-screen my-6">
        <div className="font-Poppins flex justify-between items-center w-full pt-3">
          <h2 className="text-lg text-(--primary) font-semibold">Challenges</h2>
          <div className="flex items-center gap-3">
            <SearchInput
              value={searchValue}
              onChange={(e: any) => setSearchValue(e.target.value)}
            />
            <div className="rounded-xl flex justify-center items-center bg-smoke w-[44px] h-[44px]">
              <img src={upload} alt="" />
            </div>
            <div
              className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white"
              onClick={() => navigate("/admin/create-challenge")}
            >
              <img src={add} alt="" />
              Add Challenges
            </div>
          </div>
        </div>

        <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F] mt-5">
          <thead className="text-sm font-normal text-start ">
            <tr className="border-b-[1px] border-[#F4EFE9] ">
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Created Date <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Name <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Type <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Scope <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Start Date <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  End Date <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Category <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Time period <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Points <img src={arrowUpDown} alt="" />
                </div>
              </th>
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
                    <h3 className="font-medium ">{e.name}</h3>
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

export default AdminChallengeTable;
