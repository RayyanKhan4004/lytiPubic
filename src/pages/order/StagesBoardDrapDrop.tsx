// import React, { useState } from "react";
// import { DndContext, DragOverlay } from "@dnd-kit/core";
// import { useForm } from "react-hook-form";

// import Breadcrumb from "../../components/common/BreadCrumb";
// import MainTitle from "../../components/ui/typography/MainTitle";
// import CardLayout from "../../components/layouts/CardLayout";

// import DroppableColumn from "../../components/orders/DropabbleColumn";
// import DraggableItem from "../../components/orders/DraggableItem";

// import SelectField from "../../components/inputs/SelectField";
// import SearchInput from "../../components/inputs/SearchInput";

// import { initialBuyers } from "../../utils/DummyData";
// import { StagesBoardColumnKeys, OrderDataType } from "../../utils/types";

// import {
//   countyOptions,
//   fileStatusOption,
//   fileTypeOptions,
// } from "../../utils/options";

// import filter from "../../assets/icons/AlignLeft.svg";
// import PrimaryButton from "../../components/ui/button/PrimaryButton";
// import { useFetchAeLeadStagesBoardQuery } from "../../lib/rtkQuery/orderApi";

// const StagesBoardDragDrop: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [activeItem, setActiveItem] = useState<any | null>(null);
//   const [columns, setColumns] = useState<
//     Record<StagesBoardColumnKeys, typeof initialBuyers>
//   >({
//     Pipeline: [...initialBuyers],
//     AppSet: [],
//     AppMet: [],
//     Signed: [],
//     FirstTimeShowing: [],
//     FirstTimeOffer: [],
//     LiveListing: [],
//     ListingExpired: [],
//     BuyerAgreementExpired: [],
//     Pending: [],
//     Closed: [],
//     Lost: [],
//   });

//   const {
//     formState: { errors },
//     setValue,
//     watch,
//     control,
//   } = useForm<OrderDataType>();

//   const { data } = useFetchAeLeadStagesBoardQuery();
//   console.log(data, "==data===");

//   const handleDragStart = (event: any) => {
//     const { active } = event;
//     const sourceColumn = Object.keys(columns).find((col) =>
//       columns[col as StagesBoardColumnKeys].some(
//         (item) => item.id === active.id
//       )
//     ) as StagesBoardColumnKeys | undefined;

//     if (sourceColumn) {
//       const draggedItem = columns[sourceColumn].find(
//         (item) => item.id === active.id
//       );
//       setActiveItem(draggedItem);
//     }
//   };

//   const handleDragEnd = (event: any) => {
//     const { active, over } = event;
//     setActiveItem(null);

//     if (!over) return;

//     const sourceColumn = Object.keys(columns).find((col) =>
//       columns[col as StagesBoardColumnKeys]?.some(
//         (item) => item.id === active.id
//       )
//     ) as StagesBoardColumnKeys | undefined;

//     let destinationColumn = over.id as StagesBoardColumnKeys | undefined;

//     if (destinationColumn && !columns[destinationColumn]) {
//       destinationColumn = Object.keys(columns).find((col) =>
//         columns[col as StagesBoardColumnKeys]?.some(
//           (item) => item.id === over.id
//         )
//       ) as StagesBoardColumnKeys | undefined;
//     }

//     if (
//       !sourceColumn ||
//       !destinationColumn ||
//       sourceColumn === destinationColumn
//     )
//       return;

//     const movedItem = columns[sourceColumn]?.find(
//       (item) => item.id === active.id
//     );
//     if (!movedItem) return;

//     setColumns((prev) => ({
//       ...prev,
//       [sourceColumn]: prev[sourceColumn].filter(
//         (item) => item.id !== active.id
//       ),
//       [destinationColumn]: [...prev[destinationColumn], movedItem],
//     }));
//   };

//   const handleSearch = (searchTerm: string) => {
//     setSearchTerm(searchTerm.toLowerCase());
//   };

//   return (
//     <div className="w-full overflow-auto px-4 my-8">
//       <Breadcrumb items={["Orders", "Stages Board"]} />
//       <CardLayout>
//         <form className="font-Poppins flex justify-between items-center w-full gap-2">
//           <MainTitle title="Stages Board" />
//           <div className="flex items-center gap-1 justify-between">
//             <SearchInput
//               debounceTimeout={500}
//               placeholder="Search Keyword"
//               onChange={handleSearch}
//             />
//             <SelectField
//               name="propertyCounty"
//               control={control}
//               options={countyOptions}
//               placeholder="County"
//               error={errors.propertyCounty?.message}
//               required={false}
//               className="w-[113px]"
//               height="44px"
//             />
//             <SelectField
//               name="fileStatus"
//               control={control}
//               options={fileStatusOption}
//               placeholder="Status"
//               error={errors.fileStatus?.message}
//               required={false}
//               className="w-[90px]"
//               height="44px"
//             />
//             <SelectField
//               name="fileType"
//               control={control}
//               options={fileTypeOptions}
//               placeholder="Type"
//               error={errors.fileType?.message}
//               required={false}
//               className="w-[180px]"
//               height="44px"
//             />
//             <PrimaryButton image={filter} />
//           </div>
//         </form>
//         <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
//           <div className="overflow-x-auto overflow-y-auto">
//             <div className="flex space-x-4 p-4 whitespace-nowrap min-w-max">
//               {Object.keys(columns).map((key) => (
//                 <DroppableColumn
//                   key={key}
//                   id={key}
//                   title={key}
//                   items={columns[key as StagesBoardColumnKeys]}
//                   onDragEnd={handleDragEnd}
//                 />
//               ))}
//             </div>
//           </div>
//           <DragOverlay>
//             {activeItem ? (
//               <DraggableItem id={activeItem.id} buyer={activeItem} />
//             ) : null}
//           </DragOverlay>
//         </DndContext>
//       </CardLayout>
//     </div>
//   );
// };

