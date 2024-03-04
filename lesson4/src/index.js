import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/AboutPage" element={<AboutPage />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </Router>
);

