import React from 'react'
import { useSelector } from 'react-redux'
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'
import './Accounts.css'

const Payments = () => {
    const data = useSelector((state) => state.app.data)

    return (
        <div className="apiContainer">
            <div className="btnContainer">
                <h2>PISP Information</h2>
            </div>
            <div className="displayInfo">
                <InfoDisplay data={data} />
            </div>
        </div>
    )
}

export default Payments
