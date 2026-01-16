// Environment configuration
export const config = {
    app: {
        name: 'Netflix Clone',
        version: '1.0.0',
        description: 'A comprehensive Netflix UI clone built with Next.js',
    },

    features: {
        enableNotifications: true,
        enableWatchHistory: true,
        enableWatchlist: true,
        enableContinueWatching: true,
        enableSearch: true,
        enableVideoPlayer: true,
        enableProfiles: true,
    },

    ui: {
        defaultTheme: 'dark',
        enableAnimations: true,
        enableHoverEffects: true,
        autoHideControls: true,
        autoHideControlsDelay: 3000,
    },

    video: {
        defaultQuality: 'auto',
        enableSubtitles: true,
        enableQualitySelection: true,
        defaultVolume: 1.0,
        skipDuration: 10,
    },

    storage: {
        maxWatchHistoryItems: 50,
        maxWatchlistItems: 100,
    },

    api: {
        baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
        timeout: 10000,
    },
} as const;

export type Config = typeof config;
