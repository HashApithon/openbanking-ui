import React from 'react'
import { connect } from 'react-redux'
import { getAccessToken } from '@openbanking/ui-data/lib/services/auth-service'
import Loading from '@openbanking/ui-common/lib/Loading'
import { parse } from 'query-string'
import { Redirect } from 'react-router'

function Redirecting(props) {
    // dont allow user to access this page directly
    if (!props.journeyType) {
        return <Redirect to="/" />
    } else {
        const { code } = parse(window.location.hash.substring(1))
        props.getAccessToken(code, props.journeyType)
    }
    return <Loading />
}

const mapStateToProps = (state) => ({
    journeyType: sessionStorage.getItem('type'),
})

const mapDispatchToProps = (dispatch) => ({
    getAccessToken: (code, type) => getAccessToken(dispatch, code, type),
})

export default connect(mapStateToProps, mapDispatchToProps)(Redirecting)
