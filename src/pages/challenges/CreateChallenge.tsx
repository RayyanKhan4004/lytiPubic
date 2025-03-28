import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Breadcrumb from "../../components/common/BreadCrumb";
import InputField from "../../components/inputs/InputFields";
import { ChallengesType } from "../../utils/types";
import ScopeChallangeTypeDetail from "../../components/challenges/ScopeChallangeTypeDetail";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import CardLayout from "../../components/layouts/CardLayout";
import MainTitle from "../../components/ui/typography/MainTitle";
import SelectField from "../../components/inputs/SelectField";
import {
  ChallengeTypeOptions,
  RecurringOptions,
  ScopeOptions,
  TimePeriodOptions,
} from "../../utils/options";
import CustomDatePicker from "../../components/inputs/CustomDatePicker";
import { useMemo } from "react";
import { generateTimePeriodSelectionOptions } from "../../utils/functions";
import {
  useCreateChallengeMutation,
  useGetChallengeCategoriesQuery,
} from "../../lib/rtkQuery/challengeApi";
import toast from "react-hot-toast";

const CreateChallenge = () => {
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<ChallengesType>();
  const challengeType = watch("challengeType", "");
  const timePeriodType = watch("timePeriodType", "");
  const timePeriodSelectionOptions = useMemo(
    () => generateTimePeriodSelectionOptions(timePeriodType),
    [timePeriodType]
  );
  const { data, error, isLoading } = useGetChallengeCategoriesQuery();
  const categoryOptions =
    data?.categories?.map((category: any) => ({
      value: category.id,
      label: category.categoryName,
    })) || [];

  const [createChallenge] = useCreateChallengeMutation();
  const onSubmit: SubmitHandler<ChallengesType> = async (
    data: ChallengesType
  ) => {
    let formattedData = { ...data };

    if (data.timePeriodType === "custom") {
      formattedData.startDate = data.startDate;
      formattedData.endDate = data.endDate;
    } else {
      const selectedPeriod = data.timePeriodSelection;

      if (!selectedPeriod) {
        console.error("Error: timePeriodSelection is undefined");
        return;
      }

      if (data.timePeriodType === "year") {
        formattedData.startDate = `${selectedPeriod}-01-01`;
        formattedData.endDate = `${selectedPeriod}-12-31`;
      }

      if (data.timePeriodType === "month") {
        const periodParts = selectedPeriod.split("-");
        if (periodParts.length !== 2) {
          console.error(
            "Invalid selectedPeriod format for month:",
            selectedPeriod
          );
          return;
        }
        const [month, year] = periodParts;
        const monthIndex = new Date(`${month} 1, ${year}`).getMonth() + 1;
        const lastDay = new Date(parseInt(year), monthIndex, 0).getDate();

        formattedData.startDate = `${year}-${monthIndex
          .toString()
          .padStart(2, "0")}-01`;
        formattedData.endDate = `${year}-${monthIndex
          .toString()
          .padStart(2, "0")}-${lastDay}`;
      }

      if (data.timePeriodType === "week") {
        const periodParts = selectedPeriod.split("-");
        if (periodParts.length !== 3) {
          console.error(
            "Invalid selectedPeriod format for week:",
            selectedPeriod
          );
          return;
        }
        const [, weekNumber, year] = periodParts;
        const startDate = new Date(parseInt(year), 0, 1);

        while (startDate.getDay() !== 1) {
          startDate.setDate(startDate.getDate() + 1);
        }

        startDate.setDate(startDate.getDate() + (parseInt(weekNumber) - 1) * 7);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6);

        formattedData.startDate = startDate.toISOString().split("T")[0];
        formattedData.endDate = endDate.toISOString().split("T")[0];
      }

      if (data.timePeriodType === "quarter") {
        const periodParts = selectedPeriod.split("-");
        if (periodParts.length !== 2) {
          console.error(
            "Invalid selectedPeriod format for quarter:",
            selectedPeriod
          );
          return;
        }
        const [quarter, year] = periodParts;
        const quarterStartEnd: Record<string, [string, string]> = {
          Q1: ["01-01", "03-31"],
          Q2: ["04-01", "06-30"],
          Q3: ["07-01", "09-30"],
          Q4: ["10-01", "12-31"],
        };

        if (!quarterStartEnd[quarter]) {
          console.error("Invalid quarter:", quarter);
          return;
        }

        formattedData.startDate = `${year}-${quarterStartEnd[quarter][0]}`;
        formattedData.endDate = `${year}-${quarterStartEnd[quarter][1]}`;
      }
    }

    const cleanedData = {
      ...formattedData,
      recurring: Boolean(formattedData.recurring),
    };

    delete cleanedData.timePeriodSelection;

    try {
      const response = await createChallenge(cleanedData).unwrap();
      console.log("Challenge Created:", response);
      toast.success("Challenge created successfully");
    } catch (err: any) {
      console.error("Error:", err);
      toast.error(err?.data?.message || "error in creating challenge");
    }
  };

  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Challenges", "Create New Challenge"]} />
      <div className="w-full flex justify-between my-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-[49%]"
        >
          <CardLayout>
            <MainTitle title="Create New Challenge" />
            <div className="w-full flex flex-wrap justify-between items-center gap-4 my-4">
              <InputField
                label="Challenge Name"
                name="challengeName"
                control={control}
                type="text"
                placeholder="Enter Name"
                error={errors.challengeName?.message}
                className="w-[48%]"
                // required={true}
              />
              <SelectField
                label="Scope"
                name="scope"
                control={control}
                options={ScopeOptions}
                placeholder="Select scope"
                error={errors.scope?.message}
                // required={true}
                className="w-[48%]"
              />{" "}
              <SelectField
                label="Category"
                name="categoryId"
                control={control}
                options={categoryOptions}
                placeholder="Select category"
                error={errors.categoryId?.message}
                // required={true}
                className="w-[48%]"
              />
              <SelectField
                label="Challenge Type"
                name="challengeType"
                control={control}
                options={ChallengeTypeOptions}
                placeholder="Select challenge type"
                error={errors.challengeType?.message}
                // required={true}
                className="w-[48%]"
              />
              {challengeType === "Race" && (
                <>
                  <InputField
                    label="First Place Points"
                    name="firstPlacePoints"
                    control={control}
                    type="number"
                    placeholder="Enter points"
                    error={errors.firstPlacePoints?.message}
                    className="w-[48%]"
                    required={true}
                  />
                  <InputField
                    label="Second Place Points"
                    name="secondPlacePoints"
                    control={control}
                    type="number"
                    placeholder="Enter points"
                    error={errors.secondPlacePoints?.message}
                    className="w-[48%]"
                    required={true}
                  />
                  <InputField
                    label="Third Place Points"
                    name="thirdPlacePoints"
                    control={control}
                    type="number"
                    placeholder="Enter points"
                    error={errors.thirdPlacePoints?.message}
                    className="w-[48%]"
                    required={true}
                  />
                </>
              )}
              {challengeType === "Everybody Wins" && (
                <>
                  <InputField
                    label="Total Points"
                    name="points"
                    control={control}
                    type="number"
                    placeholder="Enter points"
                    error={errors.points?.message}
                    className="w-[48%]"
                    required={true}
                  />
                  <InputField
                    label="Threshold"
                    name="threshold"
                    control={control}
                    type="number"
                    placeholder="Enter threshold"
                    error={errors.threshold?.message}
                    className="w-[48%]"
                    required={true}
                  />
                </>
              )}
              {challengeType === "Per-Unit" && (
                <InputField
                  label="Total Points"
                  name="points"
                  control={control}
                  type="number"
                  placeholder="Enter points"
                  error={errors.points?.message}
                  className="w-[48%]"
                  required={true}
                />
              )}
              <SelectField
                label="Time Period Type"
                name="timePeriodType"
                control={control}
                options={TimePeriodOptions}
                placeholder="Select time period type"
                error={errors.timePeriodType?.message}
                // required={true}
                className="w-[48%]"
              />
              {timePeriodType === "custom" ? (
                <>
                  <CustomDatePicker
                    name="startDate"
                    control={control}
                    label="Start Date"
                    placeholder="Select a date"
                    className="w-[48%]"
                  />
                  <CustomDatePicker
                    name="endDate"
                    control={control}
                    label="End Date"
                    placeholder="Select a date"
                    className="w-[48%]"
                  />
                </>
              ) : timePeriodType ? (
                <SelectField
                  label="Time Period Selection"
                  name="timePeriodSelection"
                  control={control}
                  options={timePeriodSelectionOptions}
                  placeholder="Select time period"
                  error={errors.timePeriodSelection?.message}
                  required={true}
                  className="w-[48%]"
                />
              ) : null}
              <SelectField
                label="Recurring"
                name="recurring"
                control={control}
                options={RecurringOptions}
                placeholder="Select option"
                error={errors.recurring?.message}
                // required={true}
                className="w-[48%]"
              />
            </div>
            <div className="flex justify-end">
              <PrimaryButton text="Generate" type="submit" />
            </div>
          </CardLayout>
        </form>
        <ScopeChallangeTypeDetail />
      </div>
    </div>
  );
};

export default CreateChallenge;
