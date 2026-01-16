'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import MovieRow from '@/components/MovieRow';
import MovieModal from '@/components/MovieModal';
import Footer from '@/components/Footer';
import { genreCollections } from '@/data/extendedMovies';
import type { Movie } from '@/types';

export default function BrowsePage() {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (movie: Movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedMovie(null), 300);
    };

    const genres = [
        { title: 'Action & Adventure', movies: genreCollections.action },
        { title: 'Comedies', movies: genreCollections.comedy },
        { title: 'Dramas', movies: genreCollections.drama },
        { title: 'Sci-Fi & Fantasy', movies: genreCollections.scifi },
        { title: 'Thrillers', movies: genreCollections.thriller },
        { title: 'Horror', movies: genreCollections.horror },
        { title: 'Romance', movies: genreCollections.romance },
        { title: 'Documentaries', movies: genreCollections.documentary },
    ];

    return (
        <main style={{ minHeight: '100vh', background: '#141414' }}>
            <Navbar />

            {/* Header */}
            <div style={{
                padding: '100px 60px 20px',
                marginBottom: '20px',
            }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    marginBottom: '10px',
                }}>
                    Browse by Genre
                </h1>
                <p style={{
                    color: '#bcbcbc',
                    fontSize: '1.1rem',
                }}>
                    Explore our full collection organized by category
                </p>
            </div>

            {/* Genre Rows */}
            <div style={{ paddingBottom: '40px' }}>
                {genres.map((genre) => genre.movies.length > 0 && (
                    <MovieRow
                        key={genre.title}
                        title={genre.title}
                        movies={genre.movies}
                        onOpenModal={handleOpenModal}
                    />
                ))}
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
