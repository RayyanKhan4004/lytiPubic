import React from "react";

interface Prop {
  title?: string;
  MB?: number;
  MT?: number;
  textAlign?: string;
  className?: string;
}

const ErrorsMessage: React.FC<Prop> = ({
  title,
  MB = 0,
  MT = 0,
  className,
}) => {
  return (
    <>
      <p
        className={`text-[#EA4335] text-[12px] font-normal  font-Mulish mt-1 mb-${MB} mt-${MT} ${className}`}
      >
        {title}
      </p>
    </>
  );
};

export default ErrorsMessage;
