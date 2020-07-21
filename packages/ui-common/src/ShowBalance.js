import React from 'react'
import './InfoDisplay.css'
import { Alert } from 'reactstrap';


export default function ShowBalance(props) {
    if (!props.balance) {
        console.log("no data");
        return null;
    }
   
    
    
    
    var balance=props.balance;
    //var transaction=props.transaction;
    return (
       /* <div className="infoContainer">
            <div className="formattedData">
                <pre>{JSON.stringify(data, null, 4)}</pre>
            </div>
        </div>*/
      
        <Alert color="success">
        <h2>Currently your balance is £{balance[0].Amount.Amount}</h2>
      </Alert>
    )
        
}