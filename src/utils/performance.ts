// Performance monitoring utilities

export class PerformanceMonitor {
    private marks: Map<string, number> = new Map();
    private measures: Map<string, number> = new Map();

    mark(name: string) {
        this.marks.set(name, performance.now());
    }

    measure(name: string, startMark: string, endMark?: string) {
        const start = this.marks.get(startMark);
        if (!start) {
            console.warn(`Start mark "${startMark}" not found`);
            return;
        }

        const end = endMark ? this.marks.get(endMark) : performance.now();
        if (!end) {
            console.warn(`End mark "${endMark}" not found`);
            return;
        }

        const duration = typeof end === 'number' ? end - start : 0;
        this.measures.set(name, duration);

        if (process.env.NODE_ENV !== 'production') {
            console.log(`⏱️ ${name}: ${duration.toFixed(2)}ms`);
        }

        return duration;
    }

    getMeasure(name: string): number | undefined {
        return this.measures.get(name);
    }

    clearMarks() {
        this.marks.clear();
    }

    clearMeasures() {
        this.measures.clear();
    }

    getMetrics() {
        return {
            marks: Array.from(this.marks.entries()),
            measures: Array.from(this.measures.entries()),
        };
    }
}

export const performanceMonitor = new PerformanceMonitor();

/**
 * Measure component render time
 */
export function measureRender(componentName: string, callback: () => void) {
    const startTime = performance.now();
    callback();
    const endTime = performance.now();
    const duration = endTime - startTime;

    if (process.env.NODE_ENV !== 'production' && duration > 16) {
        console.warn(`⚠️ Slow render: ${componentName} took ${duration.toFixed(2)}ms`);
    }

    return duration;
}

/**
 * Get web vitals
 */
export function getWebVitals() {
    if (typeof window === 'undefined') return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

    return {
        // First Contentful Paint
        fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,

        // Time to Interactive
        tti: navigation?.domInteractive,

        // DOM Content Loaded
        dcl: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart,

        // Load Complete
        load: navigation?.loadEventEnd - navigation?.loadEventStart,

        // Total Page Load Time
        totalLoadTime: navigation?.loadEventEnd - navigation?.fetchStart,
    };
}
