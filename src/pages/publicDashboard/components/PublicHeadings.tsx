import LandingLogo1 from "../../../assets/icons/LandingPageLogo1.svg";
import LandingLogo2 from "../../../assets/icons/LandingPageLogo2.svg";
import LandingLogo3 from "../../../assets/icons/LandingPageLogo3.svg";
import LandingLogo4 from "../../../assets/icons/LandingPageLogo4.svg";
import LandingLogo5 from "../../../assets/icons/LandingPageLogo5.svg";
import LandingLogo6 from "../../../assets/icons/LandingPageLogo6.svg";
import LandingLogo7 from "../../../assets/icons/LandingPageLogo7.svg";
function PublicHeadings() {
  return (
    <div>
      <div className="flex justify-center mb-[20px] items-center">
        <h1 className="font-poppin text-[36px] font-semibold">
          Trusted by over 7000 of the top teams & brokerages
        </h1>
      </div>
      <div className="p-15">
      <div className="flex justify-between border-t-2 p-4 border-gray-200 border-b-2">
        <img src={LandingLogo1} alt="" className="w-[109px] h-[62px]" />
        <img src={LandingLogo2} alt="" className="w-[109px] h-[62px]" />
        <img src={LandingLogo3} alt="" className="w-[109px] h-[62px]" />
        <img src={LandingLogo4} alt="" className="w-[109px] h-[62px]" />
        <img src={LandingLogo5} alt="" className="w-[109px] h-[62px]" />
        <img src={LandingLogo6} alt="" className="w-[109px] h-[62px]" />
        <img src={LandingLogo7} alt="" className="w-[109px] h-[62px]" />
      </div>
      </div>
    </div>
  );
}

export default PublicHeadings;