// export default StagesBoardDragDrop;

// import React, { useState, useEffect } from "react";
// import { DndContext, DragOverlay } from "@dnd-kit/core";
// import { useForm } from "react-hook-form";

// import Breadcrumb from "../../components/common/BreadCrumb";
// import MainTitle from "../../components/ui/typography/MainTitle";
// import CardLayout from "../../components/layouts/CardLayout";

// import DroppableColumn from "../../components/orders/DropabbleColumn";
// import DraggableItem from "../../components/orders/DraggableItem";

// import dummy from "../../assets/images/Dummy.jpg";

// import { OrderDataType } from "../../utils/types";
// import {
//   useFetchAeLeadStagesBoardQuery,
//   useUpdateOrderMutation,
// } from "../../lib/rtkQuery/orderApi";
// import toast from "react-hot-toast";

// type StagesBoardColumnKeys =
//   | "Pipeline"
//   | "App Set"
//   | "App Met"
//   | "Signed"
//   | "1st Time Showing"
//   | "1st Time Offer"
//   | "Live Listing"
//   | "Listing Expired"
//   | "Buyer Agreement Expired"
//   | "Pending"
//   | "Closed"
//   | "Lost";

// const StagesBoardDragDrop: React.FC = () => {
//   const [activeItem, setActiveItem] = useState<any | null>(null);
//   const { data, refetch } = useFetchAeLeadStagesBoardQuery({
//     limit: 5,
//     pipelinePage: 1,
//     appSetPage: 1,
//     appMetPage: 1,
//     signedPage: 1,
//     firstTimeShowingPage: 1,
//     firstTimeOfferPage: 1,
//     liveListingPage: 1,
//     listingExpiredPage: 1,
//     buyerAgreementExpiredPage: 1,
//     pendingPage: 1,
//     closedPage: 1,
//     lostPage: 1,
//   });
//   const [updateOrder, { isLoading }] = useUpdateOrderMutation();

//   const [columns, setColumns] = useState<Record<StagesBoardColumnKeys, any[]>>({
//     Pipeline: [],
//     "App Set": [],
//     "App Met": [],
//     Signed: [],
//     "1st Time Showing": [],
//     "1st Time Offer": [],
//     "Live Listing": [],
//     "Listing Expired": [],
//     "Buyer Agreement Expired": [],
//     Pending: [],
//     Closed: [],
//     Lost: [],
//   });

//   useEffect(() => {
//     if (data?.result) {
//       const newColumns: Record<StagesBoardColumnKeys, any[]> = {
//         Pipeline: [],
//         "App Set": [],
//         "App Met": [],
//         Signed: [],
//         "1st Time Showing": [],
//         "1st Time Offer": [],
//         "Live Listing": [],
//         "Listing Expired": [],
//         "Buyer Agreement Expired": [],
//         Pending: [],
//         Closed: [],
//         Lost: [],
//       };

//       data.result.forEach((stage: any) => {
//         if (newColumns.hasOwnProperty(stage.key)) {
//           newColumns[stage.key as StagesBoardColumnKeys] = stage.orders.map(
//             (order: any) => ({
//               id: order.id || Math.random().toString(),
//               name: order.firstname || "Unknown Buyer",
//               address: order.propertyAddress || "No Address",
//               agent: order.titleRep || "Unknown Agent",
//               agentImage: dummy,
//               role: order?.transactionType,
//             })
//           );
//         }
//       });

//       setColumns(newColumns);
//     }
//   }, [data]);

//   const handleDragStart = (event: any) => {
//     const { active } = event;
//     const sourceColumn = Object.keys(columns).find((col) =>
//       columns[col as StagesBoardColumnKeys].some(
//         (item) => item.id === active.id
//       )
//     ) as StagesBoardColumnKeys | undefined;

//     if (sourceColumn) {
//       const draggedItem = columns[sourceColumn].find(
//         (item) => item.id === active.id
//       );
//       setActiveItem(draggedItem);
//     }
//   };

//   const handleDragEnd = async (event: any) => {
//     const { active, over } = event;
//     setActiveItem(null);

//     if (!over) return;

