import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "./common/SearchInput";
import Bell from "../assets/icons/Bell.svg";
import LytiLogo from "../assets/icons/LytiLogo.svg";
import Setting from "../assets/icons/Setting.svg";
import Dummy from "../assets/icons/DummyProfileImage.jpg";
import { useAppDispatch, useAppSelector } from "../lib/store/hooks";
import { clearAuth } from "../lib/store/slices/authSlice";
import PopoverMenu from "./ui/popup/PopupMenu";
import NavbarPopup from "./ui/popup/NavbarPopup";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const profile = useAppSelector(
    (state: any) => state?.auth?.user?.profileImage
  );

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
    <div
      className="sticky top-0 left-0 right-0 z-[50]  bg-white
    px-4 border-b-2 border-[#F4EFE9] flex justify-between gap-5 w-full font-Jakarta h-[80px] items-center "
    >
      <img src={LytiLogo} alt="" className="w-[78px] h-[78px]" />

      <div className="flex items-center gap-2">
        {/* <SearchInput
          value={searchValue}
          onChange={(e: any) => setSearchValue(e.target.value)}
        /> */}
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

        <NavbarPopup
          triggerImage={profile || Dummy}
          className="w-[44px] h-[44px] rounded-full border-[1px] border-(--inputBorder)"
          options={[
            {
              label: "Logout",
              onClick: handleLogout,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Navbar;
