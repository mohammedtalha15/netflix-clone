// Date and time formatting utilities

export function formatDate(date: Date | string, format: 'short' | 'long' | 'relative' = 'short'): string {
    const d = typeof date === 'string' ? new Date(date) : date;

    if (format === 'relative') {
        return getRelativeTime(d);
    }

    const options: Intl.DateTimeFormatOptions = format === 'long'
        ? { year: 'numeric', month: 'long', day: 'numeric' }
        : { year: 'numeric', month: 'short', day: 'numeric' };

    return d.toLocaleDateString('en-US', options);
}

export function getRelativeTime(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffWeek = Math.floor(diffDay / 7);
    const diffMonth = Math.floor(diffDay / 30);
    const diffYear = Math.floor(diffDay / 365);

    if (diffSec < 60) return 'just now';
    if (diffMin < 60) return `${diffMin} minute${diffMin > 1 ? 's' : ''} ago`;
    if (diffHour < 24) return `${diffHour} hour${diffHour > 1 ? 's' : ''} ago`;
    if (diffDay < 7) return `${diffDay} day${diffDay > 1 ? 's' : ''} ago`;
    if (diffWeek < 4) return `${diffWeek} week${diffWeek > 1 ? 's' : ''} ago`;
    if (diffMonth < 12) return `${diffMonth} month${diffMonth > 1 ? 's' : ''} ago`;
    return `${diffYear} year${diffYear > 1 ? 's' : ''} ago`;
}

export function formatTime(seconds: number): string {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hrs > 0) {
        return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function parseDuration(duration: string): number {
    // Parse formats like "2h 15m", "1h 30m", "45m"
    const hourMatch = duration.match(/(\d+)h/);
    const minMatch = duration.match(/(\d+)m/);

    const hours = hourMatch ? parseInt(hourMatch[1]) : 0;
    const minutes = minMatch ? parseInt(minMatch[1]) : 0;

    return hours * 60 + minutes;
}

export function isToday(date: Date): boolean {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
}

export function isYesterday(date: Date): boolean {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return (
        date.getDate() === yesterday.getDate() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getFullYear() === yesterday.getFullYear()
    );
}

export function getDayOfWeek(date: Date): string {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

export function getMonthName(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'long' });
}

export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function diffInDays(date1: Date, date2: Date): number {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
