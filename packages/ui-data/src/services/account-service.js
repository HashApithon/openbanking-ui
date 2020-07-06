import createRequest from './request'
import { setData } from '../actions/app'

export function getAccountList(dispatch) {
    createRequest(dispatch, '/accounts', 'GET', null, {}, function (response) {
        dispatch(setData(response))
    })
}
