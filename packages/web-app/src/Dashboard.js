import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getAccessToken } from '@openbanking/ui-data/lib/services/auth-service'

const Dashboard = () => {
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const [journeyType, setJourneyType] = useState('accounts')

    function setType(type) {
        setJourneyType(type)
        getAccessToken(dispatch)
    }

    if (token) {
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

export default Dashboard