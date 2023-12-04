import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";
import setNamesOfButtons from "../../functions/setNamesOfButtons.js";
const initialState = {
    allProducts: [],
    singleProduct: {},
    isTrends: [],
    isAdvice: [],
    isFavorite: [],
    categories: [],
    fetchFromThisId: null,
    allProductsLength: 0,
    advicedLoading: false,
    favoriteLoading: false,
    allProductsLoading: false,
    singleProductLoading: false,
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
            // thunkAPI.dispatch(productsSlice.actions.setCategories());
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
    reducers: {
        // setCategories: (state) => {
        //     state.categories = setNamesOfButtons(state.allProducts);
        // },
    },
    extraReducers: (builder) => {
        const handleApiCall = (state, action) => {
            state.singleProduct = {};
            const typeOfFetchingData = action.type.split("/")[1];
            console.log(typeOfFetchingData);
            switch (typeOfFetchingData) {
                case "getAdvicedProducts":
                    state.advicedLoading = true;
                    break;
                case "getFavoriteProducts":
                    state.favoriteLoading = true;
                    break;
                case "getAllProducts":
                    state.allProductsLoading = true;
                    break;
                case "getSingleProduct":
                    state.singleProductLoading = true;
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
                case "getAllProducts":
                    state.allProducts = action.payload.data;
                    state.isTrends = action.payload.data.filter((item) => {
                        return item.istrend;
                    });
                    state.fetchFromThisId = action.payload.fetchFromThisId;
                    state.allProductsLength = action.payload.data.length;
                    state.allProductsLoading = false;
                    state.categories = action.payload.categories;
                    break;
                case "getAdvicedProducts":
                    state.isAdvice = action.payload.data;
                    state.fetchFromThisId = action.payload.fetchFromThisId;
                    state.advicedLoading = false;
                    break;
                case "getSingleProduct":
                    state.singleProduct = action.payload.data[0];
                    state.fetchFromThisId = action.payload.fetchFromThisId;
                    state.singleProductLoading = false;
                    break;
                case "getFavoriteProducts":
                    state.isFavorite = action.payload.data;
                    state.favoriteLoading = false;
                    break;
                default:
                    break;
            }
        };

        const handleApiError = (state) => {
            state.advicedLoading = false;
            state.favoriteLoading = false;
            state.singleProductLoading = false;
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

export const selectAdvicedLoading = (state) => state.products.advicedLoading;
export const selectFavoriteLoading = (state) => state.products.favoriteLoading;
export const selectIsTrends = (state) => state.products.isTrends;
export const selectIsFavorites = (state) => state.products.isFavorite;
export const selectCategories = (state) => state.products.categories;
export const selectAllProducts = (state) => state.products.allProducts;
export const selectAllProductsLoading = (state) =>
    state.products.allProductsLoading;
export const selectAllProductsLength = (state) =>
    state.products.allProductsLength;
export const selectIsAdvice = (state) => state.products.isAdvice;
export const selectSingleProduct = (state) => state.products.singleProduct;
export const selectSingleProductLoading = (state) =>
    state.products.singleProductLoading;
export const selectFetchFromThisId = (state) => state.products.fetchFromThisId;
export default productsSlice.reducer;
