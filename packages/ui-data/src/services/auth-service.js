import createRequest from './request'
import { setAccessToken } from './../actions/auth'

export function getAccessToken(dispatch,code,type) {
    createRequest(dispatch, '/token', 'POST', {code }, {}, function (response) {
        dispatch(setAccessToken(response.access_token,response.refresh_token))
        localStorage.setItem('token', response.access_token)
        localStorage.setItem('refresh_token', response.refresh_token)
        sessionStorage.removeItem('type',type)
        document.location.href = `/${type}`
    })
}

export function initializeJourney(dispatch,type){
    createRequest(dispatch, '/init','GET',null, {}, function(response){
        sessionStorage.setItem('type',type)
        document.location = response.authorizationUrl
    })
}
