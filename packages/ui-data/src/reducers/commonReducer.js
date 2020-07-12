import { SET_ERROR, SET_LOADING } from '../actionCreators/common'

const initialState = {
    loading:false,
    error:null
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ERROR:
            return { ...state, error:action.error }
        case SET_LOADING:{
            return { ...state, loading:action.loading }
        }
        default:
            return state

    }
}

export default reducer;