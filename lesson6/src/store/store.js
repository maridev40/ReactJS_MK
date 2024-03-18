import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "../reducers/productListSlice";

const store = configureStore({
  reducer: {
    products: productListSlice
  }  
});

export default store;