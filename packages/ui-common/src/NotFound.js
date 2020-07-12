import React from 'react'
import './common.css'
import { Link } from 'react-router-dom'

// Unhandled routes view
export default function NotFound() {
    return (
        <div className="notFound txtCenter">
            <h2>Oops, Page Not Found</h2>
            <p>The page you are trying to search is not found.</p>
            <Link to="/">Back</Link>
        </div>
    )
}
