import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { loginThunk } from "./authThunk"
import { toast } from "react-toastify"

const initialState = {
    user: null,
    isLoading: false,
    error: null
}

export const login = createAsyncThunk("auth/login", loginThunk)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                const { user } = action.payload
                state.isLoading = false
                state.user = user
                toast.success(`Welcome back ${user.username}`)
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export default authSlice.reducer