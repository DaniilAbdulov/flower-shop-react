import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
import { API_URL } from "../../config";
import { setSuccess } from "./successSlice";
const initialState = {
    messages: [],
    isLoading: false,
};

export const getMessages = createAsyncThunk(
    "messages/getMessages",
    async (thunkAPI) => {
        try {
            const res = await axios.get(`${API_URL}/messages/getMessages`);
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);
export const createMessage = createAsyncThunk(
    "messages/createMessage",
    async (newMessage, thunkAPI) => {
        try {
            const res = await axios.post(`${API_URL}/messages/createMessage`, {
                params: {
                    newMessage,
                },
            });
            if (res.data.message === "Сообщение отправлено") {
                thunkAPI.dispatch(setSuccess("Сообщение отправлено"));
            }
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);
export const deleteMessage = createAsyncThunk(
    "messages/deleteMessage",
    async (id, thunkAPI) => {
        try {
            const res = await axios.delete(
                `${API_URL}/messages/deleteMessage`,
                {
                    params: {
                        id,
                    },
                }
            );
            if (res.data.message === "Сообщение удалено") {
                thunkAPI.dispatch(getMessages());
                thunkAPI.dispatch(setSuccess("Сообщение удалено"));
            }
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.response.data.message));
            throw error;
        }
    }
);

const messagesSlice = createSlice({
    name: "messages",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        const handleApiCall = (state) => {
            state.isLoading = true;
        };
        const handleApiSuccess = (state, action) => {
            if (!action.payload) {
                return initialState;
            }
            const typeOfFetchingData = action.type.split("/")[1];
            console.log(typeOfFetchingData);
            switch (typeOfFetchingData) {
                case "getMessages":
                    state.messages = action.payload.data;
                    state.isLoading = false;
                    break;
                case "createMessage":
                case "deleteMessage":
                    state.isLoading = false;
                    break;
                default:
                    break;
            }
        };
        const handleApiError = (state) => {
            state.isLoading = false;
        };

        builder
            .addCase(createMessage.pending, handleApiCall)
            .addCase(createMessage.fulfilled, handleApiSuccess)
            .addCase(createMessage.rejected, handleApiError)
            .addCase(deleteMessage.pending, handleApiCall)
            .addCase(deleteMessage.fulfilled, handleApiSuccess)
            .addCase(deleteMessage.rejected, handleApiError)
            .addCase(getMessages.pending, handleApiCall)
            .addCase(getMessages.fulfilled, handleApiSuccess)
            .addCase(getMessages.rejected, handleApiError);
    },
});
export const selectMessages = (state) => state.messages.messages;
export const selectMessagesLoading = (state) => state.messages.isLoading;

export default messagesSlice.reducer;
