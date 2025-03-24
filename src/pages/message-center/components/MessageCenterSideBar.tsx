
import { useState } from 'react';
import SearchInput from '../../../components/common/SearchInput';
// import MessageCenterSideCard from './messageCenterSideCard';
// import { title } from 'process';
import MessageCenterSideCard from './MessageCenterSideCard';
function MessageCenterSideBar() {
    const [selectedItem, setSelectedItem] = useState<number | null>(1);
    const [selectedTab, setSelectedTab] = useState<string >("All");
  return (
    <aside className="flex flex-col gap-6 p-6 h-[90vh] overflow-y-scroll">
      <h2 className="font-poppin font-semibold text-[18px] text-(--primary) ">
        Message Center
      </h2>
      <div className="flex flex-row gap-1.5 justify-between rounded-[8px] border-[1px] p-2 border-[#E6E6E6]">
        <div
          onClick={() => setSelectedTab("All")}
          className={`${
            selectedTab === "All" && "bg-(--primary) text-white"
          } font-poppin text-[14px] py-[6px] px-4 flex justify-center items-center rounded-[6px] `}
        >
          All
        </div>
        <div
          onClick={() => setSelectedTab("Unread")}
          className={`${
            selectedTab === "Unread" && "bg-(--primary) text-white"
          } font-poppin text-[14px] py-[6px] px-4 flex justify-center items-center rounded-[6px]`}
        >
          Unread
        </div>
        <div
          onClick={() => setSelectedTab("Archived")}
          className={`${
            selectedTab === "Archived" && "bg-(--primary) text-white"
          } font-poppin text-[14px] py-[6px] px-4 flex justify-center items-center rounded-[6px]`}
        >
          Archived
        </div>
      </div>
      <SearchInput
        onChange={() => undefined}
        value=""
        placeholder="Search keywords"
      />
      <MessageCenterSideCard key={1}  data={[
        {title : 'hn' , disp : 'knhjgv  fytuy uyfyt ut' , time : '19:10', key : 1},
        {title : 'hn' , disp : 'knhjgv  fytuy uyfyt ut' , time : '19:10'},
        {title : 'hn' , disp : 'knhjgv  fytuy uyfyt ut' , time : '19:10'},
        {title : 'hn' , disp : 'knhjgv  fytuy uyfyt ut' , time : '19:10'},
      
        ]} selectedItem={selectedItem}  setSelectedItem={setSelectedItem}/>
    </aside>
  );
}

export default MessageCenterSideBar