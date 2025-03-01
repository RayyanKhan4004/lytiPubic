import React from "react";
import { useDroppable } from "@dnd-kit/core";
import DraggableItem from "./DraggableItem";

interface DroppableColumnProps {
  id: string;
  title: string;
  items: any[];
  count?: number;
  onDragEnd: (itemId: string, newColumnId: string) => void;
}

const DroppableColumn: React.FC<DroppableColumnProps> = ({
  id,
  title,
  items,
  count,
  onDragEnd,
}) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div className="bg-gray-100 p-4 rounded-lg w-[320px]">
      <div className="text-base px-3 font-semibold h-[70px] flex items-center mb-4 bg-(--primary) rounded-xl text-white justify-between">
        {title} <span>{count}</span>
      </div>

      <div
        ref={setNodeRef}
        className="p-2 space-y-2 max-h-[70vh] overflow-y-auto"
      >
        {items.map((buyer) => (
          <DraggableItem key={buyer.id} id={buyer.id} buyer={buyer} />
        ))}
      </div>
    </div>
  );
};

export default DroppableColumn;
