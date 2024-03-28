import { createSlice } from "@reduxjs/toolkit";

export const filterSizeSlice = createSlice({
    name: "filterSize",
    initialState: {
        sizes: []
    },
    reducers: {
        addSize: (state, { payload: size }) => {
            console.log(10, size);
            const findSize = state.sizes.find((el) => el === size);
            if (!findSize) {
                state.sizes.push(size);
            }
        },
        delSize: (state, { payload: size }) => {
            console.log(17, size);
            const index = state.sizes.findIndex((el) => el === size);
            if (index >= 0) {
                state.sizes.splice(index, 1);
            }
        },
        delAllSizes: (state) => {
            state.sizes.splice(0, state.sizes.length);
        }
    }
});

export const { addSize, delSize, delAllSizes } = filterSizeSlice.actions;
export default filterSizeSlice.reducer;