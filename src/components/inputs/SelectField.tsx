import Select, { SingleValue, MultiValue, components } from "react-select";
import { FaChevronDown } from "react-icons/fa";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import ErrorsMessage from "../common/ErrorMessage";
import { useState } from "react";

interface Option {
  value: string | number;
  label: string;
}

interface SelectFieldProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  control: Control<T>;
  options: Option[];
  isMulti?: boolean;
  placeholder?: string;
  error?: string;
  required?: boolean;
  className?: string;
  menuPlacement?: "auto" | "top" | "bottom";
  height?: string;
  addNew?: () => void;
}

const customStyles = (height: string) => ({
  control: (base: any, state: any) => ({
    ...base,
    border: state.isFocused ? "2px solid #f4efe9" : "2px solid #f4efe9",
    boxShadow: state.isFocused ? "none" : "none",
    borderRadius: "10px",
    padding: "4px",
    transition: "border-color 0.2s ease-in-out",
    height: height,
  }),
  placeholder: (base: any) => ({
    ...base,
    color: "#98A2B3",
    fontSize: "14px",
  }),
  singleValue: (base: any) => ({
    ...base,
    color: "#000",
    fontWeight: "400",
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    color: "#98A2B3",
    fontSize: "20px",
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: "8px",
    boxShadow: " 0px 0px 15px 0px #00000012",
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#98A2B3"
      : state.isFocused
      ? "#98A2B3"
      : "white",
    color: state.isSelected ? "white" : "#111827",
    padding: "10px 12px",
    cursor: "pointer",
    textAlign: "left",
  }),
});

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaChevronDown style={{ color: "#98A2B3" }} className="text-base" />
    </components.DropdownIndicator>
  );
};

function SelectField<T extends FieldValues>({
  label,
  name,
  control,
  options,
  isMulti = false,
  placeholder = "Select...",
  error,
  required = false,
  className = "",
  menuPlacement = "auto",
  height = "55px",
  addNew,
}: SelectFieldProps<T>) {
  return (
    <div
      className={`text-left react-select-wrapper ${className} ${
        error ? "select-field-error" : ""
      }`}
    >
      {label && (
        <label className="block text-sm font-medium text-(--greyText) mb-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={required ? { required: `${label} is required` } : {}}
        render={({ field }) => (
          <Select
            {...field}
            styles={customStyles(height)}
            options={options}
            isMulti={isMulti}
            placeholder={placeholder}
            menuPlacement={menuPlacement}
            onChange={(selectedOption) => {
              if (isMulti) {
                const multiValue = selectedOption as MultiValue<Option>;
                field.onChange(multiValue.map((option) => option.value));
              } else {
                const singleValue = selectedOption as SingleValue<Option>;

                if (singleValue?.value === "addNew") {
                  addNew?.();
                } else {
                  field.onChange(singleValue?.value || null);
                }
              }
            }}
            value={
              isMulti
                ? options.filter((option) =>
                    Array.isArray(field.value)
                      ? field.value.includes(option.value)
                      : false
                  )
                : options.find((option) => option.value === field.value) || null
            }
            classNamePrefix="react_select selectfield"
            components={{ DropdownIndicator }}
          />
        )}
      />
      {error && <ErrorsMessage title={error} className="text-left" />}
    </div>
  );
}

export default SelectField;
