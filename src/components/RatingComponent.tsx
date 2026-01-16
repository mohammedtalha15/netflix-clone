'use client';

import { useState } from 'react';

interface RatingComponentProps {
    contentId: string;
    initialRating?: number;
    onRate?: (rating: number) => void;
}

export default function RatingComponent({ contentId, initialRating = 0, onRate }: RatingComponentProps) {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    const handleRate = (value: number) => {
        setRating(value);
        onRate?.(value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        onClick={() => handleRate(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0',
                            transition: 'transform 0.2s',
                        }}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill={star <= (hover || rating) ? '#E50914' : 'none'} stroke={star <= (hover || rating) ? '#E50914' : '#808080'} strokeWidth="2">
                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                        </svg>
                    </button>
                ))}
            </div>
            <div style={{ fontSize: '12px', color: '#bcbcbc' }}>
                {rating > 0 ? `You rated this ${rating} out of 5` : 'Rate this content'}
            </div>
        </div>
    );
}
