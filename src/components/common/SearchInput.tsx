import React, { useState, useEffect, useCallback } from "react";
import searchIcon from "../../assets/icons/MagnifyingGlass.svg";

type SearchInputProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  debounceTimeout?: number;
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  value = "",
  onChange,
  debounceTimeout = 400,
}) => {
  const [searchTerm, setSearchTerm] = useState(value);

  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm !== value) {
        onChange(searchTerm);
      }
    }, debounceTimeout);

    return () => clearTimeout(handler);
  }, [searchTerm, debounceTimeout, onChange, value]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  return (
    <div className="w-[320px] h-[43px] rounded-[10px] flex items-center border-(--inputBorder) border-2 focus-within:border-black">
      <label htmlFor="search">
        <img src={searchIcon} alt="Search" className="ml-3" />
      </label>
      <input
        type="text"
        id="search"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        className="placeholder:text-[16px] placeholder:leading-[20px] placeholder:font-normal h-full w-auto px-3 text-blackText outline-none rounded-[10px]"
      />
    </div>
  );
};

export default SearchInput;
