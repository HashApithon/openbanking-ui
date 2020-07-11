import { SET_ACCESS_TOKEN, SET_JOURNEY_TYPE } from '../actionCreators/auth'

export const setAccessToken = (token, refresh_token) => {
    return { type: SET_ACCESS_TOKEN, token, refresh_token }
}

export const setJourneyType = (journeyType) => {
    return { type: SET_JOURNEY_TYPE, journeyType }
}
