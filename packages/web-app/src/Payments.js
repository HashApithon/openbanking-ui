import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    createDomesticPayment,
    getDomesticPaymentStatus,
} from '@openbanking/ui-data/lib/services/payment-service'
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'
import './Accounts.css'

const PAYMENT_ID = process.env.REACT_APP_PAYMENT_ID

//payments api list
const Payments = () => {
    const data = useSelector((state) => state.app.data)
    const dispatch = useDispatch()

    return (
        <div className="mainContainer">
            <h2 className="pageTitle">AISP Information</h2>
            <div className="apiContainer">
                <div className="btnContainer">
                    <button
                        className="buttonLinks"
                        onClick={() => createDomesticPayment(dispatch)}
                    >
                        Create Domestic Payments
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() =>
                            getDomesticPaymentStatus(dispatch, PAYMENT_ID)
                        }
                    >
                        Get Domestic Payments
                    </button>
                </div>
                <div className="displayInfo">
                    <InfoDisplay data={data} />
                </div>
            </div>
        </div>
    )
}

export default Payments
