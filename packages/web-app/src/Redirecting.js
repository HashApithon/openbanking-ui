import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAccessToken } from '@openbanking/ui-data/lib/services/auth-service'
import Loading from '@openbanking/ui-common/lib/Loading'
import {parse} from 'query-string'
import { Redirect } from 'react-router'

function Redirecting(props) {
    
    useEffect(()=>{
        if(props.journeyType){
            const {code} = parse(window.location.hash.substring(1))
            props.getAccessToken(code,props.journeyType)
        }
    })
    // dont allow user to access this page directly
    if(!props.journeyType){
        return <Redirect to="/" />
     }
    return (
        <Loading />
    )
}


const mapStateToProps = (state) => ({
    journeyType:state.auth.journeyType
})

const mapDispatchToProps = (dispatch) => ({
    getAccessToken:(code)=>getAccessToken(dispatch,code)
})

export default connect(mapStateToProps, mapDispatchToProps)(Redirecting)
