import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";
import { fetchAllProducts } from "./productsSlice";
// import { getAllProducts } from "./productsSlice";
const initialState = {
    createProductLoading: false,
    deleteProductLoading: false,
};

export const createProduct = createAsyncThunk(
    "admin/createProduct",
    async (newProduct, thunkAPI) => {
        try {
            const res = await axios.post(`${API_URL}/admin/createProduct`, {
                params: {
                    newProduct,
                },
            });
            if (res.data.message === "Product created") {
                thunkAPI.dispatch(fetchAllProducts());
            }
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);
export const deleteProduct = createAsyncThunk(
    "admin/deleteProduct",
    async (productId, thunkAPI) => {
        try {
            const res = await axios.delete(`${API_URL}/admin/deleteProduct`, {
                params: {
                    productId,
                },
            });
            if (res.data.message === "Deleted success") {
                thunkAPI.dispatch(fetchAllProducts());
            }
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);

const adminPanelSlice = createSlice({
    name: "admin",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        const handleApiCall = (state, action) => {
            const typeOfFetchingData = action.type.split("/")[1];
            switch (typeOfFetchingData) {
                case "createProduct":
                    state.createProductLoading = true;
                    break;
                case "deleteProduct":
                    state.deleteProductLoading = true;
                    break;
                default:
                    break;
            }
        };

        const handleApiSuccess = (state, action) => {
            state.createProductLoading = false;
            if (!action.payload) {
                return initialState;
            }
            const typeOfFetchingData = action.type.split("/")[1];
            console.log(typeOfFetchingData);
            switch (typeOfFetchingData) {
                case "createProduct":
                    state.createProductLoading = false;
                    break;
                case "deleteProduct":
                    state.deleteProductLoading = false;
                    break;
                default:
                    break;
            }
        };

        const handleApiError = (state, action) => {
            const typeOfFetchingData = action.type.split("/")[1];
            switch (typeOfFetchingData) {
                case "createProduct":
                    state.createProductLoading = false;
                    break;
                case "deleteProduct":
                    state.deleteProductLoading = false;
                    break;
                default:
                    break;
            }
        };

        builder
            .addCase(createProduct.pending, handleApiCall)
            .addCase(createProduct.fulfilled, handleApiSuccess)
            .addCase(createProduct.rejected, handleApiError)
            .addCase(deleteProduct.pending, handleApiCall)
            .addCase(deleteProduct.fulfilled, handleApiSuccess)
            .addCase(deleteProduct.rejected, handleApiError);
    },
});

export const selectCreateProductLoading = (state) =>
    state.admin.createProductLoading;
export const selectDeleteProductLoading = (state) =>
    state.admin.deleteProductLoading;

export default adminPanelSlice.reducer;
