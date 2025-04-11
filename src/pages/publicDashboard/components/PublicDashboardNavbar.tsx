import PhoneLogo from "../../../assets/icons/PhoneLogo.svg";
import LytiLogo from "../../../assets/icons/LytiLogo.svg";
function PublicDashboardNavbar() {
  return (
    <div className="flex items-center justify-between bg-white  w-full p-4.5 font-poppin">
      <img
        src={LytiLogo}
        alt="LytiLogo"
        className="w-[60px] h-[60px] font-medium text-base"
      />
      <h3>Pricing and Free Trial</h3>
      <h3>Product</h3>
      <h3>Company</h3>
      <h3>Resources</h3>
      <h3>Demo</h3>
      <button className="p-4 rounded-xl flex items-center gap-1 justify-center text-white bg-[#333333]">
        <img src={PhoneLogo} alt="" className="w-6 h-6" />
        Contact
      </button>
    </div>
  );
}

export default PublicDashboardNavbar;
