import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAccountList,
    getAccountById,
    getAccountBalances,
    getAccountTransactions,
    getAccountDirectDebits,
    getAccountProducts,
    getAccountStandingOrders,
} from '@openbanking/ui-data/lib/services/account-service'
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'
import './Accounts.css'

// stubbed account id configured in .env
const ACCOUNT_ID = process.env.REACT_APP_ACCOUNT_ID

const Accounts = () => {
    const data = useSelector((state) => state.app.data)
    const dispatch = useDispatch()

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
                    <button
                        className="buttonLinks"
                        onClick={() => getAccountById(dispatch, ACCOUNT_ID)}
                    >
                        Get Account By Id
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() => getAccountBalances(dispatch, ACCOUNT_ID)}
                    >
                        Get Account Balances
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() =>
                            getAccountDirectDebits(dispatch, ACCOUNT_ID)
                        }
                    >
                        Get Account Direct Debits
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() =>
                            getAccountTransactions(dispatch, ACCOUNT_ID)
                        }
                    >
                        Get Account Transactions
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() => getAccountProducts(dispatch, ACCOUNT_ID)}
                    >
                        Get Account Products
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() =>
                            getAccountStandingOrders(dispatch, ACCOUNT_ID)
                        }
                    >
                        Get Account Standing Orders
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
