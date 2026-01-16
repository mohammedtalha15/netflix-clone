'use client';

import { useEffect } from 'react';
import type { Movie } from '@/types';

interface MovieModalProps {
    movie: Movie | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function MovieModal({ movie, isOpen, onClose }: MovieModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!movie) return null;

    return (
        <div
            className={`modal-overlay ${isOpen ? 'active' : ''}`}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="modal-content">
                {/* Hero Image */}
                <div style={{
                    position: 'relative',
                    height: '450px',
                    backgroundImage: `url(${movie.thumbnailUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    {/* Gradient Overlay */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, #181818 0%, rgba(24,24,24,0.5) 50%, transparent 100%)'
                    }} />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '15px',
                            right: '15px',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: '#181818',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            zIndex: 10
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Content Over Image */}
                    <div style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '40px',
                        right: '40px'
                    }}>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            marginBottom: '20px',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                        }}>
                            {movie.title}
                        </h1>

                        {/* Buttons */}
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: '#fff',
                                    color: '#000',
                                    padding: '10px 24px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5,3 19,12 5,21" />
                                </svg>
                                Play
                            </button>

                            <button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '50%',
                                    border: '2px solid rgba(255,255,255,0.5)',
                                    background: 'rgba(42,42,42,0.6)',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>

                            <button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '50%',
                                    border: '2px solid rgba(255,255,255,0.5)',
                                    background: 'rgba(42,42,42,0.6)',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                                </svg>
                            </button>

                            <button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '50%',
                                    border: '2px solid rgba(255,255,255,0.5)',
                                    background: 'rgba(42,42,42,0.6)',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    marginLeft: 'auto'
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="1" />
                                    <circle cx="19" cy="12" r="1" />
                                    <circle cx="5" cy="12" r="1" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div style={{ padding: '25px 40px' }}>
                    <div style={{ display: 'flex', gap: '40px' }}>
                        {/* Left Column */}
                        <div style={{ flex: '2' }}>
                            {/* Meta Info */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginBottom: '15px',
                                fontSize: '15px'
                            }}>
                                <span style={{ color: '#46d369', fontWeight: '600' }}>{movie.match}% Match</span>
                                <span style={{ color: '#bcbcbc' }}>{movie.year}</span>
                                <span className="maturity-badge">{movie.maturityRating}</span>
                                <span style={{ color: '#bcbcbc' }}>{movie.duration}</span>
                                <span style={{
                                    padding: '0 4px',
                                    border: '1px solid #808080',
                                    borderRadius: '3px',
                                    fontSize: '10px',
                                    color: '#808080'
                                }}>
                                    HD
                                </span>
                            </div>

                            {/* Description */}
                            <p style={{
                                fontSize: '15px',
                                lineHeight: '1.6',
                                color: '#d2d2d2'
                            }}>
                                {movie.description}
                            </p>
                        </div>

                        {/* Right Column */}
                        <div style={{ flex: '1' }}>
                            <p style={{ marginBottom: '12px' }}>
                                <span style={{ color: '#777' }}>Cast: </span>
                                <span style={{ color: '#fff' }}>
                                    {movie?.cast?.join(', ') || 'Not available'}
                                </span>
                            </p>
                            <p style={{ fontSize: '14px', color: '#777' }}>
                                <span style={{ color: '#777' }}>Genres: </span>
                                <span style={{ color: '#fff' }}>
                                    {movie.genre.join(', ')}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* More Like This Section */}
                <div style={{ padding: '0 40px 40px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px' }}>
                        More Like This
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '15px'
                    }}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                style={{
                                    background: '#2f2f2f',
                                    borderRadius: '4px',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{
                                    height: '140px',
                                    background: `url(https://picsum.photos/400/200?random=${i})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }} />
                                <div style={{ padding: '16px' }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        marginBottom: '10px',
                                        fontSize: '13px'
                                    }}>
                                        <span style={{ color: '#46d369' }}>{Math.floor(85 + Math.random() * 15)}% Match</span>
                                        <span className="maturity-badge">TV-MA</span>
                                    </div>
                                    <p style={{
                                        fontSize: '13px',
                                        color: '#d2d2d2',
                                        lineHeight: '1.4'
                                    }}>
                                        A gripping tale of suspense and drama that keeps you on the edge of your seat.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* About Section */}
                <div style={{
                    padding: '25px 40px 40px',
                    borderTop: '1px solid #404040'
                }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px' }}>
                        About {movie.title}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p style={{ fontSize: '14px', color: '#777' }}>
                            <span>Director: </span>
                            <span style={{ color: '#fff' }}>Various Directors</span>
                        </p>
                        <p style={{ fontSize: '14px', color: '#777' }}>
                            <span>Cast: </span>
                            <span style={{ color: '#fff' }}>{movie?.cast?.join(', ') || 'Not available'}</span>
                        </p>
                        <p style={{ fontSize: '14px', color: '#777' }}>
                            <span>Genres: </span>
                            <span style={{ color: '#fff' }}>{movie.genre.join(', ')}</span>
                        </p>
                        <p style={{ fontSize: '14px', color: '#777' }}>
                            <span>Maturity rating: </span>
                            <span className="maturity-badge" style={{ marginLeft: '5px' }}>{movie.maturityRating}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
