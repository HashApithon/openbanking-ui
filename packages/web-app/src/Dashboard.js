import React from 'react'
import { connect } from 'react-redux';

function Dashboard(props) {
    return (
        <div className="dashboard">
            <div className="text">What would you like to choose?</div>
            <div className="journeyBtns">
                <button className="journeyBtn">Account APIs</button>
                <button className="journeyBtn">Payment APIs</button>
            </div>
        </div>
    )
}

export default Dashboard;
