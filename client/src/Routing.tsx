import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuth } from './shared/hooks/useAuth';

import { About } from './pages/About/About';
import { AddFeedback } from './pages/AddFeedback/AddFeedback';
import { Agremeent } from './pages/Agremeent/Agremeent';
import { Auth } from './pages/Auth/Auth';
import { CommunityRules } from './pages/CommunityRules/CommunityRules';
import { Feedback } from './pages/Feedback/Feedback';
import { Home } from './pages/Home/Home';
import { Profile } from './pages/Profile/Profile';
import { Register } from './pages/Register/Register';
import { VerifyEmail } from './pages/VerifyEmail/VerifyEmail';
import { routePath } from './shared/config/routePath';
import { PrivateRouter } from './shared/router/privateRouter';

export const Routing = () => {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route path={routePath.PROFILE} element={<Profile />} />
        <Route path={routePath.ADD_FEEDBACK} element={<AddFeedback />} />
      </Route>

      <Route path={routePath.AUTH} element={isAuth ? <Navigate to={routePath.HOME} /> : <Auth />} />
      <Route
        path={routePath.REGISTRATION}
        element={isAuth ? <Navigate to={routePath.HOME} /> : <Register />}
      />
      <Route path={routePath.HOME} element={<Home />} />
      <Route path={routePath.FEEDBACK} element={<Feedback />} />
      <Route path={routePath.VERIFY_EMAIL} element={<VerifyEmail />} />
      <Route path={routePath.AGREMEENT} element={<Agremeent />} />
      <Route path={routePath.COMMUNNITY_RULES} element={<CommunityRules />} />
      <Route path={routePath.ABOUT} element={<About />} />
      <Route path='*' element={<Navigate to={routePath.NOT_FOUND} />} />
    </Routes>
  );
};
