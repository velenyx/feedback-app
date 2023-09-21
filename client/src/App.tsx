import "./app/styles/app.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./app/store/slice/auth/authSlice";
import { Routing } from "./Routing";
import AuthService from "./services/AuthService";

function App() {
  const dispatch = useDispatch();

  const checkAuthorization = async () => {
        const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const user = await AuthService.checkAuth();
        dispatch(setUser(user));
      } catch (error) {
        console.log(error);
      };
    }
  }

  useEffect(() => {
    checkAuthorization()
  }, [dispatch]);

  return <Routing />;
}

export default App;
