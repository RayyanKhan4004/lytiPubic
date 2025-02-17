import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import menu from "../../assets/icons/Menu.svg";
import location from "../../assets/icons/MapPinLine.svg";

interface DraggableItemProps {
  id: string;
  buyer: {
    id: string;
    name: string;
    address: string;
    agent: string;
    agentImage: string;
    role?: string;
  };
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, buyer }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 rounded-lg shadow-md mb-2 cursor-pointer border border-gray-300 font-Poppins whitespace-pre-wrap"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1.5 ">
          <h4 className="text-sm">{buyer?.role}</h4>
          <h3 className="font-bold">{buyer?.name}</h3>
        </div>
        <img src={menu} alt="menu" className="w-5 h-5" />
      </div>
      <div className="flex items-center text-sm text-gray-600 border-t-[1px] border-b-[1px] border-[#F3F3F3] py-2.5">
        <img src={location} alt="location" className=" mr-2" />
        {buyer?.address}
      </div>
      <div className="flex items-center mt-2">
        <img
          src={buyer?.agentImage}
          alt={buyer?.agent}
          className="w-[40px] h-[40px] rounded-full mr-2"
        />
        <span className="text-sm font-semibold">{buyer?.agent}</span>
      </div>
    </div>
  );
};

export default DraggableItem;
