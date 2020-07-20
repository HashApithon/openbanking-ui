import React from 'react'
import './InfoDisplay.css'
import { useDispatch, useSelector } from 'react-redux'
import ListAccounts from './ListAccounts'
import {
  getAccountList,
  getAccountById,
  getAccountBalances,
  getAccountTransactions,
  getAccountDirectDebits,
  getAccountProducts,
  getAccountStandingOrders,
} from '@openbanking/ui-data/lib/services/account-service'
//display formatted json data
export default function InfoDisplay({ data = {} }) {
    if (!data) {
        return null
    }
    console.log(data);
    const dispatch = useDispatch()
    
    var accounts=data.Data.Account;
    
    return (
       /* <div className="infoContainer">
            <div className="formattedData">
                <pre>{JSON.stringify(data, null, 4)}</pre>
            </div>
        </div>*/
        <ListAccounts accounts={accounts} />
        
        
    )
        
}
