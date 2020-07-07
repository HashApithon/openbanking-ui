import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    render() {
        return this.state.hasError ? (
            <div className="errorNotification">
                <div className="alert alert-danger">
                    <div className="errorBox">
                        <div className="content">
                            <h1>Something went wrong</h1>
                            <p>
                                If you need any assistance , Please contact
                                support team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            this.props.children
        )
    }
}
