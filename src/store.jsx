// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from './components/cartSlice';
// import {persistStore,persistReducer} from "redux-persist/es/persistStore";

// const store = configureStore({
//     reducer:{
//         mycart: cartReducer, 
        
//     }
// })

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/cartSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    storage,
  };
const persistedReducer = persistReducer(persistConfig, cartReducer);
const store= configureStore({
    reducer:{
        mycart:persistedReducer
    }
})
export default store;
export const persistor = persistStore(store);