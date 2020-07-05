import { LOGOUT,SET_ACCESS_TOKEN } from '../actionCreators/user'

export const logout = () => {
    return {type:LOGOUT}
}

export const setAccessToken=(token)=> {
    return {type:SET_ACCESS_TOKEN,token}
}