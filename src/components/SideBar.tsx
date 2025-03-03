import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/icons/LytiCropIcon.svg";
import ArrowWhite from "../assets/icons/ArrowWhite.svg";
import ArrowBlack from "../assets/icons/ArrowBlack.svg";
import ArrowLeft from "../assets/icons/ArrowLineLeft.svg";

import { sidebarData } from "../utils/SidebarData";

const Sidebar: React.FC = () => {
  const sidebarItems = sidebarData();
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState<number | null>(() => {
    const storedItem = localStorage.getItem("selectedItem");
    return storedItem ? JSON.parse(storedItem) : null;
  });

  const [selectedSubItem, setSelectedSubItem] = useState<number | null>(1);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    if (selectedItem !== null) {
      localStorage.setItem("selectedItem", JSON.stringify(selectedItem));
    }
  }, [selectedItem]);

  const handleItemClick = (e: any, index: number) => {
    if (e.subMenu) {
      setOpenDropdown(openDropdown === index ? null : index);
      setSelectedItem(index);

      if (e.subMenu.length > 0) {
        setSelectedSubItem(e.subMenu[0].id);
      }
    } else {
      setOpenDropdown(null);
      setSelectedItem(index);
      setSelectedSubItem(null);
    }

    if (e.path) {
      navigate(e.path);
    }
  };

  const handleSubItemClick = (subItem: any) => {
    setSelectedSubItem(subItem.id);
    navigate(subItem.path);
  };

  return (
    <div className="w-full min-h-screen h-full font-Poppins bg-[#F6F6F6] flex items-center flex-col text-sm mb-48">
      <img src={logo} alt="Logo" className="mt-6" />
      {/* <div className="w-full justify-center relative ">
        <div className=" absolute rounded-lg flex justify-center items-center bg-(--primary) h-[32px] w-[32px] ">
          <img src={ArrowLeft} alt="" />
        </div>
      </div> */}
      <div className="h-full w-[86%] flex flex-col gap-3 mt-10">
        {sidebarItems.map((e: any, i: number) => (
          <div key={i}>
            <div
              className={`h-[50px] flex items-center justify-between rounded-[10px] px-4 hover:cursor-pointer ${
                selectedItem === i || openDropdown === i
                  ? "bg-(--primary) text-white"
                  : "text-black"
              }`}
              onClick={() => handleItemClick(e, i)}
            >
              <div className="flex items-center gap-3">
                <img src={selectedItem === i ? e.icon2 : e.icon1} alt="" />
                <p className="font-Jakarta text-sm font-semibold">{e.title}</p>
              </div>
              {e.subMenu && (
                <img
                  src={`${openDropdown === i ? ArrowWhite : ArrowBlack}`}
                  alt=""
                />
              )}
            </div>

            {/* Dropdown Menu */}
            {openDropdown === i && e.subMenu && (
              <div className="ml-2 border-l-2 border-(--primary) flex flex-col gap-2 mt-2 relative">
                {e.subMenu.map((subItem: any) => (
                  <div className="relative" key={subItem.id}>
                    <div
                      className={`h-5 w-2 rounded-e-full absolute my-auto top-0 bottom-0 ${
                        selectedSubItem === subItem.id ? "bg-(--primary)" : ""
                      }`}
                    ></div>
                    <div
                      className={`pl-2 ml-4 py-2 cursor-pointer rounded-md hover:bg-gray-200  text-sm flex items-center gap-1.5 ${
                        selectedSubItem === subItem.id
                          ? "text-(--primary) font-semibold bg-gray-200"
                          : "text-black"
                      }`}
                      onClick={() => handleSubItemClick(subItem)}
                    >
                      {subItem?.image && <img src={subItem?.image} alt="" />}
                      {subItem.title}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
