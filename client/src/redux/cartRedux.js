import {createSlice}  from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products: [],
        quantity:0,
        total: 0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
            
        },
        increaseProductQuantity:(state,action) => {
                state.products.at(action.payload.index).quantity += 1;
                state.total += parseFloat(state.products.at(action.payload.index).price);
             },
        decreaseProductQuantity:(state,action) => {
                    state.products.at(action.payload.index).quantity -= 1;
                    state.total -= parseFloat(state.products.at(action.payload.index).price);
            }
           
        }
    },
);

export const {addProduct, increaseProductQuantity, decreaseProductQuantity} = cartSlice.actions;
export default cartSlice.reducer;