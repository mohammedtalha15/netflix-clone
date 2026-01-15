'use client';

import { useState } from 'react';
import { Movie } from '@/data/movies';

interface MovieCardProps {
    movie: Movie;
    isTop10?: boolean;
    rank?: number;
    onOpenModal?: (movie: Movie) => void;
}

export default function MovieCard({ movie, isTop10 = false, rank, onOpenModal }: MovieCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="movie-card"
            style={{
                backgroundImage: `url(${movie.thumbnailUrl})`,
                minWidth: isTop10 ? '150px' : '230px',
                height: isTop10 ? '200px' : '130px',
                position: 'relative',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onOpenModal?.(movie)}
        >
            {/* Top 10 Rank */}
            {isTop10 && rank && (
                <span className="rank-badge">{rank}</span>
            )}

            {/* Hover Info Panel */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '12px',
                }}
            >
                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                    {/* Play Button */}
                    <button
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            border: 'none',
                            background: '#fff',
                            cursor: 'pointer',
                            transition: 'transform 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#000">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    </button>

                    {/* Add to List */}
                    <button
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            border: '2px solid rgba(255,255,255,0.5)',
                            background: 'rgba(42,42,42,0.6)',
                            color: '#fff',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#fff';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                            e.currentTarget.style.background = 'rgba(42,42,42,0.6)';
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>

                    {/* Like */}
                    <button
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            border: '2px solid rgba(255,255,255,0.5)',
                            background: 'rgba(42,42,42,0.6)',
                            color: '#fff',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#fff';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                            e.currentTarget.style.background = 'rgba(42,42,42,0.6)';
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                        </svg>
                    </button>

                    {/* More Info - Right aligned */}
                    <button
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            border: '2px solid rgba(255,255,255,0.5)',
                            background: 'rgba(42,42,42,0.6)',
                            color: '#fff',
                            cursor: 'pointer',
                            marginLeft: 'auto',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#fff';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                            e.currentTarget.style.background = 'rgba(42,42,42,0.6)';
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6,9 12,15 18,9" />
                        </svg>
                    </button>
                </div>

                {/* Title */}
                <h4 style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '6px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {movie.title}
                </h4>

                {/* Meta Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                    <span style={{ color: '#46d369', fontWeight: '600' }}>{movie.match}% Match</span>
                    <span className="maturity-badge">{movie.maturityRating}</span>
                    <span style={{ color: '#bcbcbc' }}>{movie.duration}</span>
                </div>

                {/* Genres */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '11px',
                    color: '#bcbcbc',
                    marginTop: '6px',
                    flexWrap: 'wrap'
                }}>
                    {movie.genre.slice(0, 3).map((g, i) => (
                        <span key={g}>
                            {g}{i < Math.min(movie.genre.length, 3) - 1 && <span style={{ margin: '0 4px' }}>•</span>}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
