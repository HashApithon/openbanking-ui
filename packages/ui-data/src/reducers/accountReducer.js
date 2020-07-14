import { SET_ACCOUNT_ID } from '../actionCreators/account'

const initialState = {
    accountId:null
}
function accountReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACCOUNT_ID: {
            return { ...state, accountId: action.accountId }
        }
        default:
            return state
    }
}

export default accountReducer
