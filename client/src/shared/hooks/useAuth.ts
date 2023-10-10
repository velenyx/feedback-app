import { useSelector } from "react-redux";
import { selectUser } from "../../app/store/slice/auth/authSlice";

export const useAuth = () => {
  const user = useSelector(selectUser);

  return {
    isAuth: !!user?.name,
    email: user?.email,
    name: user?.name,
    id: user?.id,
    isVerified: user?.isEmailVerified,
    role: user?.role,
  };
};
