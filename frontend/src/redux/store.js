import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import errorSlice from "./slices/errorSlice";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import toggleFavoriteSLice from "./slices/toggleFavoriteSLice";
import ordersSlice from "./slices/ordersSlice";
import adminPanelSlice from "./slices/adminPanelSlice";
import successSlice from "./slices/successSlice";
const store = configureStore({
    reducer: {
        user: userSlice,
        error: errorSlice,
        success: successSlice,
        products: productsSlice,
        favorite: toggleFavoriteSLice,
        cart: cartSlice,
        orders: ordersSlice,
        admin: adminPanelSlice,
    },
});
export default store;
