'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MovieRow from '@/components/MovieRow';
import MovieModal from '@/components/MovieModal';
import { massiveMovieDatabase } from '@/data/massiveDatabase';
import type { Movie } from '@/types';

const LANGUAGES = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
];

export default function LanguagePage() {
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

    return (
        <main style={{ minHeight: '100vh', background: '#141414' }}>
            <Navbar />

            <div style={{ paddingTop: '80px' }}>
                <div style={{ padding: '20px 60px' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '10px' }}>
                        Browse by Language
                    </h1>
                    <p style={{ color: '#bcbcbc', fontSize: '1.1rem', marginBottom: '30px' }}>
                        Discover content from around the world
                    </p>

                    {/* Language Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '15px',
                        marginBottom: '40px',
                    }}>
                        {LANGUAGES.map(lang => (
                            <div
                                key={lang.code}
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '30px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    textAlign: 'center',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(229,9,20,0.3)';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{lang.flag}</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{lang.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sample content rows */}
                <MovieRow
                    title="Popular in English"
                    movies={massiveMovieDatabase.slice(0, 10)}
                    onOpenModal={handleOpenModal}
                />
                <MovieRow
                    title="Popular in Spanish"
                    movies={massiveMovieDatabase.slice(10, 20)}
                    onOpenModal={handleOpenModal}
                />
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
