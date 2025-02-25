import React, { ChangeEvent } from "react";
import { DebounceInput } from "react-debounce-input";
import { CiSearch } from "react-icons/ci";

interface SearchInputProps {
  debounceTimeout?: number;
  placeholder?: string;
  className?: string;
  label?: string;
  onChange: (searchTerm: string) => void;
  value?: string;
  height?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  debounceTimeout = 300,
  placeholder = "Search...",
  className = "",
  label = "Search",
  onChange,
  value,
  height = "44px",
}) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`text-left   ${className}`}>
      <div
        className={`relative border-2 border-(--inputBorder) rounded-[10px] flex items-center`}
        style={{ height }}
      >
        <div className="flex items-center pl-3 pointer-events-none">
          <CiSearch className="text-[25px] text-gray-400" />
        </div>
        <DebounceInput
          type="text"
          value={value}
          onChange={handleSearchChange}
          debounceTimeout={debounceTimeout}
          className={`font-Mulish text-base text-darkgrey px-4 py-1 focus:outline-none focus:none w-full`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default SearchInput;
