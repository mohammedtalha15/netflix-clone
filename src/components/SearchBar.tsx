'use client';

import { useState, useEffect } from 'react';
import { useSearch, useDebounce } from '@/hooks';
import { extendedMoviesDatabase } from '@/data/extendedMovies';
import Link from 'next/link';
import type { Movie } from '@/types';

interface SearchBarProps {
    onResultClick?: (movie: Movie) => void;
}

export default function SearchBar({ onResultClick }: SearchBarProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { results, isSearching } = useSearch(extendedMoviesDatabase, searchTerm);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        setShowResults(searchTerm.length > 0 && results.length > 0);
    }, [searchTerm, results]);

    return (
        <div style={{ position: 'relative' }}>
            {/* Search Input */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                background: isExpanded ? 'rgba(0,0,0,0.75)' : 'transparent',
                border: isExpanded ? '1px solid #fff' : 'none',
                padding: isExpanded ? '7px 10px' : '7px',
                transition: 'all 0.3s',
                borderRadius: '2px',
            }}>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#fff',
                        padding: '0',
                        display: 'flex',
                        alignItems: 'center',
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

                {isExpanded && (
                    <input
                        type="text"
                        placeholder="Titles, people, genres"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onBlur={() => {
                            setTimeout(() => {
                                setIsExpanded(false);
                                setShowResults(false);
                            }, 200);
                        }}
                        autoFocus
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#fff',
                            fontSize: '14px',
                            width: '230px',
                            marginLeft: '10px',
                            outline: 'none',
                        }}
                    />
                )}
            </div>

            {/* Search Results Dropdown */}
            {showResults && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '10px',
                    background: 'rgba(0,0,0,0.95)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '4px',
                    width: '400px',
                    maxHeight: '500px',
                    overflowY: 'auto',
                    zIndex: 1000,
                }}>
                    {/* Loading State */}
                    {isSearching && (
                        <div style={{
                            padding: '20px',
                            textAlign: 'center',
                            color: '#fff',
                        }}>
                            Searching...
                        </div>
                    )}

                    {/* Results */}
                    {!isSearching && results.map((movie) => (
                        <div
                            key={movie.id}
                            onClick={() => {
                                onResultClick?.(movie);
                                setShowResults(false);
                                setSearchTerm('');
                                setIsExpanded(false);
                            }}
                            style={{
                                display: 'flex',
                                padding: '10px',
                                cursor: 'pointer',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                transition: 'background 0.2s',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                            <img
                                src={movie.thumbnailUrl}
                                alt={movie.title}
                                style={{
                                    width: '120px',
                                    height: '68px',
                                    objectFit: 'cover',
                                    borderRadius: '4px',
                                    marginRight: '12px',
                                }}
                            />

                            <div style={{ flex: 1 }}>
                                <h4 style={{
                                    color: '#fff',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    marginBottom: '4px',
                                }}>
                                    {movie.title}
                                </h4>

                                <div style={{
                                    display: 'flex',
                                    gap: '8px',
                                    fontSize: '12px',
                                    marginBottom: '6px',
                                }}>
                                    <span style={{ color: '#46d369' }}>{movie.match}% Match</span>
                                    <span style={{ color: '#bcbc bc' }}>{movie.year}</span>
                                    <span style={{
                                        border: '1px solid #808080',
                                        padding: '0 4px',
                                        color: '#808080',
                                        fontSize: '10px',
                                    }}>
                                        {movie.maturityRating}
                                    </span>
                                </div>

                                <p style={{
                                    color: '#bcbcbc',
                                    fontSize: '12px',
                                    lineHeight: '1.4',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                }}>
                                    {movie.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* No Results */}
                    {!isSearching && results.length === 0 && searchTerm.length > 0 && (
                        <div style={{
                            padding: '20px',
                            textAlign: 'center',
                            color: '#bcbcbc',
                        }}>
                            No results found for "{searchTerm}"
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
