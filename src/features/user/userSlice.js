import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { loginUserThunk } from "./userThunk"
import { toast } from "react-toastify"

const initialState = {
    user: null,
    isLoading: false,
    error: null
}

export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                const { user } = action.payload
                state.isLoading = false
                state.user = user
                toast.success(`Welcome back ${user.username}`)
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export default userSlice.reducer