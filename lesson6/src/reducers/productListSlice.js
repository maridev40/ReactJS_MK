import { createSlice } from "@reduxjs/toolkit";

export const productListSlice = createSlice({
    name: "productList22",
    initialState: {
        array: [],
        num: 0
    },
    reducers: {
        addProduct: (state, { payload: productItem }) => {
            state.array.push(productItem);
        },
        delProduct: (state, { payload: productItem }) => {
            const prods = state.array.filter((el) => {
                return el.id !== productItem.id;
            });
            state.array = prods;
        },
        editProduct: (state, { payload: productItem }) => {
            const index = state.array.findIndex((el) => el.id == productItem.id);
            if (index >= 0) {
                state.array[index] = productItem;
            }
        },
        incNum: (state) => {
            ++state.num;
        },
    }

});

export const { addProduct, delProduct, editProduct, incNum } = productListSlice.actions;
export default productListSlice.reducer;