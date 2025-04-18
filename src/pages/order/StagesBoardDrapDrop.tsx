import React, { useState, useEffect, useRef } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";

import Breadcrumb from "../../components/common/BreadCrumb";
import CardLayout from "../../components/layouts/CardLayout";

import DroppableColumn from "../../components/orders/DropabbleColumn";
import DraggableItem from "../../components/orders/DraggableItem";

import dummy from "../../assets/images/Dummy.jpg";
import { OrderDataType } from "../../utils/types";
import {
  useFetchAeLeadStagesBoardQuery,
  useUpdateOrderMutation,
} from "../../lib/rtkQuery/orderApi";
import toast from "react-hot-toast";

type StagesBoardColumnKeys =
  | "App Set"
  | "App Met"
  | "Prelim Commitment"
  | "Verbal Commitment"
  | "Closed"
  | "Lost"
  | "Cancelled";

const StagesBoardDragDrop: React.FC = () => {
  const [activeItem, setActiveItem] = useState<any | null>(null);
  const [pageNumbers, setPageNumbers] = useState<
    Record<StagesBoardColumnKeys, number>
  >({
    "App Set": 1,
    "App Met": 1,
    "Prelim Commitment": 1,
    "Verbal Commitment": 1,
    Closed: 1,
    Lost: 1,
    Cancelled: 1,
  });

  const { data, refetch } = useFetchAeLeadStagesBoardQuery({
    limit: 10,
    appSetPage: pageNumbers["App Set"],
    appMetPage: pageNumbers["App Met"],
    prelimCommitmentPage: pageNumbers["Prelim Commitment"],
    verbalCommitmentPage: pageNumbers["Verbal Commitment"],
    closedPage: pageNumbers.Closed,
    lostPage: pageNumbers.Lost,
    cancelledPage: pageNumbers.Cancelled,
  });
  const [updateOrder, { isLoading }] = useUpdateOrderMutation();

  const [columns, setColumns] = useState<Record<StagesBoardColumnKeys, any[]>>({
    "App Set": [],
    "App Met": [],
    "Prelim Commitment": [],
    "Verbal Commitment": [],
    Closed: [],
    Lost: [],
    Cancelled: [],
  });

  const handleDragStart = React.useCallback(
    (event: any) => {
      const { active } = event;
      const sourceColumn = Object.keys(columns).find((col) =>
        columns[col as StagesBoardColumnKeys].some(
          (item) => item.id === active.id
        )
      ) as StagesBoardColumnKeys | undefined;

      if (sourceColumn) {
        const draggedItem = columns[sourceColumn].find(
          (item) => item.id === active.id
        );
        setActiveItem(draggedItem);
      }
    },
    [columns]
  );

  const handleDragEnd = async (event: any) => {
    const { active, over } = event;
    setActiveItem(null);

    if (!over) return;

    const sourceColumn = Object.keys(columns).find((col) =>
      columns[col as StagesBoardColumnKeys]?.some(
        (item) => item.id === active.id
      )
    ) as StagesBoardColumnKeys | undefined;

    let destinationColumn = over.id as StagesBoardColumnKeys | undefined;

    if (destinationColumn && !columns[destinationColumn]) {
      destinationColumn = Object.keys(columns).find((col) =>
        columns[col as StagesBoardColumnKeys]?.some(
          (item) => item.id === over.id
        )
      ) as StagesBoardColumnKeys | undefined;
    }

    if (
      !sourceColumn ||
      !destinationColumn ||
      sourceColumn === destinationColumn
    )
      return;

    const movedItem = columns[sourceColumn]?.find(
      (item) => item.id === active.id
    );
    if (!movedItem) return;

    setColumns((prev) => ({
      ...prev,
      [sourceColumn]: prev[sourceColumn].filter(
        (item) => item.id !== active.id
      ),
      [destinationColumn]: [...prev[destinationColumn], movedItem],
    }));

    try {
      await updateOrder({
        id: movedItem.id,
        data: { aeLeadStage: destinationColumn },
      }).unwrap();

      setPageNumbers((prev) => {
        const updatedPages = { ...prev };
        Object.keys(updatedPages).forEach((key) => {
          if (updatedPages[key as StagesBoardColumnKeys] > 1) {
            updatedPages[key as StagesBoardColumnKeys] += 1;
          }
        });
        return updatedPages;
      });

      refetch();
      toast.success(`Order updated successfully to ${destinationColumn}`);
    } catch (error) {
      console.error("Failed to update order:", error);
    }
  };

  const handleLoadMore = (columnKey: StagesBoardColumnKeys) => {
    setPageNumbers((prev) => ({
      ...prev,
      [columnKey]: prev[columnKey] + 1,
    }));
  };

  useEffect(() => {
    if (!data?.result) return;

    setColumns((prev) => {
      const newColumns = { ...prev };

      data.result.forEach((stage: any) => {
        if (newColumns.hasOwnProperty(stage.key)) {
          const newOrders = stage.orders.map((order: any) => ({
            id: order.id || Math.random().toString(),
            name: order.firstname || "Unknown Buyer",
            address: order.propertyAddress || "No Address",
            agent: order.titleRep || "Unknown Agent",
            agentImage: dummy,
            role: order?.transactionType,
          }));

          const mergedOrders = [
            ...newColumns[stage.key as StagesBoardColumnKeys],
            ...newOrders,
          ].reduce((acc, item) => {
            if (!acc.some((existing: any) => existing.id === item.id)) {
              acc.push(item);
            }
            return acc;
          }, [] as any[]);

          newColumns[stage.key as StagesBoardColumnKeys] = mergedOrders;
        }
      });

      return newColumns;
    });
  }, [data]);

  return (
    <div className="w-full overflow-auto px-4 my-8">
      <Breadcrumb items={["Orders", "Order Statuses board"]} />
      <CardLayout>
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="overflow-x-auto overflow-y-hidden h-full relative">
            <div className="flex space-x-4 p-4 whitespace-nowrap min-w-max">
              {Object.keys(columns).map((key) => {
                const stageKey = key as StagesBoardColumnKeys;
                const stageData = data?.result.find(
                  (stage: any) => stage.key === key
                );

                return (
                  <DroppableColumn
                    key={key}
                    id={key}
                    title={key}
                    items={columns[stageKey]}
                    count={stageData?.count || 0}
                    currentPage={pageNumbers[stageKey]}
                    totalPages={Math.ceil((stageData?.count || 0) / 5)}
                    onLoadMore={() => handleLoadMore(stageKey)}
                  />
                );
              })}
            </div>
          </div>
          <DragOverlay>
            {activeItem ? (
              <DraggableItem id={activeItem.id} buyer={activeItem} />
            ) : null}
          </DragOverlay>
        </DndContext>
      </CardLayout>
    </div>
  );
};

export default StagesBoardDragDrop;
