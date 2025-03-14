import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../pages/onboarding/Login";

//leaderboard
import LeaderBoards from "../pages/leaderboards/LeaderBoards";

// Dashboards
import SnapShot from "../pages/dashboard/SnapShot";
import TeamDashboard from "../pages/dashboard/teamDashboard/TeamDashboard";
import CeoDashboard from "../pages/dashboard/CeoDashboard";
import PersonalDashboard from "../pages/dashboard/PersonalDashboard";

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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard/snapShot" replace /> },
      { path: "dashboard/snapShot", element: <SnapShot /> },
      { path: "dashboard/ceo-dashboard", element: <CeoDashboard /> },
      { path: "dashboard/personal-dashboard", element: <PersonalDashboard /> },
      { path: "dashboard/team-dashboard", element: <TeamDashboard /> },
      { path: "leader-board", element: <LeaderBoards /> },
      {
        path: "/leader-board/listing-company",
        element: <ListingCompanyLeaderBoard />,
      },
      {
        path: "/leader-board/selling-company",
        element: <SellingCompanyLeaderBoard />,
      },
      { path: "admin/dashboard", element: <AdminDashboard /> },
      { path: "admin/users-table", element: <UsersTable /> },
      { path: "admin/add-user", element: <AddUser /> },
      { path: "admin/edit-user", element: <EditUser /> },
      { path: "admin/challenge", element: <AdminChallengeTable /> },
      { path: "admin/listing", element: <ListingTable /> },
      { path: "admin/selling", element: <AdminChallengeTable /> },
      { path: "admin/create-challenge", element: <AddChallenge /> },
      { path: "admin/lead-source", element: <LeadSource /> },
      { path: "admin/team-settings", element: <TeamSettings /> },
      { path: "admin/tasks", element: <Tasks /> },
      { path: "admin/commissions", element: <Commission /> },
      { path: "orders/orders", element: <OrdersTable /> },
      { path: "orders/create-order", element: <CreateNewOrder /> },
      { path: "orders/add-order", element: <CreateNewOrder /> },
      { path: "orders/edit-order", element: <OrderEdit /> },
      { path: "orders/order-detail", element: <OrderDetail /> },
      { path: "orders/underwriter-board", element: <UnderwriterBoard /> },
      { path: "orders/stages-board", element: <StagesBoardDragDrop /> },
      { path: "orders/statuses-board", element: <StatusesBoard /> },
      { path: "orders/fee-detail", element: <FeeDetail /> },
      { path: "account/change-password", element: <ChangePassword /> },
      { path: "account/profile", element: <Profile /> },
      { path: "account/ranking", element: <Ranking /> },
      { path: "account/goals", element: <Goals /> },
      { path: "challenges", element: <Challenges /> },
      { path: "create-challenge", element: <CreateChallenge /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
]);
