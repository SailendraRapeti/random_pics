import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name: "images",
    initialState: {
        products: [],
        total: 0
    },
    reducers: {
        addProducts: (state, action) => {
            state.products=action.payload;
            state.total = (state.products).length;
        },
        deleteEntireCart: (state,action) => {

        
            state.products.splice(action.payload,1);
            state.total -= 1;
        }
    }
})


export const { addProducts, deleteEntireCart } = imageSlice.actions;
export default imageSlice.reducer;