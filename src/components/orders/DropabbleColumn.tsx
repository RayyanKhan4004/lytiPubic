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
  onLoadMore: () => void;
}

const DroppableColumn: React.FC<DroppableColumnProps> = ({
  id,
  title,
  items,
  count,
  totalPages = 1,
  currentPage = 1,
  onLoadMore,
}) => {
  const { setNodeRef } = useDroppable({ id });
  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);
  const isFetching = useRef(false);

  const hasMore = currentPage < totalPages;

  useEffect(() => {
    if (!lastItemRef.current || !hasMore || isFetching.current) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isFetching.current) {
        isFetching.current = true;
        onLoadMore();
      }
    });

    observer.current.observe(lastItemRef.current);

    return () => observer.current?.disconnect();
  }, [items, currentPage, totalPages, hasMore, onLoadMore]);

  useEffect(() => {
    isFetching.current = false;
  }, [items]);

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
