import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Header from '@openbanking/ui-common/lib/Header'
import ErrorBoundary from '@openbanking/ui-common/lib/Error'
import Loading from '@openbanking/ui-common/lib/Loading'
import Accounts from './Accounts'
import Dashboard from './Dashboard'
import './App.css'

function App(props) {
    return (
        <ErrorBoundary>
            {props.loading && <Loading />}
            <div className="app">
                <Header />
                <div className="section-content">
                    <BrowserRouter>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/accounts" component={Accounts} />
                    </BrowserRouter>
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default App
