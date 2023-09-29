import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "./app/store/slice/auth/authSlice";
import { Routing } from "./Routing";
import AuthService from "./services/AuthService";
import "./app/styles/app.scss";

function App() {
  const dispatch = useDispatch();
  const checkAuthorization = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const user = await AuthService.checkAuth();
        dispatch(setUser(user));
      } catch (error) {
        dispatch(removeUser());
        console.log(error);
      }
    }
  };

  useEffect(() => {
    checkAuthorization();
  }, []);

  return <Routing />;
}

export default App;