//     const sourceColumn = Object.keys(columns).find((col) =>
//       columns[col as StagesBoardColumnKeys]?.some(
//         (item) => item.id === active.id
//       )
//     ) as StagesBoardColumnKeys | undefined;

//     let destinationColumn = over.id as StagesBoardColumnKeys | undefined;

//     if (destinationColumn && !columns[destinationColumn]) {
//       destinationColumn = Object.keys(columns).find((col) =>
//         columns[col as StagesBoardColumnKeys]?.some(
//           (item) => item.id === over.id
//         )
//       ) as StagesBoardColumnKeys | undefined;
//     }

//     if (
//       !sourceColumn ||
//       !destinationColumn ||
//       sourceColumn === destinationColumn
//     )
//       return;

//     const movedItem = columns[sourceColumn]?.find(
//       (item) => item.id === active.id
//     );
//     if (!movedItem) return;

//     setColumns((prev) => ({
//       ...prev,
//       [sourceColumn]: prev[sourceColumn].filter(
//         (item) => item.id !== active.id
//       ),
//       [destinationColumn]: [...prev[destinationColumn], movedItem],
//     }));

//     try {
//       await updateOrder({
//         id: movedItem.id,
//         data: { aeLeadStage: destinationColumn },
//       }).unwrap();
//       refetch();
//       console.log(`Order updated successfully to ${destinationColumn}`);
//       toast.success(`Order updated successfully to ${destinationColumn}`);
//     } catch (error) {
//       console.error("Failed to update order:", error);
//     }
//   };
//   return (
//     <div className="w-full overflow-auto px-4 my-8">
//       <Breadcrumb items={["Orders", "Ae Leads Stages Board"]} />
//       <CardLayout>
//         <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
//           <div className="overflow-x-auto overflow-y-hidden h-full relative">
//             <div className="flex space-x-4 p-4 whitespace-nowrap min-w-max">
//               {Object.keys(columns).map((key) => {
//                 const stageKey = key as StagesBoardColumnKeys;
//                 const stageData = data?.result.find(
//                   (stage: any) => stage.key === key
//                 );
//                 return (
//                   <DroppableColumn
//                     key={key}
//                     id={key}
//                     title={key}
//                     items={columns[stageKey]}
//                     count={stageData?.count || 0}
//                     onDragEnd={handleDragEnd}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//           <DragOverlay>
//             {activeItem ? (
//               <DraggableItem id={activeItem.id} buyer={activeItem} />
//             ) : null}
//           </DragOverlay>
//         </DndContext>
//       </CardLayout>
//     </div>
//   );
// };

// export default StagesBoardDragDrop;

import React, { useState, useEffect, useRef } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { useForm } from "react-hook-form";

import Breadcrumb from "../../components/common/BreadCrumb";
import MainTitle from "../../components/ui/typography/MainTitle";
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
  | "Pipeline"
  | "App Set"
  | "App Met"
  | "Signed"
  | "1st Time Showing"
  | "1st Time Offer"
  | "Live Listing"
  | "Listing Expired"
  | "Buyer Agreement Expired"
  | "Pending"
  | "Closed"
  | "Lost";

const StagesBoardDragDrop: React.FC = () => {
  const [activeItem, setActiveItem] = useState<any | null>(null);
  const [pageNumbers, setPageNumbers] = useState<
    Record<StagesBoardColumnKeys, number>
  >({
    Pipeline: 1,
    "App Set": 1,
    "App Met": 1,
    Signed: 1,
    "1st Time Showing": 1,
    "1st Time Offer": 1,
    "Live Listing": 1,
    "Listing Expired": 1,
    "Buyer Agreement Expired": 1,
    Pending: 1,
    Closed: 1,
    Lost: 1,
  });

  const { data, refetch } = useFetchAeLeadStagesBoardQuery({
    limit: 10,
    pipelinePage: pageNumbers.Pipeline,
    appSetPage: pageNumbers["App Set"],
    appMetPage: pageNumbers["App Met"],
    signedPage: pageNumbers.Signed,
    firstTimeShowingPage: pageNumbers["1st Time Showing"],
    firstTimeOfferPage: pageNumbers["1st Time Offer"],
    liveListingPage: pageNumbers["Live Listing"],
    listingExpiredPage: pageNumbers["Listing Expired"],
    buyerAgreementExpiredPage: pageNumbers["Buyer Agreement Expired"],
    pendingPage: pageNumbers.Pending,
    closedPage: pageNumbers.Closed,
    lostPage: pageNumbers.Lost,
  });
  const [updateOrder, { isLoading }] = useUpdateOrderMutation();

  const [columns, setColumns] = useState<Record<StagesBoardColumnKeys, any[]>>({
    Pipeline: [],
    "App Set": [],
    "App Met": [],
    Signed: [],
    "1st Time Showing": [],
    "1st Time Offer": [],
    "Live Listing": [],
    "Listing Expired": [],
    "Buyer Agreement Expired": [],
    Pending: [],
    Closed: [],
    Lost: [],
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
      <Breadcrumb items={["Orders", "Ae Leads Stages Board"]} />
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
