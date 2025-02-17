import React, { useState, useEffect } from "react";
import searchIcon from "../../assets/icons/MagnifyingGlass.svg";

type SearchInputProps = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  debounceTimeout?: number;
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = ``,
  value = "",
  onChange = () => {},
  debounceTimeout = 400,
}) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, debounceTimeout);

    return () => {
      clearTimeout(handler);
    };
  }, [value, debounceTimeout]);

  useEffect(() => {
    if (debouncedValue !== value) {
      onChange({
        target: { value: debouncedValue },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [debouncedValue, onChange, value]);

  return (
    <div className="w-[320px] h-[43px] rounded-[10px] flex items-center border-(--inputBorder) border-2 focus-within:border-black">
      <label htmlFor="search">
        <img src={searchIcon} alt="search icon" className="ml-3" />
      </label>
      <input
        type="text"
        id="search"
        placeholder={placeholder || "Search Keywords"}
        value={value}
        onChange={(e) => onChange(e)}
        className="placeholder:text-[16px] placeholder:leading-[20px] placeholder:font-normal h-full w-auto px-3 text-blackText outline-none rounded-[10px]"
      />
    </div>
  );
};

export default SearchInput;
