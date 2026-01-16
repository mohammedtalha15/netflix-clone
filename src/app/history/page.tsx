'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useWatchHistory } from '@/hooks';
import { massiveMovieDatabase } from '@/data/massiveDatabase';
import MovieCard from '@/components/MovieCard';
import MovieModal from '@/components/MovieModal';
import type { Movie } from '@/types';

export default function WatchHistoryPage() {
    const { history, clearHistory } = useWatchHistory();
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showClearConfirm, setShowClearConfirm] = useState(false);

    const historyMovies = history
        .map(item => massiveMovieDatabase.find(m => m.id === item.contentId))
        .filter(Boolean) as Movie[];

    const handleOpenModal = (movie: Movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedMovie(null), 300);
    };

    const handleClearHistory = () => {
        clearHistory();
        setShowClearConfirm(false);
    };

    return (
        <main style={{ minHeight: '100vh', background: '#141414' }}>
            <Navbar />

            <div style={{ padding: '100px 60px 40px' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '30px',
                }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                    }}>
                        Watch History
                    </h1>

                    {history.length > 0 && (
                        <button
                            onClick={() => setShowClearConfirm(true)}
                            style={{
                                background: 'transparent',
                                border: '1px solid #808080',
                                color: '#fff',
                                padding: '10px 20px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#fff';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#808080';
                                e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            Clear History
                        </button>
                    )}
                </div>

                {history.length === 0 ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '60px 20px',
                    }}>
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#808080" strokeWidth="2" style={{ marginBottom: '20px' }}>
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <h2 style={{
                            color: '#808080',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            marginBottom: '10px',
                        }}>
                            No watch history yet
                        </h2>
                        <p style={{
                            color: '#808080',
                            fontSize: '1rem',
                        }}>
                            Start watching content to build your history
                        </p>
                    </div>
                ) : (
                    <div>
                        <p style={{
                            color: '#bcbcbc',
                            marginBottom: '20px',
                        }}>
                            {history.length} {history.length === 1 ? 'item' : 'items'} watched
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
                            gap: '10px',
                        }}>
                            {historyMovies.map((movie) => (
                                <div key={movie.id} style={{ position: 'relative' }}>
                                    <MovieCard
                                        movie={movie}
                                        onOpenModal={handleOpenModal}
                                    />

                                    {/* Progress bar */}
                                    {history.find(h => h.contentId === movie.id) && (
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '3px',
                                            background: 'rgba(255,255,255,0.2)',
                                        }}>
                                            <div style={{
                                                height: '100%',
                                                background: '#E50914',
                                                width: `${history.find(h => h.contentId === movie.id)?.progress || 0}%`,
                                            }} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Clear Confirmation Modal */}
            {showClearConfirm && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999,
                }}
                    onClick={() => setShowClearConfirm(false)}
                >
                    <div
                        style={{
                            background: '#181818',
                            borderRadius: '8px',
                            padding: '40px',
                            maxWidth: '500px',
                            textAlign: 'center',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 style={{
                            fontSize: '1.8rem',
                            marginBottom: '20px',
                        }}>
                            Clear Watch History?
                        </h2>
                        <p style={{
                            color: '#bcbcbc',
                            marginBottom: '30px',
                            lineHeight: '1.5',
                        }}>
                            This will permanently delete your entire watch history. This action cannot be undone.
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '15px',
                            justifyContent: 'center',
                        }}>
                            <button
                                onClick={() => setShowClearConfirm(false)}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid #808080',
                                    color: '#fff',
                                    padding: '12px 30px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleClearHistory}
                                style={{
                                    background: '#E50914',
                                    border: 'none',
                                    color: '#fff',
                                    padding: '12px 30px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                }}
                            >
                                Clear History
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />

            <MovieModal
                movie={selectedMovie}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </main>
    );
}
