import createRequest from './request'
import { setData } from '../actions/app'


//accounts api's 
export function getAccountList(dispatch) {
    createRequest(dispatch, '/accounts', 'GET', null, {}, function (response) {
        //callback placeholder where one or multiple actions can be dispatched
        dispatch(setData(response))
    })
}


// get account by id
export function getAccountById(dispatch, accountId) {
    createRequest(
        dispatch,
        `/accounts/${accountId}`,
        'GET',
        null,
        {},
        function (response) {
            dispatch(setData(response))
        }
    )
}

export function getAccountBalances(dispatch, accountId) {
    createRequest(
        dispatch,
        `/accounts/${accountId}/balances`,
        'GET',
        null,
        {},
        function (response) {
            dispatch(setData(response))
        }
    )
}

export function getAccountTransactions(dispatch, accountId) {
    createRequest(
        dispatch,
        `/accounts/${accountId}/transactions`,
        'GET',
        null,
        {},
        function (response) {
            dispatch(setData(response))
        }
    )
}

export function getAccountDirectDebits(dispatch, accountId) {
    createRequest(
        dispatch,
        `/accounts/${accountId}/direct-debits`,
        'GET',
        null,
        {},
        function (response) {
            dispatch(setData(response))
        }
    )
}

export function getAccountStandingOrders(dispatch, accountId) {
    createRequest(
        dispatch,
        `/accounts/${accountId}/standing-orders`,
        'GET',
        null,
        {},
        function (response) {
            dispatch(setData(response))
        }
    )
}

export function getAccountProducts(dispatch, params) {
    createRequest(dispatch, '/products', 'GET', params, {}, function (
        response
    ) {
        dispatch(setData(response))
    })
}
