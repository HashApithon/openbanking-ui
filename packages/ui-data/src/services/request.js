import axios from 'axios'
import { setRequestInterceptor } from './request-interceptor'
import { setData } from '../actions/app'
import { setError, setLoader } from '../actions/common'

const base_url = 'http://localhost:3001'

setRequestInterceptor()

export default function createRequest(
    dispatch,
    endpoint,
    method = 'GET',
    data = {},
    headers = {},
    callbackFn
) {
    dispatch(setLoader(true))
    axios({
        url: base_url + endpoint,
        method,
        data: data,
        headers,
    })
        .then(function (response) {
            dispatch(setLoader(false))
            callbackFn(response.data)
        })
        .catch(function (error) {
            dispatch(setLoader(false))
            dispatch(setError(error))
        })
}
