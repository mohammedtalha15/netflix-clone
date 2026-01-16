'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { massiveMovieDatabase, newReleases } from '@/data/massiveDatabase';
import MovieRow from '@/components/MovieRow';
import MovieModal from '@/components/MovieModal';
import type { Movie } from '@/types';

export default function NewAndPopularPage() {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'new' | 'popular' | 'coming'>('new');

    const handleOpenModal = (movie: Movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedMovie(null), 300);
    };

    const popularMovies = massiveMovieDatabase
        .filter(m => (m.rating || 0) >= 7.0)
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 20);

    const comingSoon = massiveMovieDatabase
        .filter(m => m.year === 2024)
        .slice(0, 15);

    return (
        <main style={{ minHeight: '100vh', background: '#141414' }}>
            <Navbar />

            <div style={{ paddingTop: '80px' }}>
                {/* Header with tabs */}
                <div style={{
                    padding: '20px 60px',
                    borderBottom: '3px solid #404040',
                }}>
                    <h1 style={{
                        fontSize: '2rem',
                        fontWeight: '700',
                        marginBottom: '20px',
                    }}>
                        New & Popular
                    </h1>

                    <div style={{ display: 'flex', gap: '30px' }}>
                        {[
                            { key: 'new', label: 'New Releases' },
                            { key: 'popular', label: 'Most Popular' },
                            { key: 'coming', label: 'Coming Soon' },
                        ].map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key as any)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: activeTab === tab.key ? '#fff' : '#808080',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    padding: '10px 0',
                                    borderBottom: activeTab === tab.key ? '3px solid #E50914' : 'none',
                                    marginBottom: '-3px',
                                    transition: 'color 0.2s',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                                onMouseLeave={(e) => {
                                    if (activeTab !== tab.key) {
                                        e.currentTarget.style.color = '#808080';
                                    }
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div style={{ padding: '30px 0' }}>
                    {activeTab === 'new' && (
                        <>
                            <MovieRow
                                title="New This Week"
                                movies={newReleases.slice(0, 10)}
                                onOpenModal={handleOpenModal}
                            />
                            <MovieRow
                                title="Recently Added Movies"
                                movies={newReleases.filter(m => m.type === 'movie').slice(0, 15)}
                                onOpenModal={handleOpenModal}
                            />
                            <MovieRow
                                title="Recently Added TV Shows"
                                movies={newReleases.filter(m => m.type === 'show').slice(0, 15)}
                                onOpenModal={handleOpenModal}
                            />
                        </>
                    )}

                    {activeTab === 'popular' && (
                        <>
                            <MovieRow
                                title="Most Watched This Week"
                                movies={popularMovies.slice(0, 10)}
                                isTop10
                                onOpenModal={handleOpenModal}
                            />
                            <MovieRow
                                title="Trending Movies"
                                movies={popularMovies.filter(m => m.type === 'movie')}
                                onOpenModal={handleOpenModal}
                            />
                            <MovieRow
                                title="Popular TV Shows"
                                movies={popularMovies.filter(m => m.type === 'show')}
                                onOpenModal={handleOpenModal}
                            />
                        </>
                    )}

                    {activeTab === 'coming' && (
                        <>
                            <div style={{
                                padding: '0 60px 20px',
                            }}>
                                <p style={{
                                    color: '#bcbcbc',
                                    fontSize: '18px',
                                }}>
                                    Coming to Netflix in the next 30 days
                                </p>
                            </div>

                            {comingSoon.map((movie, index) => (
                                <div
                                    key={movie.id}
                                    style={{
                                        display: 'flex',
                                        padding: '20px 60px',
                                        borderBottom: '2px solid #404040',
                                        gap: '20px',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s',
                                    }}
                                    onClick={() => handleOpenModal(movie)}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                >
                                    {/* Coming date */}
                                    <div style={{
                                        minWidth: '120px',
                                        textAlign: 'center',
                                    }}>
                                        <div style={{
                                            color: '#bcbcbc',
                                            fontSize: '14px',
                                            marginBottom: '5px',
                                        }}>
                                            Coming
                                        </div>
                                        <div style={{
                                            color: '#fff',
                                            fontSize: '24px',
                                            fontWeight: '700',
                                        }}>
                                            {new Date(Date.now() + (index + 1) * 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                        </div>
                                    </div>

                                    {/* Thumbnail */}
                                    <img
                                        src={movie.thumbnailUrl}
                                        alt={movie.title}
                                        style={{
                                            width: '200px',
                                            height: '113px',
                                            objectFit: 'cover',
                                            borderRadius: '4px',
                                        }}
                                    />

                                    {/* Details */}
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{
                                            fontSize: '20px',
                                            fontWeight: '600',
                                            marginBottom: '10px',
                                        }}>
                                            {movie.title}
                                        </h3>

                                        <p style={{
                                            color: '#bcbcbc',
                                            fontSize: '14px',
                                            lineHeight: '1.5',
                                            marginBottom: '10px',
                                        }}>
                                            {movie.description}
                                        </p>

                                        <div style={{
                                            display: 'flex',
                                            gap: '10px',
                                            flexWrap: 'wrap',
                                        }}>
                                            {movie.genre.map(g => (
                                                <span
                                                    key={g}
                                                    style={{
                                                        color: '#bcbcbc',
                                                        fontSize: '12px',
                                                    }}
                                                >
                                                    {g}
                                                </span>
                                            )).reduce((prev, curr) => [prev, <span key={Math.random()} style={{ color: '#404040' }}>•</span>, curr] as any)}
                                        </div>
                                    </div>

                                    {/* Action buttons */}
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                    }}>
                                        <button
                                            style={{
                                                background: 'transparent',
                                                border: '2px solid #808080',
                                                borderRadius: '50%',
                                                width: '40px',
                                                height: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                color: '#fff',
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // Add to reminders logic
                                            }}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                            </svg>
                                        </button>

                                        <button
                                            style={{
                                                background: 'transparent',
                                                border: '2px solid #808080',
                                                borderRadius: '50%',
                                                width: '40px',
                                                height: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                color: '#fff',
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleOpenModal(movie);
                                            }}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="12" y1="16" x2="12" y2="12" />
                                                <line x1="12" y1="8" x2="12.01" y2="8" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>

            <Footer />

            <MovieModal
                movie={selectedMovie}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </main>
    );
}
