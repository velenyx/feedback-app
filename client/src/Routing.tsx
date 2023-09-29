import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRouter } from "./shared/router/privateRouter";
import { useAuth } from "./shared/hooks/useAuth";
import { routePath } from "./shared/config/routePath";
import { Auth } from "./pages/Auth/Auth";
import { Register } from "./pages/Register/Register";
import { ProfileLazy } from "./pages/Profile/ProfileLazy";
import { HomeLazy } from "./pages/Home/HomeLazy";
import { NotFoundPageAsync } from "./pages/NotFound/NotFoundPageAsync";
import { FeedbackLazy } from "./pages/Feedback/FeedbackLazy";
import { CommunityRulesLazy } from "./pages/CommunityRules/CommunityRulesLazy";
import { AgremeentLazy } from "./pages/Agremeent/AgremeentLazy";
import { AboutLazy } from "./pages/About/AboutLazy";
import { VerifyEmailLazy } from "./pages/VerifyEmail/VerifyEmailLazy";

export const Routing = () => {
  const { isAuth } = useAuth();
  return (
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route
          path={routePath.PROFILE}
          element={
            <Suspense fallback={"Загрузка..."}>
              <ProfileLazy />
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

      <Route
        path={routePath.HOME}
        element={
          <Suspense fallback={"Загрузка..."}>
            <HomeLazy />
          </Suspense>
        }
      />

      <Route
        path={routePath.FEEDBACK}
        element={
          <Suspense fallback={"Загрузка..."}>
            <FeedbackLazy />
          </Suspense>
        }
      />
       <Route
        path={routePath.VERIFY_EMAIL}
        element={
          <Suspense fallback={"Загрузка..."}>
            <VerifyEmailLazy />
          </Suspense>
        }
      />
      <Route
        path={routePath.AGREMEENT}
        element={
          <Suspense fallback={"Загрузка..."}>
            <AgremeentLazy />
          </Suspense>
        }
      />

      <Route
        path={routePath.COMMUNNITY_RULES}
        element={
          <Suspense fallback={"Загрузка..."}>
            <CommunityRulesLazy />
          </Suspense>
        }
      />
      <Route
        path={routePath.ABOUT}
        element={
          <Suspense fallback={"Загрузка..."}>
            <AboutLazy />
          </Suspense>
        }
      />
      <Route
        path={routePath.NOT_FOUND}
        element={
          <Suspense fallback={"Загрузка..."}>
            <NotFoundPageAsync />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={"Загрузка..."}>
            <Navigate to={routePath.NOT_FOUND} />
          </Suspense>
        }
      />
    </Routes>
  );
};
