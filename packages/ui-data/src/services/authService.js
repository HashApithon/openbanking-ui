import {config} from './../config.js'
import axios from 'axios'
import createRequest from './request.js'


export async function getAuthToken(){
    
    const {token} = await axios.post('/token',config.payload, {"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"})
    const headers = {...config.aispHeaders, "Authorization":`Bearer ${token.access_token}`}
    const {consent} = await axios.post('/open-banking/v3.1/aisp/account-access-consents',headers,config.aispPayload)
    const authorizationUrl = await axios.get(`/open-banking/v3.1/aisp/authorization/oauth2?request=${consent.Data.consentId}`,{"Content-Type":"application/json"})
    document.location = authorizationUrl
    
}

export function getToken(dispatch,code){
    const payload = {...configtokenPayload, code}
    createRequest(dispatch,'/token','POST',{
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
    },payload , function(data){
        dispatch(setAccessToken(data.access_token))
    })
}
