import createRequest from "./request";

const BASE_URL = '/open-banking/v3.1/aisp'

export function getAccounts(dispatch){
    createRequest(dispatch,BASE_URL + '/accounts')
}