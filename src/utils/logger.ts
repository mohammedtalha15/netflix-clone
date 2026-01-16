// Logger utility for debugging and monitoring

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
    private enabled: boolean;
    private prefix: string;

    constructor(prefix: string = 'NetflixClone', enabled: boolean = true) {
        this.prefix = prefix;
        this.enabled = enabled && process.env.NODE_ENV !== 'production';
    }

    private formatMessage(level: LogLevel, message: string, ...args: any[]): string {
        const timestamp = new Date().toISOString();
        return `[${timestamp}] [${this.prefix}] [${level.toUpperCase()}] ${message}`;
    }

    debug(message: string, ...args: any[]) {
        if (!this.enabled) return;
        console.debug(this.formatMessage('debug', message), ...args);
    }

    info(message: string, ...args: any[]) {
        if (!this.enabled) return;
        console.info(this.formatMessage('info', message), ...args);
    }

    warn(message: string, ...args: any[]) {
        if (!this.enabled) return;
        console.warn(this.formatMessage('warn', message), ...args);
    }

    error(message: string, error?: Error, ...args: any[]) {
        if (!this.enabled) return;
        console.error(this.formatMessage('error', message), error, ...args);
    }

    group(label: string) {
        if (!this.enabled) return;
        console.group(label);
    }

    groupEnd() {
        if (!this.enabled) return;
        console.groupEnd();
    }

    table(data: any) {
        if (!this.enabled) return;
        console.table(data);
    }

    time(label: string) {
        if (!this.enabled) return;
        console.time(label);
    }

    timeEnd(label: string) {
        if (!this.enabled) return;
        console.timeEnd(label);
    }
}

export const logger = new Logger();
export default Logger;
