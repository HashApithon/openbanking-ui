import React from 'react'
import { useDispatch } from 'react-redux'
import { initializeJourney } from '@openbanking/ui-data/lib/services/auth-service'

const Dashboard = () => {
    const dispatch = useDispatch()

    function setType(type) {
        initializeJourney(dispatch, type)
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
                                onClick={() => setType('aisp')}
                            >
                                Account Information Service Provider (AISP)
                            </button>
                            <button
                                className="journeyBtn"
                                onClick={() => setType('pisp')}
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
