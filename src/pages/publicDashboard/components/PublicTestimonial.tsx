import DotsGrid from "./DotsGrid";
import ProfileCard from "./ProfileCard";
import Bgimg from "./assets/CardBgimg.svg";
// import Bgimg2 from "./assets/CardBgimg2.svg";

function PublicTestimonial() {
  return (
    <div className="w-full flex items-center my-[80px] justify-center">
      <div className="w-fit justify-between px-[57px] flex items-center  ">
        <div className="max-w-[50%] flex flex-col gap-[30px] font-poppin relative self-start ">
        <div className="absolute ">  <DotsGrid/></div>
          <h1 className="font-bold text-3xl">Testimonials</h1>
          <p className="font-normal text-base w-[41ch] text-[#000000]">
            Hear from real clients about the success they're having streamlining
            and automating their business with Sisu accountability, business
            analytics and transaction management software.
          </p>
          <div className="mt-[10px]">
            <button className="bg-[#333333] font-poppin text-white font-semibold pt-[12px] pr-[16px] pb-[12px] pl-[16px] rounded-[10px]">
              Schedule Demo
            </button>
          </div>
        </div>
        <div className="relative flex flex-col font-poppin ml-[60px] mr-[10%] min-h-[450px]">
          <div className="relative  mr-[10%] ">

            <ProfileCard
              stars={4}
              date="April 1, 2023"
              name="Steve Herron"
              description="I am super visual and having a clear dashboard with all the team metrics visible, helps me see where I stand on my progress. I especially like being"
           extraComponent={<>
            <div className="w-[336px] h-[206px] bg-[#33333331] absolute -top-[14%] -right-[25%] p-8  flex flex-col gap-[13px] rounded-[8px]">
            <div className=" rounded-[8px] bg-[#E5E5E5] h-3"></div>
            <div className=" rounded-[8px] w-[60%] bg-[#E5E5E5] h-3"></div>
            <div className=" rounded-[8px] bg-[#E5E5E5] h-3"></div>
          </div>
          <div className="w-[336px] h-[206px] bg-[#33333331] absolute bottom-0 -right-[30%] p-8  flex flex-col justify-end gap-[13px] rounded-[8px]">
            <div className=" rounded-[8px] bg-[#E5E5E5] h-3"></div>
            <div className=" rounded-[8px] w-[60%] bg-[#E5E5E5] h-3"></div>
            <div className=" rounded-[8px] bg-[#E5E5E5] h-3"></div>
          </div></>
           }
           />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicTestimonial;
