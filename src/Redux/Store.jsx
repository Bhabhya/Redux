import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './Cartslice';

const store=configureStore({
    reducer:{
        cart: CartReducer,
    }
})

export default store;