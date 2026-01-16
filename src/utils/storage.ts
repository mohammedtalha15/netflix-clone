// Storage utilities for managing localStorage data

export class Storage {
    private prefix: string;

    constructor(prefix: string = 'netflix-clone') {
        this.prefix = prefix;
    }

    private getKey(key: string): string {
        return `${this.prefix}-${key}`;
    }

    get<T>(key: string, defaultValue?: T): T | null {
        if (typeof window === 'undefined') return defaultValue ?? null;

        try {
            const item = window.localStorage.getItem(this.getKey(key));
            return item ? JSON.parse(item) : (defaultValue ?? null);
        } catch (error) {
            console.error(`Error reading ${key} from localStorage:`, error);
            return defaultValue ?? null;
        }
    }

    set<T>(key: string, value: T): boolean {
        if (typeof window === 'undefined') return false;

        try {
            window.localStorage.setItem(this.getKey(key), JSON.stringify(value));
            return true;
        } catch (error) {
            console.error(`Error writing ${key} to localStorage:`, error);
            return false;
        }
    }

    remove(key: string): boolean {
        if (typeof window === 'undefined') return false;

        try {
            window.localStorage.removeItem(this.getKey(key));
            return true;
        } catch (error) {
            console.error(`Error removing ${key} from localStorage:`, error);
            return false;
        }
    }

    clear(): boolean {
        if (typeof window === 'undefined') return false;

        try {
            const keys = Object.keys(window.localStorage);
            keys.forEach(key => {
                if (key.startsWith(this.prefix)) {
                    window.localStorage.removeItem(key);
                }
            });
            return true;
        } catch (error) {
            console.error('Error clearing localStorage:', error);
            return false;
        }
    }

    has(key: string): boolean {
        if (typeof window === 'undefined') return false;
        return window.localStorage.getItem(this.getKey(key)) !== null;
    }

    keys(): string[] {
        if (typeof window === 'undefined') return [];

        const allKeys = Object.keys(window.localStorage);
        return allKeys
            .filter(key => key.startsWith(this.prefix))
            .map(key => key.replace(`${this.prefix}-`, ''));
    }
}

export const storage = new Storage();
