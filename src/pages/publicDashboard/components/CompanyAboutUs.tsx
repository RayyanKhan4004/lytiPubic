// import Bgimg from "./assets/AboutUsBgimg.svg";
// import PublicDashboardNavbar from "./PublicDashboardNavbar";
// import Footerimg from "./assets/ConmpanyFooterimg.svg";

// function CompanyAboutUs() {
//   return (
//     <div className="">
//       <div className="flex justify-between">
//       <div className="relative text-nowrap flex mt-[42px]">
//         <div className="absolute top-4 left-14 ">
//           <h1 className="text-[#000000] font-poppin font-semibold text-6xl">About Us</h1>
//         </div>
//         <div>
//           <img src={Bgimg} alt="" className=" h-[349px]" />
//         </div>
//       </div>
//       <div className="absolute flex justify-end h-[750px] w-[830px]">
//           <p>
//             Sisu is a Finnish concept that means bravery, determination, grit,
//             courage, and resilience, and was founded to elevate the real estate
//             industry.Years ago when the founder of Sisu entered the real estate
//             industry as a new agent, he noticed the leaders in the field; the
//             ones who seemed to magically have constant success when others did
//             not, were the 10% who achieved 90% of the results. Motivated by
//             their success, he decided to find out what made them successful.He
//             found that the majority used coaches to help them stay accountable,
//             so he chose to do the same. Every Tuesday for 30 minutes he reported
//             his numbers to an experienced coach who helped him analyze his
//             activities, progress, and goals. This process held him accountable
//             and spurred a ma ssive growth in his sales. This idea of goal
//             setting and accountability planted a seed which eventually grew into
//             the Sisu platform.Sisu was developed as a tool to simplify the
//             tracking of sales metrics, provide critical analysis of those
//             numbers, and gamify the entire real estate sales experience. We have
//             evolved to provide a central hub of real estate transactions -
//             consolidating disparate systems into one common view, a full
//             transaction and back office management solution from open to close,
//             providing a powerful collaboration tool for realtors their mortgage
//             and title partners and importantly a client portal for
//             consumers.While we love motivating and managing by data, our passion
//             lies in motivating sales teams by encouraging healthy competition
//             and accountability. We want all of our customers to reach their
//             goals by understanding exactly what is needed in order to do so.
//             Every sales environment could use more grit, determination,
//             perseverance, and courage.
//           </p>
//         </div>
//     </div>

//     </div>
//   );
// }

// export default CompanyAboutUs;
import Bgimg from "./assets/AboutUsBgimg.svg";
import PublicDashboardNavbar from "./PublicDashboardNavbar";
import Footerimg from "./assets/ConmpanyFooterimg.svg";
function CompanyAboutUs() {
  return (
    <div className="max-w-[1200px]">
      <PublicDashboardNavbar />
      <div className="flex">
        {/* Left Side: Image and Heading */}
        <div className="relative w-[40%]">
          <div className="relative text-nowrap">
            <div className="absolute top-16 left-14 ">
              <h1 className="text-[#000000] font-poppin font-semibold text-6xl">
                About Us
              </h1>
            </div>
            <div className="mt-[42px]">
              <img src={Bgimg} alt="" className=" h-[349px]" />
            </div>
          </div>
        </div>

        {/* Right Side: Paragraph */}
        <div className="w-[531px] absolute right-[50px] mt-[50px] ">
          <p className="font-poppin font-normal text-justify text-[16px] ">
            Sisu is a Finnish concept that means bravery, determination, grit,
            courage, and resilience, and was founded to elevate the real estate
            industry.Years ago when the founder of Sisu entered the real estate
            industry as a new agent, he noticed the leaders in the field; the
            ones who seemed to magically have constant success when others did
            not, were the 10% who achieved 90% of the results. Motivated by
            their success, he decided to find out what made them successful.He
            found that the majority used coaches to help them stay accountable,
            so he chose to do the same. Every Tuesday for 30 minutes he reported
            his numbers to an experienced coach who helped him analyze his
            activities, progress, and goals. This process held him accountable
            and spurred a ma ssive growth in his sales. This idea of goal
            setting and accountability planted a seed which eventually grew into
            the Sisu platform.Sisu was developed as a tool to simplify the
            tracking of sales metrics, provide critical analysis of those
            numbers, and gamify the entire real estate sales experience. We have
            evolved to provide a central hub of real estate transactions -
            consolidating disparate systems into one common view, a full
            transaction and back office management solution from open to close,
            providing a powerful collaboration tool for realtors their mortgage
            and title partners and importantly a client portal for
            consumers.While we love motivating and managing by data, our passion
            lies in motivating sales teams by encouraging healthy competition
            and accountability. We want all of our customers to reach their
            goals by understanding exactly what is needed in order to do so.
            Every sales environment could use more grit, determination,
            perseverance, and courage.
          </p>
        </div>
      </div>
      <img src={Footerimg} alt="" className="relative bottom-0" />
    </div>
  );
}

export default CompanyAboutUs;

