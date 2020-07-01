import axios from 'axios'
import { setRequestInterceptor } from './request-interceptor'
import { setData } from '../actions/app';
import { setError, setLoader } from '../actions/common';

const base_url = 'https://jsonplaceholder.typicode.com/'

setRequestInterceptor();

export default function createRequest(dispatch, endpoint,method='get',data={},headers={}){
    dispatch(setLoader(true))
    axios(base_url + endpoint, data, headers).then(function(response){
        dispatch(setLoader(false))
        dispatch(setData(response.data))
    }).catch(function(error){
        dispatch(setLoader(false))
        dispatch(setError(error))
    })
}