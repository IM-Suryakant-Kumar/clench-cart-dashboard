import axios from "../../utils/axios"

export const getUsersThunk = async(user, thunkAPI) => {
    try {
        const res = await axios.get("/users/admin")
        // console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue({
            msg: err.response.data.msg,
            status: err.request.status,
            statusText: err.request.statusText
        })        
    }
}