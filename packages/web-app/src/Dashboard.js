import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeJourney } from '@openbanking/ui-data/lib/services/auth-service'

const Dashboard = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        //remove access_token to start journey again
        localStorage.removeItem('token')
        localStorage.removeItem('refresh_token')
    },[])

    function setType(type) {
        // initialize aisp/pisp journey to get authorization URL
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
