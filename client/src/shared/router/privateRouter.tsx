import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import { routePath } from '../config/routePath';

export const PrivateRouter = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={routePath.AUTH} />;
};
