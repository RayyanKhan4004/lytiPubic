import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/icons/LytiCropIcon.svg";
import ArrowWhite from "../assets/icons/ArrowWhite.svg";
import ArrowBlack from "../assets/icons/ArrowBlack.svg";
import ArrowLeft from "../assets/icons/ArrowLineLeft.svg";

import { sidebarData } from "../utils/SidebarData";

interface SideBarProps {
  setIsSideBarExpanded: any;
  isSideBarExpanded: boolean;
}

const Sidebar = ({ setIsSideBarExpanded, isSideBarExpanded }: SideBarProps) => {
  const sidebarItems = sidebarData();
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState<number | null>(() => {
    const storedItem = localStorage.getItem("selectedItem");
    return storedItem ? JSON.parse(storedItem) : null;
  });

  const [selectedSubItem, setSelectedSubItem] = useState<number | null>(1);
  const [selectedNestedItem, setSelectedNestedItem] = useState<number | null>(
    null
  );

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (selectedItem === null) {
      setSelectedItem(0);
      localStorage.setItem("selectedItem", JSON.stringify(0));
    }
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
      setSelectedNestedItem(null);
    }

    if (e.path) {
      navigate(e.path);
    }
  };

  const handleSubItemClick = (subItem: any) => {
    console.log(subItem, "subItem");

    setSelectedSubItem(subItem.id);
    setSelectedNestedItem(null); // Reset nested selection

    if (subItem.path) {
      navigate(subItem.path);
    }

    // If submenu array exists, open and select first nested item
    if (subItem.subMenuArray && subItem.subMenuArray.length > 0) {
      setOpenNestedDropdown(subItem.id);
      setSelectedNestedItem(subItem.subMenuArray[0].id);
    } else {
      setOpenNestedDropdown(null);
    }
  };

  const handleNestedItemClick = (nestedItem: any, subItem: any) => {
    console.log(nestedItem, "nestedItem");

    setSelectedNestedItem(nestedItem.id);

    if (nestedItem.path) {
      navigate(nestedItem.path);
    }

    if (subItem.subMenuArray && subItem.subMenuArray.length > 0) {
      setOpenNestedDropdown(subItem.id);
      setSelectedNestedItem(nestedItem.id);
    } else {
      setOpenNestedDropdown(null);
    }
  };

  return (
    <div
      className={`w-full min-h-screen font-Poppins bg-[#F6F6F6] flex flex-col items-center text-sm mb-48 relative ${
        isSideBarExpanded ? "p-2" : ""
      }`}
    >
      <img
        src={logo}
        alt="Logo"
        className={`${isSideBarExpanded ? "mt-[81px]" : "mt-6"}`}
      />
      <div
        className={`absolute rounded-lg flex justify-center items-center bg-(--primary) h-[32px] w-[32px] cursor-pointer ${
          isSideBarExpanded
            ? "rotate-180 transform translate-x-[50%] right-[50%] top-6"
            : "right-4 top-6"
        }`}
        onClick={() => setIsSideBarExpanded((prev: boolean) => !prev)}
      >
        <img src={ArrowLeft} alt="toggle" />
      </div>

      <div className="h-full w-[86%] flex flex-col gap-3 mt-10">
        {sidebarItems.map((e: any, i: number) => (
          <div key={i}>
            {/* Top-level item */}
            <div
              className={`h-[50px] flex items-center ${
                isSideBarExpanded ? "justify-center" : "justify-between"
              } rounded-[10px] px-4 hover:cursor-pointer ${
                selectedItem === i || openDropdown === i
                  ? "bg-(--primary) text-white"
                  : "text-black"
              }`}
              onClick={() => handleItemClick(e, i)}
            >
              <div className="flex items-center gap-3">
                <img
                  src={selectedItem === i ? e.icon2 : e.icon1}
                  alt=""
                  className="w-6 h-6"
                />
                <p
                  className={`font-Jakarta text-sm font-semibold ${
                    isSideBarExpanded ? "hidden" : ""
                  }`}
                >
                  {e.title}
                </p>
              </div>
              {e.subMenu && !isSideBarExpanded && (
                <img
                  src={openDropdown === i ? ArrowWhite : ArrowBlack}
                  alt=""
                />
              )}
            </div>

            {/* Sub-menu */}
            {openDropdown === i && e.subMenu && !isSideBarExpanded && (
              <div className="ml-2 border-l-2 border-(--primary) flex flex-col gap-2 mt-2">
                {e.subMenu.map((subItem: any) => (
                  <div className="relative" key={subItem.id}>
                    {/* First Dot: SubMenu (e.g., Activity) */}
                    {!(
                      openNestedDropdown === subItem.id &&
                      subItem.subMenuArray?.length > 0
                    ) && (
                      <div
                        className={`h-5 w-2 rounded-e-full absolute my-auto top-0 bottom-0 left-0 ${
                          selectedSubItem === subItem.id ? "bg-(--primary)" : ""
                        }`}
                      ></div>
                    )}

                    <div
                      className={`pl-2 ml-4 py-2 cursor-pointer rounded-md hover:bg-gray-200 text-sm flex items-center justify-between gap-1.5 ${
                        selectedSubItem === subItem.id
                          ? "text-(--primary) font-semibold bg-gray-200"
                          : "text-black"
                      }`}
                      onClick={() => {
                        handleSubItemClick(subItem);
                        if (subItem.subMenuArray) {
                          setOpenNestedDropdown(
                            openNestedDropdown === subItem.id
                              ? null
                              : subItem.id
                          );

                          if (subItem.subMenuArray.length > 0) {
                            setSelectedNestedItem(subItem.subMenuArray[0].id);
                          }
                        }
                      }}
                    >
                      <div className="flex items-center gap-1.5">
                        {subItem?.image && <img src={subItem?.image} alt="" />}
                        {subItem.title}
                      </div>
                      {subItem.subMenuArray && (
                        <img
                          src={
                            openNestedDropdown === subItem.id
                              ? ArrowWhite
                              : ArrowBlack
                          }
                          alt="arrow"
                          className="w-4 h-4"
                        />
                      )}
                    </div>

                    {openNestedDropdown === subItem.id &&
                      subItem.subMenuArray && (
                        <div className="flex flex-col gap-1 ">
                          {subItem.subMenuArray && (
                            <div className="ml-6 border-l border-(--primary) flex flex-col gap-1 mt-1 pl-2">
                              {subItem.subMenuArray.map((nestedItem: any) => (
                                <div
                                  onClick={() =>
                                    handleNestedItemClick(nestedItem, subItem)
                                  } // Pass both nestedItem and subItem to the handler
                                  key={nestedItem.id}
                                  className={`text-sm hover:font-medium cursor-pointer py-1 px-2 rounded hover:bg-gray-100 ${
                                    selectedNestedItem === nestedItem.id
                                      ? "text-black font-semibold bg-gray-100"
                                      : "text-gray-600"
                                  } relative`}
                                >
                                  {/* Dot for nested item */}
                                  <div
                                    className={`h-3 w-1.5 rounded-e-full absolute left-[-8px] top-[50%] -translate-y-1/2 ${
                                      selectedNestedItem === nestedItem.id
                                        ? "bg-(--primary)"
                                        : ""
                                    }`}
                                  ></div>
                                  {nestedItem.title}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
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
