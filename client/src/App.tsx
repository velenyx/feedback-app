import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./app/store/slice/auth/authSlice";
import { Routing } from "./Routing";
import AuthService from "./services/AuthService";
import "./app/styles/app.scss";

export const App = () => {
  const dispatch = useDispatch();
  
  const checkAuthorization = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const user = await AuthService.checkAuth();
        dispatch(setUser(user));
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    checkAuthorization();
  }, []);

  return <Routing />;
};
