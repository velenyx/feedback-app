import { Navigate, Outlet } from "react-router-dom";
import { routePath } from "../config/routePath";

export const PrivateRouter = () => {
  const isAuth = true;

  return isAuth ? <Outlet /> : <Navigate to={routePath.AUTH} />;
};
