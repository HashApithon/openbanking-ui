import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'
import Header from '@openbanking/ui-common/lib/Header';
import ErrorBoundary from '@openbanking/ui-common/lib/Error'
import Home from './Home'
import Login from './Login';
import Loading from '@openbanking/ui-common/lib/Loading';

function App(props) {
  return (
    <ErrorBoundary>
      <div className="App">
        {props.loading && <Loading />}
        This is {props.message} from redux store
      <Header />
        <button onClick={() => props.getInitialData('Dispatch hello')}>Click Me</button>
        <BrowserRouter >
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
}

export default App;
