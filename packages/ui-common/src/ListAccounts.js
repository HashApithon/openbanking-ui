import React from 'react'
import './InfoDisplay.css'
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

export default function ListAccounts(props) {
    if (!props.accounts) {
        return null
    }
   
    const dispatch = useDispatch()
    
    
    var accounts=props.accounts
    return (
       /* <div className="infoContainer">
            <div className="formattedData">
                <pre>{JSON.stringify(data, null, 4)}</pre>
            </div>
        </div>*/
      
        <div class="ui three stackable cards">
        {accounts.map((account, index)=>(
            <div class="ui blue card" key={index}>
            <div class="ui content">
              <div class="ui blue header">{account.Nickname}</div>
            </div>
            
              <h2 class="ui purple sub header">{account.AccountType} {account.AccountSubType}</h2>
              
                <div class="event">
                  
                    <div class="summary">
              <h5 class="ui violet header">Currency: {account.Currency}</h5>
                    </div>
                 
                </div>
                
              
            
            <div class="extra content">
              <button class="ui green button" 
              onClick={() => getAccountBalances(dispatch, account.AccountId)}>Know balance</button>
            </div>
          </div>
        
        
            ))}
            </div>
        
    )
        
}