import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './components/cartSlice';

const store = configureStore({
    reducer:{
        mycart: cartReducer, 
        
    }
})

export default store;