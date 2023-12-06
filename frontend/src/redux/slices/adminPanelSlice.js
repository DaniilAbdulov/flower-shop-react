import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";
import { fetchAllProducts } from "./productsSlice";
import { setSuccess } from "./successSlice";
const initialState = {
    shopStatic: {},
    paidOrders: [],
    createProductLoading: false,
    deleteProductLoading: false,
    changeProductLoading: false,
    getStaticLoading: false,
    getPaidOrdersLoading: false,
};

export const createCategory = createAsyncThunk(
    "admin/createCategory",
    async (newCategory, thunkAPI) => {
        try {
            const res = await axios.post(`${API_URL}/admin/createCategory`, {
                params: {
                    newCategory,
                },
            });
            if (res.data.message === "Category created") {
                thunkAPI.dispatch(fetchAllProducts());
                thunkAPI.dispatch(setSuccess("Добавлена новая категория"));
            }
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);
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
                thunkAPI.dispatch(setSuccess("Новый товар создан"));
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
                thunkAPI.dispatch(setSuccess("Товар удален"));
            }
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);
export const deleteCategory = createAsyncThunk(
    "admin/deleteCategory",
    async (category, thunkAPI) => {
        try {
            const res = await axios.delete(`${API_URL}/admin/deleteCategory`, {
                params: {
                    category,
                },
            });
            if (res.data.message === "Deleted success") {
                thunkAPI.dispatch(fetchAllProducts());
                thunkAPI.dispatch(setSuccess("Категория удалена"));
            }
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);
export const changeProduct = createAsyncThunk(
    "admin/changeProduct",
    async (changedProduct, thunkAPI) => {
        try {
            const res = await axios.put(`${API_URL}/admin/changeProduct`, {
                params: {
                    changedProduct,
                },
            });
            if (res.data.message === "Changes success") {
                thunkAPI.dispatch(fetchAllProducts());
                thunkAPI.dispatch(setSuccess("Товар изменен"));
            }
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);
export const getPaidOrders = createAsyncThunk(
    "admin/getPaidOrders",
    async (thunkAPI) => {
        try {
            const res = await axios.get(`${API_URL}/admin/getPaidOrders`);
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);
export const getStatic = createAsyncThunk(
    "admin/getStatic",
    async (thunkAPI) => {
        try {
            const res = await axios.get(`${API_URL}/admin/getStatic`);
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
                case "changeProduct":
                    state.changeProductLoading = true;
                    break;
                case "getStatic":
                    state.getStaticLoading = true;
                    break;
                case "getPaidOrders":
                    state.getPaidOrdersLoading = true;
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
            // console.log(typeOfFetchingData);
            switch (typeOfFetchingData) {
                case "createProduct":
                    state.createProductLoading = false;
                    break;
                case "deleteProduct":
                    state.deleteProductLoading = false;
                    break;
                case "changeProduct":
                    state.changeProductLoading = false;
                    break;
                case "getStatic":
                    state.getStaticLoading = false;
                    state.shopStatic = action.payload.data;
                    break;
                case "getPaidOrders":
                    state.getPaidOrdersLoading = false;
                    state.paidOrders = action.payload.data;
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
                case "changeProduct":
                    state.changeProductLoading = false;
                    break;
                case "getStatic":
                    state.getStaticLoading = false;
                    break;
                case "getPaidOrders":
                    state.getPaidOrdersLoading = false;
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
            .addCase(deleteProduct.rejected, handleApiError)
            .addCase(changeProduct.pending, handleApiCall)
            .addCase(changeProduct.fulfilled, handleApiSuccess)
            .addCase(changeProduct.rejected, handleApiError)
            .addCase(getStatic.pending, handleApiCall)
            .addCase(getStatic.fulfilled, handleApiSuccess)
            .addCase(getStatic.rejected, handleApiError)
            .addCase(getPaidOrders.pending, handleApiCall)
            .addCase(getPaidOrders.fulfilled, handleApiSuccess)
            .addCase(getPaidOrders.rejected, handleApiError);
    },
});
export const selectShopStatic = (state) => state.admin.shopStatic;
export const selectCreateProductLoading = (state) =>
    state.admin.createProductLoading;
export const selectDeleteProductLoading = (state) =>
    state.admin.deleteProductLoading;
export const selectChangeProductLoading = (state) =>
    state.admin.changeProductLoading;
export const selectGetStaticLoading = (state) => state.admin.getStaticLoading;
export const selectGetPaidOrdersLoading = (state) =>
    state.admin.getPaidOrdersLoading;
export const selectPaidOrders = (state) => state.admin.paidOrders;

export default adminPanelSlice.reducer;
