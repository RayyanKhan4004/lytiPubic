import videoimage from "./assets/icons/videoimage.svg"

function ProductsDashboard() {
  return (
    <div className="flex">
      <div className="flex flex-col w-50%">
        <h1 className="font-poppin font-semibold text-[32px]">Sales Team</h1>
        <p className="font-poppin font-normal text-[20px] text-[#2D3F50]">
          n lacinia, erat vitae lobortis lacinia, lacus magna facilisis nisi, a
          pharetra turpis felis commodo nisi. Quisque sem magna, dapibus ac nisi
          <br />
          </p>
          <p className="font-poppin font-normal text-[20px] text-[#2D3F50] mt-[40px]">
          In lacinia, erat vitae lobortis lacinia, lacus magna facilisis nisi, a
          pharetra turpis felis commodo nisi. Quisque sem magna, dapibus ac nisi
          at, tempor rutrum lectus. Nullam varius nulla arcu, posuere fringilla
          nulla semper vitae. Nunc pharetra iaculis ullamcorper. Suspendisse vel
          est facilisis, tincidunt diam vitae, ultrices leo. Aenean rhoncus quam
          at diam blandit, sit amet consequat augue varius.
        </p>
       
        <div>
        <button className="bg-[#333333] pt-[12px] pb-[12px] pl-[16px] pr-[16px] text-[#F3F3F3] font-semibold font-poppin text-[20px] rounded-2xl">Pricing and Free Trail</button>
        <button className="bg-[#E5E5E5] pt-[12px] pb-[12px] pl-[16px] pr-[16px] text-[#333333] font-semibold font-poppin text-[20px] rounded-2xl">Schedule DEMO</button>
        </div>
        </div>
        <div className="">
        <img src={videoimage} alt="" />
        </div>
    </div>
  );
}

export default ProductsDashboard;
