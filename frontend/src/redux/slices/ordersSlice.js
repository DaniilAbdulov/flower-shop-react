import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";

const initialState = {
    orders: [],
    // cartTotal: {},
    fetchingGetOrdersData: false,
};

// export const createOrder = createAsyncThunk(
//     "orders/createOrder",
//     async (productId, thunkAPI) => {
//         try {
//             const res = await axios.post(`${API_URL}/orders/createOrder`, {
//                 params: {
//                     productId,
//                 },
//             });
//             if (res.data.message === "added") {
//                 thunkAPI.dispatch(getOrders());
//             }
//             return res.data;
//         } catch (error) {
//             thunkAPI.dispatch(setError(error.response.data.message));
//             throw error;
//         }
//     }
// );
export const getOrders = createAsyncThunk(
    "orders/getOrders",
    async (thunkAPI) => {
        try {
            const res = await axios.get(`${API_URL}/orders/getOrders`);
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);

const ordersSlice = createSlice({
    name: "orders",
    initialState: initialState,
    reducers: {
        // clearCartTotal: (state) => {
        //     state.cartTotal = {};
        // },
    },
    extraReducers: (builder) => {
        const handleApiCall = (state) => {
            state.fetchingGetOrdersData = true;
        };

        const handleApiSuccess = (state, action) => {
            if (!action.payload) {
                return initialState;
            }
            const typeOfFetchingData = action.type.split("/")[1];
            console.log(typeOfFetchingData);
            switch (typeOfFetchingData) {
                case "getOrders":
                    state.fetchingGetOrdersData = false;
                    state.orders = action.payload.data;
                    break;
                default:
                    break;
            }
        };

        const handleApiError = (state) => {
            state.fetchingGetOrdersData = false;
        };

        builder
            //     .addCase(createOrder.pending, handleApiCall)
            //     .addCase(createOrder.fulfilled, handleApiSuccess)
            //     .addCase(createOrder.rejected, handleApiError)
            .addCase(getOrders.pending, handleApiCall)
            .addCase(getOrders.fulfilled, handleApiSuccess)
            .addCase(getOrders.rejected, handleApiError);
        //     .addCase(deleteCartItem.pending, handleApiCall)
        //     .addCase(deleteCartItem.fulfilled, handleApiSuccess)
        //     .addCase(deleteCartItem.rejected, handleApiError)
        //     .addCase(setCountOfItem.pending, handleApiCall)
        //     .addCase(setCountOfItem.fulfilled, handleApiSuccess)
        //     .addCase(setCountOfItem.rejected, handleApiError);
    },
});
export const selectOrdersData = (state) => state.orders.orders;
export const selectOrdersLoading = (state) =>
    state.orders.fetchingGetOrdersData;

export default ordersSlice.reducer;
