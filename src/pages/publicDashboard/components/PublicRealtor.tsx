import PublicRetailorCards from "./PublicRetailorCards"
import BoxesImage from "./assets/PublicRealtorBackground.svg"

function PublicRealtor() {
  return (
    <div>
    <div className="relative h-[561px] bg-amber-900s">
        <img src={BoxesImage} alt="" className="z-0 absolute transform translate-x-[50%] taranslate-y-[50%] right-[50%] overflow-hidden " />
      <div className="absolute z-10 transform translate-x-[50%] taranslate-y-[50%] -left-[50%] h-full w-full">
      <h1 className="text-[40px] md:text-3xl font-semibold font-poppin text-center">
        Sisu Keeps the Realtor at the Center of the Transaction
      </h1>
        <div className="flex justify-center items-center h-full w-full flex-col gap-[50px]">

      <PublicRetailorCards/>
        </div>
     
        </div>

    </div>
    </div>
  )
}

export default PublicRealtor
