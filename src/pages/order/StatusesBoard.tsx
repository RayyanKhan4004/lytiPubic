import React, { useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { useForm } from "react-hook-form";

import Breadcrumb from "../../components/common/BreadCrumb";
import MainTitle from "../../components/ui/typography/MainTitle";
import CardLayout from "../../components/layouts/CardLayout";

import DroppableColumn from "../../components/orders/DropabbleColumn";
import DraggableItem from "../../components/orders/DraggableItem";

import SelectField from "../../components/inputs/SelectField";
import SearchInput from "../../components/inputs/SearchInput";

import { initialBuyers } from "../../utils/DummyData";
import { DragAndDropColumnKey, OrderTableType } from "../../utils/types";

import {
  countyOptions,
  fileStatusOption,
  fileTypeOptions,
} from "../../utils/options";

import filter from "../../assets/icons/AlignLeft.svg";
import PrimaryButton from "../../components/ui/button/PrimaryButton";

const StatusesBoard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeItem, setActiveItem] = useState<any | null>(null);
  const [columns, setColumns] = useState<
    Record<DragAndDropColumnKey, typeof initialBuyers>
  >({
    verbalCommitments: [...initialBuyers],
    apptSet: [],
    appMet: [],
    openingToDisclosure: [],
    postToDisclosures: [],
    fullCrToCde: [],
  });

  const {
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<OrderTableType>();

  const handleDragStart = (event: any) => {
    const { active } = event;
    const sourceColumn = Object.keys(columns).find((col) =>
      columns[col as DragAndDropColumnKey].some((item) => item.id === active.id)
    ) as DragAndDropColumnKey | undefined;

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
      columns[col as DragAndDropColumnKey]?.some(
        (item) => item.id === active.id
      )
    ) as DragAndDropColumnKey | undefined;

    let destinationColumn = over.id as DragAndDropColumnKey | undefined;

    if (destinationColumn && !columns[destinationColumn]) {
      destinationColumn = Object.keys(columns).find((col) =>
        columns[col as DragAndDropColumnKey]?.some(
          (item) => item.id === over.id
        )
      ) as DragAndDropColumnKey | undefined;
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
  };
  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm.toLowerCase());
  };
  return (
    <div className="w-full overflow-auto px-4 my-8">
      <Breadcrumb items={["Orders", "Statuses Board"]} />

      <CardLayout>
        <form className="font-Poppins flex justify-between items-center w-full gap-2">
          <MainTitle title="Statuses Board" />

          <div className="flex items-center gap-1 justify-between">
            <SearchInput
              debounceTimeout={500}
              placeholder="Search Keyword"
              onChange={handleSearch}
            />
            <SelectField
              name="propertyCounty"
              control={control}
              options={countyOptions}
              placeholder="County"
              error={errors.propertyCounty?.message}
              required={false}
              className="w-[113px]"
              height="44px"
            />
            <SelectField
              name="fileStatus"
              control={control}
              options={fileStatusOption}
              placeholder="Status"
              error={errors.fileStatus?.message}
              required={false}
              className="w-[90px]"
              height="44px"
            />
            <SelectField
              name="fileType"
              control={control}
              options={fileTypeOptions}
              placeholder="Type"
              error={errors.fileType?.message}
              required={false}
              className="w-[180px]"
              height="44px"
            />

            <PrimaryButton image={filter} />
          </div>
        </form>
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
      </CardLayout>
    </div>
  );
};

export default StatusesBoard;
