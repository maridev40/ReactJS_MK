import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store'
import SwitcherTheme from './components/SwitcherTheme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SwitcherTheme />
    </Provider>
  </React.StrictMode >
);
