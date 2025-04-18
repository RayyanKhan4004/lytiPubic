import PhoneLogo from "../../../assets/icons/PhoneLogo.svg";
import LytiLogo from "../../../assets/icons/LytiLogo.svg";
import ArrowDown from "./assets/ArrowDown.svg";
// import CustomizableDropdown from "../../../components/common/CustomizableDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function PublicDashboardNavbar() {
  const Navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [DropDownType, setDropDownType] = useState("");
  return (
    <div className="flex items-center hover:cursor-pointer justify-between bg-white  w-full p-4.5 font-poppin">
      <img
        src={LytiLogo}
        alt="LytiLogo"
        className="w-[100px] h-[100px] font-medium text-base"
        onClick={() => Navigate("/")}
      />

      <div className="flex items-center gap-10">
        <div className="relative flex items-center gap-1">
          <h3
            className="text-[14px] font-medium font-poppin"
            onClick={() => Navigate("public/pricing")}
          >
            Pricing and Free Trial
          </h3>
        </div>
        <div className="flex items-center gap-1">
          <h3
            className="text-[14px] font-medium font-poppin"
            onClick={() => {
              setIsOpen(!isOpen);
              setDropDownType("product");
            }}
          >
            Product
          </h3>
          {isOpen && DropDownType === "product" && (
            <div className="absolute w-[491px] h-[303px] top-31 left-150 bg-[#FFFFFF] shadow-lg rounded-lg p-4 z-10 flex flex-col gap-2">
              <div className="flex flex-col gap-5 font-poppin font-medium text-[20px] py-[24px] text-[#333333]">
                <h2>Agent Coaching & Data Analytics</h2>
                <h2>Transaction Management & E-Signature</h2>
                <h2>Back Office & Commission Management</h2>
                <h2>Recruiting & Onboarding</h2>
                <h2>Integrations</h2>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1">
          <div className="relative flex items-center gap-1">
            <div
              className="text-[14px] font-medium font-poppin"
              onClick={() => {
                setIsOpen(!isOpen);
                setDropDownType("company");
              }}
            >
              Company
            </div>
            {isOpen && DropDownType === "company" && (
              <div className="absolute top-6 left-0 bg-[#FFFFFF] w-[303px] h-[348px] font-poppin font-medium text-[20px] text-[#333333] gap-[15px] py-[24px] pl-[24px] shadow-lg rounded-lg p-4 z-10 flex flex-col">
                <Link to="/public/company">Testimonials</Link>
                <Link to="/public/Company/aboutus">About us</Link>
                <Link to="">Our Team</Link>
                <Link to="">Our Board of Directors</Link>
                <Link to="">Upcoming Events</Link>
                <Link to="">Careers</Link>
              </div>
            )}
          </div>
          <img src={ArrowDown} alt="" className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1">
          <h3 className="text-[14px] font-medium font-poppin">Resources</h3>
          <img src={ArrowDown} alt="" className="w-5 h-5" />
        </div>
        <h3 className="text-[14px] font-medium font-poppin">Demo</h3>
        <button className="w-[140px] h-[53px] text-[16px] font-poppin font-bold rounded-xl flex items-center gap-1 justify-center text-white bg-[#333333]">
          <img src={PhoneLogo} alt="" className="w-[24px] h-[24px]" />
          Contact
        </button>
      </div>
    </div>
  );
}

export default PublicDashboardNavbar;
