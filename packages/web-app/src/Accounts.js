import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAccountList } from '@openbanking/ui-data/lib/services/account-service'
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'
import './Accounts.css'

const Accounts = () => {
    const data = useSelector(state => state.app.data);
    const dispatch = useDispatch();

    return (
        <div className="mainContainer">
            <h2 className="pageTitle">AISP Information</h2>
            <div className="apiContainer">
                <div className="btnContainer">
                    <button
                        className="buttonLinks"
                        onClick={() => getAccountList(dispatch)}
                    >
                        Get Account List
                    </button>
                </div>
                <div className="displayInfo">
                    <InfoDisplay data={data} />
                </div>
            </div>
        </div>
    )
}

export default Accounts
