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
      <div>
        <span className="text-[#26262699] font-poppin font-medium text-[14px]">{date}</span>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>{buttonTitle && <button>{buttonTitle}</button>}</div>
    </div>
  );
}

export default CompanyNewsCard;
