import { useState } from "react";
import upload from "../../assets/icons/UploadSimple.svg";
import add from "../../assets/icons/AlignLeft.svg";
import menu from "../../assets/icons/Menu.svg";
import arrowUpDown from "../../assets/icons/ArrowsDownUp.svg";
import { useNavigate } from "react-router-dom";
import { DummyData } from "../../utils/DummyData";
import Breadcrumb from "../../components/common/BreadCrumb";
import StatsCard from "../../components/orders/StatsCard";
import SearchInput from "../../components/common/SearchInput";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";
import OrderActionsPopup from "../../components/orders/OrderActionsPopup";
import Pagination from "../../components/common/Pagination";

const OrdersTable = () => {
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
  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Orders", "Orders"]} />
      <div className="w-full flex gap-4 mt-6">
        <StatsCard
          heading="Orders"
          stats={[
            { value: "20.7k", text: "Total Orders" },
            { value: "3k", text: "Total Amount" },
            { value: "57k", text: "Avg /Order" },
          ]}
        />
        <StatsCard
          heading="Title"
          stats={[
            { value: "9k", text: "Total Units" },
            { value: "2k", text: "Title charges" },
            { value: "27k", text: "Avg Title " },
          ]}
        />
        <StatsCard
          heading="Escrow"
          stats={[
            { value: "98k", text: "Escrow Units" },
            { value: "78k", text: "Escrow charges" },
            { value: "9k", text: "Avg Escrow" },
          ]}
        />
      </div>
      <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full px-4 min-h-screen my-6">
        <div className="font-Poppins flex justify-between items-center w-full pt-3">
          <SearchInput
            value={searchValue}
            onChange={(e: any) => setSearchValue(e.target.value)}
          />
          <div className="flex items-center gap-3">
            <CustomizableDropdown
              height="h-[44px]"
              options={["All", "Active", "InActive"]}
              selected={selectedFilter}
              setSelected={(e) => setSelectedFilter(e)}
              width="w-[180px]"
            />
            <div className="rounded-xl flex justify-center items-center bg-smoke w-[44px] h-[44px]">
              <img src={upload} alt="" />
            </div>
            <div
              className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white"
              // onClick={() => navigate("/admin/add-user")}
            >
              <img src={add} alt="" />
            </div>
          </div>
        </div>

        <table className="w-full text-start font-Poppins text-sm font-normal text-[#15120F] mt-6">
          <thead className="text-sm font-normal text-start">
            <tr className="border-b-[1px] border-[#F4EFE9] ">
              <th className="text-start py-4 font-medium"> </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  User ID <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Agent <img src={arrowUpDown} alt="" />
                </div>
              </th>
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
                  Lead source <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Status <img src={arrowUpDown} alt="" />
                </div>
              </th>
              <th className="text-start font-medium ">
                <div className="flex  gap-2 items-center">
                  Lead Date <img src={arrowUpDown} alt="" />
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
                  <td>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="w-[21px] h-[21px] accent-(--primary) "
                    />
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

                  <td>
                    <img
                      src={menu}
                      alt=""
                      onClick={() => {
                        toggleDropdown(i);
                      }}
                    />
                    {activeIndex === i && <OrderActionsPopup />}
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

export default OrdersTable;
