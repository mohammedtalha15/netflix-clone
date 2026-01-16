// Custom hooks library for Netflix clone

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import type { Movie, WatchHistoryItem } from '@/types';

/**
 * Hook for managing local storage with type safety
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error loading ${key} from localStorage:`, error);
            return initialValue;
        }
    });

    const setValue = useCallback((value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.error(`Error saving ${key} to localStorage:`, error);
        }
    }, [key, storedValue]);

    return [storedValue, setValue];
}

/**
 * Hook for managing watchlist
 */
export function useWatchlist() {
    const [watchlist, setWatchlist] = useLocalStorage<string[]>('netflix-watchlist', []);

    const addToWatchlist = useCallback((contentId: string) => {
        setWatchlist(prev => {
            if (prev.includes(contentId)) return prev;
            return [...prev, contentId];
        });
    }, [setWatchlist]);

    const removeFromWatchlist = useCallback((contentId: string) => {
        setWatchlist(prev => prev.filter(id => id !== contentId));
    }, [setWatchlist]);

    const isInWatchlist = useCallback((contentId: string) => {
        return watchlist.includes(contentId);
    }, [watchlist]);

    const toggleWatchlist = useCallback((contentId: string) => {
        if (isInWatchlist(contentId)) {
            removeFromWatchlist(contentId);
        } else {
            addToWatchlist(contentId);
        }
    }, [isInWatchlist, addToWatchlist, removeFromWatchlist]);

    return {
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist,
        toggleWatchlist,
    };
}

/**
 * Hook for managing watch history
 */
export function useWatchHistory() {
    const [history, setHistory] = useLocalStorage<WatchHistoryItem[]>('netflix-watch-history', []);

    const addToHistory = useCallback((item: WatchHistoryItem) => {
        setHistory(prev => {
            const existing = prev.findIndex(h => h.contentId === item.contentId);
            if (existing !== -1) {
                const updated = [...prev];
                updated[existing] = { ...item, watchedAt: new Date() };
                return updated;
            }
            return [{ ...item, watchedAt: new Date() }, ...prev].slice(0, 50); // Keep last 50 items
        });
    }, [setHistory]);

    const getProgress = useCallback((contentId: string): number => {
        const item = history.find(h => h.contentId === contentId);
        return item?.progress || 0;
    }, [history]);

    const clearHistory = useCallback(() => {
        setHistory([]);
    }, [setHistory]);

    return {
        history,
        addToHistory,
        getProgress,
        clearHistory,
    };
}

/**
 * Hook for debouncing values
 */
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

/**
 * Hook for detecting scroll direction
 */
export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
    const [scrollY, setScrollY] = useState(0);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setScrollDirection('down');
            } else if (currentScrollY < lastScrollY.current) {
                setScrollDirection('up');
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { scrollDirection, scrollY };
}

/**
 * Hook for intersection observer (lazy loading)
 */
export function useIntersectionObserver(
    elementRef: React.RefObject<Element>,
    options?: IntersectionObserverInit
): boolean {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [elementRef, options]);

    return isIntersecting;
}

/**
 * Hook for managing keyboard shortcuts
 */
export function useKeyPress(targetKey: string, callback: () => void) {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === targetKey) {
                callback();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [targetKey, callback]);
}

/**
 * Hook for media queries
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [matches, query]);

    return matches;
}

/**
 * Hook for search functionality
 */
export function useSearch(items: Movie[], searchTerm: string) {
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const results = useMemo(() => {
        if (!debouncedSearchTerm.trim()) return [];

        const term = debouncedSearchTerm.toLowerCase();
        return items.filter(item =>
            item.title.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term) ||
            item.genre.some(g => g.toLowerCase().includes(term)) ||
            item.cast?.some(c => c.toLowerCase().includes(term)) ||
            item.keywords?.some(k => k.toLowerCase().includes(term))
        );
    }, [items, debouncedSearchTerm]);

    return {
        results,
        isSearching: searchTerm !== debouncedSearchTerm,
        searchTerm: debouncedSearchTerm,
    };
}

/**
 * Hook for video player controls
 */
export function useVideoPlayer(videoRef: React.RefObject<HTMLVideoElement | null>) {
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => setCurrentTime(video.currentTime);
        const handleDurationChange = () => setDuration(video.duration);
        const handleVolumeChange = () => {
            setVolume(video.volume);
            setMuted(video.muted);
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('durationchange', handleDurationChange);
        video.addEventListener('volumechange', handleVolumeChange);

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('durationchange', handleDurationChange);
            video.removeEventListener('volumechange', handleVolumeChange);
        };
    }, [videoRef]);

    const play = useCallback(() => {
        videoRef.current?.play();
        setPlaying(true);
    }, [videoRef]);

    const pause = useCallback(() => {
        videoRef.current?.pause();
        setPlaying(false);
    }, [videoRef]);

    const togglePlay = useCallback(() => {
        if (playing) {
            pause();
        } else {
            play();
        }
    }, [playing, play, pause]);

    const seek = useCallback((time: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime = time;
        }
    }, [videoRef]);

    const changeVolume = useCallback((newVolume: number) => {
        if (videoRef.current) {
            videoRef.current.volume = Math.max(0, Math.min(1, newVolume));
        }
    }, [videoRef]);

    const toggleMute = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
        }
    }, [videoRef]);

    const skipForward = useCallback((seconds: number = 10) => {
        if (videoRef.current) {
            videoRef.current.currentTime += seconds;
        }
    }, [videoRef]);

    const skipBackward = useCallback((seconds: number = 10) => {
        if (videoRef.current) {
            videoRef.current.currentTime -= seconds;
        }
    }, [videoRef]);

    return {
        playing,
        currentTime,
        duration,
        volume,
        muted,
        play,
        pause,
        togglePlay,
        seek,
        changeVolume,
        toggleMute,
        skipForward,
        skipBackward,
        progress: duration > 0 ? (currentTime / duration) * 100 : 0,
    };
}

/**
 * Hook for managing hover state with delay
 */
export function useHoverDelay(delay: number = 300) {
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

    const handleMouseEnter = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(true);
        }, delay);
    }, [delay]);

    const handleMouseLeave = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsHovered(false);
    }, []);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return {
        isHovered,
        handleMouseEnter,
        handleMouseLeave,
    };
}

/**
 * Hook for window size
 */
export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}
