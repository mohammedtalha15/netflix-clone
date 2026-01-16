// SEO utilities and metadata

export interface SEOConfig {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'video';
}

export function generateMetaTags(config: SEOConfig) {
    return {
        title: config.title,
        description: config.description,
        keywords: config.keywords?.join(', '),

        // Open Graph
        openGraph: {
            title: config.title,
            description: config.description,
            type: config.type || 'website',
            url: config.url,
            images: config.image ? [{ url: config.image }] : [],
        },

        // Twitter Card
        twitter: {
            card: 'summary_large_image',
            title: config.title,
            description: config.description,
            images: config.image ? [config.image] : [],
        },
    };
}

export const defaultSEO: SEOConfig = {
    title: 'Netflix Clone - Watch Movies & TV Shows Online',
    description: 'Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.',
    keywords: ['netflix', 'movies', 'tv shows', 'streaming', 'watch online'],
    type: 'website',
};

export function generateStructuredData(type: 'movie' | 'tvshow', data: any) {
    const baseSchema = {
        '@context': 'https://schema.org',
        '@type': type === 'movie' ? 'Movie' : 'TVSeries',
        name: data.title,
        description: data.description,
        image: data.thumbnailUrl,
        datePublished: data.year,
    };

    if (data.rating) {
        return {
            ...baseSchema,
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: data.rating,
                bestRating: 10,
                worstRating: 0,
            },
        };
    }

    return baseSchema;
}
