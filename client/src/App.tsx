import "./app/styles/app.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./app/store/slice/auth/authSlice";
import { Routing } from "./Routing";
import AuthService from "./services/AuthService";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    AuthService.checkAuth()
      .then((user) => {
        dispatch(setUser(user));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <Routing />;
}

export default App;
2