import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { Navigate } from "react-router-dom";

const ProtectedRedirectTo = "/login";
const AuthRedirectTo = "/";

interface RoutesProp {
  children: ReactNode;
}

const PublicRoute = ({ children }: RoutesProp) => {
  const token = useAppSelector(
    (state: any) => state.auth?.accessToken?.accessToken
  );

  return !token ? children : <Navigate to={AuthRedirectTo} replace />;
};

const ProtectedRoute = ({ children }: RoutesProp) => {
  const token = useAppSelector(
    (state: any) => state?.auth?.accessToken?.accessToken
  );

  return token ? children : <Navigate to={ProtectedRedirectTo} replace />;
};

export { ProtectedRoute, PublicRoute };
