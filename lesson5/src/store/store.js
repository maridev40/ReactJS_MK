import { configureStore } from '@reduxjs/toolkit';
export const TOGGLE_THEME = 'TOGGLE_THEME';

const reducer = (state = 'light', action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return state === 'light' ? 'dark' : 'light';
        default:
            return state;
    }
}

const store = configureStore({
    reducer: reducer
})

export default store;