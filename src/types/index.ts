// Comprehensive type definitions for Netflix clone

export interface Movie {
    id: string | number;
    title: string;
    type?: 'movie' | 'show';
    thumbnailUrl: string;
    backdropUrl?: string;
    logoUrl?: string;
    description: string;
    genre: string[];
    year: number;
    rating?: number;
    maturityRating: string;
    duration: string;
    match: number;
    cast?: string[];
    director?: string;
    creator?: string;
    seasons?: number;
    episodes?: number;
    trending?: boolean;
    isNew?: boolean;
    isTop10?: boolean;
    keywords?: string[];
    trailerUrl?: string;
    videoUrl?: string;
}

export interface TVShow extends Movie {
    type: 'show';
    seasons: number;
    episodes: number;
    seasonsList?: Season[];
}

export interface Season {
    seasonNumber: number;
    title: string;
    episodes: Episode[];
    year: number;
    description: string;
}

export interface Episode {
    id: string;
    episodeNumber: number;
    title: string;
    description: string;
    thumbnailUrl: string;
    duration: string;
    airDate: string;
}

export interface UserProfile {
    id: string;
    name: string;
    avatarUrl: string;
    isKid: boolean;
    language: string;
    maturityLevel: string;
    autoPlayNext: boolean;
    autoPlayPreviews: boolean;
}

export interface Watchlist {
    userId: string;
    items: string[]; // movie/show IDs
}

export interface WatchHistory {
    userId: string;
    items: WatchHistoryItem[];
}

export interface WatchHistoryItem {
    contentId: string;
    watchedAt: Date;
    progress: number; // percentage watched
    completed: boolean;
}

export interface SearchResult {
    id: string;
    title: string;
    type: 'movie' | 'show' | 'person';
    thumbnailUrl: string;
    year?: number;
    match?: number;
}

export interface Category {
    id: string;
    title: string;
    movies: Movie[];
    isTop10?: boolean;
}

export interface Genre {
    id: string;
    name: string;
    description: string;
    iconUrl?: string;
}

export interface Notification {
    id: string;
    type: 'new_release' | 'recommendation' | 'update';
    title: string;
    message: string;
    thumbnailUrl?: string;
    contentId?: string;
    timestamp: Date;
    read: boolean;
}

export interface VideoPlayerState {
    playing: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    muted: boolean;
    fullscreen: boolean;
    quality: 'auto' | '480p' | '720p' | '1080p' | '4k';
    subtitles: boolean;
    audioTrack: string;
}

export interface Subtitle {
    id: string;
    language: string;
    label: string;
    url: string;
}

export interface AudioTrack {
    id: string;
    language: string;
    label: string;
    type: '5.1' | 'stereo';
}

export type MaturityRating = 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17' | 'TV-Y' | 'TV-Y7' | 'TV-G' | 'TV-PG' | 'TV-14' | 'TV-MA';

export interface Review {
    id: string;
    userId: string;
    contentId: string;
    rating: number;
    review?: string;
    helpful: number;
    timestamp: Date;
}

export interface Recommendation {
    contentId: string;
    score: number;
    reason: string;
}
