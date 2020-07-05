import React from 'react'
import { connect } from 'react-redux';
import { getAccounts } from '@openbanking/ui-data/lib/services/aispService';


function Accounts(props) {

  return (
    <div>
        Accounts
        <button onClick={()=>props.getAccounts()}>Get Accounts</button>
    </div>
  );
}

const mapStateToProps = state => ({
    accounts:state.app.data
});


const mapDispatchToProps = dispatch => ({
    getAccounts:()=>{
        getAccounts(dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
