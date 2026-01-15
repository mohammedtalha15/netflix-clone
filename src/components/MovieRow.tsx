'use client';

import { useState, useRef } from 'react';
import { Movie } from '@/data/movies';
import MovieCard from './MovieCard';

interface MovieRowProps {
    title: string;
    movies: Movie[];
    isTop10?: boolean;
    onOpenModal?: (movie: Movie) => void;
}

export default function MovieRow({ title, movies, isTop10 = false, onOpenModal }: MovieRowProps) {
    const rowRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleScroll = () => {
        if (rowRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (rowRef.current) {
            const scrollAmount = direction === 'left' ? -600 : 600;
            rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div style={{ marginBottom: '30px', position: 'relative' }}>
            {/* Row Title */}
            <h2 className="row-title" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer'
            }}>
                {title}
                <span style={{
                    fontSize: '0.8rem',
                    color: '#54b9c5',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    display: 'flex',
                    alignItems: 'center'
                }}
                    className="explore-link"
                >
                    Explore All
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9,18 15,12 9,6" />
                    </svg>
                </span>
            </h2>

            {/* Row Container */}
            <div style={{ position: 'relative' }}>
                {/* Left Arrow */}
                {showLeftArrow && (
                    <button
                        onClick={() => scroll('left')}
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '55px',
                            background: 'rgba(20,20,20,0.7)',
                            border: 'none',
                            cursor: 'pointer',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            transition: 'background 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(20,20,20,0.9)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(20,20,20,0.7)'}
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15,18 9,12 15,6" />
                        </svg>
                    </button>
                )}

                {/* Movies Slider */}
                <div
                    ref={rowRef}
                    className="row-slider hide-scrollbar"
                    style={{
                        paddingLeft: '60px',
                        paddingRight: '60px',
                    }}
                    onScroll={handleScroll}
                >
                    {movies.map((movie, index) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            isTop10={isTop10}
                            rank={isTop10 ? index + 1 : undefined}
                            onOpenModal={onOpenModal}
                        />
                    ))}
                </div>

                {/* Right Arrow */}
                {showRightArrow && (
                    <button
                        onClick={() => scroll('right')}
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: '55px',
                            background: 'rgba(20,20,20,0.7)',
                            border: 'none',
                            cursor: 'pointer',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            transition: 'background 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(20,20,20,0.9)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(20,20,20,0.7)'}
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9,18 15,12 9,6" />
                        </svg>
                    </button>
                )}
            </div>

            <style jsx>{`
        .row-title:hover .explore-link {
          opacity: 1 !important;
        }
      `}</style>
        </div>
    );
}
