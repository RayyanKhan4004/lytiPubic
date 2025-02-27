import StatsCard from "../../components/orders/StatsCard";
import OrderTable, { Order } from "../../components/orders/OrderTable";
import TableTitle from "../../components/ui/typography/TableTitle";
import CustomizableDropdown from "../../components/common/CustomizableDropdown";

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
const feeData =  [
    {
      fee_category: "Title Charges",
      amount: 396.84,
      amount_percentage: 630.44,
      OOC_TFI: 106.58,
      fee_deposit: 396.84
    },
    {
      fee_category: "Title Fee Income",
      amount: 475.22,
      amount_percentage: 450.54,
      OOC_TFI: 778.35,
      fee_deposit : 601.13
    }
  ]
const FeeDetail = () => {
  return (
    <div className="w-full h-full gap-6 p-6">
      <div className="flex gap-6 ">
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
      <div className="flex flex-row gap-6">
        <div className="shadow-(--cardShadow) p-6 rounded-xl h-[940px]  w-[50%] grow">
          <div className="flex justify-between mb-5">
            <TableTitle title="Orders" />
            <CustomizableDropdown
              options={["1", "2", "3", "4", "5", "6"]}
              selected="06 Columns"
              setSelected={() => {}}
              width="154px"
            />
          </div>
          {/* /// */}
        </div>
        <div className=" w-[50%] grow">
          <TableTitle title="Fee Type" />

          <div className="h-32 overflow-scroll scroll-container">
            {/* //// */}
          </div>
        </div>
      </div>
      <div className="shadow-(--cardShadow) mt-6 p-6 rounded-xl w-full">
        {/* ////// */}
      </div>
    </div>
  );
};

export default FeeDetail;
