import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getAccessToken } from '@openbanking/ui-data/lib/services/auth-service'
import { Redirect } from 'react-router'

function Dashboard(props) {
    const [journeyType, setJourneyType] = useState('accounts')

    function setType(type) {
        setJourneyType(type)
        props.getAccessToken(type)
    }

    if (props.token) {
        return <Redirect to={`/${journeyType}`} />
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

const mapStateToProps = (state) => ({
    token: state.auth.token,
})

const mapDispatchToProps = (dispatch) => ({
    getAccessToken: () => getAccessToken(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
