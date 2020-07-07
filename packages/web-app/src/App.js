import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from '@openbanking/ui-common/lib/Header'
import ErrorBoundary from '@openbanking/ui-common/lib/ErrorBoundary'
import Loading from '@openbanking/ui-common/lib/Loading'
import Accounts from './Accounts'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import './App.css'
import Payments from './Payments'
import Error from '@openbanking/ui-common/lib/Error'
import NotFound from '@openbanking/ui-common/lib/NotFound'

function App(props) {
    return (
        <div className="app">
            {props.loading && <Loading />}
            <Header />
            <ErrorBoundary>
                {props.error && <Error />}
                <div className="section-content">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <PrivateRoute
                                exact
                                path="/accounts"
                                render={() => <Accounts />}
                            />
                            <PrivateRoute
                                exact
                                path="/payments"
                                render={() => <Payments />}
                            />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </ErrorBoundary>
        </div>
    )
}

export default App
