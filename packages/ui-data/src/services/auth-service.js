import createRequest from './request'
import { setAccessToken } from './../actions/auth'
import { v5 as uuidv5 } from 'uuid'

export function getAccessToken(dispatch, code, type) {
    createRequest(dispatch, '/token', 'POST', { code }, {}, function (
        response
    ) {
        dispatch(setAccessToken(response.access_token, response.refresh_token))
        if (response.access_token && response.refresh_token) {
            localStorage.setItem('token', response.access_token)
            localStorage.setItem('refresh_token', response.refresh_token)
        }

        sessionStorage.removeItem('type', type)
        document.location.href = `/${type}`
    })
}

export function initializeJourney(dispatch, type) {
    const sessionId = sessionStorage.getItem('session_id')
    if (!sessionId)
        sessionStorage.setItem(
            'session_id',
            uuidv5('http://openbanking.apithon', uuidv5.URL)
        )

    createRequest(dispatch, `/${type}/init`, 'GET', null, {}, function (
        response
    ) {
        sessionStorage.setItem('type', type)

        // set url as per server response
        document.location = response
    })
}
