import { INIT_DATA } from '../actionCreators/app'

const initialState = {
    message: 'message from store !!!!'
}
function appReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_DATA:
            return { ...state, message:action.message }

        default:
            return state

    }
}

export default appReducer;