import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "../../assets/icons/CalendarBlank.svg";

type DateInputProps = {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  initialDate?: string;
  height?: string;
};

const DateInput: React.FC<DateInputProps> = ({
  value,
  onChange,
  disabled,
  initialDate,
  height,
}) => {
  useEffect(() => {
    if (initialDate && !value) {
      onChange(initialDate);
    }
  }, [initialDate, value, onChange]);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const offsetDate = new Date(
        date.getTime() - date.getTimezoneOffset() * 60000
      );
      const formattedDate = offsetDate.toISOString().split("T")[0];
      onChange(formattedDate);
    } else {
      onChange("");
    }
  };

  const parseDate = (value: string) => {
    if (!value) return null;

    const delimiter = value.includes("/") ? "/" : "-";
    const parts = value.split(delimiter).map(Number);

    if (parts.length !== 3) return null;

    const [year, month, day] = parts;
    const parsedDate = new Date(year, month - 1, day);

    return isNaN(parsedDate.getTime()) ? null : parsedDate;
  };

  const initialParsedDate = value
    ? parseDate(value)
    : initialDate
    ? parseDate(initialDate)
    : null;
  return (
    <div
      className={`relative w-full border-2 border-(--inputBorder) rounded-md p-2 pl-4 focus:ring-2 focus:ring-black cursor-pointer flex  items-center ${
        height || ""
      }`}
    >
      <DatePicker
        selected={initialParsedDate}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        placeholderText="YYYY/MM/DD"
        className={`w-full border-none focus:outline-none placeholder-gray-400 text-gray-700 cursor-pointer ${
          disabled && "cursor-not-allowed"
        }`}
        calendarClassName="custom-calendar"
        disabled={disabled}
        renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
          <div className="flex justify-between items-center px-4 py-2 bg-darkBrown text-white">
            <button
              onClick={decreaseMonth}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {"<"}
            </button>
            <span>
              {monthDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              onClick={increaseMonth}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {">"}
            </button>
          </div>
        )}
      />
      <div
        className={`absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400`}
      >
        <img src={calendar} alt="Calendar" />
      </div>
    </div>
  );
};

export default DateInput;
