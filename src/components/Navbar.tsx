'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                {/* Netflix Logo */}
                <svg
                    viewBox="0 0 111 30"
                    style={{ width: '92px', height: '25px', fill: '#E50914' }}
                    aria-label="Netflix"
                >
                    <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 0v21.875c2.75.156 5.5.343 8.156.625v4.687c-4.218-.375-8.437-.625-12.843-.812V0h4.687zM21.875 10.97h-6.094v4.436h6.094v4.688H15.78v5.5c-1.562.062-3.125.156-4.687.25V0h10.78v4.687h-6.093v5.97h6.094v.312zM0 30s1.875-6.563 7.938-6.563c5.174 0 6.093 3.376 6.093 6.563H0z" />
                </svg>

                {/* Main Navigation */}
                <ul style={{
                    display: 'flex',
                    gap: '20px',
                    listStyle: 'none',
                    alignItems: 'center'
                }}>
                    <li style={{
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}>
                        Home
                    </li>
                    <li style={{
                        color: '#B3B3B3',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'color 0.2s'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#e5e5e5'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#B3B3B3'}
                    >
                        TV Shows
                    </li>
                    <li style={{
                        color: '#B3B3B3',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'color 0.2s'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#e5e5e5'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#B3B3B3'}
                    >
                        Movies
                    </li>
                    <li style={{
                        color: '#B3B3B3',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'color 0.2s'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#e5e5e5'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#B3B3B3'}
                    >
                        New & Popular
                    </li>
                    <li style={{
                        color: '#B3B3B3',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'color 0.2s'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#e5e5e5'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#B3B3B3'}
                    >
                        My List
                    </li>
                    <li style={{
                        color: '#B3B3B3',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'color 0.2s'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#e5e5e5'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#B3B3B3'}
                    >
                        Browse by Languages
                    </li>
                </ul>
            </div>

            {/* Right Side */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginLeft: 'auto'
            }}>
                {/* Search */}
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    {showSearch && (
                        <input
                            type="text"
                            placeholder="Titles, people, genres"
                            style={{
                                background: 'rgba(0,0,0,0.75)',
                                border: '1px solid #fff',
                                padding: '7px 35px 7px 10px',
                                color: '#fff',
                                fontSize: '14px',
                                width: '230px',
                                outline: 'none'
                            }}
                            autoFocus
                            onBlur={() => setShowSearch(false)}
                        />
                    )}
                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#fff',
                            position: showSearch ? 'absolute' : 'relative',
                            right: showSearch ? '8px' : 'auto'
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                {/* Kids */}
                <span style={{ color: '#B3B3B3', fontSize: '14px', cursor: 'pointer' }}>
                    Kids
                </span>

                {/* Notifications */}
                <button style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#fff',
                    position: 'relative'
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span style={{
                        position: 'absolute',
                        top: '-3px',
                        right: '-3px',
                        background: '#E50914',
                        color: '#fff',
                        fontSize: '10px',
                        fontWeight: '700',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        3
                    </span>
                </button>

                {/* Profile Dropdown */}
                <div
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    <button style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer'
                    }}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                            alt="Profile"
                            style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '4px'
                            }}
                        />
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="#fff"
                            style={{
                                transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s'
                            }}
                        >
                            <path d="M7 10l5 5 5-5z" />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {showDropdown && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            right: '0',
                            background: 'rgba(0,0,0,0.9)',
                            border: '1px solid #333',
                            borderRadius: '2px',
                            minWidth: '180px',
                            marginTop: '10px',
                            padding: '10px 0'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-10px',
                                right: '15px',
                                borderLeft: '10px solid transparent',
                                borderRight: '10px solid transparent',
                                borderBottom: '10px solid #333'
                            }} />

                            {/* Profile Options */}
                            <div style={{ padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                                    alt="Profile"
                                    style={{ width: '28px', height: '28px', borderRadius: '4px' }}
                                />
                                <span style={{ color: '#B3B3B3', fontSize: '13px' }}>User 1</span>
                            </div>

                            <div style={{ padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                                    alt="Profile"
                                    style={{ width: '28px', height: '28px', borderRadius: '4px', filter: 'hue-rotate(90deg)' }}
                                />
                                <span style={{ color: '#B3B3B3', fontSize: '13px' }}>Kids</span>
                            </div>

                            <div style={{ borderTop: '1px solid #333', margin: '10px 0' }} />

                            <div style={{ padding: '8px 15px', color: '#B3B3B3', fontSize: '13px', cursor: 'pointer' }}>
                                Manage Profiles
                            </div>
                            <div style={{ padding: '8px 15px', color: '#B3B3B3', fontSize: '13px', cursor: 'pointer' }}>
                                Transfer Profile
                            </div>
                            <div style={{ padding: '8px 15px', color: '#B3B3B3', fontSize: '13px', cursor: 'pointer' }}>
                                Account
                            </div>
                            <div style={{ padding: '8px 15px', color: '#B3B3B3', fontSize: '13px', cursor: 'pointer' }}>
                                Help Center
                            </div>

                            <div style={{ borderTop: '1px solid #333', margin: '10px 0' }} />

                            <div style={{ padding: '8px 15px', color: '#B3B3B3', fontSize: '13px', cursor: 'pointer', textAlign: 'center' }}>
                                Sign out of Netflix
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
