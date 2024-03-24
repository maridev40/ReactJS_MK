import {configureStore} from "@reduxjs/toolkit"
import { middleWareTask } from "../middlewares/middleware";
import tasksSliceReducer2 from "../reducers/tasksSlice";

const store = configureStore({
    reducer: {
        tasks: tasksSliceReducer2
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(middleWareTask)
});

export default store;