import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'

function PrivateRoute({ children, token, ...rest }) {
    return token ? <Route {...rest}>{children}</Route> : <Redirect to="/" />
}

const mapStateToProps = (state) => ({
    token: state.auth.token || localStorage.getItem('token'),
})

export default connect(mapStateToProps, null)(PrivateRoute)
