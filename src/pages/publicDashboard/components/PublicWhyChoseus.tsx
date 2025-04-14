interface PublicWhyChoseusProp {
  ind: number;
  number: number;
  text: string;
}
function PublicWhyChoseus({ ind, number, text }: PublicWhyChoseusProp) {
  const gradient1 =
    " shadow-2xl bg-gradient-to-b from-[#333333] via-[#666666] via-[#808080] to-[#999999]";
  const gradient2 =
    " shadow-2xl bg-gradient-to-b from-[#E6E4E4] via-[#F3EFEF] via-[#E2DFDF] to-[#D9D9D9]";
  const gradient3 = " shadow-lg bg-[#FFFFFF]";
  return (
    <>
      <div
        className={` w-[208px] h-[200px] rounded-lg flex items-center flex-col gap-[24px] text-center p-[46px] ${
          ind == 0 && gradient1
        }  ${ind == 1 && gradient2} ${ind == 2 && gradient3}`}
      >
        <h2
          className={`font-poppin font-bold text-[32px] ${
            ind == 0 && "text-white"
          } ${ind == 1 && "text-[#333333]"}  ${ind == 2 && "text-[#333333]"} `}
        >
          ${number}B
        </h2>
        <h2
          className={`font-poppin font-semibold text-[20px]  ${
            ind > 0 && "text-[#2D3F50]"
          } ${ind == 0 && "text-[#E5E5E5]"}  `}
        >
          {text}
        </h2>
      </div>
    </>
  );
}

export default PublicWhyChoseus;
