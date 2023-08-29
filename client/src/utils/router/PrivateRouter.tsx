import { Navigate, Outlet } from "react-router-dom";
import { routePath } from "../constatnts/routePath";
// import { useAuth } from "../../hooks/useAuth";

export const PrivateRouter = () => {
  //   const { isAuth } = useAuth();
  const isAuth = false;

  return isAuth ? <Outlet /> : <Navigate to={routePath.AUTH} />;
};
