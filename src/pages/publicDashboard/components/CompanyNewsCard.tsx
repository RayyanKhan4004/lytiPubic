interface CompanyNewsCardProps {
  img: string;
  userImg: string;
  userName: string;
  date: string;
  title: string;
  description: string;
  buttonTitle?: string;
}

function CompanyNewsCard({
  img,
  userImg,
  userName,
  date,
  title,
  description,
  buttonTitle,
}: CompanyNewsCardProps) {
  return (
    <div className="bg-[#FFFFFF] border-[#E5E5E5] border-[1px] p-6 shadow-md rounded-2xl flex flex-col">
      <div className="flex items-center justify-center">
        <img src={img} alt={img} />
      </div>
      <div className="flex items-center pt-12 gap-4">
        <img src={userImg} alt={userName} className="w-11 h-11 rounded-full" />
        <span className="font-poppin font-medium text-[14px] text-[#333333]">{userName}</span>
      </div>
      <div className="mt-[20px]">
        <span className="text-[#26262699] font-poppin font-medium text-[14px]">{date}</span>
      </div>
      <h2 className=" font-medium font-poppin text-[22px] text-[#333333] mt-[18px]">{title}</h2>
    
      <p className="font-DMSans font-medium text-[16px] mt-[18px]">{description}</p>
    
      <div>{buttonTitle && <button className="font-poppin mt-[10px] rounded-[10px] font-medium text-[#F3F3F3] text-[16px] w-[90px] h-[39px] bg-[#333333]">{buttonTitle}</button>}
    </div></div>
  );
}

export default CompanyNewsCard;
