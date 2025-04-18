
import { useNavigate } from "react-router-dom";
import DotsGrid from "./DotsGrid";
import ProfileCard from "./ProfileCard";

interface PublicTestimonialProps{
  onclick:boolean;
}

function PublicTestimonial({ onclick }: PublicTestimonialProps) {
    const navigate = useNavigate();

    const handleClick = () => {
      if (onclick != false) {
        navigate("/public/company");
      }
    };
  return (
    <div className="w-full flex items-center mt-[80px] justify-center">
      <div className="w-fit justify-between flex items-center">
        <div className="max-w-[50%] flex flex-col gap-[20px] font-poppin relative self-start ">
          <div className="absolute">
            <DotsGrid />
          </div>
          <div className="w-fit">
           <h1 onClick={handleClick} className="hover:cursor-pointer font-bold z-50 relative text-3xl">Testimonials </h1> 
           </div>
          <p className="font-normal text-base w-[41ch] text-[#000000]">
            Hear from real clients about the success they're having streamlining
            and automating their business with Sisu accountability, business
            analytics and transaction management software.
          </p>
          <div className="mt-[5px]">
            <button className="bg-[#333333] font-poppin text-white font-semibold pt-[12px] pr-[16px] pb-[12px] pl-[16px] rounded-[10px]">
              Schedule Demo
            </button>
          </div>
        </div>
        <div className="relative flex flex-col font-poppin ml-[30px] mr-[30px] min-h-[450px]">
          <div className="relative  mr-[10%] ">
            <ProfileCard
              stars={4}
              date="April 1, 2023"
              name="Steve Herron"
              description="I am super visual and having a clear dashboard with all the team metrics visible, helps me see where I stand on my progress. I especially like being"
              extraComponent={
                <>
                  <div className="w-[336px] h-[206px] bg-[#33333331] absolute -top-[14%] -right-[25%] p-8  flex flex-col gap-[13px] rounded-[8px]">
                    <div className=" rounded-[8px] bg-[#E5E5E5] h-3"></div>
                    <div className=" rounded-[8px] w-[60%] bg-[#E5E5E5] h-3"></div>
                    <div className=" rounded-[8px] bg-[#E5E5E5] h-3"></div>
                  </div>
                  <div className="w-[336px] h-[206px] bg-[#33333331] absolute bottom-0 -right-[30%] p-8  flex flex-col justify-end gap-[13px] rounded-[8px]">
                    <div className=" rounded-[8px] bg-[#E5E5E5] h-3"></div>
                    <div className=" rounded-[8px] w-[60%] bg-[#E5E5E5] h-3"></div>
                    <div className=" rounded-[8px] bg-[#E5E5E5] h-3"></div>
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicTestimonial;
