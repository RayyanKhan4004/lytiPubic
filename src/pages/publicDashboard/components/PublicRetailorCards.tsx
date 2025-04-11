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

import BoxesImage from "./assets/Boxesimg.svg";
const cardData = [1, 2, 3, 4, 5];

export default function SisuTransactionCenter() {
  return (
    <div
      className="  flex flex-col items-center justify-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cardData.map((_, index) => (
          <div
            key={index}
            className="bg-white gap-[40px] rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center"
          >
            <div className="w-full h-[100%]">
               <img
                src={BoxesImage}
                alt="Icon"
                width={48}
                height={48}
              />
            </div>
            <p className="text-lg font-Inter text-[#2D3F50] font-medium mb-4">
              Transaction Management <br /> Software Redefined
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

