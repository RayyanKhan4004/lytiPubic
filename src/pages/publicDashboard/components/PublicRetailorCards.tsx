// import BoxesImage from "./assets/Boxesimg.svg";
// function PublicRetailorCards() {
//   return (
//     <div>
//       <div className="flex flex-col items-center gap-[20px]">
//         <h1 className="font-poppin font-semibold text-[40px] text-black">
//           Sisu Keeps the Realtor at the Center of the Transaction
//         </h1>
//       </div>
//       <div className="flex flex-col gap-0 justify-center items-center">
//         <div className="w-[10px] bg-[#D9D9D9] h-[450px]"></div>
//         <div className="h-[250px] w-[300px] bg-white gap-[40px] flex justify-center items-center flex-col  shadow-2xl">
//           <img src={BoxesImage} alt="" />
//           <p>
//             Transaction Management <br /> Software Redefined
//           </p>
//           <button className="bg-[#333333] pt-[12px] pb-[12px] pl-[16px] pr-[16px] text-white">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PublicRetailorCards;
import BoxesImagebg from "./assets/PublicRealtorBackground.svg"

import BoxesImage from "./assets/Boxesimg.svg";
const cardData = [1, 2, 3, 4, 5];

export default function SisuTransactionCenter() {
  return (
    <div
      className="  flex flex-col items-center justify-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <img src={BoxesImagebg} alt="" className="z-0 absolute transform translate-x-[50%] taranslate-y-[50%] right-[50%] overflow-hidden " />
        {cardData.map((_, index) => (
          <div className="flex flex-col items-center z-10">
          <div className={`bg-[#D9D9D9] w-1 ${index % 2 === 1 ? "h-[200px]" : 'h-[400px]' }`} > </div>
          <div className=" bg-gradient-to-r from-white via-50% via-[#0f0f0f52] to-white rounded-xl shadow-lg !w-[250px] !h-[300px]">
          <div
            key={index}
            className="bg-white gap-6 rounded-xl  py-[36px] flex flex-col items-center justify-center mt-1 text-center h-[calc(100% - 8px )]"
          >
            <div className="w-[full] flex justify-center items-center h-[100%] bg-white ">
               <img
                src={BoxesImage}
                alt="Icon"
                width={72}
                height={72}
                className=""
              />
            </div>
            <p className="text-[16px] font-Inter text-[#2D3F50] font-medium ">
            Transaction Management Software Redefined
            </p>
            <button className="bg-[#333333] font-poppin font-semibold text-[20px] text-[#F3F3F3] px-4  py-3 rounded-md text-sm">
              Learn More
            </button>
          </div>

          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

