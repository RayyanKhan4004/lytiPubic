import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "./common/SearchInput";
import Bell from "../assets/icons/Bell.svg";
import LytiLogo from "../assets/icons/LytiLogo.svg";
import Setting from "../assets/icons/Setting.svg";
import Dummy from "../assets/images/Dummy.jpg";
import { useAppDispatch } from "../lib/store/hooks";
import { clearAuth } from "../lib/store/slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const [searchValue, setSearchValue] = useState("");

  const handleLogout = () => {
    dispatch(clearAuth());
    localStorage.clear();
    setIsOpen(false);
    navigate("/");
  };
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
        </div>
        <img
          src={Dummy}
          alt="Notifications"
          className="w-[44px] h-[44px] rounded-full"
          onClick={toggleDropdown}
        />
        {isOpen && (
          <div className="absolute right-0 mt-2 top-14 h-[60px] w-48 bg-white shadow-lg rounded-lg border border-gray-200 flex gap-2 justify-center flex-col z-10">
            <button
              className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-red-500"
              onClick={handleLogout}
            >
              {/* <img src={logout} alt="Log Out" /> */}
              <span className="text-sm">Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
