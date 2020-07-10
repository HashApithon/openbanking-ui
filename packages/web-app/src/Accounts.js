import React from 'react'
import { connect } from 'react-redux'
import { getAccountList, getAccountById, getAccountBalances, getAccountTransactions,
     getAccountDirectDebits, getAccountProducts, getAccountStandingOrders } from '@openbanking/ui-data/src/services/account-service'
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'
import './Accounts.css'


// stubbed account id configured in .env
const ACCOUNT_ID = process.env.REACT_APP_ACCOUNT_ID

function Accounts(props) {
    return (
        <div className="mainContainer">
            <h2 className="pageTitle">AISP Information</h2>
            <div className="apiContainer">
                <div className="btnContainer">
                    <button
                        className="buttonLinks"
                        onClick={() => props.getAccountList()}
                    >
                        Get Account List
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() => props.getAccountById()}
                    >
                        Get Account By Id
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() => props.getAccountBalances()}
                    >
                        Get Account Balances
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() => props.getAccountDirectDebits()}
                    >
                        Get Account Direct Debits
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() => props.getAccountTransactions()}
                    >
                        Get Account Transactions
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() => props.getAccountProducts()}
                    >
                        Get Account Products
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() => props.getAccountStandingOrders()}
                    >
                        Get Account Standing Orders
                    </button>
                </div>
                <div className="displayInfo">
                    <InfoDisplay data={props.data} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.app.data,
})

const mapDispatchToProps = (dispatch) => ({
    getAccountList: () => getAccountList(dispatch),
    getAccountById: () => getAccountById(dispatch,ACCOUNT_ID),
    getAccountBalances: () => getAccountBalances(dispatch,ACCOUNT_ID),
    getAccountTransactions: () => getAccountTransactions(dispatch,ACCOUNT_ID),
    getAccountDirectDebits: () => getAccountDirectDebits(dispatch,ACCOUNT_ID),
    getAccountProducts: () => getAccountProducts(dispatch,ACCOUNT_ID),
    getAccountStandingOrders: () => getAccountStandingOrders(dispatch,ACCOUNT_ID)
})

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)
