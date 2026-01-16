// Recommendation engine

import type { Movie } from '@/types';

/**
 * Calculate content similarity based on genres and metadata
 */
function calculateSimilarity(movie1: Movie, movie2: Movie): number {
    let score = 0;

    // Genre similarity
    const commonGenres = movie1.genre.filter(g =>
        movie2.genre.includes(g)
    ).length;
    score += (commonGenres / Math.max(movie1.genre.length, movie2.genre.length)) * 40;

    // Year proximity
    const yearDiff = Math.abs((movie1.year || 0) - (movie2.year || 0));
    score += Math.max(0, 20 - yearDiff) * 2;

    // Rating similarity
    if (movie1.rating && movie2.rating) {
        const ratingDiff = Math.abs(movie1.rating - movie2.rating);
        score += Math.max(0, 10 - ratingDiff * 2);
    }

    // Cast overlap
    if (movie1.cast && movie2.cast) {
        const commonCast = movie1.cast.filter(c =>
            movie2.cast?.includes(c)
        ).length;
        score += commonCast * 5;
    }

    return Math.min(score, 100);
}

/**
 * Get recommendations based on a movie
 */
export function getRecommendations(
    targetMovie: Movie,
    allMovies: Movie[],
    limit: number = 10
): Movie[] {
    const recommendations = allMovies
        .filter(m => m.id !== targetMovie.id)
        .map(movie => ({
            movie,
            similarity: calculateSimilarity(targetMovie, movie),
        }))
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, limit)
        .map(item => item.movie);

    return recommendations;
}

/**
 * Get recommendations based on watch history
 */
export function getPersonalizedRecommendations(
    watchHistory: Movie[],
    allMovies: Movie[],
    limit: number = 20
): Movie[] {
    if (watchHistory.length === 0) {
        // Return trending for new users
        return allMovies
            .filter(m => m.trending)
            .slice(0, limit);
    }

    const genreScores: Record<string, number> = {};
    const castScores: Record<string, number> = {};

    // Analyze watch history
    watchHistory.forEach(movie => {
        movie.genre.forEach(genre => {
            genreScores[genre] = (genreScores[genre] || 0) + 1;
        });

        movie.cast?.forEach(actor => {
            castScores[actor] = (castScores[actor] || 0) + 1;
        });
    });

    // Score all movies
    const scored = allMovies
        .filter(movie => !watchHistory.some(h => h.id === movie.id))
        .map(movie => {
            let score = 0;

            // Genre match
            movie.genre.forEach(genre => {
                score += (genreScores[genre] || 0) * 10;
            });

            // Cast match
            movie.cast?.forEach(actor => {
                score += (castScores[actor] || 0) * 5;
            });

            // Boost highly rated
            if (movie.rating && movie.rating >= 7) {
                score += movie.rating * 2;
            }

            // Boost new content
            if (movie.isNew) {
                score += 10;
            }

            return { movie, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);

    return scored.map(item => item.movie);
}

/**
 * Get trending content
 */
export function getTrendingContent(
    allMovies: Movie[],
    limit: number = 10
): Movie[] {
    return allMovies
        .filter(m => m.trending)
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, limit);
}

/**
 * Get content by mood/category
 */
export function getContentByMood(
    mood: 'action' | 'relax' | 'laugh' | 'thrill' | 'learn',
    allMovies: Movie[]
): Movie[] {
    const moodMap = {
        action: ['Action', 'Adventure', 'Thriller'],
        relax: ['Drama', 'Romance', 'Documentary'],
        laugh: ['Comedy'],
        thrill: ['Thriller', 'Horror', 'Mystery'],
        learn: ['Documentary', 'Biography'],
    };

    return allMovies.filter(movie =>
        movie.genre.some(g => moodMap[mood].includes(g))
    );
}
