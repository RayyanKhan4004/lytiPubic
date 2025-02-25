import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardLayout from "../components/DashboardLayout";
import NotFoundPage from "../pages/NotFoundPage";
import LeaderBoards from "../pages/LeaderBoards";

// Onboarding
import Login from "../pages/onboarding/Login";

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

// Account
import ChangePassword from "../pages/account/ChangePassword";
import Profile from "../pages/account/Profile";
import Ranking from "../pages/account/Ranking";
import Goals from "../pages/account/Goals";
import Challenges from "../pages/challenges/Challenges";
import CreateChallenge from "../pages/challenges/CreateChallenge";

const appRouter = createBrowserRouter([
  {
    path: "*",
    element: (
      <DashboardLayout>
        <NotFoundPage />
      </DashboardLayout>
    ),
  },

  //  onboarding
  {
    path: "/",
    element: <Login />,
  },

  // Admin Routes
  {
    path: "/admin/dashboard",
    element: (
      <DashboardLayout>
        <AdminDashboard />
      </DashboardLayout>
    ),
  },
  {
    path: "/admin/users-table",
    element: (
      <DashboardLayout>
        <UsersTable />
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

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default Routes;
