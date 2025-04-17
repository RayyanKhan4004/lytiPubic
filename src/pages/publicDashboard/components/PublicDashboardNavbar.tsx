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
    <div className="flex items-center justify-between bg-white  w-full p-4.5 font-poppin">
      <img
        src={LytiLogo}
        alt="LytiLogo"
        className="w-[100px] h-[100px] font-medium text-base"
      onClick={() => Navigate("/public")}
      />

      <div className="flex items-center gap-10">
        <div className="relative flex items-center gap-1">

        <h3 className="text-[14px] font-medium font-poppin" 
       onClick={() =>{ setIsOpen(!isOpen); setDropDownType("pricing")}}>
          Pricing and Free Trial
          {isOpen && DropDownType === "pricing" &&  <div className="absolute top-6 left-0 bg-white shadow-lg rounded-lg p-4 z-10 flex flex-col gap-2">
          <Link  to="/public/pricing">pricing</Link>
          </div>}
        </h3>
        </div>
        <div className="flex items-center gap-1">
          <Link to="/public/products" className="text-[14px] font-medium font-poppin">Product</Link>
          {/* <img src={ArrowDown} alt="" className="w-5 h-5" /> */}
          {/* <CustomizableDropdown
          customBorder={"border-0"}
          options={["Product", "Product 2", "Product 3"]}
          selected={`Product`}
          setSelected={() => ""}
          width="w-60"
        /> */}

        </div>
        <div className="flex items-center gap-1">
          <div className="relative flex items-center gap-1">
          <div className="text-[14px] font-medium font-poppin"
          onClick={() =>{ setIsOpen(!isOpen); setDropDownType("company")}}>
          Company</div>
        {isOpen && DropDownType === "company" &&  <div className="absolute top-6 left-0 bg-white shadow-lg rounded-lg p-4 z-10 flex flex-col gap-2">
          <Link  to="/public/company">company</Link>
          <Link  to="/public/Company/aboutus">About us</Link>
          <Link  to="/public/Company/aboutus">About us</Link>

          <Link  to="/public/company/news">news</Link>
          </div>}
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
