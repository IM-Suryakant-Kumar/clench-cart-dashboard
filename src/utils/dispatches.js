import store from "../features/store"
import { login } from "../features/auth/authSlice"

export const loginUser = async ({ username, password }) => {
    await store.dispatch(login({ username, password }))  
    const { user: { error} } = store.getState()
    if(error) {
        const { msg, status, statusText  } = error
        throw {
            message: msg,
            statusText: statusText,
            status: status
        }
    }

    return null
}

// export const getUsers = async () => {
//     const 
// }