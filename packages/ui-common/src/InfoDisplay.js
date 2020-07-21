import React from 'react'
import './InfoDisplay.css'
import { useDispatch, useSelector } from 'react-redux'
import ListAccounts from './ListAccounts'
import ShowBalance from './ShowBalance'
import Showtransactions from './Showtransactions'
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
      console.log("No data");
        return null
    }
    console.log(data);
    const dispatch = useDispatch()
    
    var accounts=data.Data.Account;
    var balance=data.Data.Balance;
    var transaction=data.Data.Transaction;
    if(accounts)
    return <ListAccounts accounts={accounts} />
    else if(balance)
    return <ShowBalance balance={balance} />
    else if(transaction)
    return <Showtransactions transaction={transaction} />
    
        
}
