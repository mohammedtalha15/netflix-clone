// Theme utilities and color system

export const colors = {
    primary: {
        main: '#E50914',
        light: '#F40612',
        dark: '#B20710',
    },

    background: {
        main: '#141414',
        paper: '#181818',
        card: '#2F2F2F',
        overlay: 'rgba(0, 0, 0, 0.7)',
    },

    text: {
        primary: '#FFFFFF',
        secondary: '#BCBCBC',
        disabled: '#808080',
    },

    border: {
        main: '#404040',
        light: 'rgba(255, 255, 255, 0.2)',
    },

    success: '#46D369',
    warning: '#FFA500',
    error: '#E50914',
    info: '#0080FF',
} as const;

export const spacing = {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
} as const;

export const borderRadius = {
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '16px',
    round: '50%',
} as const;

export const shadows = {
    sm: '0 2px 4px rgba(0, 0, 0, 0.2)',
    md: '0 4px 8px rgba(0, 0, 0, 0.3)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.4)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.5)',
} as const;

export const typography = {
    fontFamily: {
        primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        mono: 'Monaco, Consolas, "Courier New", monospace',
    },

    fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '24px',
        xxxl: '32px',
    },

    fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
} as const;

export const zIndex = {
    dropdown: 1000,
    modal: 2000,
    notification: 3000,
    tooltip: 4000,
} as const;
