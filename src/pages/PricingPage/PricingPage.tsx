// import LandingLogo1 from "../../assets/icons/LandingPageLogo1.svg"
// import LandingLogo2 from "../../assets/icons/LandingPageLogo2.svg"
// import LandingLogo3 from "../../assets/icons/LandingPageLogo3.svg"
// import LandingLogo4 from "../../assets/icons/LandingPageLogo4.svg"
// import LandingLogo5 from "../../assets/icons/LandingPageLogo5.svg"
// import LandingLogo6 from "../../assets/icons/LandingPageLogo6.svg"
// import LandingLogo7 from "../../assets/icons/LandingPageLogo7.svg"
// import ProfileCard from "./ProfileCard"

// export default function PricingPage() {
//   return (
//     <div className="bg-white text-gray-800 font-sans">
//       {/* Hero Section */}
//       <div className=" grid md:grid-cols-2">
//         <div className="p-20 ">
//           <h2 className="text-3xl font-bold mb-4">Get Pricing & Free Trial</h2>
//           <ul className="list-disc pl-5 space-y-2">
//             <li>Boost Setting And Seals Contracts</li>
//             <li>Seamless Transaction Management</li>
//             <li>Back Office Reporting And Commission Management</li>
//             <li>New/Updated Client Portal</li>
//             <li>Improved Onboarding Process</li>
//             <li>Live Support 24/7</li>
//           </ul>
//         </div>
//         <div className="w-50% bg-black pb-[50px] pt-[50px]">
//         <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto">
//           <div className="text-center mb-4">
//             <img src="/logo.png" alt="Logo" className="mx-auto h-10" />
//             <h3 className="text-lg font-semibold mt-2">LYTI</h3>
//           </div>
//           <form className="space-y-4">
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
//             />
//             <button
//               type="submit"
//               className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700"
//             >
//               Get Pricing
//             </button>
//           </form>
//         </div>
//       </div>
//       </div>

//       {/* Brands Section */}
//       <div className="text-center py-12">
//       <div className="flex justify-center mb-[20px] items-center">
//         <h1 className="font-poppin text-4xl font-semibold">
//           Trusted by over 7000 of the top teams & brokerages
//         </h1>
//       </div>
//         <div className="p-15">
//       <div className="flex justify-between border-t-2 p-4 border-gray-200 border-b-2">
//         <img src={LandingLogo1} alt="" />
//         <img src={LandingLogo2} alt="" />
//         <img src={LandingLogo3} alt="" />
//         <img src={LandingLogo4} alt="" />
//         <img src={LandingLogo5} alt="" />
//         <img src={LandingLogo6} alt="" />
//         <img src={LandingLogo7} alt="" />
//       </div>
//       </div>
//       </div>

//       {/* Testimonials Section */}
      
//       <div className="bg-white py-12 px-6 md:px-20">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-10">
//           <div className="md:w-1/2">
//             <h5 className="text-3xl font-bold mb-2">Testimonials</h5>
//             <p className="text-gray-600 mb-4 max-w-md">
//               Hear from real clients about the success they’re having streamlining and automating their business with Sisu accountability, business analytics and transaction management software.
//             </p>
//             <button className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-900">
//               Schedule Demo
//             </button>
//           </div>

//           <div className="md:w-1/2 relative flex justify-center">
//             {/* Background cards */}
//             <div className="absolute top-10 left-10 w-80 h-44 bg-gray-200 rounded-xl shadow-md z-0"></div>
//             <div className="absolute top-20 left-20 w-80 h-44 bg-gray-100 rounded-xl shadow-md z-0"></div>

