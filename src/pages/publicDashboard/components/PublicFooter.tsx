import HomeImage from "./assets/HomeImage.svg";
import LinkedinLogo from "./assets/LinkedinLogo.svg"
import FacebookLogo from "./assets/FacebookLogo.svg"
import TwitterLogo from "./assets/TwitterLogo.svg"
function PublicFooter() {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="flex items-center justify-center mb-[100px]">
          <img src={HomeImage} alt="" className="w-[1318px] h-[670px]" />
        </div>
      </div>
      <div className="w-full h-[524px] bg-[#333333] flex flex-row   justify-center"> 
        <div className="flex justify-center items-center w-full h-full">
        <div className="flex w-fit justify-center items-start gap-[100px]">
        <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-poppin text-[32px] text-[#E5E5E5] mb-3">Menu</h3>
            <ul className="flex flex-col gap-6">
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">Pricing & Free Trial</li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">Testimonials</li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">Schedule Demo</li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">About Us</li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">Careers</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-poppin text-[32px] text-[#E5E5E5] mb-3">Resources</h3>
            <ul className="flex flex-col gap-6">
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">Sisu 101: Webinar Series</li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">Sisu Knowledge Base</li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">Affiliate Login</li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">Blog</li>
                <li className="font-poppin font-normal text-[22px] leading-[100%] text-[#FFFFFF]">Podcast</li>
            </ul>
        </div>
       
        <div className="flex flex-col gap-4">
           <div className="flex flex-col">
            <h3 className="font-semibold font-poppin text-[32px] text-[#E5E5E5] mb-3">Follow Us</h3>
            <div className="flex gap-3"> 
            <img src={LinkedinLogo} alt="" className="w-[40px] h-[40px]"/>
            <img src={FacebookLogo} alt="" className="w-[40px] h-[40px]"/>
            <img src={TwitterLogo} alt="" className="w-[40px] h-[40px]"/>
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
