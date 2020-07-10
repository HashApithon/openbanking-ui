import { SET_ACCESS_TOKEN,SET_JOURNEY_TYPE } from '../actionCreators/auth'

const initialState = {
    token: null,
    journeyType: null
}
function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACCESS_TOKEN:
            return { ...state, token: action.token }
        case SET_JOURNEY_TYPE:
            return { ...state, journeyType: action.journeyType }
        default:
            return state
    }
}

export default authReducer
