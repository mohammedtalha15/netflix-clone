// Animation utilities and CSS transitions

export const fadeIn = (duration: number = 300) => ({
    animation: `fadeIn ${duration}ms ease-in`,
    '@keyframes fadeIn': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
});

export const slideUp = (duration: number = 300) => ({
    animation: `slideUp ${duration}ms ease-out`,
    '@keyframes slideUp': {
        from: { transform: 'translateY(20px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
    },
});

export const scaleIn = (duration: number = 300) => ({
    animation: `scaleIn ${duration}ms ease-out`,
    '@keyframes scaleIn': {
        from: { transform: 'scale(0.95)', opacity: 0 },
        to: { transform: 'scale(1)', opacity: 1 },
    },
});

export const shimmer = () => ({
    backgroundImage: 'linear-gradient(90deg, #202020 25%, #2a2a2a 50%, #202020 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    '@keyframes shimmer': {
        '0%': { backgroundPosition: '200% 0' },
        '100%': { backgroundPosition: '-200% 0' },
    },
});

export const pulse = (duration: number = 2000) => ({
    animation: `pulse ${duration}ms ease-in-out infinite`,
    '@keyframes pulse': {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.5 },
    },
});

export const bounce = (duration: number = 1000) => ({
    animation: `bounce ${duration}ms ease-in-out infinite`,
    '@keyframes bounce': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
    },
});

export const spin = (duration: number = 1000) => ({
    animation: `spin ${duration}ms linear infinite`,
    '@keyframes spin': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
    },
});

export const easing = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};

export const transition = (properties: string[], duration: number = 300) => ({
    transition: properties.map(prop => `${prop} ${duration}ms ${easing.easeInOut}`).join(', '),
});
