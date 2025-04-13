import HomeImage from "../../publicDashboard/components/assets/HomeImage.svg";
import LinkedinLogo from "../../publicDashboard/components/assets/LinkedInLogo.svg";
import FacebookLogo from "../../publicDashboard/components/assets/FacebookLogo.svg";
import TwitterLogo from "../../publicDashboard/components/assets/TwitterLogo.svg";
function PublicFooter() {
  return (
    <div>
      <div className="w-full flex justify-center pl-[60px] pr-[60px] ">
        <div className="flex items-center justify-center">
          <img src={HomeImage} alt="" className="w-[1318px] h-[670px]" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pb-[26px] pt-[80px] pl-[80px] pr-[80px]">
        <h1 className="font-poppin font-semibold text-4xl text-[#000000]">
          Talk to a professional
        </h1>
        <p className="font-poppin font-normal text-[20px] text-[#000000]">
          You’re busy. The best way to get a feel for Sisu is to hop on a demo
          with one of our experienced account executives. They’ve worked with
          hundreds of teams to help them evaluate Sisu. You’ll walk away with a
          customized set of information that helps you evaluate exactly what to
          do next. It might be using our platform, it might be a free trial to
          test it out, or it might be moving in a different direction. Either
          way, you’ll get to that decision as quickly as possible so that you
          can keep moving.
        </p>
        <button className="pt-3 pb-3 pl-4 pr-4 bg-[#333333] rounded-[10px] text-xl font-poppin font-semibold text-[#F3F3F3]">
          Schedule Demo
        </button>
      </div>

      <div className="w-full h-[524px] bg-[#333333] flex flex-row   justify-center">
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex w-fit justify-center items-start gap-[100px]">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold font-poppin text-[32px] text-[#E5E5E5] mb-3">
                Menu
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">
                  Pricing & Free Trial
                </li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">
                  Testimonials
                </li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">
                  Schedule Demo
                </li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">
                  About Us
                </li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">
                  Careers
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold font-poppin text-[32px] text-[#E5E5E5] mb-3">
                Resources
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">
                  Sisu 101: Webinar Series
                </li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">
                  Sisu Knowledge Base
                </li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">
                  Affiliate Login
                </li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">
                  Blog
                </li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">
                  Podcast
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h3 className="font-semibold font-poppin text-[32px] text-[#E5E5E5] mb-3">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <img
                    src={LinkedinLogo}
                    alt=""
                    className="w-[40px] h-[40px]"
                  />
                  <img
                    src={FacebookLogo}
                    alt=""
                    className="w-[40px] h-[40px]"
                  />
                  <img src={TwitterLogo} alt="" className="w-[40px] h-[40px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicFooter;
