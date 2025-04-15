// import ProfileCard from "./ProfileCard";
// import Bgimg from "./assets/CardBgimg.svg"
// import Bgimg2 from "./assets/CardBgimg2.svg"

//   function PublicTestimonial() {

//   return (
//     <div className="w-full justify-between items-center pt-[80px] pb-[80px] ">
//       <div className="w-full px-[57px] flex items-center justify-between">
//       <div className="max-w-[380px] flex flex-col gap-[30px] font-poppin ">
//         <h1 className="font-bold text-3xl ">
//           Testimonials
//         </h1>
//         <p className="font-normal text-base text-[#000000]">
//           Hear from real clients about the success they're having streamlining and automating their business with Sisu accountability, business analytics and transaction management software.
//         </p>
//         <div className="mt-[10px] ">
//           <button className="bg-[#333333] font-poppin text-white  font-semibold pt-[12px] pr-[16px] pb-[12px] pl-[16px] rounded-[10px]">
//           Schedule Demo
//           </button>
//         </div>
//       </div>

//       <div className=" relative max-w-[45%] flex flex-col font-poppin ">

//         <div style={{backgroundImage: `url(${Bgimg})`}} className="absolute" ></div>
//         <div  className="absolute"><img src={Bgimg2} alt="" /></div>
//         <ProfileCard
//           w={"max-w-[536px]"}
//           h={"h-[]"}
//          stars={5}
//          date={"April 1, 2023"}
//          description={'I am super visual and having a clear dashboard with all the team metrics visible, helps me see where I stand on my progress. I especially like being able to see how my team is doing and what they are working on.'}
//         //  image={t.ima}
//          name={"Steve Herron"}
//        />
//       </div>
//       </div>

//     </div>
//   );
// }

// export default PublicTestimonial;
import ProfileCard from "./ProfileCard";
import Bgimg from "./assets/CardBgimg.svg";
import Bgimg2 from "./assets/CardBgimg2.svg";

function PublicTestimonial() {
  return (
    <div className="w-full justify-between items-center pt-[80px] pb-[80px]">
      <div className="w-full px-[57px] flex items-center justify-between">
        {/* Left Section */}
        <div className="max-w-[380px] flex flex-col gap-[30px] font-poppin">
          <h1 className="font-bold text-3xl">Testimonials</h1>
          <p className="font-normal text-base text-[#000000]">
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

        {/* Right Section with Background and ProfileCard */}

        <div className="relative max-w-[45%] w-full flex flex-col font-poppin min-h-[450px]">
          {/* Background Image */}

          <div
            className=" h-[350px] bg-cover bg-center -z-10"
            style={{ backgroundImage: `url(./assets/CardBgimg.svg)` }}
          >
            <div className="relative z-10">
              <ProfileCard
                w={"max-w-[536px]"}
                h={"h-auto"}
                stars={5}
                date={"April 1, 2023"}
                description={
                  "I am super visual and having a clear dashboard with all the team metrics visible, helps me see where I stand on my progress. I especially like being able to see how my team is doing and what they are working on."
                }
                name={"Steve Herron"}
              />
            </div>
          </div>
          {/* Optional Overlay/Decoration Image */}

          <div className="absolute top-0 left-0 z-0">
            <img src={Bgimg2} alt="Background Decoration" />
          </div>

          {/* Foreground Card */}
        </div>
      </div>
    </div>
  );
}

export default PublicTestimonial;
