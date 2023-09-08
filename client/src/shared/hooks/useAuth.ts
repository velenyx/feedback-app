import { useSelector } from "react-redux";
import { selectUser } from "../../app/store/slice/auth/authSlice";

export const useAuth = () => {
  const user  = useSelector(selectUser);

  return {
    isAuth: !!user?.email,
    email: user?.email,
    id: user?.id,
    role: user?.role,
  };
};
