import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basket: {}
    },
    reducers: {
        addItem: (state, { payload: id }) => {
            console.log(10, id);
            state.basket[id] = state.basket[id] ? Number(state.basket[id]) + 1 : 1;
        },
        editItem: (state, { payload: { id, quantity } }) => {
            console.log(14, id);
            state.basket[id] = quantity;
        },
        delItem: (state, { payload: id }) => {
            console.log(24, id);
            if (state.basket[id]) {
                if (state.basket[id] > 1) {
                    state.basket[id] = Number(state.basket[id]) - 1;
                } else {
                    delete state.basket[id];
                }
            }
            state.basket = {...state.basket};
        },
        delAllItem: (state, { payload: id }) => {
            if (state.basket[id]) {
                console.log(28, id);
                delete state.basket[id];
            }
            state.basket = {...state.basket};
        },
        clearBasket: (state) => {
            state.basket = {};
        }
    }
});

export const { addItem, editItem, delItem, delAllItem, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;