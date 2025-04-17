import PhoneLogo from "../../../assets/icons/PhoneLogo.svg";
import LytiLogo from "../../../assets/icons/LytiLogo.svg";
import ArrowDown from "./assets/ArrowDown.svg";
import CustomizableDropdown from "../../../components/common/CustomizableDropdown";
function PublicDashboardNavbar() {
  return (
    <div className="flex items-center justify-between bg-white  w-full p-4.5 font-poppin">
      <img
        src={LytiLogo}
        alt="LytiLogo"
        className="w-[100px] h-[100px] font-medium text-base"
      />

      <div className="flex items-center gap-10">
        <h3 className="text-[14px] font-medium font-poppin">
          Pricing and Free Trial
        </h3>
        <div className="flex items-center gap-1">
          <h3 className="text-[14px] font-medium font-poppin">Product</h3>
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
          <h3 className="text-[14px] font-medium font-poppin">Company</h3>
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
