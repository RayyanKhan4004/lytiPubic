import ScreenLogo from "../../../assets/icons/ScreenLogo.svg";
import PublicDashboardNavbar from "./PublicDashboardNavbar";


function PublicNavbar() {
  return (
    <div>
      <div className="flex justify-center p-[60px] pt-0 ">
        <div
          className="w-[100%] border-white border-3"
        >
          <div className="flex-col w-full ">
            <PublicDashboardNavbar />
            <div
              className="flex items-center justify-between p-[60px]  "
            >
              <img
                src={ScreenLogo}
                alt=""
                className="w-[437px] h-[437px]"
              />
              <div className="flex flex-col gap-[30px] font-poppin ">
                <h1 className="font-bold text-[28px]  ">
                  Analytics Platform and <br /> Transaction Management Built-In
                </h1>
                <p className="font-normal text-[16px] text-[#000000]">
                  With Sisu, Teams And Brokers Unlock Game-Changing Business
                  <br /> Intelligence, Streamline Transaction Management, And
                  Provide Buyers <br /> And Sellers A Fully Branded Client
                  Portal—Effortlessly. Just Sisu And <br /> Your CRM Are All You
                  Need To Run Your Business Smoothly And Stay <br /> Ahead Of
                  The competition.
                </p>
                <div className="mt-[10px] ">
                  <div className="flex gap-[16px]">
                  <button className=" bg-[#333333] text-[20px] font-semibold font-poppin text-white w-[246px] h-[54px] rounded-[10px]">
                    Pricing and Free Trial
                  </button>
                  <button className="bg-[#F3F3F3] w-[91px] h-[54px] text-[20px] font-semibold text-[#007FC4] font-poppin rounded-[10px]">
                    Demo
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default PublicNavbar;
