import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import {createBrowserHistory} from 'history';

import AppConnect from './AppConnect';
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
