import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { parse } from 'query-string'
import { Redirect } from 'react-router'
import { getAccessToken } from '@openbanking/ui-data/lib/services/auth-service'
import Loading from '@openbanking/ui-common/lib/Loading'

const Redirecting = () => {
    const journeyType = useSelector((state) => sessionStorage.getItem('type'))
    const dispatch = useDispatch()

    // dont allow user to access this page directly
    if (!journeyType) {
        return <Redirect to="/" />
    } else {
        const { code } = parse(window.location.hash.substring(1))
        getAccessToken(dispatch, code, journeyType)
    }
    return <Loading />
}

export default Redirecting
