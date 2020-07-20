import React from 'react'
import './InfoDisplay.css'


export default function Showtransactions(props) {
    if (!props.balance) {
        console.log("no data");
        return null;
    }
   
    
    
    
    //var balance=props.balance;
    var transaction=props.transaction;
    return (
       /* <div className="infoContainer">
            <div className="formattedData">
                <pre>{JSON.stringify(data, null, 4)}</pre>
            </div>
        </div>*/
      
        <div>
            {transaction[0].TransactionId}
        </div>
        
    )
        
}