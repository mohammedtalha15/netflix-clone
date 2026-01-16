'use client';

import { useWatchHistory } from '@/hooks';
import { massiveMovieDatabase } from '@/data/massiveDatabase';
import type { Movie } from '@/types';

interface ContinueWatchingProps {
    onOpenModal: (movie: Movie) => void;
}

export default function ContinueWatching({ onOpenModal }: ContinueWatchingProps) {
    const { history } = useWatchHistory();

    const continueWatchingMovies = history
        .filter(item => item.progress > 10 && item.progress < 95)
        .slice(0, 10)
        .map(item => ({
            ...massiveMovieDatabase.find(m => m.id === item.contentId),
            progress: item.progress,
        }))
        .filter(Boolean) as (Movie & { progress: number })[];

    if (continueWatchingMovies.length === 0) return null;

    return (
        <div style={{ marginBottom: '30px' }}>
            <h2 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                marginBottom: '15px',
                paddingLeft: '60px',
            }}>
                Continue Watching
            </h2>

            <div style={{
                display: 'flex',
                gap: '10px',
                overflowX: 'auto',
                paddingLeft: '60px',
                paddingRight: '60px',
                scrollbarWidth: 'none',
            }}>
                {continueWatchingMovies.map((movie) => (
                    <div
                        key={movie.id}
                        onClick={() => onOpenModal(movie)}
                        style={{
                            minWidth: '300px',
                            cursor: 'pointer',
                            position: 'relative',
                            transition: 'transform 0.3s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img
                            src={movie.thumbnailUrl}
                            alt={movie.title}
                            style={{
                                width: '100%',
                                height: '170px',
                                objectFit: 'cover',
                                borderRadius: '4px',
                            }}
                        />

                        {/* Progress Bar */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            background: 'rgba(255,255,255,0.3)',
                        }}>
                            <div style={{
                                height: '100%',
                                background: '#E50914',
                                width: `${movie.progress}%`,
                            }} />
                        </div>

                        <div style={{
                            marginTop: '8px',
                            fontSize: '14px',
                            fontWeight: '600',
                        }}>
                            {movie.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
