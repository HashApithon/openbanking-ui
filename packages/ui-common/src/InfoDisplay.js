import React from 'react'
import './InfoDisplay.css'
import { useDispatch, useSelector } from 'react-redux'
import ListAccounts from './ListAccounts'
import ShowBalance from './ShowBalance'
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
    var balance=data.Data.Balance;

    if(accounts!==null)
    return <ListAccounts accounts={accounts} />
    else
    return <ShowBalance balance={balance} />

    
        
}
