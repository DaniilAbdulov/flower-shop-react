import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";

const initialState = {
    orders: [],
    ordersInfo: {},
    fetchingGetOrdersData: false,
    fetchingGetOrdersInfo: false,
    fetchingCreateOrder: false,
    orderCreated: false,
};

export const getOrdersInfo = createAsyncThunk(
    "orders/getOrdersInfo",
    async (thunkAPI) => {
        try {
            const res = await axios.get(`${API_URL}/orders/getOrdersInfo`);
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);
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
export const createOrder = createAsyncThunk(
    "orders/createOrder",
    async (orders, thunkAPI) => {
        try {
            const res = await axios.post(`${API_URL}/orders/createOrder`, {
                params: {
                    orders,
                },
            });
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
        clearOrderCreated: (state) => {
            state.orderCreated = false;
        },
    },
    extraReducers: (builder) => {
        const handleApiCall = (state, action) => {
            const typeOfFetchingData = action.type.split("/")[1];
            switch (typeOfFetchingData) {
                case "getOrders":
                    state.fetchingGetOrdersData = true;
                    break;
                case "getOrdersInfo":
                    state.fetchingGetOrdersInfo = true;
                    break;
                case "createOrder":
                    state.fetchingCreateOrder = true;

                    break;
                default:
                    break;
            }
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
                case "getOrdersInfo":
                    state.ordersInfo = action.payload.data;
                    state.fetchingGetOrdersInfo = false;
                    break;
                case "createOrder":
                    state.fetchingCreateOrder = false;
                    state.orderCreated = true;
                    break;
                default:
                    break;
            }
        };

        const handleApiError = (state) => {
            state.fetchingGetOrdersData = false;
        };

        builder
            .addCase(getOrders.pending, handleApiCall)
            .addCase(getOrders.fulfilled, handleApiSuccess)
            .addCase(getOrders.rejected, handleApiError)
            .addCase(getOrdersInfo.pending, handleApiCall)
            .addCase(getOrdersInfo.fulfilled, handleApiSuccess)
            .addCase(getOrdersInfo.rejected, handleApiError)
            .addCase(createOrder.pending, handleApiCall)
            .addCase(createOrder.fulfilled, handleApiSuccess)
            .addCase(createOrder.rejected, handleApiError);
    },
});
export const selectOrdersData = (state) => state.orders.orders;
export const selectOrdersInfo = (state) => state.orders.ordersInfo;
export const selectOrdersLoading = (state) =>
    state.orders.fetchingGetOrdersData;
export const selectOrdersInfoLoading = (state) =>
    state.orders.fetchingGetOrdersInfo;
export const selectCreateOrderLoading = (state) =>
    state.orders.fetchingCreateOrder;
export const selectOrderCreated = (state) => state.orders.orderCreated;
export const { clearOrderCreated } = ordersSlice.actions;

export default ordersSlice.reducer;
