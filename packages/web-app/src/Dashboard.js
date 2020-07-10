import React from 'react'
import { connect } from 'react-redux'
import { initializeJourney } from '@openbanking/ui-data/src/services/auth-service'

function Dashboard(props) {

    function setType(type) {
        props.initializeJourney(type)
    }

    return (
        <div className="dashboard">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="text">
                            <h3>Open Banking</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="journeyBtns">
                            <button
                                className="journeyBtn"
                                onClick={() => setType('accounts')}
                            >
                                Account Information Service Provider (AISP)
                            </button>
                            <button
                                className="journeyBtn"
                                onClick={() => setType('payments')}
                            >
                                Payment Initiation Service Provider (PISP)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    initializeJourney: (type) => initializeJourney(dispatch,type),
})

export default connect(null, mapDispatchToProps)(Dashboard)
