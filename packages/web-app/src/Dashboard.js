import React from 'react'
import { connect } from 'react-redux';
import {getAuthToken} from '@openbanking/ui-data/lib/services/authService'

function Dashboard(props) {
    return (
        <div className="dashboard">
            <div className="text">What would you like to choose?</div>
            <div className="journeyBtns">
                <button onClick={()=>props.getAccessToken()} className="journeyBtn">Account APIs</button>
                <button className="journeyBtn">Payment APIs</button>
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
