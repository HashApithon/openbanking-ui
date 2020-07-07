import createRequest from './request'
import { setAccessToken } from './../actions/auth'

export function getAccessToken(dispatch) {
    createRequest(dispatch, '/token', 'GET', null, {}, function (response) {
        dispatch(setAccessToken(response.access_token))
        localStorage.setItem('token', response.access_token)
    })
}
