import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import errorSlice from "./slices/errorSlice";
import productsSlice from "./slices/productsSlice";
const store = configureStore({
    reducer: {
        user: userSlice,
        error: errorSlice,
        products: productsSlice,
    },
});
export default store;
