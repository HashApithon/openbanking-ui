import React from 'react'
import './common.css'

// error displayed when api throws 4xx , 5xx error
export default function Error() {
    return (
        <div className="errorContainer">
            <div className="alert alert-danger">
                We have encountered a problem while connecting to server.
            </div>
        </div>
    )
}
