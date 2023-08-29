import { Routes, Route, Navigate } from "react-router-dom";
import { routePath } from "./utils/constatnts/routePath";
import { Auth } from "./pages/Auth/Auth";
import { Home } from "./pages/Home/Home";
import { Profile } from "./pages/Profile/Profile";
import { AddFeedback } from "./pages/AddFeedback/AddFeedback";
import { Agremeent } from "./pages/Agremeent/Agremeent";
import { CommunityRules } from "./pages/CommunityRules/CommunityRules";
import { Feedback } from "./pages/Feedback/Feedback";
import { About } from "./pages/About/About";

export const Routing = () => {
  const isAuth = true;
  return (
    <Routes>
      <Route path={routePath.HOME} element={<Home />} />
      <Route path={routePath.PROFILE} element={!isAuth ? <Profile /> : <Auth />} />
      <Route path={routePath.AUTH} element={isAuth ? <Profile /> : <Auth />} />
      <Route path={routePath.REGISTRATION} element={isAuth ? <Profile /> : <Auth />} />
      <Route
        path={routePath.ADD_FEEDBACK}
        element={isAuth ? <AddFeedback /> : <Auth />}
      />
      <Route path={routePath.AGREMEENT} element={<Agremeent />} />
      <Route path={routePath.COMMUNNITY_RULES} element={<CommunityRules />} />
      <Route path={routePath.FEEDBACK} element={<Feedback />} />
      <Route path={routePath.ABOUT} element={<About />} />

      <Route path={routePath.HOME} element={<Home />} />
      <Route path="*" element={<Navigate to={routePath.NOT_FOUND} />} />
    </Routes>
  );
};
