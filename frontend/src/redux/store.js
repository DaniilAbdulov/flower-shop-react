import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import errorSlice from "./slices/errorSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        error: errorSlice,
    },
});
export default store;
