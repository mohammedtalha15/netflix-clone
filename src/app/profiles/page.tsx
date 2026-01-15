'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Profile {
    id: number;
    name: string;
    avatar: string;
    isKids: boolean;
    color: string;
}

const profiles: Profile[] = [
    {
        id: 1,
        name: 'User',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
        isKids: false,
        color: '#e50914'
    },
    {
        id: 2,
        name: 'Guest',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
        isKids: false,
        color: '#1ce783'
    },
    {
        id: 3,
        name: 'Kids',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
        isKids: true,
        color: '#f5b81c'
    },
];

export default function ProfilesPage() {
    const router = useRouter();
    const [isManaging, setIsManaging] = useState(false);
    const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);

    const handleProfileSelect = (profile: Profile) => {
        if (isManaging) {
            // Open profile edit
            return;
        }
        router.push('/');
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: '#141414',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            {/* Logo */}
            <div style={{
                position: 'absolute',
                top: '20px',
                left: '40px'
            }}>
                <svg
                    viewBox="0 0 111 30"
                    style={{ width: '100px', height: '27px', fill: '#E50914' }}
                >
                    <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 0v21.875c2.75.156 5.5.343 8.156.625v4.687c-4.218-.375-8.437-.625-12.843-.812V0h4.687zM21.875 10.97h-6.094v4.436h6.094v4.688H15.78v5.5c-1.562.062-3.125.156-4.687.25V0h10.78v4.687h-6.093v5.97h6.094v.312zM0 30s1.875-6.563 7.938-6.563c5.174 0 6.093 3.376 6.093 6.563H0z" />
                </svg>
            </div>

            {/* Main Content */}
            <div style={{
                textAlign: 'center',
                animation: 'fadeIn 0.5s ease'
            }}>
                <h1 style={{
                    fontSize: '3.5rem',
                    fontWeight: '400',
                    color: '#fff',
                    marginBottom: '30px'
                }}>
                    Who&apos;s watching?
                </h1>

                {/* Profiles Grid */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '30px',
                    flexWrap: 'wrap',
                    marginBottom: '60px'
                }}>
                    {profiles.map((profile) => (
                        <div
                            key={profile.id}
                            onClick={() => handleProfileSelect(profile)}
                            onMouseEnter={() => setHoveredProfile(profile.id)}
                            onMouseLeave={() => setHoveredProfile(null)}
                            style={{
                                cursor: 'pointer',
                                textAlign: 'center',
                                transition: 'all 0.2s'
                            }}
                        >
                            {/* Avatar */}
                            <div style={{
                                position: 'relative',
                                width: '150px',
                                height: '150px',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                border: hoveredProfile === profile.id ? `3px solid ${profile.color}` : '3px solid transparent',
                                transition: 'border-color 0.2s'
                            }}>
                                <img
                                    src={profile.avatar}
                                    alt={profile.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: profile.isKids ? 'hue-rotate(60deg)' : profile.id === 2 ? 'hue-rotate(180deg)' : 'none',
                                        transform: hoveredProfile === profile.id ? 'scale(1.05)' : 'scale(1)',
                                        transition: 'transform 0.2s'
                                    }}
                                />

                                {/* Edit Overlay (when managing) */}
                                {isManaging && (
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'rgba(0,0,0,0.5)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* Name */}
                            <p style={{
                                marginTop: '12px',
                                fontSize: '16px',
                                color: hoveredProfile === profile.id ? '#fff' : '#808080',
                                transition: 'color 0.2s'
                            }}>
                                {profile.name}
                            </p>

                            {/* Lock Icon for Kids */}
                            {profile.isKids && (
                                <div style={{
                                    marginTop: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '4px',
                                    color: '#808080',
                                    fontSize: '12px'
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 1C8.676 1 6 3.676 6 7v2H4v14h16V9h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v2H8V7c0-2.276 1.724-4 4-4zm0 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Add Profile Button */}
                    <div
                        onClick={() => { }}
                        style={{
                            cursor: 'pointer',
                            textAlign: 'center'
                        }}
                        onMouseEnter={() => setHoveredProfile(0)}
                        onMouseLeave={() => setHoveredProfile(null)}
                    >
                        <div style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '4px',
                            background: '#333',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: hoveredProfile === 0 ? '3px solid #fff' : '3px solid transparent',
                            transition: 'border-color 0.2s'
                        }}>
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#808080" strokeWidth="1.5">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </div>
                        <p style={{
                            marginTop: '12px',
                            fontSize: '16px',
                            color: hoveredProfile === 0 ? '#fff' : '#808080',
                            transition: 'color 0.2s'
                        }}>
                            Add Profile
                        </p>
                    </div>
                </div>

                {/* Manage Profiles Button */}
                <button
                    onClick={() => setIsManaging(!isManaging)}
                    style={{
                        padding: '10px 24px',
                        fontSize: '16px',
                        fontWeight: '500',
                        letterSpacing: '2px',
                        background: 'transparent',
                        color: '#808080',
                        border: '1px solid #808080',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#fff';
                        e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#808080';
                        e.currentTarget.style.color = '#808080';
                    }}
                >
                    {isManaging ? 'DONE' : 'MANAGE PROFILES'}
                </button>
            </div>
        </div>
    );
}
