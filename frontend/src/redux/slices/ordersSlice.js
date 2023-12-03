import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";
import { setSuccess } from "./successSlice";

const initialState = {
    orders: [],
    ordersInfo: {},
    oneOrder: {},
    newOrderId: 0,
    fetchingGetOrdersData: false,
    fetchingGetOneOrderData: false,
    fetchingGetOrdersInfo: false,
    fetchingCreateOrder: false,
    fetchingPayOrder: false,
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
export const getOneOrder = createAsyncThunk(
    "orders/getOneOrder",
    async (orderId, thunkAPI) => {
        try {
            const res = await axios.get(`${API_URL}/orders/getOneOrder`, {
                params: {
                    orderId,
                },
            });
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
            thunkAPI.dispatch(setSuccess("Заказ создан !"));
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);
export const cancelOrder = createAsyncThunk(
    "orders/cancelOrder",
    async (orderId, thunkAPI) => {
        try {
            const res = await axios.put(`${API_URL}/orders/cancelOrder`, {
                params: {
                    orderId,
                },
            });
            if (res.data.message === "Status changed") {
                thunkAPI.dispatch(getOneOrder(orderId));
            }
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);
export const payOrder = createAsyncThunk(
    "orders/payOrder",
    async (orderId, thunkAPI) => {
        try {
            const res = await axios.put(`${API_URL}/orders/payOrder`, {
                params: {
                    orderId,
                },
            });
            if (res.data.message === "Status changed") {
                thunkAPI.dispatch(getOneOrder(orderId));
                thunkAPI.dispatch(setSuccess("Заказ оплачен!"));
            }
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
            state.newOrderId = 0;
        },
        clearOrders: (state) => {
            state.clearOrders = [];
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
                case "getOneOrder":
                    state.fetchingGetOneOrderData = true;
                    break;
                case "payOrder":
                    state.fetchingPayOrder = true;
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
                    state.orders = action.payload.data;
                    state.fetchingGetOrdersData = false;
                    break;

                case "getOrdersInfo":
                    state.ordersInfo = action.payload.data;
                    state.fetchingGetOrdersInfo = false;
                    break;
                case "createOrder":
                    state.fetchingCreateOrder = false;
                    state.newOrderId = action.payload.newOrderId;
                    break;
                case "getOneOrder":
                    state.oneOrder = action.payload.data[0];
                    state.fetchingGetOneOrderData = false;
                    break;
                case "payOrder":
                    state.fetchingPayOrder = false;
                    break;
                default:
                    break;
            }
        };

        const handleApiError = (state) => {
            state.fetchingGetOrdersData = false;
            state.fetchingGetOneOrderData = false;
            state.fetchingGetOrdersInfo = false;
            state.fetchingCreateOrder = false;
            state.fetchingPayOrder = false;
            state.newOrderId = 0;
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
            .addCase(createOrder.rejected, handleApiError)
            .addCase(getOneOrder.pending, handleApiCall)
            .addCase(getOneOrder.fulfilled, handleApiSuccess)
            .addCase(getOneOrder.rejected, handleApiError)
            .addCase(payOrder.pending, handleApiCall)
            .addCase(payOrder.fulfilled, handleApiSuccess)
            .addCase(payOrder.rejected, handleApiError);
    },
});
export const selectOrdersData = (state) => state.orders.orders;
export const selectNewOrderId = (state) => state.orders.newOrderId;
export const selectOneOrder = (state) => state.orders.oneOrder;
export const selectOrdersInfo = (state) => state.orders.ordersInfo;
export const selectOrdersLoading = (state) =>
    state.orders.fetchingGetOrdersData;
export const selectOneOrderLoading = (state) =>
    state.orders.fetchingGetOneOrderData;
export const selectOrdersInfoLoading = (state) =>
    state.orders.fetchingGetOrdersInfo;
export const selectCreateOrderLoading = (state) =>
    state.orders.fetchingCreateOrder;
export const { clearOrderCreated, clearOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
