import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../lib/store/store";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useSelector((state: RootState) => state.auth.access_token);
  if (token) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default PublicRoute;
