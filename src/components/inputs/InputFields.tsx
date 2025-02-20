import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import ErrorsMessage from "../common/ErrorMessage";

interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  type: "text" | "password" | "email" | "number" | "tel" | "date";
  placeholder?: string;
  error?: string;
  required?: boolean;
  className?: string;
}

function InputField<T extends FieldValues>({
  label,
  name,
  control,
  type,
  placeholder,
  error,
  required = false,
  className,
}: InputFieldProps<T>) {
  return (
    <div className={`text-left ${className}`}>
      <label
        htmlFor={name}
        className="block  text-sm font-medium text-(--greyText) mb-1"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={required ? { required: `${label} is required` } : {}}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={`w-full px-4 h-[55px] border-2 font-Mulish rounded-[10px] focus:outline-none placeholder-gray-400  ${
              error ? "border-red-500 ring-red-500" : "border-(--inputBorder)"
            }`}
          />
        )}
      />

      {error && <ErrorsMessage title={error} className="text-right" />}
    </div>
  );
}

export default InputField;
