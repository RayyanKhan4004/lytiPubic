import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../pages/onboarding/Login";
import LeaderBoards from "../pages/LeaderBoards";

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
import DashboardLayout from "../components/layouts/DashboardLayout";

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
      { path: "admin/dashboard", element: <AdminDashboard /> },
      { path: "admin/users-table", element: <UsersTable /> },
      { path: "admin/add-user", element: <AddUser /> },
      { path: "admin/edit-user", element: <EditUser /> },
      { path: "admin/challenge", element: <AdminChallengeTable /> },
      { path: "admin/create-challenge", element: <AddChallenge /> },
      { path: "admin/lead-source", element: <LeadSource /> },
      { path: "admin/team-settings", element: <TeamSettings /> },
      { path: "admin/tasks", element: <Tasks /> },
      { path: "admin/commissions", element: <Commission /> },
      { path: "orders/orders", element: <OrdersTable /> },
      { path: "orders/create-order", element: <CreateNewOrder /> },
      { path: "orders/add-order", element: <CreateOrder /> },
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
      <DashboardLayout>
        <Login />
      </DashboardLayout>
    ),
  },
  {
    path: "/admin/add-user",
    element: (
      <DashboardLayout>
        <AddUser />
      </DashboardLayout>
    ),
  },
  {
    path: "/admin/edit-user",
    element: (
      <DashboardLayout>
        <EditUser />
      </DashboardLayout>
    ),
  },
  {
    path: "/admin/challenge",
    element: (
      <DashboardLayout>
        <AdminChallengeTable />
      </DashboardLayout>
    ),
  },
  {
    path: "/admin/create-challenge",
    element: (
      <DashboardLayout>
        <AddChallenge />
      </DashboardLayout>
    ),
  },
  {
    path: "/admin/lead-source",
    element: (
      <DashboardLayout>
        <LeadSource />
      </DashboardLayout>
    ),
  },
  {
    path: "/admin/team-settings",
    element: (
      <DashboardLayout>
        <TeamSettings />
      </DashboardLayout>
    ),
  },
  {
    path: "/admin/tasks",
    element: (
      <DashboardLayout>
        <Tasks />
      </DashboardLayout>
    ),
  },
  {
    path: "/admin/commissions",
    element: (
      <DashboardLayout>
        <Commission />
      </DashboardLayout>
    ),
  },

  // Orders Routes
  {
    path: "/order",
    element: (
      <DashboardLayout>
        <OrderEdit />
      </DashboardLayout>
    ),
  },
  {
    path: "/orders/orders",
    element: (
      <DashboardLayout>
        <OrdersTable />
      </DashboardLayout>
    ),
  },
  {
    path: "/orders/create-order",
    element: (
      <DashboardLayout>
        <CreateNewOrder />
      </DashboardLayout>
    ),
  },
  {
    path: "/orders/add-order",
    element: (
      <DashboardLayout>
        <CreateOrder />
      </DashboardLayout>
    ),
  },
  {
    path: "/orders/edit-order",
    element: (
      <DashboardLayout>
        <OrderEdit />
      </DashboardLayout>
    ),
  },
  {
    path: "/orders/order-detail",
    element: (
      <DashboardLayout>
        <OrderDetail />
      </DashboardLayout>
    ),
  },
  {
    path: "/orders/underwriter-board",
    element: (
      <DashboardLayout>
        <UnderwriterBoard />
      </DashboardLayout>
    ),
  },
  {
    path: "/orders/stages-board",
    element: (
      <DashboardLayout>
        <StagesBoardDragDrop />
      </DashboardLayout>
    ),
  },
  {
    path: "/orders/fee-detail",
    element: (
      <DashboardLayout>
        <FeeDetail />
      </DashboardLayout>
    ),
  },

  // Account Routes
  {
    path: "/account/change-password",
    element: (
      <DashboardLayout>
        <ChangePassword />
      </DashboardLayout>
    ),
  },
  {
    path: "/account/profile",
    element: (
      <DashboardLayout>
        <Profile />
      </DashboardLayout>
    ),
  },
  {
    path: "/account/ranking",
    element: (
      <DashboardLayout>
        <Ranking />
      </DashboardLayout>
    ),
  },
  {
    path: "/account/goals",
    element: (
      <DashboardLayout>
        <Goals />
      </DashboardLayout>
    ),
  },

  // Dashboard Routes
  {
    path: "/dashboard/snapShot",
    element: (
      <DashboardLayout>
        <SnapShot />
      </DashboardLayout>
    ),
  },
  {
    path: "/dashboard/ceo-dashboard",
    element: (
      <DashboardLayout>
        <CeoDashboard />
      </DashboardLayout>
    ),
  },
  {
    path: "/dashboard/personal-dashboard",
    element: (
      <DashboardLayout>
        <PersonalDashboard />
      </DashboardLayout>
    ),
  },
  {
    path: "/dashboard/team-dashboard",
    element: (
      <DashboardLayout>
        <TeamDashboard />
      </DashboardLayout>
    ),
  },

  // Miscellaneous Routes

  {
    path: "/leader-board",
    element: (
      <DashboardLayout>
        <LeaderBoards />
      </DashboardLayout>
    ),
  },

  // challenge
  {
    path: "/challenges",
    element: (
      <DashboardLayout>
        <Challenges />
      </DashboardLayout>
    ),
  },
  {
    path: "/create-challenge",
    element: (
      <DashboardLayout>
        <CreateChallenge />
      </DashboardLayout>
    ),
  },
]);
