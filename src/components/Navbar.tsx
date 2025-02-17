import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "./common/SearchInput";
import Bell from "../assets/icons/Bell.svg";
import LytiLogo from "../assets/icons/LytiLogo.svg";
import Setting from "../assets/icons/Setting.svg";
import Dummy from "../assets/images/Dummy.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="px-4 border-b-2 border-[#F4EFE9] flex justify-between gap-5 w-full font-Jakarta h-[80px] items-center ">
      <img src={LytiLogo} alt="" className="w-[78px] h-[78px]" />

      <div className="flex items-center gap-2">
        <SearchInput
          value={searchValue}
          onChange={(e: any) => setSearchValue(e.target.value)}
        />

        <div className="border-[1px] border-(--inputBorder) bg-(--primary) rounded-full flex justify-center items-center relative h-[44px] w-[44px] cursor-pointer">
          <img
            src={Setting}
            alt="Notifications"
            className="w-[24px] h-[24px]"
          />
        </div>
        <div className="border-[1px] border-(--inputBorder) bg-(--primary) rounded-full flex justify-center items-center relative h-[44px] w-[44px] cursor-pointer">
          <img src={Bell} alt="Notifications" className="w-[24px] h-[24px]" />
          {/* <p className="bg-[#24B036] rounded-full flex justify-center items-center p-1 absolute w-[14px] h-[14px] font-Jakarta text-[10px] text-white top-1.5 right-1.5">
            0
          </p> */}
        </div>

        <img
          src={Dummy}
          alt="Notifications"
          className="w-[44px] h-[44px] rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
