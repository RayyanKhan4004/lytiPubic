import ProfileCard from "./ProfileCard";


  function PublicTestimonial() {

  return (
    <div className="w-full justify-between items-center mt-[100px]">
      <div className="w-full px-[57px] justify-between flex items-start">
      <div className="testinomials-background-img w-[380px]  flex flex-col gap-[30px] font-poppin ">
        <h1 className="font-bold text-3xl ">
          Testimonials
        </h1>
        <p className="font-normal text-base text-[#000000]">
          Hear from real clients about the success they're having streamlining and automating their business with Sisu accountability, business analytics and transaction management software.
        </p>
        <div className="mt-[10px] ">
          <button className="bg-[#333333] font-poppin text-white  font-semibold pt-[12px] pr-[16px] pb-[12px] pl-[16px] rounded-[10px]">
          Schedule Demo
          </button>
        </div>
      </div>

      <div className=" relative w-[45%]  flex flex-col gap-[30px] font-poppin ">
        
        {/* <div className="absolute -top-[52px] right-[90px] w-[349px] h-[317px] bg-[#33333330] rounded-[8px] "></div>
        <div className="absolute bottom-0 right-[200px] w-[349px] h-[317px] bg-[#33333330] rounded-[8px] "></div> */}
        {/* <ProfileCard 
          w={"w-[536px]"}
          h={"h-[343px]"}
         stars={5}
         date={"April 1, 2023"}
         description={'I am super visual and having a clear dashboard with all the team metrics visible, helps me see where I stand on my progress. I especially like being able to see how my team is doing and what they are working on.'}
        //  image={t.ima}
         name={"Steve Herron"}
       /> */}
       
      </div>
      </div>
 
    </div>
  );
}

export default PublicTestimonial;
