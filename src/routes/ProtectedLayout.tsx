import { Outlet } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import DashboardLayout from "../components/layouts/DashboardLayout";

const ProtectedLayout = () => (
  <ProtectedRoute>
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  </ProtectedRoute>
);

export default ProtectedLayout;
