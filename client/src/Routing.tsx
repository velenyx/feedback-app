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
import { LazyLoading } from "./components/LazyLoading/LazyLoading";

export const Routing = () => {
  const { isAuth } = useAuth();
  return (
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route
          path={routePath.PROFILE}
          element={
            <Suspense fallback={<LazyLoading />}>
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
          <Suspense fallback={<LazyLoading />}>
            <HomeLazy />
          </Suspense>
        }
      />

      <Route
        path={routePath.FEEDBACK_PAGE}
        element={
          <Suspense fallback={<LazyLoading />}>
            <FeedbackLazy />
          </Suspense>
        }
      />
      <Route
        path={routePath.VERIFY_EMAIL}
        element={
          <Suspense fallback={<LazyLoading />}>
            <VerifyEmailLazy />
          </Suspense>
        }
      />
      <Route
        path={routePath.AGREMEENT}
        element={
          <Suspense fallback={<LazyLoading />}>
            <AgremeentLazy />
          </Suspense>
        }
      />

      <Route
        path={routePath.COMMUNNITY_RULES}
        element={
          <Suspense fallback={<LazyLoading />}>
            <CommunityRulesLazy />
          </Suspense>
        }
      />
      <Route
        path={routePath.ABOUT}
        element={
          <Suspense fallback={<LazyLoading />}>
            <AboutLazy />
          </Suspense>
        }
      />
      <Route
        path={routePath.NOT_FOUND}
        element={
          <Suspense fallback={<LazyLoading />}>
            <NotFoundPageAsync />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<LazyLoading />}>
            <Navigate to={routePath.NOT_FOUND} />
          </Suspense>
        }
      />
    </Routes>
  );
};
