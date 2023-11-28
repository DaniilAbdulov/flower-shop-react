import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";
import { setSuccess } from "./successSlice";

const initialState = {
    cart: [],
    cartTotal: {},
    fetchingGetCartData: false,
};

export const addProductToCart = createAsyncThunk(
    "cart/addProductToCart",
    async (productId, thunkAPI) => {
        try {
            const res = await axios.post(`${API_URL}/cart/addProductToCart`, {
                params: {
                    productId,
                },
            });
            if (res.data.message === "added") {
                thunkAPI.dispatch(getCartData());
            }
            thunkAPI.dispatch(setSuccess("Товар добавлен в корзину !"));
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);
export const getCartData = createAsyncThunk(
    "cart/getCartData",
    async (thunkAPI) => {
        try {
            const res = await axios.get(`${API_URL}/cart/getCartData`);
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);
export const deleteCartItem = createAsyncThunk(
    "cart/deleteCartItem",
    async (productId, thunkAPI) => {
        try {
            const res = await axios.delete(`${API_URL}/cart/deleteCartItem`, {
                params: {
                    productId,
                },
            });
            if (res.data.message === "deleted") {
                thunkAPI.dispatch(getCartData());
            }

            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);
export const setCountOfItem = createAsyncThunk(
    "cart/setCountOfItem",
    async ({ id, newCount }, thunkAPI) => {
        try {
            const res = await axios.put(`${API_URL}/cart/setCountOfItem`, {
                params: {
                    id,
                    newCount,
                },
            });

            if (res.data.message === "count changed") {
                thunkAPI.dispatch(getCartData());
            }

            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);

export const createNewCartDataFromOrder = createAsyncThunk(
    "cart/createNewCartDataFromOrder",
    async (orderId, thunkAPI) => {
        try {
            const res = await axios.post(
                `${API_URL}/cart/createNewCartDataFromOrder`,
                {
                    params: {
                        orderId,
                    },
                }
            );
            if (res.data.message === "created") {
                thunkAPI.dispatch(getCartData());
            }
            thunkAPI.dispatch(setSuccess("Товары добавлен в корзину !"));
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        clearCartTotal: (state) => {
            state.cartTotal = {};
        },
        clearCart: (state) => {
            state.cart = [];
        },
    },
    extraReducers: (builder) => {
        const handleApiCall = (state) => {
            state.fetchingGetCartData = true;
        };

        const handleApiSuccess = (state, action) => {
            if (!action.payload) {
                return initialState;
            }
            const typeOfFetchingData = action.type.split("/")[1];
            console.log(typeOfFetchingData);
            switch (typeOfFetchingData) {
                case "getCartData":
                    state.cart = action.payload.data;
                    state.cartTotal = action.payload.cartTotal[0];
                    state.fetchingGetCartData = false;
                    break;
                default:
                    break;
            }
        };

        const handleApiError = (state) => {
            state.fetchingGetCartData = false;
        };

        builder
            .addCase(addProductToCart.pending, handleApiCall)
            .addCase(addProductToCart.fulfilled, handleApiSuccess)
            .addCase(addProductToCart.rejected, handleApiError)
            .addCase(getCartData.pending, handleApiCall)
            .addCase(getCartData.fulfilled, handleApiSuccess)
            .addCase(getCartData.rejected, handleApiError)
            .addCase(deleteCartItem.pending, handleApiCall)
            .addCase(deleteCartItem.fulfilled, handleApiSuccess)
            .addCase(deleteCartItem.rejected, handleApiError)
            .addCase(setCountOfItem.pending, handleApiCall)
            .addCase(setCountOfItem.fulfilled, handleApiSuccess)
            .addCase(setCountOfItem.rejected, handleApiError)
            .addCase(createNewCartDataFromOrder.pending, handleApiCall)
            .addCase(createNewCartDataFromOrder.fulfilled, handleApiSuccess)
            .addCase(createNewCartDataFromOrder.rejected, handleApiError);
    },
});
export const selectCartData = (state) => state.cart.cart;
export const selectCartTotal = (state) => state.cart.cartTotal;
export const selectCartTotalCount = (state) => state.cart.cartTotal.count;
export const selectCartLoading = (state) => state.cart.fetchingGetCartData;
export const { clearCartTotal, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
