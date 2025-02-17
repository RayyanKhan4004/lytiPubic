import React from "react";
import arrow from "../../assets/icons/ArrowRightDark.svg";
interface BreadcrumbProps {
  items: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-(--greyText) text-sm font-Poppins">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span
            className={
              index === items.length - 1 ? "font-medium text-black" : ""
            }
          >
            {item}
          </span>
          {index < items.length - 1 && (
            <span className="mx-1">
              {" "}
              <img src={arrow} alt="" />
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
