import React from 'react';
import './App.css';
import Header from '@openbanking/ui-common/lib/Header';

function App(props) {
  return (
    <div className="App">
      This is {props.message} from redux store
      <Header />
      <button onClick={()=>props.getInitialData('Dispatch hello')}>Click Me</button>
    </div>
  );
}

export default App;
