module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'next/core-web-vitals',
        'next/typescript'
    ],
    rules: {
        // Disable specific rules for this project
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'react/no-unescaped-entities': 'off',
        '@next/next/no-img-element': 'off',
        'react-hooks/exhaustive-deps': 'warn',
    },
};
