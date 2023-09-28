import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";
import { Home } from "./pages/Home/Home";
import { Agremeent } from "./pages/Agremeent/Agremeent";
import { CommunityRules } from "./pages/CommunityRules/CommunityRules";
import { Feedback } from "./pages/Feedback/Feedback";
import { About } from "./pages/About/About";
import { Register } from "./pages/Register/Register";
import { PrivateRouter } from "./shared/router/privateRouter";
import { useAuth } from "./shared/hooks/useAuth";
import { routePath } from "./shared/config/routePath";
import { ProfilePageAsync } from "./pages/Profile/ProfilePageAsync";



export const Routing = () => {
  const { isAuth } = useAuth();
  return (
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route
          path={routePath.PROFILE}
          element={
            <Suspense fallback={"Загрузка..."}>
              <ProfilePageAsync />
            </Suspense>
          }
        />
      </Route>

      <Route
        path={routePath.AUTH}
        element={!isAuth ? <Auth /> : <Navigate to={routePath.HOME} />}
      />
      <Route
        path={routePath.REGISTRATION}
        element={!isAuth ? <Register /> : <Navigate to={routePath.HOME} />}
      />
      <Route path={routePath.HOME} element={<Home />} />
      <Route path={routePath.FEEDBACK} element={<Feedback />} />
      <Route path={routePath.AGREMEENT} element={<Agremeent />} />
      <Route path={routePath.COMMUNNITY_RULES} element={<CommunityRules />} />
      <Route path={routePath.ABOUT} element={<About />} />
      <Route path="*" element={<Navigate to={routePath.NOT_FOUND} />} />
    </Routes>
  );
};
