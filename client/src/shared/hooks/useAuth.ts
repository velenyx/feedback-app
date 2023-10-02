import { useSelector } from 'react-redux';

import { selectUser } from '../../app/store/slice/auth/authSlice';

export const useAuth = () => {
  const user = useSelector(selectUser);

  return {
    email: user?.email,
    id: user?.id,
    isAuth: !!user?.name,
    name: user?.name,
    role: user?.role,
  };
};
