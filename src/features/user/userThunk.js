import axios from "../../utils/axios"

export const loginUserThunk = async (user, thunkAPI) => {
    try {
        const res = await axios.post("/auth/login", user)
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(
            {
                msg: err.response.data.msg, 
                status: err.response.request.status, 
                statusText: err.response.request.statusText
            }
        )        
    }
}