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
const generateTimePeriodSelectionOptions = (type: string) => {
  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear + 1, currentYear + 2];

  if (type === "year") {
    return years.map((year) => ({ value: `${year}`, label: `${year}` }));
  }

  if (type === "month") {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return years.flatMap((year) =>
      months.map((month, index) => ({
        value: `${index + 1}-${year}`,
        label: `${month}-${year}`,
      }))
    );
  }

  if (type === "week") {
    return years.flatMap((year) => {
      const weeks = [];
      let startDate = new Date(year, 0, 1);
      let weekNumber = 1;

      while (startDate.getDay() !== 1) {
        startDate.setDate(startDate.getDate() + 1);
      }

      while (startDate.getFullYear() === year) {
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 6);

        weeks.push({
          value: `week-${weekNumber}-${year}`,
          label: `${year} week #${weekNumber} (${
            startDate.toISOString().split("T")[0]
          } to ${endDate.toISOString().split("T")[0]})`,
        });

        startDate.setDate(startDate.getDate() + 7);
        weekNumber++;
      }
      return weeks;
    });
  }

  if (type === "quarter") {
    const quarters = [
      { q: "Q1", start: "01-01", end: "03-31" },
      { q: "Q2", start: "04-01", end: "06-30" },
      { q: "Q3", start: "07-01", end: "09-30" },
      { q: "Q4", start: "10-01", end: "12-31" },
    ];
    return years.flatMap((year) =>
      quarters.map(({ q, start, end }) => ({
        value: `${q}-${year}`,
        label: `${year}-${q} (${start}-${year} to ${end}-${year})`,
      }))
    );
  }

  return [];
};
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

  const onSubmit: SubmitHandler<ChallengesType> = async (
    data: ChallengesType
  ) => {
    let formattedData = { ...data };

    if (data.timePeriodType === "custom") {
      formattedData.startDate = data.startDate;
      formattedData.endDate = data.endDate;
    } else {
      const selectedPeriod = data.timePeriodSelection;

      if (data.timePeriodType === "year") {
        formattedData.startDate = `${selectedPeriod}-01-01`;
        formattedData.endDate = `${selectedPeriod}-12-31`;
      }

      if (data.timePeriodType === "month") {
        const [month, year] = selectedPeriod.split("-");
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
        const [, weekNumber, year] = selectedPeriod.split("-");
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
        const [quarter, year] = selectedPeriod.split("-");
        const quarterStartEnd = {
          Q1: ["01-01", "03-31"],
          Q2: ["04-01", "06-30"],
          Q3: ["07-01", "09-30"],
          Q4: ["10-01", "12-31"],
        };

        const quarterKey = quarter as "Q1" | "Q2" | "Q3" | "Q4";
        formattedData.startDate = `${year}-${quarterStartEnd[quarterKey][0]}`;
        formattedData.endDate = `${year}-${quarterStartEnd[quarterKey][1]}`;
      }
    }

    console.log(formattedData, "==formatted data==");
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
