import { LOGOUT,LOGIN } from '../actionCreators/user'

const initialState = {
    user:null
}
function appReducer(state = initialState, action) {
    switch (action.type) {
        case LOGOUT:
            return { ...state, user:null }
        case LOGIN:
            return {...state,user:action.user}
        default:
            return state

    }
}

export default appReducer;