import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../pages/onboarding/Login";
import SnapShot from "../pages/dashboard/SnapShot";
import UsersTable from "../pages/admin/users/UsersTable";
import AddUser from "../pages/admin/users/AddUser";
import ChangePassword from "../pages/account/ChangePassword";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminChallengeTable from "../pages/admin/challenge/AdminChallengeTable";
import AddChallenge from "../pages/admin/challenge/AddChallenge";
import LeadSource from "../pages/admin/LeadSource";
import OrdersTable from "../pages/order/OrdersTable";
import Profile from "../pages/account/Profile";
import UnderwriterBoard from "../pages/order/UnderwriterBoard";
import OrderEdit from "../pages/order/OrderEdit";
import TeamSettings from "../pages/admin/TeamSettings";
import Tasks from "../pages/admin/Tasks";
import Commission from "../pages/admin/Commission";
import StagesBoardDragDrop from "../pages/order/StagesBoardDrapDrop";
import Ranking from "../pages/account/Ranking";
import Goals from "../pages/account/Goals";
import TeamDashboard from "../pages/dashboard/teamDashboard/TeamDashboard";
import CeoDashboard from "../pages/dashboard/CeoDashboard";
import PersonalDashboard from "../pages/dashboard/PersonalDashboard";

const appRouter = createBrowserRouter([
  {
    path: "*",
    element: (
      <DashboardLayout>
        <NotFoundPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/",
    element: <Login />,
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
    path: "/account/change-password",
    element: (
      <DashboardLayout>
        <ChangePassword />
      </DashboardLayout>
    ),
  },
  {
    path: "/admin/dashboard",
    element: (
      <DashboardLayout>
        <AdminDashboard />
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
    path: "/account/profile",
    element: (
      <DashboardLayout>
        <Profile />
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
    path: "/orders/underwriter-board",
    element: (
      <DashboardLayout>
        <UnderwriterBoard />
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
  {
    path: "/orders/stages-board",
    element: (
      <DashboardLayout>
        <StagesBoardDragDrop />
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

  //  dashboard

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
]);

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default Routes;
