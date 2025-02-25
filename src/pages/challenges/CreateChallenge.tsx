import { Controller, useForm } from "react-hook-form";
import Breadcrumb from "../../components/common/BreadCrumb";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";
interface FormValues {
  challengeName: string;
  scope: string;
}
const CreateChallenge = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<FormValues>();

  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Challenges", "Create New Challenge"]} />
      <div className="w-full flex justify-between my-6">
        <div className="flex flex-col gap-5 w-[48%]">
          <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full p-4 flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-(--primary)">Scope</h2>
            <p className="text-(--greyText) text-sm leading-[24px]">
              Challenges can be run at different levels or scope . An
              organization is a collection of teams. A team is a collection of
              agents. A group is a collection of team agents.
            </p>
          </div>

          <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full p-4 flex flex-col gap-5">
            <h2 className="text-lg font-semibold text-(--primary)">
              Challenge Type
            </h2>

            <div className=" w-full flex flex-col gap-2">
              <h2 className="text-lg font-medium text-(--primary)">Race</h2>
              <p className="text-(--greyText) text-sm leading-[24px]">
                This challenge type pushes agents to be the top performer in the
                selected category. You select a point value for 1st, 2nd, and
                3rd, and it's a race to see who can produce the most.
              </p>
            </div>
            <div className=" w-full flex flex-col gap-2">
              <h2 className="text-lg font-medium text-(--primary)">
                Everybody Wins
              </h2>
              <p className="text-(--greyText) text-sm leading-[24px]">
                Everybody Wins. This challenge type gives everybody a chance to
                win. You set a threshold and any agent who exceeds that
                threshold is awarded points (For example, everyone who does at
                least 100 contacts is awarded points). You set the point value
                you want to be awarded. TIP: Set up recurring threshold
                challenges for metrics you want met every single month.
              </p>
            </div>
            <div className=" w-full flex flex-col gap-2">
              <h2 className="text-lg font-medium text-(--primary)">Per-Unit</h2>
              <p className="text-(--greyText) text-sm leading-[24px]">
                This challenge type awards agents on a per-unit basis. You can
                define the point value of each unit, and points are awarded
                accordingly (For example, every contact is worth 100 points or
                every appointment is worth 1000 points).
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[48%]">
          <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full p-4 flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-(--primary)">
              Create New Challenge
            </h2>
            <div className="w-full flex flex-wrap justify-between items-center gap-4 my-4">
              <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%]">
                <label
                  htmlFor="challengeName"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Challenege Name
                </label>
                <input
                  type="text"
                  id="challengeName"
                  placeholder="John"
                  className={`h-[55px] border-2 ${
                    errors.challengeName
                      ? "border-red-500"
                      : "border-(--inputBorder)"
                  } rounded-[10px] w-full px-5 text-blackText`}
                  {...register("challengeName", {
                    required: "First Name is required",
                  })}
                />
                {errors.challengeName && (
                  <span className="text-red-500 text-sm">
                    {errors.challengeName.message}
                  </span>
                )}
              </div>
              <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%] ">
                <label
                  htmlFor="scope"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  scope
                </label>
                <Controller
                  name="scope"
                  control={control}
                  defaultValue=""
                  rules={{ required: "scope is required" }}
                  render={({ field }) => (
                    <CustomizableDropdown
                      height="h-[55px]"
                      options={["Agent", "Users", "Admin"]}
                      selected={field.value}
                      setSelected={field.onChange}
                      width="w-full"
                    />
                  )}
                />
                {errors.scope && (
                  <p className="text-red-500 text-sm">{errors.scope.message}</p>
                )}
              </div>
              <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%] ">
                <label
                  htmlFor="scope"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Category
                </label>
                <Controller
                  name="scope"
                  control={control}
                  defaultValue=""
                  rules={{ required: "scope is required" }}
                  render={({ field }) => (
                    <CustomizableDropdown
                      height="h-[55px]"
                      options={["Agent", "Users", "Admin"]}
                      selected={field.value}
                      setSelected={field.onChange}
                      width="w-full"
                    />
                  )}
                />
                {errors.scope && (
                  <p className="text-red-500 text-sm">{errors.scope.message}</p>
                )}
              </div>
              <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%] ">
                <label
                  htmlFor="scope"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Challenge Type
                </label>
                <Controller
                  name="scope"
                  control={control}
                  defaultValue=""
                  rules={{ required: "scope is required" }}
                  render={({ field }) => (
                    <CustomizableDropdown
                      height="h-[55px]"
                      options={["Agent", "Users", "Admin"]}
                      selected={field.value}
                      setSelected={field.onChange}
                      width="w-full"
                    />
                  )}
                />
                {errors.scope && (
                  <p className="text-red-500 text-sm">{errors.scope.message}</p>
                )}
              </div>
              <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%] ">
                <label
                  htmlFor="scope"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Time Period Type
                </label>
                <Controller
                  name="scope"
                  control={control}
                  defaultValue=""
                  rules={{ required: "scope is required" }}
                  render={({ field }) => (
                    <CustomizableDropdown
                      height="h-[55px]"
                      options={["Agent", "Users", "Admin"]}
                      selected={field.value}
                      setSelected={field.onChange}
                      width="w-full"
                    />
                  )}
                />
                {errors.scope && (
                  <p className="text-red-500 text-sm">{errors.scope.message}</p>
                )}
              </div>
              <div className="text-(--greyText) flex flex-col gap-1.5 w-[48%] ">
                <label
                  htmlFor="scope"
                  className="text-[14px] leading-[18px] font-medium"
                >
                  Recurring
                </label>
                <Controller
                  name="scope"
                  control={control}
                  defaultValue=""
                  rules={{ required: "scope is required" }}
                  render={({ field }) => (
                    <CustomizableDropdown
                      height="h-[55px]"
                      options={["Agent", "Users", "Admin"]}
                      selected={field.value}
                      setSelected={field.onChange}
                      width="w-full"
                    />
                  )}
                />
                {errors.scope && (
                  <p className="text-red-500 text-sm">{errors.scope.message}</p>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] w-fit px-8  rounded-xl text-white"
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateChallenge;
