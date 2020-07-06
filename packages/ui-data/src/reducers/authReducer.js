import { SET_ACCESS_TOKEN } from '../actionCreators/auth'

const initialState = {
    token: null,
}
function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACCESS_TOKEN:
            return { ...state, token: action.token }
        default:
            return state
    }
}

export default authReducer
