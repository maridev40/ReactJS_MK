import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import store from './store/store.js';
import Product from './components/Product.js';
import AProductList from './components/AProductList.js';
import { addProduct } from './reducers/productListSlice.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <h2>Добавить продукт:</h2>
      <Product actions={[addProduct]} autoClear={true}/>
      <AProductList />
    </Provider>
  </React.StrictMode>
);

