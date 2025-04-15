export const formatNumber = (num: string | number | null | undefined) => {
  if (num === null || num === undefined) return "0";
  const numberValue = typeof num === "string" ? parseFloat(num) : num;
  if (isNaN(numberValue)) return "Invalid Number";

  return numberValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// utils/formatToK.ts

export const formatToK = (num: string | number | null | undefined): string => {
  if (num === null || num === undefined) return "0";

  const numberValue = typeof num === "string" ? parseFloat(num) : num;

  if (isNaN(numberValue)) return "Invalid Number";

  const absValue = Math.abs(numberValue);

  const formatWithSuffix = (value: number, suffix: string) => {
    const rounded = value % 1 === 0 ? value.toFixed(0) : value.toFixed(1);
    return `${rounded}${suffix}`;
  };

  if (absValue >= 1_000_000_000) {
    return formatWithSuffix(numberValue / 1_000_000_000, "B");
  } else if (absValue >= 1_000_000) {
    return formatWithSuffix(numberValue / 1_000_000, "M");
  } else if (absValue >= 1_000) {
    return formatWithSuffix(numberValue / 1_000, "k");
  }

  return numberValue % 1 === 0
    ? numberValue.toFixed(0)
    : numberValue.toFixed(2);
};

export const formatNumberWithoutDecimals = (
  num: string | number | null | undefined
) => {
  if (num === null || num === undefined) return "0";
  const numberValue = typeof num === "string" ? parseFloat(num) : num;
  if (isNaN(numberValue)) return "Invalid Number";

  return Math.trunc(numberValue)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatDate = (date: Date | string | null | undefined): string => {
  if (!date) return "";

  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return "";

  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  const day = String(parsedDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const generateTimePeriodSelectionOptions = (type: string) => {
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
