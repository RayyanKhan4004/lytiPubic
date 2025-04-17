import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../pages/onboarding/Login";

//leaderboard
import LeaderBoards from "../pages/leaderboards/LeaderBoards";

// Dashboards
import SnapShot from "../pages/dashboard/SnapShot";
import TeamDashboard from "../pages/dashboard/teamDashboard/TeamDashboard";
import CeoDashboard from "../pages/dashboard/ceoDashboard/CeoDashboard";

// Admin
import AdminDashboard from "../pages/admin/AdminDashboard";
import UsersTable from "../pages/admin/users/UsersTable";
import AddUser from "../pages/admin/users/AddUser";
import EditUser from "../pages/admin/users/EditUser";
import AdminChallengeTable from "../pages/admin/challenge/AdminChallengeTable";
import AddChallenge from "../pages/admin/challenge/AddChallenge";
import LeadSource from "../pages/admin/LeadSource";
import TeamSettings from "../pages/admin/TeamSettings";
import Tasks from "../pages/admin/Tasks";
import Commission from "../pages/admin/Commission";

// Orders
import OrdersTable from "../pages/order/OrdersTable";
import UnderwriterBoard from "../pages/order/UnderwriterBoard";
import OrderEdit from "../pages/order/OrderEdit";
import CreateOrder from "../pages/order/CreateOrder";
import OrderDetail from "../pages/order/OrderDetail";
import StagesBoardDragDrop from "../pages/order/StagesBoardDrapDrop";
import FeeDetail from "../pages/order/FeeDetail";
import CreateNewOrder from "../pages/order/CreateNewOrder";

// Account
import ChangePassword from "../pages/account/ChangePassword";
import Profile from "../pages/account/Profile";
import Ranking from "../pages/account/Ranking";
import Goals from "../pages/account/Goals";

// Challenges
import Challenges from "../pages/challenges/Challenges";
import CreateChallenge from "../pages/challenges/CreateChallenge";

import ProtectedLayout from "./ProtectedLayout";
import PublicRoute from "./PublicRoute";
import StatusesBoard from "../pages/order/StatusesBoard";
import ListingCompanyLeaderBoard from "../pages/leaderboards/ListingCompanyLeaderboard";
import SellingCompanyLeaderBoard from "../pages/leaderboards/SellingCompanyLeaderBoard";
import ListingTable from "../pages/admin/listing/ListingTable";
import SellingTable from "../pages/admin/selling/SellingTable";
import Record from "../pages/record/Record";
import PersonalDashboard from "../pages/dashboard/personalDashboard/PersonalDashboard";
import MessageCenter from "../pages/message-center/MessageCenter";
import EditChallenge from "../pages/challenges/EditChallenge";
import LeadsSourceGroup from "../pages/admin/LeadsSourceGroup";
import PublicDashBoard from "../pages/publicDashboard/PublicDashBoard";
import PricingPage from "../pages/PricingPage/PricingPage";
import Products from "../pages/Products/Products";
import CompanyDashboard from "../pages/publicDashboard/components/CompanyDashboard";
import CompanyNews from "../pages/publicDashboard/components/CompanyNews";
import CompanyAboutUs from "../pages/publicDashboard/components/CompanyAboutUs";
import ActivityAgent from "../pages/report/activity/ActivityAgent";
import ActivityLog from "../pages/report/activity/ActivityLog";
// import MessageCenter from "../pages/message-center/messageCenter";

export const router = createBrowserRouter([
 
  {
    path: "/",
    element: (
      <PublicRoute>
        <PublicDashBoard />
      </PublicRoute>
    ),
  },
  {
    path: "public/pricing",
    element: (
      <PublicRoute>
        <PricingPage />
      </PublicRoute>
    ),
  },
  {
    path: "public/products",
    element: (
      <PublicRoute>
        <Products />
      </PublicRoute>
    ),
  },
  {
    path: "/public/Company",
    element: (
      <PublicRoute>
        <CompanyDashboard />
      </PublicRoute>
    ),
  },
  {
    path: "/public/Company/News",
    element: (
      <PublicRoute>
        <CompanyNews />
      </PublicRoute>
    ),
  },
  {
    path: "/public/Company/aboutus",
    element: (
      <PublicRoute>
        <CompanyAboutUs />
      </PublicRoute>
    ),
  },
]);
