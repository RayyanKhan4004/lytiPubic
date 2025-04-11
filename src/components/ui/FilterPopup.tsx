import { useForm } from "react-hook-form";
import { OrderDataType } from "../../utils/types";
import SelectField from "../inputs/SelectField";
import MainTitle from "./typography/MainTitle";
import { useOptionsAddNew } from "../../utils/options";
import { AiOutlineClose } from "react-icons/ai";

interface CombinedPopupProps {
  isModelOpen: boolean;
  setIsModelOpen: (value: boolean) => void;
}

const CombinedFilterPopup = ({
  isModelOpen,
  setIsModelOpen,
}: CombinedPopupProps) => {
  const {
    formState: { errors },
    reset,
    control,
  } = useForm<OrderDataType>();

  const { agentsOption } = useOptionsAddNew();

  const handleReset = () => {
    reset();
    setIsModelOpen(false);
  };

  const handleApplyFilters = () => {
    // Your filter logic here if needed
    setIsModelOpen(false);
  };

  if (!isModelOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 w-screen h-screen flex items-center justify-end z-50">
      <div className="bg-white rounded-[16px] max-w-[700px] w-[90%] h-full overflow-y-auto shadow-xl animate-slide-in-right relative">
        <button
          onClick={() => setIsModelOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
        >
          <AiOutlineClose />
        </button>

        <div className="pt-8 px-6 font-poppin flex flex-col gap-6">
          <MainTitle title="Filters" />
          <form>
            <SelectField
              label="Agent"
              name="userId"
              control={control}
              options={agentsOption}
              placeholder="Select..."
              error={errors.userId?.message}
              required={false}
            />
          </form>
          <div className="flex flex-row justify-end gap-4 h-10">
            <button
              type="button"
              onClick={handleReset}
              className="text-gray-500 bg-[#F3F3F3] rounded-[8px] font-poppin font-semibold text-[14px] leading-[21px] px-8"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleApplyFilters}
              className="text-white bg-(--secondary) rounded-[8px] font-poppin font-semibold text-[14px] leading-[21px] px-8"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedFilterPopup;
