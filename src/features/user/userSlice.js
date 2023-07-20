import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsersThunk } from "./userThunk";

const initialState = {
    users: null,
    isLoading: false,
    error: null
}

export const getUsers = createAsyncThunk("user/getUsers", getUsersThunk)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.users = action.payload
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export default userSlice.reducer