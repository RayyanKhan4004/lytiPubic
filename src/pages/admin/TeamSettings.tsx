import user from "../../assets/icons/sidebar/UserWhite.svg";
import bell from "../../assets/icons/Bell.svg";
import table from "../../assets/icons/Table.svg";
import cloud from "../../assets/icons/CloudSlash.svg";
import Breadcrumb from "../../components/common/BreadCrumb";
import OptionCard from "../../components/admin/OptionCard";
import RedirectingCard from "../../components/admin/RedirectingCard";

const TeamSettings = () => {
  const cardsData = [
    { path: "/profile", text: "Profile", icon: user },
    {
      path: "/notifications",
      text: "Notifications",
      icon: bell,
    },
    {
      path: "/order-boards",
      text: "Order Boards",
      icon: table,
    },
    {
      path: "/view-restrictions",
      text: "View Restrictions",
      icon: cloud,
    },
  ];

  const redirectingData = [
    { path: "/preferences", text: "Preferences" },
    { path: "/forms-fields", text: "Forms & Fields" },
    { path: "/custom-fields", text: "Custom Fields" },
    { path: "/groups", text: "Groups" },
    { path: "/activities", text: "Activities" },
    { path: "/api-credentials", text: "API Credentials" },
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

export default TeamSettings;
