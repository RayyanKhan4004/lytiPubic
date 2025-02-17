import React, { useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import dummyImage from "../../assets/images/Dummy.jpg";
import Breadcrumb from "../../components/common/BreadCrumb";
import DroppableColumn from "../../components/orders/DropabbleColumn";
import DraggableItem from "../../components/orders/DraggableItem";

type ColumnKey =
  | "verbalCommitments"
  | "apptSet"
  | "appMet"
  | "openingToDisclosure"
  | "postToDisclosures"
  | "fullCrToCde";

const initialBuyers = [
  {
    id: "1",
    name: "Annette Black",
    address: "4517 Washington Ave. Manchester, Kentucky 39495",
    agent: "Eleanor Pena",
    agentImage: dummyImage,
    role: "Buyer",
  },
  {
    id: "2",
    name: "Theresa Webb",
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    agent: "Eleanor Pena",
    agentImage: dummyImage,
    role: "Buyer",
  },
  {
    id: "3",
    name: "Jane Cooper",
    address: "3517 W. Gray St. Utica, Pennsylvania 57867",
    agent: "Eleanor Pena",
    agentImage: dummyImage,
    role: "Buyer",
  },
  {
    id: "4",
    name: "Ronald Richards",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    agent: "Eleanor Pena",
    agentImage: dummyImage,
    role: "Buyer",
  },
  {
    id: "5",
    name: "Savannah Nguyen",
    address: "2715 Ash Dr. San Jose, South Dakota 83475",
    agent: "Eleanor Pena",
    agentImage: dummyImage,
    role: "Buyer",
  },
  {
    id: "6",
    name: "Cody Fisher",
    address: "4517 Washington Ave. Manchester, Kentucky 39495",
    agent: "Eleanor Pena",
    agentImage: dummyImage,
    role: "Buyer",
  },
];

const StagesBoardDragDrop: React.FC = () => {
  const [columns, setColumns] = useState<
    Record<ColumnKey, typeof initialBuyers>
  >({
    verbalCommitments: [...initialBuyers],
    apptSet: [],
    appMet: [],
    openingToDisclosure: [],
    postToDisclosures: [],
    fullCrToCde: [],
  });

  const [activeItem, setActiveItem] = useState<any | null>(null);

  const handleDragStart = (event: any) => {
    const { active } = event;
    const sourceColumn = Object.keys(columns).find((col) =>
      columns[col as ColumnKey].some((item) => item.id === active.id)
    ) as ColumnKey | undefined;

    if (sourceColumn) {
      const draggedItem = columns[sourceColumn].find(
        (item) => item.id === active.id
      );
      setActiveItem(draggedItem);
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    setActiveItem(null);

    if (!over) return;

    const sourceColumn = Object.keys(columns).find((col) =>
      columns[col as ColumnKey]?.some((item) => item.id === active.id)
    ) as ColumnKey | undefined;

    const destinationColumn = over.id as ColumnKey;

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
      [destinationColumn]: [...(prev[destinationColumn] || []), movedItem],
    }));
  };

  return (
    <div className="w-full overflow-auto">
      <div className="w-full px-4 mt-8 mb-4 font-Poppins flex flex-col gap-8">
        <Breadcrumb items={["Orders", "Stages Board"]} />
        <h1 className="text-lg font-semibold text-(--primary)">Stages Board</h1>
      </div>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="overflow-x-auto overflow-y-auto">
          <div className="flex space-x-4 p-4 whitespace-nowrap min-w-max">
            <DroppableColumn
              id="verbalCommitments"
              title="Verbal Commitments"
              items={columns.verbalCommitments}
              onDragEnd={handleDragEnd}
            />
            <DroppableColumn
              id="apptSet"
              title="Appt Set"
              items={columns.apptSet}
              onDragEnd={handleDragEnd}
            />
            <DroppableColumn
              id="appMet"
              title="App Met"
              items={columns.appMet}
              onDragEnd={handleDragEnd}
            />
            <DroppableColumn
              id="openingToDisclosure"
              title="Opening To Disclosure"
              items={columns.openingToDisclosure}
              onDragEnd={handleDragEnd}
            />
            <DroppableColumn
              id="postToDisclosures"
              title="Post To Disclosures"
              items={columns.postToDisclosures}
              onDragEnd={handleDragEnd}
            />
            <DroppableColumn
              id="fullCrToCde"
              title="Full CR To CDE"
              items={columns.fullCrToCde}
              onDragEnd={handleDragEnd}
            />
          </div>
        </div>

        <DragOverlay>
          {activeItem ? (
            <DraggableItem id={activeItem.id} buyer={activeItem} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default StagesBoardDragDrop;
