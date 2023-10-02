import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { removeUser, setUser } from './app/store/slice/auth/authSlice';
import AuthService from './services/AuthService';
import { Routing } from './Routing';

import './app/styles/app.scss';

const App = () => {
  const dispatch = useDispatch();
  const checkAuthorization = async () => {
    const accessToken = localStorage.getItem('accessToken');

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
};

export default App;
