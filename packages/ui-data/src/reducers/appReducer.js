import { INIT_DATA } from '../actionCreators/app'
import { SET_DATA } from '../actionCreators/app'


const initialState = {
    message: 'message from store !!!!',
    data:null
}
function appReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_DATA:
            return { ...state, message:action.message }
        case SET_DATA:{
            return { ...state, data:action.data }
        }
        default:
            return state

    }
}

export default appReducer;