import React, { useState } from "react";
import arrow from "../../assets/icons/ArrowBlack.svg";

interface DropdownInputProps {
  placeholder?: string;
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
  width?: string;
  height?: string;
  customBackground?: string;
  customBorder?: string;
  customHoverColor?: string;
}

const CustomizableDropdown: React.FC<DropdownInputProps> = ({
  placeholder = "Select..",
  options,
  selected,
  setSelected,
  width = "w-full",
  height = "h-[43px]",
  customBackground = "bg-white",
  customBorder = "border-2 border-(--inputBorder)",
  customHoverColor = "hover:bg-gray-100",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative inline-block ${width} font-Jakarta`}>
      <div
        className={`flex items-center justify-between ${height} px-4 py-2 ${customBorder} ${customBackground} rounded-lg cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-sm ${!selected ? "text-gray-400" : ""}`}>
          {selected || placeholder}
        </span>
        <img src={arrow} alt="arrow icon" />
      </div>
      {isOpen && (
        <ul
          className={`absolute mt-1 w-full ${customBackground} ${customBorder} rounded-lg shadow-md z-10`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer ${customHoverColor}`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomizableDropdown;
