import ScreenLogo from "../../../assets/icons/ScreenLogo.svg";
import PublicDashboardNavbar from "./PublicDashboardNavbar";


function PublicNavbar() {
  return (
    <div>
      <div className="flex justify-center p-[60px] pt-0 ">
        <div
          className="w-[100%] rounded-b-[120px] border-white border-3"
          style={{ boxShadow: "0px 0px 10px 1px #00000040" }}
        >
          <div className="flex-col w-full ">
            <PublicDashboardNavbar />
            <div
              className="flex items-center justify-between p-[60px] bg-gradient-to-b from-[#FFFFFF] via-80%  via-[#E5E5E5E5] to-[#99999999] rounded-b-[120px] "
              style={{ boxShadow: "#00000040 , 10px 10px 20px " }}
            >
              <img
                src={ScreenLogo}
                alt=""
                className="w-[537.685546875px] h-[537.9717407226562px]"
              />
              <div className="flex flex-col gap-[30px] font-poppin ">
                <h1 className="font-bold text-3xl ">
                  Analytics Platform and <br /> Transaction Management Built-In
                </h1>
                <p className="font-normal text-base text-[#000000]">
                  With Sisu, Teams And Brokers Unlock Game-Changing Business
                  <br /> Intelligence, Streamline Transaction Management, And
                  Provide Buyers <br /> And Sellers A Fully Branded Client
                  Portal—Effortlessly. Just Sisu And <br /> Your CRM Are All You
                  Need To Run Your Business Smoothly And Stay <br /> Ahead Of
                  The competition.
                </p>
                <div className="mt-[10px] ">
                  <button className="bg-[#333333] font-poppin text-white  font-semibold pt-[12px] pr-[16px] pb-[12px] pl-[16px] rounded-[10px]">
                    Pricing and Free Trial
                  </button>
                  <button className="bg-white ml-[10px] text-[#007FC4] font-poppin rounded-[10px]  font-semibold pt-[12px] pr-[16px] pb-[12px] pl-[16px]">
                    Demo
                  </button>
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
