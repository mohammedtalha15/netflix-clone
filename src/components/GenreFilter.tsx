'use client';

import { useState } from 'react';

interface GenreFilterProps {
    onFilterChange: (genres: string[]) => void;
}

const GENRES = [
    'Action', 'Comedy', 'Drama', 'Thriller', 'Horror',
    'Sci-Fi', 'Romance', 'Documentary', 'Fantasy', 'Crime',
    'Mystery', 'Adventure', 'Animation', 'Family'
];

export default function GenreFilter({ onFilterChange }: GenreFilterProps) {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleGenre = (genre: string) => {
        const newGenres = selectedGenres.includes(genre)
            ? selectedGenres.filter(g => g !== genre)
            : [...selectedGenres, genre];

        setSelectedGenres(newGenres);
        onFilterChange(newGenres);
    };

    return (
        <div style={{ marginBottom: '20px', paddingLeft: '60px' }}>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                }}
            >
                <span>Filter by Genre</span>
                <span>{isExpanded ? '▲' : '▼'}</span>
            </button>

            {isExpanded && (
                <div style={{
                    marginTop: '15px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                }}>
                    {GENRES.map(genre => (
                        <button
                            key={genre}
                            onClick={() => toggleGenre(genre)}
                            style={{
                                background: selectedGenres.includes(genre) ? '#E50914' : 'rgba(255,255,255,0.1)',
                                border: 'none',
                                color: '#fff',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                transition: 'all 0.2s',
                            }}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
