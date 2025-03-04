import StatsCard from "../../components/orders/StatsCard";
import OrderTable, { Order } from "../../components/orders/OrderTable";
import TableTitle from "../../components/ui/typography/TableTitle";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";
import Breadcrumb from "../../components/common/BreadCrumb";
import FilterPopup from "../../components/ui/FilterPopup";
import filter from "../../assets/icons/AlignLeft.svg";
import { useState } from "react";
const sampleOrders: Order[] = [
  {
    closedDate: '9/1/10',
    order: '6409',
    status: 'Closed',
    propertyAddress: '4501 Elgin St, Cactus, Galveston TX',

  },
  {
    closedDate: '8/21/10',
    order: '6176',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
    
  },
  {
    closedDate: '8/14/10',
    order: '6134',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
    
  },
  {
    closedDate: '8/27/10',
    order: '6197',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '8/6/10',
    order: '6071',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
    
  },
  {
    closedDate: '8/23/10',
    order: '6544',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '8/14/10',
    order: '6323',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '7/18/10',
    order: '6510',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '4/29/10',
    order: '6467',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '4/21/10',
    order: 'G58',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
    
  },
  {
    closedDate: '7/18/10',
    order: '6510',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '4/29/10',
    order: '6467',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '4/21/10',
    order: 'G58',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
    
  },
  {
    closedDate: '7/18/10',
    order: '6510',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '4/29/10',
    order: '6467',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '4/21/10',
    order: 'G58',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
    
  },
  {
    closedDate: '7/18/10',
    order: '6510',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '4/29/10',
    order: '6467',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '4/21/10',
    order: 'G58',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
    
  },
  {
    closedDate: '7/18/10',
    order: '6510',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '4/29/10',
    order: '6467',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '4/21/10',
    order: 'G58',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
    
  },
  {
    closedDate: '7/18/10',
    order: '6510',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '4/29/10',
    order: '6467',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '4/21/10',
    order: 'G58',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
    
  },
  {
    closedDate: '7/18/10',
    order: '6510',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '4/29/10',
    order: '6467',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
   
  },
  {
    closedDate: '4/21/10',
    order: 'G58',
    status: 'Closed',
    propertyAddress: '8502 Fredonia Rd, Inglewood',
    
  },
];
// const feeData =  [
//     {
//       fee_category: "Title Charges",
//       amount: 396.84,
//       amount_percentage: 630.44,
//       OOC_TFI: 106.58,
//       fee_deposit: 396.84
//     },
//     {
//       fee_category: "Title Fee Income",
//       amount: 475.22,
//       amount_percentage: 450.54,
//       OOC_TFI: 778.35,
//       fee_deposit : 601.13
//     }
//   ]
const FeeDetail = () => {
    const [isModelOpen , setIsModelOpen] = useState(false)
  return (
    <>
      {
        <FilterPopup
          isModelOpen={isModelOpen}
          setIsModelOpen={setIsModelOpen}
        />
      }
      <div className="w-full h-full gap-6 p-6">
        <div className="flex justify-between w-full">
          <Breadcrumb items={["Orders", "Fee Details"]} />
          <div className=" flex  justify-end gap-4">
            <CustomizableDropdown
              options={["1", "2", "3", "4", "5", "6"]}
              selected="06 Columns"
              setSelected={() => {}}
              width="154px"
            />
            <CustomizableDropdown
              options={["1", "2", "3", "4", "5", "6"]}
              selected="06 Columns"
              setSelected={() => {}}
              width="154px"
            />
            <CustomizableDropdown
              options={["1", "2", "3", "4", "5", "6"]}
              selected="06 Columns"
              setSelected={() => {}}
              width="154px"
            />
            <CustomizableDropdown
              options={["1", "2", "3", "4", "5", "6"]}
              selected="06 Columns"
              setSelected={() => {}}
              width="154px"
            />
            <CustomizableDropdown
              options={["1", "2", "3", "4", "5", "6"]}
              selected="06 Columns"
              setSelected={() => {}}
              width="154px"
            />
            <button
              className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white "
              onClick={(e) => {
                e.preventDefault();
                setIsModelOpen(true);
              }}
            >
              <img src={filter} alt="" />
            </button>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <StatsCard
            heading="Orders"
            stats={[
              { value: "20.7k", text: "Total Orders" },
              { value: "3k", text: "Total Amount" },
              { value: "57k", text: "Avg /Order" },
            ]}
          />
          <StatsCard
            heading="Title"
            stats={[
              { value: "20.7k", text: "Total Orders" },
              { value: "3k", text: "Total Amount" },
              { value: "57k", text: "Avg /Order" },
            ]}
          />
          <StatsCard
            heading="Escrow"
            stats={[
              { value: "20.7k", text: "Total Orders" },
              { value: "3k", text: "Total Amount" },
              { value: "57k", text: "Avg /Order" },
            ]}
          />
        </div>
        <div className="flex flex-row gap-6 font-poppin">
          <div className="shadow-(--cardShadow) pt-6 rounded-xl h-[900px]  w-[50%] grow">
            <div className="flex justify-between  p-6 pb-0">
              <TableTitle title="Orders" />
              <CustomizableDropdown
                options={["1", "2", "3", "4", "5", "6"]}
                selected="06 Columns"
                setSelected={() => {}}
                width="154px"
              />
            </div>
            {/* /// */}

            {/* <thead className="w-[100%] px-6">
            <tr className="flex flex-row justify-between">
              <tr className="text-start py-3 px-4 font-medium text-sm">
                Closed Date
              </tr>
              <tr className="text-start py-3 px-4 font-medium text-sm">
                Order
              </tr>
              <tr className="text-start py-3 px-4 font-medium text-sm">
                Status
              </tr>
              <tr className="text-start py-3 px-4 font-medium text-sm">
                Property Address
              </tr>
            </tr>
          </thead> */}

            <div className="overflow-scroll scroll-container h-[755px]">
              <OrderTable data={sampleOrders} hasHeader={true} />
            </div>
            <div className="w-full bg-[#F3F3F3] flex justify-between sticky rounded-b-[10px] px-[24px] py-[16px]">
              <span>Total</span>
              <span>$782.01</span>
            </div>
            {/*  */}
          </div>
          <div className=" w-[50%]  flex flex-col grow gap-6">
            <div className="shadow-(--cardShadow) pt-6 rounded-[10px] ">
              <div className="px-6">
                <TableTitle title="Fee Type" />
              </div>
              <div className=" rounded-b-[10px] overflow-scroll scroll-container">
                {/* //// */}
                <OrderTable
                  hasHeader={true}
                  hasFooter={true}
                  tableFooter={[
                    "total",
                    "$948.55",
                    "$450.54",
                    "$275.43",
                    "$406.27",
                  ]}
                  data={[
                    {
                      FeeCategory: "Title Charges",
                      Amount: "$396.84",
                      "Amount%": "$630.44",
                      "OOC TFI": "$106.58",
                      FeeDeposit: "$396.84",
                    },
                    {
                      FeeCategory: "Title Fee Income",
                      Amount: "$$475.84",
                      "Amount%": "$630.44",
                      "OOC TFI": "$106.58",
                      FeeDeposit: "$396.84",
                    },
                  ]}
                />
                {/*  */}
              </div>
            </div>
            {/*  */}
            <div className="shadow-(--cardShadow) pt-6 rounded-[10px] ">
              <div className="px-6">
                <TableTitle title="Fee Description" />
              </div>
              <div className=" rounded-b-[10px] overflow-scroll scroll-container">
                {/* //// */}
                <OrderTable
                  hasHeader={true}
                  hasFooter={true}
                  tableFooter={[
                    "total",
                    "$948.55",
                    "$450.54",
                    "$275.43",
                    "$406.27",
                  ]}
                  data={[
                    {
                      FeeCategory: "Title Charges",
                      Amount: "$396.84",
                      "Amount%": "$630.44",
                      "OOC TFI": "$106.58",
                      FeeDeposit: "$396.84",
                    },
                    {
                      FeeCategory: "Title Fee Income",
                      Amount: "$$475.84",
                      "Amount%": "$630.44",
                      "OOC TFI": "$106.58",
                      FeeDeposit: "$396.84",
                    },
                  ]}
                />
                {/*  */}
              </div>
            </div>
            {/*  */}
            <div className="shadow-(--cardShadow) pt-6 rounded-[10px] ">
              <div className="px-6 ">
                <TableTitle title="PCT-Westcor Commissions " />
              </div>
              <div className=" rounded-b-[10px] overflow-scroll scroll-container">
                {/* //// */}
                <OrderTable
                  hasHeader={true}
                  data={[
                    {
                      Underwriter: "PCTW",
                      "Fee Income": "$351.02",
                      "Non-Com.": "$490.51",
                      "Net Fee In.": "$275.43",
                      "Com.": "$169.43",
                      "PCT Receiv.": "$351.02",
                    },
                  ]}
                />
                {/*  */}
              </div>
            </div>
            {/*  */}
            <div className="shadow-(--cardShadow) pt-6 rounded-[10px] ">
              <div className="px-6">
                <TableTitle title="PCT-Westcor Commissions " />
              </div>
              <div className=" rounded-b-[10px] overflow-scroll scroll-container">
                {/* //// */}
                <OrderTable
                  hasHeader={true}
                  data={[
                    {
                      Underwriter: "PCTW",
                      "Fee Income": "$351.02",
                      "Non-Com.": "$490.51",
                      "Net Fee In.": "$275.43",
                      "Com.": "$169.43",
                      "PCT Receiv.": "$351.02",
                    },
                  ]}
                />
                {/*  */}
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-(--cardShadow) mt-6 pt-6 rounded-xl w-full">
          {/* ////// */}
          <div className="px-6">

          <TableTitle title="Orders" />
          </div>

          <thead className="w-[100%] px-6">
            <tr className="flex flex-row justify-between">
              <tr className="text-start py-3 px-4 font-medium text-sm">
                Closed Date
              </tr>
              <tr className="text-start py-3 px-4 font-medium text-sm">
                Order
              </tr>
              <tr className="text-start py-3 px-4 font-medium text-sm">
                Status
              </tr>
              <tr className="text-start py-3 px-4 font-medium text-sm">
                Property Address
              </tr>
            </tr>
          </thead>

          <div className="overflow-scroll scroll-container h-[267px]">
            <OrderTable data={sampleOrders} />
          </div>
          <div className="w-full bg-[#F3F3F3] flex justify-between sticky rounded-b-[10px] px-[24px] py-[16px]">
            <span>Total</span>
            <span>$782.01</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeeDetail;
