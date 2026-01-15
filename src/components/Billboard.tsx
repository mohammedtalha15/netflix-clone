'use client';

import { useState, useEffect } from 'react';
import { featuredMovie } from '@/data/movies';

export default function Billboard() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section
            className="hero-section"
            style={{
                backgroundImage: `url(${featuredMovie.thumbnailUrl})`,
            }}
        >
            <div className="hero-gradient" />

            {/* Content */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '35%',
                    left: '60px',
                    maxWidth: '550px',
                    zIndex: 10,
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s ease-out'
                }}
            >
                {/* Netflix Original Badge */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px'
                }}>
                    <svg
                        viewBox="0 0 111 30"
                        style={{ width: '30px', height: '30px', fill: '#E50914' }}
                    >
                        <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 0v21.875c2.75.156 5.5.343 8.156.625v4.687c-4.218-.375-8.437-.625-12.843-.812V0h4.687zM21.875 10.97h-6.094v4.436h6.094v4.688H15.78v5.5c-1.562.062-3.125.156-4.687.25V0h10.78v4.687h-6.093v5.97h6.094v.312zM0 30s1.875-6.563 7.938-6.563c5.174 0 6.093 3.376 6.093 6.563H0z" />
                    </svg>
                    <span style={{
                        color: '#C0C0C0',
                        fontSize: '14px',
                        fontWeight: '500',
                        letterSpacing: '4px',
                        textTransform: 'uppercase'
                    }}>
                        F I L M
                    </span>
                </div>

                {/* Title */}
                <h1 style={{
                    fontSize: '3.5rem',
                    fontWeight: '700',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    marginBottom: '20px',
                    lineHeight: '1.1'
                }}>
                    {featuredMovie.title}
                </h1>

                {/* Description */}
                <p style={{
                    fontSize: '1.2rem',
                    color: '#fff',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                    marginBottom: '24px',
                    lineHeight: '1.5'
                }}>
                    {featuredMovie.description}
                </p>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: '#fff',
                            color: '#000',
                            padding: '12px 28px',
                            fontSize: '18px',
                            fontWeight: '600',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.75)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                        Play
                    </button>

                    <button
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'rgba(109, 109, 110, 0.7)',
                            color: '#fff',
                            padding: '12px 28px',
                            fontSize: '18px',
                            fontWeight: '600',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(109, 109, 110, 0.4)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(109, 109, 110, 0.7)'}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <line x1="12" y1="16" x2="12" y2="12" strokeWidth="2" />
                            <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="2" />
                        </svg>
                        More Info
                    </button>
                </div>
            </div>

            {/* Maturity Rating Badge */}
            <div style={{
                position: 'absolute',
                bottom: '35%',
                right: '0',
                display: 'flex',
                alignItems: 'center'
            }}>
                <span style={{
                    padding: '6px 12px 6px 6px',
                    background: 'rgba(51, 51, 51, 0.6)',
                    borderLeft: '3px solid #ddd',
                    fontSize: '16px',
                    fontWeight: '500'
                }}>
                    {featuredMovie.maturityRating}
                </span>
            </div>
        </section>
    );
}
