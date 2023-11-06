import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";
const initialState = {
    user: {},
    isLoading: false,
    isAdmin: false,
    isUser: false,
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

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        // addBook: (state, action) => {
        //     state.books.push(action.payload);
        // },
        // deleteBook: (state, action) => {
        //     return {
        //         ...state,
        //         books: state.filter((book) => book.id !== action.payload),
        //     };
        // },
        // toggleFavorite: (state, action) => {
        //     return state.books.forEach((book) => {
        //         if (book.id === action.payload) {
        //             book.isFavorite = !book.isFavorite;
        //         }
        //     });
        // },
    },
    extraReducers: {
        [fetchCurrentUser.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCurrentUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            console.log(action.payload);
            // if (action.payload.title && action.payload.author) {
            //     const book = {
            //         id: Date.now(),
            //         title: action.payload.title,
            //         author: action.payload.author,
            //         isFavorite: false,
            //     };
            //     state.books.push(book);
            // }
        },
        [fetchCurrentUser.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

export const { addBook, deleteBook, toggleFavorite } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectIsAdmin = (state) => state.user.isAdmin;
export const selectIsUser = (state) => state.user.isUser;

export default userSlice.reducer;
