interface messageCenterSideCardProps {
  selectedItem: number  | undefined | any;
  setSelectedItem: any;
  key?: number;
  data: any ;
}
interface messageCenterSideCardProps {
    title : string;
    disp : string;
    time : string;
    key ?: number
}

function MessageCenterSideCard({
  selectedItem,
  setSelectedItem,
  key,
  data,
}: messageCenterSideCardProps) {
  return (
    <>
      {data.map((item: any, index: number) => (
        <div
          className={`flex flex-row gap-4 items-center justify-between py-[11px] px-[24px] bg-transparent border-b-[1px] border-[#E6E6E6] ${
            selectedItem === item?.key && "bg-[#F3F3F3]"
          } `}
        >
          <img
            className="w-[45px] h-[45px] rounded-full   "
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
            alt=""
          />
          <div className="flex flex-col gap-[3px] w-[200px]">
            <h3 className="font-poppin font-medium text-[16px] ">
              {item.title}
            </h3>
            <p className="font-poppin font-normal text-[14px] text-[#808080] overflow-hidden  ">
              {item.disp}
            </p>
          </div>
          <div className="font-poppin tex-[12px] font-normal">{item.time}</div>
        </div>
      ))}
    </>
  );
}

export default MessageCenterSideCard