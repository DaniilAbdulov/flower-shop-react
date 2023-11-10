import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";

const initialState = {
    allProducts: [],
    singleProduct: {},
    isTrends: [],
    isAdvice: [],
    isLoading: false,
};

export const fetchAllProducts = createAsyncThunk(
    "products/getAllProducts",
    async (thunkAPI) => {
        try {
            const res = await axios.get(`${API_URL}/product/getAllProducts`);
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);

export const fetchAdvicedProducts = createAsyncThunk(
    "products/getAdvicedProducts",
    async (thunkAPI) => {
        try {
            const res = await axios.get(
                `${API_URL}/product/getAdvicedProducts`
            );
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);

export const fetchSingleProduct = createAsyncThunk(
    "products/getSingleProduct",
    async (id, thunkAPI) => {
        console.log(id);
        try {
            const res = await axios.get(`${API_URL}/product/getSingleProduct`, {
                params: { id },
            });
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        const handleApiCall = (state) => {
            state.isLoading = true;
        };

        const handleApiSuccess = (state, action) => {
            state.isLoading = false;
            if (!action.payload) {
                console.log("Ошибка в action.payload");
                return;
            }
            const typeOfFetchingData = action.type.split("/")[1];
            console.log(typeOfFetchingData);
            switch (typeOfFetchingData) {
                case "getAllProducts":
                    state.allProducts = action.payload.data;
                    state.isTrends = action.payload.data.filter((item) => {
                        return item.istrend;
                    });
                    break;
                case "getAdvicedProducts":
                    state.isAdvice = action.payload.data;
                    break;
                case "getSingleProduct":
                    state.singleProduct = action.payload.data[0];
                    break;
                default:
                    break;
            }
        };

        const handleApiError = (state) => {
            state.isLoading = false;
        };

        builder
            .addCase(fetchAllProducts.pending, handleApiCall)
            .addCase(fetchAllProducts.fulfilled, handleApiSuccess)
            .addCase(fetchAllProducts.rejected, handleApiError)
            .addCase(fetchAdvicedProducts.pending, handleApiCall)
            .addCase(fetchAdvicedProducts.fulfilled, handleApiSuccess)
            .addCase(fetchAdvicedProducts.rejected, handleApiError)
            .addCase(fetchSingleProduct.pending, handleApiCall)
            .addCase(fetchSingleProduct.fulfilled, handleApiSuccess)
            .addCase(fetchSingleProduct.rejected, handleApiError);
    },
});

// export const { isTrend } = productsSlice.actions;

export const selectIsLoading = (state) => state.products.isLoading;
export const selectIsTrends = (state) => state.products.isTrends;
export const selectAllProducts = (state) => state.products.allProducts;
export const selectIsAdvice = (state) => state.products.isAdvice;
export const selectSingleProduct = (state) => state.products.singleProduct;
export default productsSlice.reducer;
