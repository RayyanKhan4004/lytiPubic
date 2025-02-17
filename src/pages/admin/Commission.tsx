import setting from "../../assets/icons/Setting.svg";
import OptionCard from "../../components/admin/OptionCard";
import RedirectingCard from "../../components/admin/RedirectingCard";
import Breadcrumb from "../../components/common/BreadCrumb";

const Commission = () => {
  const cardsData = [
    { path: "/prefrences", text: "Prefrences", icon: setting },
  ];

  const redirectingData = [
    { path: "/adjustment-categories", text: "Adjustment Categories" },
    { path: "/commission-templates", text: "Commission Templates" },
    { path: "/expenses", text: "Expenses" },
    { path: "/integration-hub", text: "Integration Hub" },
    { path: "/vendor", text: "Vendor" },
  ];

  return (
    <div className="w-full px-4 my-8 font-Poppins flex flex-col gap-7">
      <Breadcrumb items={["Admin", "Team Settings"]} />
      <div className="w-full flex justify-between items-center gap-2 flex-wrap">
        {cardsData.map((card, index) => (
          <OptionCard
            key={index}
            icon={card.icon}
            text={card.text}
            path={card.path}
          />
        ))}
      </div>
      <div className="flex flex-col gap-5 w-full">
        <h2 className="text-(--primary) font-semibold text-lg">
          Redirecting Pages
        </h2>
        <div className="w-full flex  items-center gap-2 flex-wrap">
          {redirectingData.map((card, index) => (
            <RedirectingCard key={index} text={card.text} path={card.path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commission;
