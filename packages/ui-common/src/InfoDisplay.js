import React from 'react'
import './InfoDisplay.css'

//display formatted json data
export default function InfoDisplay({ data = {} }) {
    if (!data) {
        return null
    }
    return (
        <div className="infoContainer">
            <div className="formattedData">
                <pre>{JSON.stringify(data, null, 4)}</pre>
            </div>
        </div>
    )
}
