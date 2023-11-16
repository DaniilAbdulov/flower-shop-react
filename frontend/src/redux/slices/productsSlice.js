import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";

const initialState = {
    allProducts: [],
    singleProduct: {},
    isTrends: [],
    isAdvice: [],
    isFavorite: [],
    isLoading: "waiting",
    fetchFromThisId: null,
    allProductsLength: 0,
};

export const fetchAllProducts = createAsyncThunk(
    "products/getAllProducts",
    async (userId, thunkAPI) => {
        try {
            const res = await axios.get(`${API_URL}/product/getAllProducts`, {
                params: {
                    userId,
                },
            });
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);

export const fetchAdvicedProducts = createAsyncThunk(
    "products/getAdvicedProducts",
    async (userId, thunkAPI) => {
        try {
            const res = await axios.get(
                `${API_URL}/product/getAdvicedProducts`,
                {
                    params: {
                        userId,
                    },
                }
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
    async ({ productId, userId }, thunkAPI, state) => {
        try {
            const res = await axios.get(`${API_URL}/product/getSingleProduct`, {
                params: { productId, userId },
            });
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);

export const fetchFavoriteProducts = createAsyncThunk(
    "products/getFavoriteProducts",
    async (thunkAPI) => {
        try {
            const res = await axios.get(
                `${API_URL}/product/getFavoriteProducts`
            );
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
            state.isLoading = "pending";
            state.singleProduct = {};
        };

        const handleApiSuccess = (state, action) => {
            state.isLoading = "fullfield";
            if (!action.payload) {
                return initialState;
            }
            const typeOfFetchingData = action.type.split("/")[1];
            console.log(typeOfFetchingData);
            switch (typeOfFetchingData) {
                case "getAllProducts":
                    state.allProducts = action.payload.data;
                    state.isTrends = action.payload.data.filter((item) => {
                        return item.istrend;
                    });
                    state.fetchFromThisId = action.payload.fetchFromThisId;
                    state.allProductsLength = action.payload.data.length;
                    break;
                case "getAdvicedProducts":
                    state.isAdvice = action.payload.data;
                    state.fetchFromThisId = action.payload.fetchFromThisId;
                    break;
                case "getSingleProduct":
                    state.singleProduct = action.payload.data[0];
                    state.fetchFromThisId = action.payload.fetchFromThisId;
                    break;
                case "getFavoriteProducts":
                    state.isFavorite = action.payload.data;
                    break;
                default:
                    break;
            }
        };

        const handleApiError = (state) => {
            state.isLoading = "rejected";
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
            .addCase(fetchSingleProduct.rejected, handleApiError)
            .addCase(fetchFavoriteProducts.pending, handleApiCall)
            .addCase(fetchFavoriteProducts.fulfilled, handleApiSuccess)
            .addCase(fetchFavoriteProducts.rejected, handleApiError);
    },
});

export const selectIsLoading = (state) => state.products.isLoading;
export const selectIsTrends = (state) => state.products.isTrends;
export const selectIsFavorites = (state) => state.products.isFavorite;
export const selectAllProducts = (state) => state.products.allProducts;
export const selectAllProductsLength = (state) =>
    state.products.allProductsLength;
export const selectIsAdvice = (state) => state.products.isAdvice;
export const selectSingleProduct = (state) => state.products.singleProduct;
export const selectFetchFromThisId = (state) => state.products.fetchFromThisId;
export default productsSlice.reducer;
