import { LOGOUT,SET_ACCESS_TOKEN } from '../actionCreators/user'

const initialState = {
    token:null
}
function appReducer(state = initialState, action) {
    switch (action.type) {
        case LOGOUT:
            localStorage.removeItem('token')
            return { ...state, token:null }
        case SET_ACCESS_TOKEN:
            localStorage.setItem('token',token)
            return {...state,token:action.user}
        default:
            return state

    }
}

export default appReducer;