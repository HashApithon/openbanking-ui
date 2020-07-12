import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from '@openbanking/ui-common/lib/Header'
import ErrorBoundary from '@openbanking/ui-common/lib/ErrorBoundary'
import Loading from '@openbanking/ui-common/lib/Loading'
import Error from '@openbanking/ui-common/lib/Error'
import NotFound from '@openbanking/ui-common/lib/NotFound'
import Accounts from './Accounts'
import Dashboard from './Dashboard'
import Loader from './Loader'
import Redirecting from './Redirecting'
import PrivateRoute from './PrivateRoute'
import Payments from './Payments'
import './App.css'

// views

const App = () => {
    const loading = useSelector((state) => state.common.loading)
    const error = useSelector((state) => state.common.error)

    return (
        <div className="app">
            {loading && <Loading />}
            <Header />
            <ErrorBoundary>
                {error && <Error />}
                <div className="section-content">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/loading" component={Loader} />
                            <Route
                                exact
                                path="/redirecting"
                                render={() => <Redirecting />}
                            />
                            <PrivateRoute
                                exact
                                path="/aisp"
                                render={() => <Accounts />}
                            />
                            <PrivateRoute
                                exact
                                path="/pisp"
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
