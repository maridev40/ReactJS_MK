import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import MainPage from './page/mainpage/MainPage.js';
import BasketPage from './page/basketpage/BasketPage.js';
import RegistrationPage from './page/registrationpage/RegistrationPage.js';
import CatalogPage from './page/catalogpage/CatalogPage.js';
import ArrivalsPage from './page/arrivalspage/ArrivalsPage.js';
import store from './store/store.js';
import "./style/style.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/arrivals" element={<ArrivalsPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

