import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import errorSlice from "./slices/errorSlice";
import productsSlice from "./slices/productsSlice";
import changeProductsInfoSLice from "./slices/changeProductsInfoSLice";
const store = configureStore({
    reducer: {
        user: userSlice,
        error: errorSlice,
        products: productsSlice,
        change: changeProductsInfoSLice,
    },
});
export default store;
