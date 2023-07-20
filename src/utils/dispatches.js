import store from "../features/store"
import { login } from "../features/auth/authSlice"
import { getUsers } from "../features/user/userSlice"

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

export const getAllUsers = async () => {
    await store.dispatch(getUsers())
    const {user: {users, error}} = store.getState()
    if(error) {
        throw { msg: error.msg, error: error.status, statusText: error.statusText }
    }

    return users
}