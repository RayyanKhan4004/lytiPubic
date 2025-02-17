import { useState } from "react";
import copy from "../../assets/icons/CopySimple.svg";
import archieve from "../../assets/icons/ArchiveBox.svg";
import Breadcrumb from "../../components/common/BreadCrumb";
import SearchInput from "../../components/common/SearchInput";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";

const LeadSource = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const items = [
    { id: 1, name: "FSBO" },
    { id: 2, name: "Agent Marketplace" },
    { id: 3, name: "Lender Marketplace" },
    { id: 4, name: "Developer" },
    { id: 5, name: "Probate Atty" },
    { id: 6, name: "Family Law Atty" },
    { id: 7, name: "Escrow Officer" },
    { id: 8, name: "Officer" },
    { id: 9, name: "Real Estate Atty" },
    { id: 10, name: "Employee_Transaction" },
    { id: 11, name: "Google Local Service Ads" },
  ];

  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Admin", "Lead Sources"]} />
      <div className="w-full flex justify-between  my-6">
        <div className="shadow-(--cardShadow) rounded-2xl bg-white w-[77%] px-4 min-h-[90vh] py-4">
          <div className="font-Poppins flex justify-between items-center w-full ">
            <h2 className="text-lg text-(--primary) font-semibold">
              Configured Lead Sources
            </h2>
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

              <div className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white">
                <img src={copy} alt="" />
              </div>
            </div>
          </div>

          <div className="my-4 ">
            {items?.map((e: any, i: number) => (
              <div
                key={i}
                className="border-t-[1.5px] border-smoke flex justify-between items-center py-3"
              >
                <div className="flex items-center gap-4 text-sm">
                  <input
                    type="checkbox"
                    className="accent-(--primary) h-[21px] w-[21px]"
                  />
                  <h2>{e.name}</h2>
                </div>
                <div className="bg-(--secondary) flex items-center gap-2 rounded-xl px-5 w-fit h-[32px]">
                  <img src={archieve} alt="" />
                  <p className="text-white">Archive</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6  w-[21%] ">
          <div className="shadow-(--cardShadow) rounded-2xl bg-white  px-4   py-4 flex flex-col gap-3">
            <h1 className="text-lg font-semibold text-(--primary)">
              Add Lead Sources
            </h1>
            <div>
              <CustomizableDropdown
                height="h-[44px]"
                options={["All", "Active", "InActive"]}
                selected={selectedFilter}
                setSelected={(e) => setSelectedFilter(e)}
                width="w-full"
              />
              <p className="text-greyText text-xs font-semibold mt-1">
                Add custom or select predefined source
              </p>
            </div>

            <button
              type="submit"
              className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] w-full px-8   justify-center rounded-xl text-white"
            >
              Add
            </button>
          </div>
          <div className="shadow-(--cardShadow) rounded-2xl bg-white  px-4   py-4 flex flex-col gap-3">
            <h1 className="text-lg font-semibold text-(--primary)">
              Add Lead Source Group
            </h1>
            <div>
              <CustomizableDropdown
                height="h-[44px]"
                options={["All", "Active", "InActive"]}
                selected={selectedFilter}
                setSelected={(e) => setSelectedFilter(e)}
                width="w-full"
              />
              <p className="text-greyText text-xs font-semibold mt-1">
                Add custom or select predefined source
              </p>
            </div>

            <button
              type="submit"
              className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] w-full px-8   justify-center rounded-xl text-white"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadSource;
