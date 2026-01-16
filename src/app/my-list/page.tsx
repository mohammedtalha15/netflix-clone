'use client';

import { useState } from 'react';
import { useWatchlist } from '@/hooks';
import Navbar from '@/components/Navbar';
import MovieCard from '@/components/MovieCard';
import MovieModal from '@/components/MovieModal';
import Footer from '@/components/Footer';
import { extendedMoviesDatabase } from '@/data/extendedMovies';
import type { Movie } from '@/types';

export default function MyListPage() {
    const { watchlist } = useWatchlist();
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const watchlistMovies = extendedMoviesDatabase.filter(m => watchlist.includes(m.id));

    const handleOpenModal = (movie: Movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedMovie(null), 300);
    };

    return (
        <main style={{ minHeight: '100vh', background: '#141414' }}>
            <Navbar />

            {/* Header */}
            <div style={{
                padding: '100px 60px 40px',
            }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    marginBottom: '20px',
                }}>
                    My List
                </h1>

                {watchlist.length === 0 ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '60px 20px',
                    }}>
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#808080" strokeWidth="2" style={{ marginBottom: '20px' }}>
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        <h2 style={{
                            color: '#808080',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            marginBottom: '10px',
                        }}>
                            Your list is empty
                        </h2>
                        <p style={{
                            color: '#808080',
                            fontSize: '1rem',
                        }}>
                            Add titles you want to watch later by clicking the + icon
                        </p>
                    </div>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
                        gap: '10px',
                        paddingBottom: '40px',
                    }}>
                        {watchlistMovies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onOpenModal={handleOpenModal}
                            />
                        ))}
                    </div>
                )}
            </div>

            <Footer />

            {/* Modal */}
            <MovieModal
                movie={selectedMovie}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </main>
    );
}
