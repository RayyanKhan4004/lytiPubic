import user from "../../assets/icons/sidebar/UserWhite.svg";
import bell from "../../assets/icons/Bell.svg";
import edit from "../../assets/icons/PencilSimple.svg";
import list from "../../assets/icons/ListBullets.svg";
import check from "../../assets/icons/CheckCircle.svg";
import stages from "../../assets/icons/FadersHorizontal.svg";
import tag from "../../assets/icons/Tag.svg";
import plane from "../../assets/icons/PaperPlaneTilt.svg";
import Breadcrumb from "../../components/common/BreadCrumb";
import OptionCard from "../../components/admin/OptionCard";

const Tasks = () => {
  const cardsData = [
    { path: "/edit-tasks", text: "Edit Tasks", icon: edit },
    {
      path: "/tasks-list",
      text: "Tasks List",
      icon: list,
    },
    {
      path: "/tasks-statuses",
      text: "Tasks Statuses",
      icon: check,
    },
    {
      path: "/order-stages",
      text: "Order Stages",
      icon: stages,
    },
    {
      path: "/order-tags",
      text: "Order Tags",
      icon: tag,
    },
  ];

  const taskSetting = [
    { path: "/Default-tc", text: "Default TC", icon: user },
    {
      path: "/task-Notifications",
      text: "Task Notifications",
      icon: bell,
    },
    {
      path: "/send-emails",
      text: "Send Emails",
      icon: plane,
    },
  ];

  return (
    <div className="w-full px-4 my-8 font-Poppins flex flex-col gap-7">
      <Breadcrumb items={["Admin", "Team Settings"]} />
      <div className="w-full flex items-center gap-2 flex-wrap">
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
          {taskSetting.map((card, index) => (
            <OptionCard
              key={index}
              icon={card.icon}
              text={card.text}
              path={card.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
