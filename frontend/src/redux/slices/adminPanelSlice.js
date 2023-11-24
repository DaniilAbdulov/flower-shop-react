import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";

const initialState = {
    createProductLoading: false,
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
        const handleApiCall = (state) => {
            state.createProductLoading = true;
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
                    break;
                default:
                    break;
            }
        };

        const handleApiError = (state) => {
            state.isLoading = "rejected";
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

export default adminPanelSlice.reducer;
