import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import {createBrowserHistory} from 'history';

import AppConnect from './AppConnect';
import * as serviceWorker from './serviceWorker';
import store from '@openbanking/ui-data/src/store'
import networkService from '@openbanking/ui-data/src/services/network-service';

const history = createBrowserHistory();
networkService.setupInterceptors(store, history);

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <AppConnect />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
