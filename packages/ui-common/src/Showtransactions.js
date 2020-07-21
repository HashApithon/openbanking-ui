import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';
import './InfoDisplay.css'
import { getAccountList } from '@openbanking/ui-data/lib/services/account-service';

export default function Showtransactions(props) {
    if (!props.transaction) {
        console.log("no data");
        return null;
    }
   
    
    const dispatch=useDispatch();
    
    //var balance=props.balance;
    var transactions=props.transaction;
    if(transactions.length>3)
    transactions=transactions.slice(0,3);
    console.log("Inside show transactions:",transactions);
    return (
       
        <div>
        <div class="ui three stackable cards">
        {transactions.map((transaction, index)=>(
            <div class="ui blue card" key={index}>
            <div class="ui content">
              <div class="ui blue header">{transaction.AccountId}</div>
            </div>
            
              <h2 class="ui purple sub header">Transaction Amount: £{transaction.Amount.Amount}</h2>
              
                <div class="event">
                  
                    <div class="summary">
              <h5 class="ui violet header">Transaction Info: {transaction.TransactionInformation}</h5>
                    </div>
                 
                </div>
                
              
            
            <div class="extra content">
              <button class="ui green button" 
              onClick={() => getAccountList(dispatch)}>Return to Accounts</button>

              
            </div>
          </div>
        
        
            ))}
            </div>
            
            

</div>
          );
      
        
}