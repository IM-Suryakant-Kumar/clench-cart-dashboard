import store from "../features/store"
import { loginUser as login } from "../features/user/userSlice"

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