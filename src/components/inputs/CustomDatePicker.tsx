import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller } from "react-hook-form";
import { AiOutlineCalendar } from "react-icons/ai";
import ErrorsMessage from "../common/ErrorMessage";

interface DatePickerProps {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  rules?: Record<string, any>;
  className?: string;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({
  name,
  control,
  label,
  placeholder,
  rules = {},
  className,
}) => {
  const isRequired = rules?.required;

  return (
    <div className={`date-picker-wrapper text-left ${className} `}>
      {label && (
        <label
          htmlFor={name}
          className="block  text-sm font-medium text-(--greyText) mb-1"
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="date-picker-container relative">
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <DatePicker
                id={name}
                selected={value}
                onChange={onChange}
                autoComplete="off"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                // minDate={new Date(1900, 0, 1)} // Minimum year selectable
                // maxDate={new Date()} // Maximum year (current year)
                placeholderText={placeholder}
                dateFormat="yyyy-MM-dd"
                className={`custom_datepicker w-full px-4 h-[55px] border-2 font-Mulish rounded-[10px] focus:outline-none placeholder-gray-400  ${
                  error ? "border-red-500" : "border-[#f4efe9]"
                }`}
              />
              <AiOutlineCalendar
                className={`absolute ${
                  error ? "top-[36%]" : "top-1/2"
                }  right-4 transform -translate-y-1/2 calendar-icon text-[#98A2B3] text-[25px] cursor-pointer`}
                onClick={() => {
                  // Trigger the date picker when the icon is clicked
                  const input = document.getElementById(name);
                  input?.focus();
                }}
              />
              {error && (
                <ErrorsMessage title={error.message} className="text-right" />
              )}
            </>
          )}
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
