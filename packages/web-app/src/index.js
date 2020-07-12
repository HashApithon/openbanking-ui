import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import store from '@openbanking/ui-data/lib/store'
import networkService from '@openbanking/ui-data/lib/services/network-service'
import App from './App'
import './index.css'

// bootstrapping react app

const history = createBrowserHistory()
networkService.setupInterceptors(store, history)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
