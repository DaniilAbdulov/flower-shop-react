import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";

const initialState = {};

export const addToFavorites = createAsyncThunk(
    "change/addToFavorites",
    async (productId, thunkAPI) => {
        try {
            const res = await axios.post(`${API_URL}/change/addToFavorites`, {
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
export const deleteFromFavorites = createAsyncThunk(
    "change/deleteFromFavorites",
    async (productId, thunkAPI) => {
        try {
            const res = await axios.delete(
                `${API_URL}/change/deleteFromFavorites`,
                {
                    params: {
                        productId,
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

const productsSlice = createSlice({
    name: "change",
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
                case "addToFavorites":
                    break;
                case "deleteFromFavorites":
                    break;
                default:
                    break;
            }
        };

        const handleApiError = (state) => {
            state.isLoading = "rejected";
        };

        builder
            .addCase(addToFavorites.pending, handleApiCall)
            .addCase(addToFavorites.fulfilled, handleApiSuccess)
            .addCase(addToFavorites.rejected, handleApiError)
            .addCase(deleteFromFavorites.pending, handleApiCall)
            .addCase(deleteFromFavorites.fulfilled, handleApiSuccess)
            .addCase(deleteFromFavorites.rejected, handleApiError);
    },
});

export default productsSlice.reducer;
