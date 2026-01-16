'use client';

import React, { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100vh',
                        background: '#141414',
                        color: '#fff',
                        padding: '20px',
                    }}>
                        <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>
                            Oops! Something went wrong
                        </h1>
                        <p style={{ color: '#bcbcbc', marginBottom: '30px', textAlign: 'center', maxWidth: '500px' }}>
                            We're sorry for the inconvenience. Please try refreshing the page.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            style={{
                                background: '#E50914',
                                border: 'none',
                                color: '#fff',
                                padding: '12px 30px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                fontWeight: '600',
                            }}
                        >
                            Refresh Page
                        </button>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}
