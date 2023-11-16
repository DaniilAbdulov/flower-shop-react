import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";

const initialState = {
    cart: [],
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

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        const handleApiCall = (state) => {
            state.isLoading = "pending";
        };

        const handleApiSuccess = (state, action) => {
            state.isLoading = "fullfield";
            if (!action.payload) {
                return initialState;
            }
            const typeOfFetchingData = action.type.split("/")[1];
            console.log(typeOfFetchingData);
            switch (typeOfFetchingData) {
                case "addProductToCart":
                    break;
                case "getCartData":
                    state.cart = action.payload.data;
                    break;
                default:
                    break;
            }
        };

        const handleApiError = (state) => {
            state.isLoading = "rejected";
        };

        builder
            .addCase(addProductToCart.pending, handleApiCall)
            .addCase(addProductToCart.fulfilled, handleApiSuccess)
            .addCase(addProductToCart.rejected, handleApiError)
            .addCase(getCartData.pending, handleApiCall)
            .addCase(getCartData.fulfilled, handleApiSuccess)
            .addCase(getCartData.rejected, handleApiError);
    },
});
export const selectCartData = (state) => state.cart.cart;
export default cartSlice.reducer;
