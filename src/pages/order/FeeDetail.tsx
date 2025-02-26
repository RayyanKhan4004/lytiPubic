import StatsCard from "../../components/orders/StatsCard";
import OrderTable, { Order } from "../../components/orders/OrderTable";

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
    
  }
];

const FeeDetail = () => {
  return (
    <div className="w-full h-full gap-6 p-6">
      <div className="flex gap-6">
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
        <div>
          <OrderTable
            data={sampleOrders}
            tableOnClick={() => alert(1)}
            tableHead={["Closed Date", "order", "status", "Property Address"]}
            tableFooter={["Total", "", "", "$782.01"]}
          />
        </div>
        <div>
          <OrderTable
            data={sampleOrders}
            tableOnClick={() => alert(1)}
            tableHead={["Closed Date", "order", "status", "Property Address"]}
            tableFooter={["Total", "", "", "$782.01"]}
          />
        </div>
      </div>
      <OrderTable
        data={sampleOrders}
        tableOnClick={() => alert(1)}
        tableHead={["Closed Date", "order", "status", "Property Address"]}
        tableFooter={["Total", "", "", "$782.01"]}
      />
    </div>
  );
};

export default FeeDetail;
