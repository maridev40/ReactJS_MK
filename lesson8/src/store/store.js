import {configureStore} from "@reduxjs/toolkit"
import filterSizeSlice from "../reducers/filterSizeSlice";
import basketSlice from "../reducers/basketSlice";

const store = configureStore({
    reducer: {
        filterSize: filterSizeSlice,
        basket: basketSlice
    }
});

export default store;