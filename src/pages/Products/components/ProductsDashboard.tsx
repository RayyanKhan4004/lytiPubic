import videoimage from "./assets/icons/videoimage.svg";

function ProductsDashboard() {
  return (
    <>
    <div className="flex items-center justify-center w-full ">
      <div className="flex pl-[60px] pr-[60px] gap-33.5 pt-[40px]">
        <div className="flex flex-col w-[600px]">
          <h1 className="font-poppin font-semibold text-[32px]">Sales Team</h1>
          <p  className="font-poppin  font-normal text-[20px] text-[#2D3F50]">
            n lacinia, erat vitae lobortis lacinia, lacus magna facilisis nisi,
            a pharetra turpis felis commodo nisi. Quisque sem magna, dapibus ac
            nisi
            <br />
          </p>
          <p className="font-poppin font-normal text-[20px] text-[#2D3F50] mt-[40px]">
            In lacinia, erat vitae lobortis lacinia, lacus magna facilisis nisi,
            a pharetra turpis felis commodo nisi. Quisque sem magna, dapibus ac
            nisi at, tempor rutrum lectus. Nullam varius nulla arcu, posuere
            fringilla nulla semper vitae. Nunc pharetra iaculis ullamcorper.
            Suspendisse vel est facilisis, tincidunt diam vitae, ultrices leo.
            Aenean rhoncus quam at diam blandit, sit amet consequat augue
            varius.
          </p>
          <div className="pt-[24px] flex gap-4">
            <button className="bg-[#333333] pt-[12px] pb-[12px] pl-[16px] pr-[16px] text-[#F3F3F3] font-semibold font-poppin text-[20px] rounded-2xl">
              Pricing and Free Trail
            </button>
            <button className="bg-[#E5E5E5] pt-[12px] pb-[12px] pl-[16px] pr-[16px] text-[#333333] font-semibold font-poppin text-[20px] rounded-2xl">
              Schedule DEMO
            </button>
          </div>
        </div>
        <div className="flex  items-center justify-center">
          <img src={videoimage} alt="" className="" />
        </div>
      </div>
      {/* <div className="flex items-center justify-center flex-col gap-5 pt-[80px]">
        <h1 className="font-poppin font-semibold text-4xl">
          <h1>Browse our big set of features</h1>
        </h1>
        <p className="flex items-center justify-center pl-[80px] pr-[80px] font-poppin font-normal text-[20px] text-[#2D3F50]">
          
            Real estate analytics software combined with leaderboards, real-time
            agent coaching reports, and a flexible sales contest system ensures
            that team leaders, coaches and brokers always make data driven
            decisions and agents pace towards commission goals.
          
        </p>
      </div> */}
    </div>
    <div className="flex items-center justify-center flex-col gap-5 pt-[80px]">
        <h1 className="font-poppin font-semibold text-4xl">
          <h1>Browse our big set of features</h1>
        </h1>
        <p className="flex items-center justify-center pl-[80px] pr-[80px] font-poppin font-normal text-[20px] text-[#2D3F50]">
          
            Real estate analytics software combined with leaderboards, real-time
            agent coaching reports, and a flexible sales contest system ensures
            that team leaders, coaches and brokers always make data driven
            decisions and agents pace towards commission goals.
          
        </p>
      </div>
    </>
  );
}

export default ProductsDashboard;
