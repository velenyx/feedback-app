import { useSelector } from "react-redux";
import { selectUser } from "../../app/store/slice/auth/authSlice";

export const useAuth = () => {
  const user = useSelector(selectUser);
  const token = localStorage.getItem("accessToken");

  return {
    isAuth: !!token,
    email: user?.email,
    name: user?.name,
    id: user?.id,
    role: user?.role,
  };
};
