import CustomizableDropdown from "../common/CustomizableDropdown";
import PrimaryButton from "./button/PrimaryButton";
import CustomPopUp from "./CustomPopUp";
interface FilterPopupProps {
  isModelOpen: boolean;
  setIsModelOpen : any
}
function FilterPopup({ isModelOpen , setIsModelOpen }: FilterPopupProps) {
    
return (
  <>
    {isModelOpen && (
      <CustomPopUp
        position="right"
        openModel={isModelOpen}
        setOpenModel={setIsModelOpen}
        children={
          <div className="pt-8 px-6 font-poppin flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-2xl leading-[36px] text-(--primary)">
                Filters
              </h3>
            </div>
            <div className="flex flex-row gap-4 justify-between w-full">
              {/* dropdowns */}
              <div className="flex flex-col gap-4">
                <div className=" flex flex-col">
                 <div className="gap-2">
                    <label className="font-poppin font-normal text-[#0000001A] text-[14px] leading-[21px] ">
                      Order by
                    </label>
                    <CustomizableDropdown
                      height="h-[55px]"
                      width="w-[318px]"
                      options={["Devclan", "Techify", "Lyti", "Title King"]}
                      selected={"selectedFilter"}
                      setSelected={(e) => e}
                    />
                  </div>
                 <div className="gap-2">
                    <label className="font-poppin font-normal text-[#0000001A] text-[14px] leading-[21px] ">
                      Order by
                    </label>
                    <CustomizableDropdown
                      height="h-[55px]"
                      width="w-[318px]"
                      options={["Devclan", "Techify", "Lyti", "Title King"]}
                      selected={"selectedFilter"}
                      setSelected={(e) => e}
                    />
                  </div>
                 <div className="gap-2">
                    <label className="font-poppin font-normal text-[#0000001A] text-[14px] leading-[21px] ">
                      Order by
                    </label>
                    <CustomizableDropdown
                      height="h-[55px]"
                      width="w-[318px]"
                      options={["Devclan", "Techify", "Lyti", "Title King"]}
                      selected={"selectedFilter"}
                      setSelected={(e) => e}
                    />
                  </div>
                 <div className="gap-2">
                    <label className="font-poppin font-normal text-[#0000001A] text-[14px] leading-[21px] ">
                      Order by
                    </label>
                    <CustomizableDropdown
                      height="h-[55px]"
                      width="w-[318px]"
                      options={["Devclan", "Techify", "Lyti", "Title King"]}
                      selected={"selectedFilter"}
                      setSelected={(e) => e}
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col gap-4">
                <div className=" flex flex-col">
                  <div className="gap-2">
                    <label className="font-poppin font-normal text-[#0000001A] text-[14px] leading-[21px] ">
                      Order by
                    </label>
                    <CustomizableDropdown
                      height="h-[55px]"
                      width="w-[318px]"
                      options={["Devclan", "Techify", "Lyti", "Title King"]}
                      selected={"selectedFilter"}
                      setSelected={(e) => e}
                    />
                  </div>
                 <div className="gap-2">
                    <label className="font-poppin font-normal text-[#0000001A] text-[14px] leading-[21px] ">
                      Order by
                    </label>
                    <CustomizableDropdown
                      height="h-[55px]"
                      width="w-[318px]"
                      options={["Devclan", "Techify", "Lyti", "Title King"]}
                      selected={"selectedFilter"}
                      setSelected={(e) => e}
                    />
                  </div>
                 <div className="gap-2">
                    <label className="font-poppin font-normal text-[#0000001A] text-[14px] leading-[21px] ">
                      Order by
                    </label>
                    <CustomizableDropdown
                      height="h-[55px]"
                      width="w-[318px]"
                      options={["Devclan", "Techify", "Lyti", "Title King"]}
                      selected={"selectedFilter"}
                      setSelected={(e) => e}
                    />
                  </div>
                 <div className="gap-2">
                    <label className="font-poppin font-normal text-[#0000001A] text-[14px] leading-[21px] ">
                      Order by
                    </label>
                    <CustomizableDropdown
                      height="h-[55px]"
                      width="w-[318px]"
                      options={["Devclan", "Techify", "Lyti", "Title King"]}
                      selected={"selectedFilter"}
                      setSelected={(e) => e}
                    />
                  </div>
                </div>
              </div>
              {/* dropdowns end */}
            </div>
            <div className="flex flex-row justify-end gap-4">
              <button
                type="reset"
                className=" text-(--greyText) bg-[#F3F3F3] rounded-[8px] font-poppin font-semibold text-[14px] leading-[21px] px-8"
              >
                Reset
              </button>
              <PrimaryButton type="submit" text="Apply Filters" />
            </div>
          </div>
        }
      />
    )}
  </>
);
}

export default FilterPopup;
