import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthentificated: false,
    },
    reducers: {
        setAuthentificated: (state, action) => {
            state.isAuthentificated = action.payload;
        },
    },
});

export const { setAuthentificated } = authSlice.actions;
export default authSlice.reducer;
