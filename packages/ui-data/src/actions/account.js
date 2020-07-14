import { SET_ACCOUNT_ID } from '../actionCreators/account'

export const setAccountId = (accountId) => {
    return { type: SET_ACCOUNT_ID, accountId }
}
