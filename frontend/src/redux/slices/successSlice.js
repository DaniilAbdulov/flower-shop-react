import { createSlice } from "@reduxjs/toolkit";
const initialState = "";

const successSlice = createSlice({
    name: "success",
    initialState,
    reducers: {
        setSuccess: (state, action) => {
            return action.payload;
        },
        clearSuccess: () => {
            return initialState;
        },
    },
});
export const { setSuccess, clearSuccess } = successSlice.actions;
export const selectSuccessMessage = (state) => state.success;
export default successSlice.reducer;
