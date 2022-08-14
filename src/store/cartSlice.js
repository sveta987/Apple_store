import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addItem(state, action){
            state.cart.push({
                id: action.payload.id,
                model: action.payload.model,
                image: action.payload.image,
                price: action.payload.price,
                category: action.payload.category,
                quantity:1
            })
        },
        incQuantity(state, action){
            state.cart = state.cart.map(el=>{
              if(el.id === action.payload.id){
                return {
                  ...el,
                  quantity:el.quantity? el.quantity+1:1
                }
              }else{
                return el;
              }
        
            });
          },
        
          decQuantity (state, action){
            state.cart = state.cart.map(el=>{
              if(el.id === action.payload.id){
                return {
                  ...el,
                  quantity: el.quantity>1 ? el.quantity-1 : 1
                }
              }else{
                return el;
              }
            });
          },
        removeItem(state, action){
            state.cart = state.cart.filter(cartItem=> cartItem.id !== action.payload.id);
        }
    }
});

export const {addItem, removeItem, incQuantity,decQuantity } = cartSlice.actions;
export default cartSlice.reducer;

