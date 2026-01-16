// Constants used throughout the application

export const APP_NAME = 'Netflix Clone';
export const APP_VERSION = '1.0.0';

export const MATURITY_RATINGS = {
    G: 'General Audiences',
    PG: 'Parental Guidance Suggested',
    'PG-13': 'Parents Strongly Cautioned',
    R: 'Restricted',
    'NC-17': 'Adults Only',
    'TV-Y': 'All Children',
    'TV-Y7': 'Children 7+',
    'TV-G': 'General Audiences',
    'TV-PG': 'Parental Guidance',
    'TV-14': 'Parents Strongly Cautioned',
    'TV-MA': 'Mature Audiences Only',
} as const;

export const VIDEO_QUALITIES = ['auto', '480p', '720p', '1080p', '4k'] as const;

export const NOTIFICATION_TYPES = {
    NEW_RELEASE: 'new_release',
    RECOMMENDATION: 'recommendation',
    UPDATE: 'update',
} as const;

export const ROUTES = {
    HOME: '/',
    BROWSE: '/browse',
    MY_LIST: '/my-list',
    HISTORY: '/history',
    NEW_AND_POPULAR: '/new-and-popular',
    ACCOUNT: '/account',
    LANGUAGE: '/language',
    PROFILES: '/profiles',
    LOGIN: '/login',
} as const;

export const KEYBOARD_SHORTCUTS = {
    PLAY_PAUSE: ' ',
    SKIP_FORWARD: 'ArrowRight',
    SKIP_BACKWARD: 'ArrowLeft',
    VOLUME_UP: 'ArrowUp',
    VOLUME_DOWN: 'ArrowDown',
    MUTE: 'm',
    FULLSCREEN: 'f',
    EXIT: 'Escape',
} as const;

export const BREAKPOINTS = {
    mobile: 640,
    tablet: 768,
    desktop: 1024,
    large: 1280,
    xlarge: 1536,
} as const;

export const ANIMATION_DURATIONS = {
    fast: 150,
    normal: 300,
    slow: 500,
} as const;
