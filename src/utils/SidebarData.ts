import icon1 from "../assets/icons/sidebar/DashboardBlack.svg";
import icon2 from "../assets/icons/sidebar/DashboardWhite.svg";
import icon3 from "../assets/icons/sidebar/CreditCard.svg";
import icon4 from "../assets/icons/sidebar/CreditCardWhite.svg";
import icon5 from "../assets/icons/sidebar/Crown.svg";
import icon6 from "../assets/icons/sidebar/CrownWhite.svg";
import icon7 from "../assets/icons/sidebar/Medal.svg";
import icon8 from "../assets/icons/sidebar/MedalWhite.svg";
import icon9 from "../assets/icons/sidebar/ChatCenteredDots.svg";
import icon10 from "../assets/icons/sidebar/ChatCenteredDotsWhite.svg";
import icon11 from "../assets/icons/sidebar/ChartBar.svg";
import icon12 from "../assets/icons/sidebar/ChartBarWhite.svg";
import icon13 from "../assets/icons/sidebar/Command.svg";
import icon14 from "../assets/icons/sidebar/CommandWhite.svg";
import icon15 from "../assets/icons/sidebar/User.svg";
import icon16 from "../assets/icons/sidebar/UserWhite.svg";
import Share from "../assets/icons/sidebar/Share.svg";

export interface Item {
  id?: number;
  title?: string;
  icon1?: any;
  icon2?: any;
  path?: string;
}

export const sidebarData = () => {
  return [
    {
      id: 10,
      title: "Record",
      icon1: icon11,
      icon2: icon12,
      path: "/record",
    },
    {
      id: 1,
      title: "Dashboard",
      icon1: icon1,
      icon2: icon2,
      path: "/dashboard/snapShot",
      subMenu: [
        { id: 101, title: "SnapShot", path: "/dashboard/snapShot" },
        { id: 102, title: "CEO Dashboard", path: "/dashboard/ceo-dashboard" },
        { id: 103, title: "Team Dashboard", path: "/dashboard/team-dashboard" },
        {
          id: 104,
          title: "Personal Dashboard",
          path: "/dashboard/personal-dashboard",
        },
      ],
    },
    {
      id: 2,
      title: "Orders",
      icon1: icon3,
      icon2: icon4,
      path: "/orders/orders",
      subMenu: [
        { id: 201, title: "Orders", path: "/orders/orders" },
        {
          id: 203,
          title: "Order Statuses board",
          path: "/orders/stages-board",
        },
        // { id: 204, title: "Statuses Board", path: "orders/statuses-board" },
        {
          id: 205,
          title: "Underwriter Borad",
          path: "/orders/underwriter-board",
        },
        {
          id: 206,
          title: "Accounting Fee Details",
          path: "/orders/fee-detail",
        },
        {
          id: 207,
          title: "Create New Order",
          path: "/orders/create-order",
        },
      ],
    },
    {
      id: 3,
      title: "Leaderboards",
      icon1: icon5,
      icon2: icon6,
      path: "/leader-board",
      subMenu: [
        { id: 301, title: "Agent Leaderboards", path: "/leader-board" },
        {
          id: 302,
          title: "Listing Company",
          path: "/leader-board/listing-company",
        },
        {
          id: 303,
          title: "Selling Company",
          path: "/leader-board/selling-company",
        },
      ],
    },
    {
      id: 4,
      title: "Challenges",
      icon1: icon7,
      icon2: icon8,
      path: "/challenges",
    },
    {
      id: 5,
      title: "Message Center",
      icon1: icon9,
      icon2: icon10,
      path: "/message-center",
    },
    {
      id: 6,
      title: "Reports",
      icon1: icon11,
      icon2: icon12,
      path: "",
      subMenu: [
        {
          id: 601,
          title: "Activity",
          path: "/reports",
          subMenuArray: [
            { id: 611, title: "Activity by agent", path: "/by-agent" },
            { id: 612, title: "Activity by log", path: "/by-log" },
          ],
        },
        { id: 602, title: "Account. & Coaching", path: "/Dashboard/Team" },
        { id: 603, title: "Commissions", path: "/Dashboard/Personal" },
        { id: 604, title: "Production", path: "/Dashboard/Personal" },
        { id: 605, title: "Lead Sources", path: "/Dashboard/Personal" },
        { id: 606, title: "Vendors", path: "/Dashboard/Personal" },
      ],
    },
    {
      id: 7,
      title: "Admin",
      icon1: icon13,
      icon2: icon14,
      path: "/admin/users-table",
      subMenu: [
        { id: 701, title: "Users", path: "/admin/users-table" },
        { id: 702, title: "Dashboard", path: "/admin/dashboard" },
        { id: 703, title: "Lead Sources", path: "/admin/lead-source" },
        { id: 704, title: "Challenges", path: "/admin/challenge" },
        { id: 705, title: "Listing", path: "/admin/listing" },
        { id: 706, title: "Selling", path: "/admin/selling" },
        { id: 707, title: "Documents", path: "/Dashboard/Personal" },
        { id: 708, title: "Team Settings", path: "/admin/team-settings" },
        { id: 709, title: "Tasks", path: "/admin/tasks" },
        { id: 710, title: "Commissions", path: "/admin/commissions" },
        {
          id: 711,
          title: "Expenses",
          path: "/Dashboard/Personal",
          image: Share,
        },
        {
          id: 712,
          title: "Integration Hub",
          path: "/Dashboard/Personal",
          image: Share,
        },
        { id: 713, title: "Vendor", path: "/Dashboard/Personal", image: Share },
      ],
    },
    {
      id: 8,
      title: "Account",
      icon1: icon15,
      icon2: icon16,
      path: "/account/profile",
      subMenu: [
        { id: 801, title: "Profile", path: "/account/profile" },
        { id: 802, title: "Ranking & Achievements", path: "/account/ranking" },
        { id: 803, title: "Goals", path: "/account/goals" },
        { id: 804, title: "Default Settings", path: "/Dashboard/Personal" },
        { id: 805, title: "Notifications", path: "/Dashboard/Personal" },
        { id: 806, title: "Change Password", path: "/account/change-password" },
        {
          id: 807,
          title: "Team Library",
          path: "/Dashboard",
          image: Share,
        },
        {
          id: 808,
          title: "Helpful Resources",
          path: "/Dashboard/Personal",
        },
      ],
    },
  ];
};
