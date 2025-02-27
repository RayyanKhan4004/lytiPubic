import CustomizableDropdown from "../common/CustomizableDropdown";
import PrimaryButton from "./button/PrimaryButton";
import CustomPopUp from "./CustomPopUp";
import { useState } from "react";
interface FilterPopupProps {
  isModelOpen: boolean;
  setIsModelOpen : any
}
function FilterPopup({ isModelOpen , setIsModelOpen }: FilterPopupProps) {
    
return <>
  {
    isModelOpen &&
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
              <div className="flex flex-row gap-4">
                {/* dropdowns */}
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="font-poppin font-normal text-[#0000001A] text-[14px] leading-[21px]">
                      Order by
                    </label>
                    <CustomizableDropdown
                      height="h-[44px]"
                      options={["Devclan", "Techify", "Lyti", "Title King"]}
                      selected={"selectedFilter"}
                      setSelected={(e) => e}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                <div>
                    <label className="font-poppin text-[#0000001A] font-normal text-[14px] leading-[21px]">
                      Order by
                    </label>
                    <CustomizableDropdown
                      height="h-[44px]"
                      options={["Devclan", "Techify", "Lyti", "Title King"]}
                      selected={"selectedFilter"}
                      setSelected={(e) => e}
                    />
                  </div>
                </div>
                {/* dropdowns end */}
              </div>
              <div>
                <PrimaryButton type="reset" text="Reset"/>
                <PrimaryButton type="submit" text="Apply Filters"/>
              </div>
            </div>
          }
        />
      
  }
  </>
}

export default FilterPopup;
