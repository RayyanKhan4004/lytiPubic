// import { spawn } from "child_process";
// import React from "react";
// import Starsicon from "./assets/Starsicon.svg";
// import Googleicon from "./assets/GoogleLogo.svg";

// interface ProfileCardProps {
//   date?: string;
//   name?: string;
//   description?: string;
//   image?: any;
//   stars: number;
//   isShadow?: boolean;
//   w?: string;
//   h?: string;
// }
// function ProfileCard({
//   date,
//   name,
//   description,
//   image,
//   stars,
//   isShadow,
//   w,
//   h
// }: ProfileCardProps) {
//   return (
//     <>
//       <div
//         className={`backdrop-blur-2xl overflow-hidden  flex flex-col justify-center items-center gap-[20px] rounded-[16px] relative border border-gray-300 ${
//           w ? w : " w-[536px]"
//         }
//          ${
//           h ? h : "h-[343px]"
//         }
//         `}
//       >
//         <div className="-skew-y-[20deg] h-[90px] w-[100px] bg-gradient-to-b form-[#33333399] to-[#2D3F5033] rounded-lg p-4 absolute -top-2  left-0 -z-10"></div>
//         <span className=" absolute top-4  text-[20px]  left-8">{date}</span>
//         <div className="flex pt-[55px]  ">
//           <div className="w-full flex justify-center items-center flex-col gap-6">
//             <div className="w-full flex justify-center items-center flex-col gap-3">
//               <span className="text-[24px]">{name}</span>
//               {image ? (
//                 <img
//                   src={image}
//                   alt=""
//                   className="w-[80px] h-[80px] rounded-full"
//                 />
//               ) : (
//                 <div className="w-[80px] h-[80px] flex rounded-full bg-gray-300 text-5xl justify-center items-center text-center font-bold">
//                   <span>{name?.slice(0, 1)}</span>
//                 </div>
//               )}
//               <div className="w-[460px] text-[16px]">{description}</div>
//             </div>
//             <div className="flex justify-between items-center w-full ">
//               <div className="flex gap-2.5">
//                 {Array(Math.floor(stars))
//                   .fill(0)
//                   .map((curr, i) => (
//                     <img src={Starsicon} alt="" />
//                   ))}
//               </div>
//               <div className="text-[16px] flex gap-1">
//                 Posted on
//                 <img src={Googleicon} alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProfileCard;

// // <ProfileCard stars={4} date="April 1, 2023" name="Steve Herron" description="I am super visual and having a clear dashboard with all the team metrics visible, helps me see where I stand on my progress. I especially like being"/>
import React from "react";
import Starsicon from "./assets/Starsicon.svg";
import Googleicon from "./assets/GoogleLogo.svg";

interface ProfileCardProps {
  date?: string;
  name?: string;
  description?: string;
  image?: any;
  stars: number;
  isShadow?: boolean;
  w?: string;
  h?: string;
}

function ProfileCard({
  date,
  name,
  description,
  image,
  stars,
  isShadow,
  w,
  h
}: ProfileCardProps) {
  return (
    <div
      className={`relative bg-white/30 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg flex flex-col justify-between p-8 ${
        w ? w : "w-[33%] max-w-[480px]"
      } ${h ? h : "h-[320px]"} min-w-[320px]`}
    >
      {/* Top Row: Date and Name */}
      <div className="flex justify-between items-start text-sm">
        <span className="text-gray-600">{date}</span>
        <span className="text-gray-800 font-semibold text-lg text-right max-w-[50%] truncate">{name}</span>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center -mt-2">
        {image ? (
          <img
            src={image}
            alt=""
            className="w-[70px] h-[70px] rounded-full border-4 border-white shadow-md"
          />
        ) : (
          <div className="w-[70px] h-[70px] rounded-full bg-gray-300 text-white text-2xl flex items-center justify-center shadow-md">
            {name?.slice(0, 1)}
          </div>
        )}
      </div>

      {/* Description */}
      <div className="text-gray-700 text-[15px] leading-relaxed text-center px-2 md:px-4">
        {description}
      </div>

      {/* Bottom Row: Stars and Google Icon */}
      <div className="flex justify-between items-center mt-4 px-1 md:px-2">
        <div className="flex gap-1">
          {Array(Math.floor(stars))
            .fill(0)
            .map((_, i) => (
              <img key={i} src={Starsicon} alt="star" className="w-5 h-5" />
            ))}
        </div>
        <div className="flex items-center text-sm text-gray-600 gap-1">
          Posted on
          <img src={Googleicon} alt="google" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;