import React from 'react'
import { connect } from 'react-redux';

function Dashboard(props) {
    return (
        // <div className="dashboard">
        //     <div className="text">What would you like to choose?</div>
        //     <div className="journeyBtns">
        //         <button className="journeyBtn">Account APIs</button>
        //         <button className="journeyBtn">Payment APIs</button>
        //     </div>
        // </div>
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
                 <button className="journeyBtn">Account Information Service Provider (AISP)</button>
                 <button className="journeyBtn">Payment Initiation Service Provider (PISP)</button>
             </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Dashboard;
