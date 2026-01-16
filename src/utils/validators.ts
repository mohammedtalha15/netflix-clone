// Validation utilities

export const validators = {
    /**
     * Validate email format
     */
    email: (value: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    },

    /**
     * Validate password strength
     */
    password: (value: string): { valid: boolean; errors: string[] } => {
        const errors: string[] = [];

        if (value.length < 8) {
            errors.push('Password must be at least 8 characters');
        }
        if (!/[A-Z]/.test(value)) {
            errors.push('Password must contain at least one uppercase letter');
        }
        if (!/[a-z]/.test(value)) {
            errors.push('Password must contain at least one lowercase letter');
        }
        if (!/[0-9]/.test(value)) {
            errors.push('Password must contain at least one number');
        }

        return {
            valid: errors.length === 0,
            errors,
        };
    },

    /**
     * Validate URL format
     */
    url: (value: string): boolean => {
        try {
            new URL(value);
            return true;
        } catch {
            return false;
        }
    },

    /**
     * Validate phone number
     */
    phone: (value: string): boolean => {
        const phoneRegex = /^\+?[\d\s\-()]+$/;
        return phoneRegex.test(value) && value.replace(/\D/g, '').length >= 10;
    },

    /**
     * Validate required field
     */
    required: (value: any): boolean => {
        if (typeof value === 'string') {
            return value.trim().length > 0;
        }
        if (Array.isArray(value)) {
            return value.length > 0;
        }
        return value !== null && value !== undefined;
    },

    /**
     * Validate string length
     */
    length: (value: string, min: number, max?: number): boolean => {
        const len = value.length;
        if (max !== undefined) {
            return len >= min && len <= max;
        }
        return len >= min;
    },

    /**
     * Validate number range
     */
    range: (value: number, min: number, max: number): boolean => {
        return value >= min && value <= max;
    },

    /**
     * Validate regex pattern
     */
    pattern: (value: string, pattern: RegExp): boolean => {
        return pattern.test(value);
    },
};

/**
 * Form validation helper
 */
export function validateForm<T extends Record<string, any>>(
    values: T,
    rules: Partial<Record<keyof T, (value: any) => boolean | { valid: boolean; error?: string }>>
): { valid: boolean; errors: Partial<Record<keyof T, string>> } {
    const errors: Partial<Record<keyof T, string>> = {};

    for (const field in rules) {
        const rule = rules[field];
        if (rule) {
            const result = rule(values[field]);

            if (typeof result === 'boolean') {
                if (!result) {
                    errors[field] = `${String(field)} is invalid`;
                }
            } else {
                if (!result.valid) {
                    errors[field] = result.error || `${String(field)} is invalid`;
                }
            }
        }
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors,
    };
}
