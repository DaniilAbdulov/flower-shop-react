import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";
const initialState = {
    user: {},
    isLoading: false,
    isAdmin: false,
    isUser: false,
    isAuth: false,
};

const initializeAxiosHeaders = (token) => {
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common.Authorization;
    }
};

export const fetchCurrentUser = createAsyncThunk(
    "user/currentUser",
    async (url, thunkAPI) => {
        const token = localStorage.getItem("bgtrackerjwt");
        initializeAxiosHeaders(token);
        if (token) {
            try {
                const res = await axios.get(`${API_URL}/user/auth`);
                return res.data;
            } catch (error) {
                thunkAPI.dispatch(setError(error.message));
                throw error;
            }
        }
    }
);
export const fetchLogin = createAsyncThunk(
    "user/login",
    async (candidat, thunkAPI) => {
        try {
            const res = await axios.post(`${API_URL}/user/login`, candidat);
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.message));
            throw error;
        }
    }
);
export const fetchSignUp = createAsyncThunk(
    "user/signup",
    async (newCandidat, thunkAPI) => {
        try {
            const res = await axios.post(
                `${API_URL}/user/registration`,
                newCandidat
            );
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.message));
            throw error;
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        logOutUser: (state) => {
            state.user = {};
            state.isAdmin = false;
            state.isUser = false;
            state.isAuth = false;
            localStorage.removeItem("bgtrackerjwt");
            initializeAxiosHeaders(null);
        },
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
            }

            const { token, user } = action.payload;
            localStorage.setItem("bgtrackerjwt", token);
            initializeAxiosHeaders(token);
            state.user = user;
            state.isAuth = true;

            if (user.role !== "ADMIN") {
                state.isUser = true;
            } else {
                state.isAdmin = true;
            }
        };

        const handleApiError = (state) => {
            state.isLoading = false;
        };

        builder
            .addCase(fetchCurrentUser.pending, handleApiCall)
            .addCase(fetchCurrentUser.fulfilled, handleApiSuccess)
            .addCase(fetchCurrentUser.rejected, handleApiError)
            .addCase(fetchLogin.pending, handleApiCall)
            .addCase(fetchLogin.fulfilled, handleApiSuccess)
            .addCase(fetchLogin.rejected, handleApiError)
            .addCase(fetchSignUp.pending, handleApiCall)
            .addCase(fetchSignUp.fulfilled, handleApiSuccess)
            .addCase(fetchSignUp.rejected, handleApiError);
    },
});

export const { logOutUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectIsAdmin = (state) => state.user.isAdmin;
export const selectIsUser = (state) => state.user.isUser;
export const selectIsAuth = (state) => state.user.isAuth;

export default userSlice.reducer;

// const isAdmin = useSelector(selectIsAdmin);
// const isUser = useSelector(selectIsUser);
// const isAuth = useSelector(selectIsAuth);
