import React from "react";

interface CheckboxProps {
  label?: string;
  className?: string;
  labelHtml?: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void; // Accepts boolean
  id?: string;
  disabled?: boolean;
  labelClassName?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  id,
  disabled,
  labelHtml,
  className,
  labelClassName,
}) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <label className="flex items-center cursor-pointer relative" htmlFor={id}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)} // Ensure boolean is passed to onChange
          className="peer h-5 sm:h-6 w-5 sm:w-6 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-primary checked:bg-primary checked:border-primary"
          id={id}
          disabled={disabled}
        />
        <span
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none
          bg-lightGold peer-checked:bg-primary peer-checked:border-primary
          peer-checked:text-white peer-checked:opacity-100 opacity-0 
          border-lightGold rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        className={`cursor-pointer ml-2 text-[#98A2B3] ${labelClassName} text-sm `}
        htmlFor={id}
      >
        {label ? label : labelHtml}
      </label>
    </div>
  );
};

export default Checkbox;
