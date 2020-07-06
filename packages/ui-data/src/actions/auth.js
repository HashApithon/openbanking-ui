import { SET_ACCESS_TOKEN } from '../actionCreators/auth'

export const setAccessToken = (token) => {
    return { type: SET_ACCESS_TOKEN, token }
}
