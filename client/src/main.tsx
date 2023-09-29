import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './app/store/index.ts';
import App from './App.tsx';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

  // </React.StrictMode>
);
