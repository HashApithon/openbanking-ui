import createRequest from './request'
import { setData } from '../actions/app'

export function createDomesticPayment(dispatch, payload) {
    createRequest(
        dispatch,
        'pisp/domestic-payments',
        'POST',
        { payload },
        {},
        function (response) {
            dispatch(setData(response))
        }
    )
}

export function getDomesticPaymentStatus(dispatch) {
    createRequest(
        dispatch,
        '/domestic-payment-status',
        'GET',
        null,
        {},
        function (response) {
            dispatch(setData(response))
        }
    )
}