//             {/* Main testimonial card with blur */}
//              <div className="relative backdrop-blur-md bg-white/70 p-6 rounded-xl shadow-xl z-10 max-w-sm w-full">
//               <p className="text-sm text-gray-500 mb-2">April 1, 2023</p>
//               <h6 className="font-bold text-lg">STEVE HERRON</h6>
//               <div className="my-3 flex justify-center">
//                 <img
//                   src="/steve-avatar.png"
//                   alt="Steve Herron"
//                   className="w-14 h-14 rounded-full border-2 border-white shadow-md"
//                 />
//               </div>
//               <p className="text-gray-700 text-sm mb-3">
//                 I Am Super Visual And Having A Clear Dashboard With All The Team Metrics Visible, Helps Me See Where I Stand On My Progress. I Especially Like Being
//               </p>
//               <div className="flex mb-2">
//                 {[...Array(4)].map((_, i) => (
//                   <span key={i} className="text-yellow-500 text-lg">★</span>
//                 ))}
//                 <span className="text-yellow-300 text-lg">★</span>
//               </div>
//               <p className="text-xs text-right text-gray-500">
//                 Posted On <span className="text-blue-500 font-semibold">Google</span>
//               </p>
//             </div> 
//           </div>
//         </div>
//       </div>

//       {/* CTA Button */}
//       <div className="text-center py-10">
//         <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 text-lg">
//           Get Pricing
//         </button>
//       </div>
//     </div>
//   );
// }
import Bgimg from "./assets/icons/PricingBgimg.svg"
import Bgimg2 from "./assets/icons/PricingBgimg2.svg"
import LytiLogo from "./assets/icons/PricingLytiLogo.svg"

const GetPricing = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="grid grid-cols-2 relative">
        {/* Left Content with background image */}
        <div
          className="relative z-20 ">
          <img src={Bgimg} alt="" />
            <div className="flex flex-col pl-[70px] pt-[96px] pb-[80px]">
            <div className="bg-white bg-opacity-90 flex flex-col items-start rounded">
            <h5 className="text-[16px] text-[#333333] font-normal font-poppin mb-2">Get Pricing</h5>
            <h2 className="text-4xl font-poppin font-semibold mb-4">Get Pricing & Free Trial</h2>
            <h2 className="text-2xl font-poppin font-medium">Increase team revenue with:</h2>
            <ul className="list-disc pl-5 font-poppin font-normal text-[20px] space-y-2">
              <li>Boost Setting And Seals Contracts</li>
              <li>Seamless Transaction Management</li>
              <li>Back Office Reporting And Commission Management</li>
              <li>New/Updated Client Portal</li>
              <li>Improved Onboarding Process</li>
              <li>Live Support 24/7</li>
            </ul>
            </div>           
            <img src={Bgimg2} alt="" />
            
          </div>
        </div>

        {/* Right Background */}
        <div className="bg-black">
        
        {/* Floating Form Positioned Overlap */}
        <div
          className="absolute top-1/2 left-[45%] transform -translate-y-1/2 w-[40%] z-20"
        >
          <div className="bg-[#E5E5E5] mt-[206px] rounded-xl flex flex-col items-center justify-center w-[650px] shadow-lg p-8">
            <div>
              <img src={LytiLogo} alt="Logo" className=" h-[125px] w-[125px] mt-[40px]" />
            </div>
            <p className="text-[16px] font-poppin ml-[63px] mr-[63px] text-nowrap text-center text-[#212B27] mt-[12px]">
              Let us know some basic details so that we can get pricing for you.
            </p>
            <form className="space-y-4">
              <h2 className="font-poppin font-normal text-xl mt-[10px] text-[#00000080]">Email Address</h2>
              <input
                type="email"
                placeholder="sergio123@example.com"
                className="pl-[23px] pr-[365px] text-start py-6 bg-[#FFFFFF] rounded-xl focus:outline-none"
              />
              <div className="relative">
                <h2 className="font-poppin font-normal text-xl pt-6 pb-4 text-[#00000080]">Password</h2>
                <input
                  type="password"
                  placeholder="Password"
                  className="pl-[23px] pr-[365px] py-6 bg-[#FFFFFF] rounded-xl focus:outline-none"
                />
              </div>
              <div className="flex items-center justify-center">
              <button
                type="submit"
                className="mt-[60px] mb-[85px] font-poppin font-semibold text-[24px] pl-[197px] pr-[197px] pt-[17px] pb-[17px] bg-[#333333] text-white py-2 rounded-xl"
              >
                Get Pricing
              </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPricing;
