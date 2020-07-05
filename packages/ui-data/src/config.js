export const config = {
    "payload":{
        "grant_type":"client_credentials",
        "client_id":process.env.REACT_APP_CLIENT_ID,
        "client_secret":process.env.REACT_APP_CLIENT_SECRET,
        "scope":"accounts"
    },
    "aispHeaders":{
        "Content-Type":"application/json",
        
        "x-jws-signature":"ignored",
        "x-idempotency-key":"656f764b-607d-4485-a23e-d616ca502be5",
        "x-fapi-financial-id":"0015800000jfwB4AAI",
        "Access-Control-Allow-Origin":"*"
    },
    "aispConsent":{
        "Data":{
            "Permissions":[
                "ReadAccountsBasic",
                "ReadAccountsDetail",
                "ReadBalances",
                "ReadBeneficiariesBasic",
                "ReadBeneficiariesDetail",
                "ReadDirectDebits",
                "ReadProducts",
                "ReadStandingOrderBasic",
                "ReadStandingOrderDetail",
                "ReadTransactionDetail"
            ]
        },
        "Risk":{}
    },
    "tokenPayload":{
        "grant_type":"authorization_code",
        "client_id":process.env.REACT_APP_CLIENT_ID,
        "client_secret":process.env.REACT_APP_CLIENT_SECRET,
        "redirect_uri":"/accounts",
        'code_chalenge_method':"S256"
    }
    
    
}