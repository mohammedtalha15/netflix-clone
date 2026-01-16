// Comprehensive utility functions for Netflix clone

/**
 * Format duration in minutes to hours and minutes
 */
export function formatDuration(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (hours === 0) {
        return `${mins}m`;
    }
    if (mins === 0) {
        return `${hours}h`;
    }
    return `${hours}h ${mins}m`;
}

/**
 * Format large numbers with K, M notation
 */
export function formatNumber(num: number): string {
    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
}

/**
 * Calculate time ago from date
 */
export function timeAgo(date: Date): string {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    let interval = seconds / 31536000; // years
    if (interval > 1) {
        const years = Math.floor(interval);
        return `${years} year${years > 1 ? 's' : ''} ago`;
    }

    interval = seconds / 2592000; // months
    if (interval > 1) {
        const months = Math.floor(interval);
        return `${months} month${months > 1 ? 's' : ''} ago`;
    }

    interval = seconds / 86400; // days
    if (interval > 1) {
        const days = Math.floor(interval);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    }

    interval = seconds / 3600; // hours
    if (interval > 1) {
        const hours = Math.floor(interval);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }

    interval = seconds / 60; // minutes
    if (interval > 1) {
        const minutes = Math.floor(interval);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }

    return 'just now';
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength)}...`;
}

/**
 * Generate random ID
 */
export function generateId(prefix: string = 'id'): string {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Shuffle array
 */
export function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

/**
 * Group array by key
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
    return array.reduce((result, item) => {
        const group = String(item[key]);
        if (!result[group]) {
            result[group] = [];
        }
        result[group].push(item);
        return result;
    }, {} as Record<string, T[]>);
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

/**
 * Deep clone object
 */
export function deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime()) as any;
    if (obj instanceof Array) return obj.map(item => deepClone(item)) as any;
    if (obj instanceof Object) {
        const clonedObj = {} as T;
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                clonedObj[key] = deepClone(obj[key]);
            }
        }
        return clonedObj;
    }
    return obj;
}

/**
 * Check if object is empty
 */
export function isEmpty(obj: any): boolean {
    if (obj == null) return true;
    if (Array.isArray(obj) || typeof obj === 'string') return obj.length === 0;
    if (obj instanceof Map || obj instanceof Set) return obj.size === 0;
    return Object.keys(obj).length === 0;
}

/**
 * Capitalize first letter
 */
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Convert camelCase to kebab-case
 */
export function camelToKebab(str: string): string {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Convert kebab-case to camelCase
 */
export function kebabToCamel(str: string): string {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Get random item from array
 */
export function randomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Get random items from array
 */
export function randomItems<T>(array: T[], count: number): T[] {
    const shuffled = shuffleArray(array);
    return shuffled.slice(0, Math.min(count, array.length));
}

/**
 * Calculate match percentage based on user preferences
 */
export function calculateMatch(
    contentGenres: string[],
    userPreferences: string[],
    watchHistory: string[]
): number {
    let score = 50; // Base score

    // Genre matching
    const genreMatches = contentGenres.filter(g =>
        userPreferences.some(p => p.toLowerCase() === g.toLowerCase())
    ).length;
    score += genreMatches * 10;

    // Watch history bonus
    if (watchHistory.length > 0) {
        score += 5;
    }

    // Random variation
    score += Math.floor(Math.random() * 10) - 5;

    return Math.min(Math.max(score, 40), 99);
}

/**
 * Sort by multiple criteria
 */
export function multiSort<T>(
    array: T[],
    compareFns: ((a: T, b: T) => number)[]
): T[] {
    return [...array].sort((a, b) => {
        for (const compareFn of compareFns) {
            const result = compareFn(a, b);
            if (result !== 0) return result;
        }
        return 0;
    });
}

/**
* Filter unique items
 */
export function unique<T>(array: T[], key?: keyof T): T[] {
    if (!key) {
        return Array.from(new Set(array));
    }
    const seen = new Set();
    return array.filter(item => {
        const value = item[key];
        if (seen.has(value)) {
            return false;
        }
        seen.add(value);
        return true;
    });
}

/**
 * Chunk array into smaller arrays
 */
export function chunk<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

/**
 * Flatten nested array
 */
export function flatten<T>(array: any[]): T[] {
    return array.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}

/**
 * Get nested property safely
 */
export function getNestedProperty(obj: any, path: string, defaultValue?: any): any {
    const keys = path.split('.');
    let result = obj;

    for (const key of keys) {
        if (result == null) {
            return defaultValue;
        }
        result = result[key];
    }

    return result !== undefined ? result : defaultValue;
}

/**
 * Set nested property
 */
export function setNestedProperty(obj: any, path: string, value: any): void {
    const keys = path.split('.');
    const lastKey = keys.pop()!;
    let current = obj;

    for (const key of keys) {
        if (!(key in current)) {
            current[key] = {};
        }
        current = current[key];
    }

    current[lastKey] = value;
}

/**
 * Merge objects deeply
 */
export function deepMerge<T extends object>(target: T, ...sources: Partial<T>[]): T {
    if (!sources.length) return target;
    const source = sources.shift();

    if (source) {
        for (const key in source) {
            const sourceValue = source[key];
            const targetValue = target[key];

            if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue)) {
                if (targetValue && typeof targetValue === 'object') {
                    target[key] = deepMerge(targetValue, sourceValue as any);
                } else {
                    target[key] = deepClone(sourceValue) as any;
                }
            } else {
                target[key] = sourceValue as any;
            }
        }
    }

    return deepMerge(target, ...sources);
}

/**
 * Wait for specified milliseconds
 */
export function wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retry function with exponential backoff
 */
export async function retry<T>(
    fn: () => Promise<T>,
    maxAttempts: number = 3,
    delay: number = 1000
): Promise<T> {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === maxAttempts) {
                throw error;
            }
            await wait(delay * Math.pow(2, attempt - 1));
        }
    }
    throw new Error('Max attempts reached');
}

/**
 * Format file size
 */
export function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Validate email
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Generate placeholder image URL
 */
export function getPlaceholderImage(width: number, height: number, text?: string): string {
    return `https://via.placeholder.com/${width}x${height}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}

/**
 * Copy to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (error) {
        console.error('Failed to copy:', error);
        return false;
    }
}
