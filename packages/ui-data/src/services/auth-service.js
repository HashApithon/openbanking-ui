import createRequest from './request'
import { setAccessToken, setJourneyType } from './../actions/auth'

export function getAccessToken(dispatch,code,type) {
    createRequest(dispatch, '/token', 'POST', {code }, {}, function (response) {
        dispatch(setAccessToken(response.access_token))
        localStorage.setItem('token', response.access_token)
        dispatch(setJourneyType(null))
        document.location.href = `/${type}`
    })
}

export function initializeJourney(dispatch,type){
    createRequest(dispatch, '/init','GET',null, {}, function(response){
        dispatch(setJourneyType(type))
        document.location = response.authorizationUrl
    })
}
