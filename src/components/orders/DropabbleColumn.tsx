// import React from "react";
// import { useDroppable } from "@dnd-kit/core";
// import DraggableItem from "./DraggableItem";

// interface DroppableColumnProps {
//   id: string;
//   title: string;
//   items: any[];
//   count?: number;
//   onDragEnd: (itemId: string, newColumnId: string) => void;
// }

// const DroppableColumn: React.FC<DroppableColumnProps> = ({
//   id,
//   title,
//   items,
//   count,
//   onDragEnd,
// }) => {
//   const { setNodeRef } = useDroppable({ id });

//   return (
//     <div className="bg-gray-100 p-4 rounded-lg w-[320px]">
//       <div className="text-base px-3 font-semibold h-[70px] flex items-center mb-4 bg-(--primary) rounded-xl text-white justify-between">
//         {title} <span>{count}</span>
//       </div>

//       <div
//         ref={setNodeRef}
//         className="p-2 space-y-2 max-h-[70vh] overflow-y-auto"
//       >
//         {items.map((buyer) => (
//           <DraggableItem key={buyer.id} id={buyer.id} buyer={buyer} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DroppableColumn;

import React, { useEffect, useRef, useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import DraggableItem from "./DraggableItem";

interface DroppableColumnProps {
  id: string;
  title: string;
  items: any[];
  count?: number;
  totalPages?: number;
  currentPage?: number;
  onDragEnd ?: any;
  onLoadMore ?: () => void;
}

const DroppableColumn: React.FC<DroppableColumnProps> = ({
  id,
  title,
  items,
  count,
  totalPages,
  currentPage,
  onDragEnd,
  onLoadMore,
}) => {
  const { setNodeRef } = useDroppable({ id });
  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!lastItemRef.current) return;

    observer.current?.disconnect(); // 🔹 Ensure old observer is removed

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && currentPage! < totalPages!) {
    onLoadMore &&    onLoadMore();
      }
    });

    observer.current.observe(lastItemRef.current);

    return () => observer.current?.disconnect(); // 🔹 Cleanup observer
  }, [items, currentPage, totalPages, onLoadMore]); // 🔹 Dependencies updated

  return (
    <div className="bg-gray-100 p-4 rounded-lg w-[320px]">
      <div className="text-base px-3 font-semibold h-[70px] flex items-center mb-4 bg-(--primary) rounded-xl text-white justify-between">
        {title} <span>{count}</span>
      </div>

      <div
        ref={setNodeRef}
        className="p-2 space-y-2 max-h-[70vh] overflow-y-auto"
      >
        {items.map((buyer, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <div key={buyer.id} ref={isLastItem ? lastItemRef : null}>
              <DraggableItem id={buyer.id} buyer={buyer} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DroppableColumn;
