import createRequest from './request'

export function createDomesticPayment(dispatch, payload) {
    createRequest(
        dispatch,
        'pisp/domestic-payments',
        'POST',
        { payload },
        {},
        function (response) {
            // to do 
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
           // to do 
        }
    )
}
