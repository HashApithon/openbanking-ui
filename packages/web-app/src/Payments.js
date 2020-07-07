import React from 'react'
import { connect } from 'react-redux'
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'
import './Accounts.css'

function Payments(props) {
    return (
        <div className="apiContainer">
            <div className="btnContainer">
                <h2>PISP Information</h2>
            </div>
            <div className="displayInfo">
                <InfoDisplay data={props.data} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Payments)
