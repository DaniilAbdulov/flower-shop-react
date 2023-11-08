import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";

const initialState = {
    allProducts: [],
    trendProducts: [],
    adviceProducts: [],
    favoriteProducts: [],
    singleProduct: {},
    isLoading: false,
};

// export const fetchCurrentUser = createAsyncThunk(
//     "user/currentUser",
//     async (thunkAPI) => {
//         try {
//             const res = await axios.get(`${API_URL}/user/auth`);
//             return res.data;
//         } catch (error) {
//             thunkAPI.dispatch(setError(error.response.data.message));
//             throw error;
//         }
//     }
// );
// export const fetchLogin = createAsyncThunk(
//     "user/login",
//     async (url, thunkAPI) => {
//         try {
//             const res = await axios.post(`${API_URL}/user/login`);
//             return res.data;
//         } catch (error) {
//             thunkAPI.dispatch(setError(error.response.data.message));
//             throw error;
//         }
//     }
// );
export const fetchAllProducts = createAsyncThunk(
    "products/getAllProducts",
    async (thunkAPI) => {
        try {
            const res = await axios.get(`${API_URL}/products/getAllProducts`);
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
        // logOutUser: (state) => {
        //     state.user = {};
        // },
    },
    extraReducers: (builder) => {
        const handleApiCall = (state) => {
            state.isLoading = true;
        };

        const handleApiSuccess = (state, action) => {
            state.isLoading = false;

            if (!action.payload) {
                console.log("Ошибка в action.payload");
                return;
            } else {
                console.log(action);
            }

            // const { token, user } = action.payload;
        };

        const handleApiError = (state) => {
            state.isLoading = false;
        };

        builder
            .addCase(fetchAllProducts.pending, handleApiCall)
            .addCase(fetchAllProducts.fulfilled, handleApiSuccess)
            .addCase(fetchAllProducts.rejected, handleApiError);
        // .addCase(fetchLogin.pending, handleApiCall)
        // .addCase(fetchLogin.fulfilled, handleApiSuccess)
        // .addCase(fetchLogin.rejected, handleApiError)
        // .addCase(fetchSignUp.pending, handleApiCall)
        // .addCase(fetchSignUp.fulfilled, handleApiSuccess)
        // .addCase(fetchSignUp.rejected, handleApiError);
    },
});

// export const { logOutUser, userFirstLastName } = productsSlice.actions;
// export const selectUser = (state) => state.user.user;
// export const selectIsAdmin = (state) => state.user.isAdmin;
// export const selectIsUser = (state) => state.user.isUser;
// export const selectIsAuth = (state) => state.user.isAuth;
// export const selectFirstSymbols = (state) => state.user.userFirstLastName;
// export const selectIsLoading = (state) => state.user.isLoading;

export default productsSlice.reducer;

// const isAdmin = useSelector(selectIsAdmin);
// const isUser = useSelector(selectIsUser);
// const isAuth = useSelector(selectIsAuth);
// const user = useSelector(selectUser);
