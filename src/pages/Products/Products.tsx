import PhoneLogo from "../../assets/icons/PhoneLogo.svg";
import LytiLogo from "../../assets/icons/LytiLogo.svg";
import ArrowDown from "../publicDashboard/components/assets/ArrowDown.svg";

function Products() {
  return (
    <>
    <div className="flex items-center justify-between bg-white  w-full p-4.5 font-poppin">
      <img
        src={LytiLogo}
        alt="LytiLogo"
        className="w-[60px] h-[60px] font-medium text-base"
      />

      <div className="flex items-center gap-10">
        <h3>Pricing and Free Trial</h3>
        <div className="flex items-center gap-1">
          <h3>Product</h3>
          <img src={ArrowDown} alt="" className="w-4.5 h-4.5" />
        </div>
        <div className="flex items-center gap-1">
          <h3>Company</h3>
          <img src={ArrowDown} alt="" className="w-4.5 h-4.5" />
        </div>
        <div className="flex items-center gap-1">
          <h3>Resources</h3>
          <img src={ArrowDown} alt="" className="w-4.5 h-4.5" />
        </div>
        <h3>Demo</h3>
        <button className="p-4 rounded-xl flex items-center gap-1 justify-center text-white bg-[#333333]">
          <img src={PhoneLogo} alt="" className="w-6 h-6" />
          Contact
        </button>
      </div>
    </div>
    <div className="flex items-center justify-center w-full p-[80px] font-semibold text-4xl font-poppin">
            <h1>Build, Coach and Scale a Profitable Real Estate</h1>
        </div>
    </>
  );
}

export default Products;
