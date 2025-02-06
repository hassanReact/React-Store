import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.carts = action.payload;
        },
    },
});

export const { setProducts } = cartSlice.actions;
export default cartSlice.reducer;
