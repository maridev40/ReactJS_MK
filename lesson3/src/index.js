import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h2>Задание 1: Температурный конвертер с Material UI</h2>
    <TemperatureConverter />
    <h2>Задание 2: Список дел с Material UI</h2>
    <TodoList />
  </React.StrictMode>
);

