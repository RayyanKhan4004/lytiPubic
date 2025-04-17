import PublicRetailorCards from "./PublicRetailorCards"

function PublicRealtor() {
  return (
    <div className="mx-[50px]">
    <div className="relative h-[561px]  flex  justify-center items-center mt-[80px]">
      
      <div className="absolute z-10 transform translate-x-[50%] taranslate-y-[50%] -left-[50%] h-full w-full">
      <h1 className="text-[40px] pt-[80px] md:text-3xl font-semibold font-poppin text-center">
        Sisu Keeps the Realtor at the Center of the Transaction
      </h1>
        <div className="flex justify-center items-center mt-[20px] w-full flex-col gap-[50px]">

      <PublicRetailorCards/>
        </div>
     
        </div>

    </div>
    </div>
  )
}

export default PublicRealtor
