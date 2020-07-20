import React from 'react'
import './InfoDisplay.css'


export default function ShowBalance(props) {
    if (!props.balance) {
        return null
    }
   
    
    
    
    var balance=props.balance;
    return (
       /* <div className="infoContainer">
            <div className="formattedData">
                <pre>{JSON.stringify(data, null, 4)}</pre>
            </div>
        </div>*/
      
        <div>
            {props.balance.Amount}
        </div>
        
    )
        
}