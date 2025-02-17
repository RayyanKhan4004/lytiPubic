import React from "react";
import ReactPaginate from "react-paginate";
import rightArrow from "../../assets/icons/RightArrow.svg";
import leftArrow from "../../assets/icons/LeftArrow.svg";

interface PaginationProps {
  onPageChange?: (selectedItem: { selected: number }) => void;
  pageRangeDisplayed?: number;
  pageCount?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange = () => {},
  pageRangeDisplayed = 5,
  pageCount = 1,
}) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<img src={rightArrow} alt="Next" />}
      onPageChange={onPageChange}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={pageCount}
      previousLabel={<img src={leftArrow} alt="Previous" />}
      renderOnZeroPageCount={null}
      containerClassName="flex items-center justify-end space-x-2"
      pageClassName="w-[42px] h-[42px] border rounded-md flex justify-center items-center cursor-pointer hover:border-gray-500"
      pageLinkClassName="flex justify-center items-center w-full h-full"
      activeClassName="border-[2px] border-(--primary) bg-brown-200 text-(--primary) font-bold"
      previousClassName="w-[42px] h-[42px] flex justify-center items-center rounded-md border border-gray-300 cursor-pointer bg-(--primary) text-white hover:bg-brown-700"
      previousLinkClassName="flex justify-center items-center w-full h-full"
      nextClassName="w-[42px] h-[42px] flex justify-center items-center rounded-md border border-gray-300 cursor-pointer bg-(--primary) text-white hover:bg-brown-700"
      nextLinkClassName="flex justify-center items-center w-full h-full"
      breakClassName="w-[42px] h-[42px] flex justify-center items-center text-gray-500"
      breakLinkClassName="cursor-default"
      disabledClassName="flex justify-center items-center cursor-not-allowed bg-gray-300 text-gray-400"
    />
  );
};

export default Pagination;
