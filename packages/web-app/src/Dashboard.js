import React from 'react'
import { connect } from 'react-redux';
import {getAuthToken} from '@openbanking/ui-data/lib/services/authService'

function Dashboard(props) {
    return (
        <div className="dashboard">
        <div class="container">
        <div class="row">
          
          <div class="col-sm">
              
            <div className="text"><h3>Open Banking</h3></div>
        </div>

        </div>
        <div class="row">
          
          <div class="col-sm">
              
            <div className="journeyBtns">
                 <button className="journeyBtn" onClick={()=>props.getAccessToken()}>Account Information Service Provider (AISP)</button>
                 <button className="journeyBtn">Payment Initiation Service Provider (PISP)</button>
             </div>
          </div>
        </div>
      </div>
      </div>
    )
}
const mapStateToProps = state => ({
    token:state.user.token
});


const mapDispatchToProps = dispatch => ({
    getAccessToken:()=>
        getAuthToken().catch((error)=>{
            throw error;
        })
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
