export const formatNumber = (num: string | number) => {
  const numberValue = typeof num === "string" ? parseFloat(num) : num;
  if (isNaN(numberValue)) return "Invalid Number";

  return numberValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const formatNumberWithoutDecimals = (num: string | number) => {
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
