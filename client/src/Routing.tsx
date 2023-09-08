import { Routes, Route, Navigate } from "react-router-dom";
import { routePath } from "./shared/config/routePath";
import { Auth } from "./pages/Auth/Auth";
import { Home } from "./pages/Home/Home";
import { Profile } from "./pages/Profile/Profile";
import { AddFeedback } from "./pages/AddFeedback/AddFeedback";
import { Agremeent } from "./pages/Agremeent/Agremeent";
import { CommunityRules } from "./pages/CommunityRules/CommunityRules";
import { Feedback } from "./pages/Feedback/Feedback";
import { About } from "./pages/About/About";
import { PrivateRouter } from "./shared/router/privateRouter";
import { Register } from "./pages/Register/Register";

export const Routing = () => {
  return (
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route path={routePath.PROFILE} element={<Profile />} />
        <Route path={routePath.ADD_FEEDBACK} element={<AddFeedback />} />
      </Route>

      <Route path={routePath.AUTH} element={<Auth />} />
      <Route path={routePath.REGISTRATION} element={<Register />} />
      <Route path={routePath.HOME} element={<Home />} />
      <Route path={routePath.FEEDBACK} element={<Feedback />} />
      <Route path={routePath.AGREMEENT} element={<Agremeent />} />
      <Route path={routePath.COMMUNNITY_RULES} element={<CommunityRules />} />
      <Route path={routePath.ABOUT} element={<About />} />
      <Route path="*" element={<Navigate to={routePath.NOT_FOUND} />} />
    </Routes>
  );
};
