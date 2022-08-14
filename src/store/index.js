import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import {
    persistStore,
    persistReducer,
    // FLUSH,
    // REHYDRATE,
    // PAUSE,
    // PERSIST,
    // PURGE,
    // REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from './cartSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,

})

export const persistor = persistStore(store);
export default store;