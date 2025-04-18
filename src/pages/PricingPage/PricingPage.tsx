import LandingLogo1 from "../../assets/icons/LandingPageLogo1.svg";
import LandingLogo2 from "../../assets/icons/LandingPageLogo2.svg";
import LandingLogo3 from "../../assets/icons/LandingPageLogo3.svg";
import LandingLogo4 from "../../assets/icons/LandingPageLogo4.svg";
import LandingLogo5 from "../../assets/icons/LandingPageLogo5.svg";
import LandingLogo6 from "../../assets/icons/LandingPageLogo6.svg";
import LandingLogo7 from "../../assets/icons/LandingPageLogo7.svg";
import PublicTestimonial from "../publicDashboard/components/PublicTestimonial";
import Bgimg from "./assets/icons/PricingBgimg.svg";
import Bgimg2 from "./assets/icons/PricingBgimg2.svg";
import LytiLogo from "./assets/icons/PricingLytiLogo.svg";

const GetPricing = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="grid grid-cols-2 relative">
        {/* Left Content with background image */}
        <div className="relative z-20 ">
          <img src={Bgimg} alt="" className="w-[100%]" />

          <div className="flex mt-[40px] flex-col">
            <div className="bg-white bg-opacity-90 flex flex-col items-start px-[30px] py-[90] rounded">
              <h5 className="text-[16px] text-[#333333] font-normal font-poppin mb-2">
                Get Pricing
              </h5>
              <h2 className="text-4xl font-poppin font-semibold mb-4">
                Get Pricing & Free Trial
              </h2>
              <h2 className="text-2xl font-poppin font-medium">
                Increase team revenue with:
              </h2>
              <ul className="list-disc pl-5 mb-[40px] font-poppin font-normal text-[20px] space-y-2">
                <li>Boost Setting And Seals Contracts</li>
                <li>Seamless Transaction Management</li>
                <li>Back Office Reporting And Commission <br /> Management</li>
                <li>New/Updated Client Portal</li>
                <li>Improved Onboarding Process</li>
                <li>Live Support 24/7</li>
              </ul>
            </div>
            <img src={Bgimg2} alt="" className="w-[100%]" />
          </div>
        </div>

        {/* Right Background */}
        <div className="bg-black w-full">
          <div className="absolute top-1/2 left-[43%] -bottom-170 transform -translate-y-1/2 w-full max-w-fit z-20">
            <div className="bg-[#E5E5E5] mt-[206px] rounded-xl flex flex-col items-center justify-center shadow-lg px-[40px] pb-[65px]">
              <div>
                <img
                  src={LytiLogo}
                  alt="Logo"
                  className="max-h-[125px] max-w-[125px] mt-[40px]"
                />
              </div>
              <p className="text-[16px] font-poppin text-center text-[#212B27] mt-[12px]">
                Let us know some basic details so that we can get pricing for
                you.
              </p>
              <form className="space-y-4 flex flex-col w-full">
                <div className="relative flex flex-col w-full">
                  <h2 className="font-poppin pb-4 font-normal text-xl mt-[10px] text-[#00000080]">
                    Email Address
                  </h2>
                  <input
                    type="email"
                    placeholder="sergio123@example.com"
                    className="w-full text-start pl-7 py-6 bg-[#FFFFFF] rounded-xl focus:outline-none"
                  />
                  <h2 className="font-poppin font-normal text-xl pt-6 pb-4 text-[#00000080]">
                    Password
                  </h2>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full py-6 pl-7 bg-[#FFFFFF] rounded-xl focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="text-nowrap w-full font-poppin font-semibold text-[24px] bg-[#333333] text-white text-center py-[17px] rounded-xl"
                >
                  Get Pricing
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center mt-[100px] mb-[20px] items-center">
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
      <PublicTestimonial onclick={false} />
      <div className="flex justify-center items-center mb-[155px]">
        <button className="font-poppin font-semibold rounded-[16px] text-[32px] w-[293px] h-[90px] bg-[#333333] text-[#F3F3F3]">
          Get Pricing
        </button>
      </div>
    </div>
  );
};

export default GetPricing;
