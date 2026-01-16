'use client';

import { useState, ReactNode } from 'react';

interface TooltipProps {
    children: ReactNode;
    content: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
}

export default function Tooltip({ children, content, position = 'top' }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);

    const positionStyles = {
        top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '8px' },
        bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '8px' },
        left: { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '8px' },
        right: { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: '8px' },
    };

    return (
        <div
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}

            {isVisible && (
                <div style={{
                    position: 'absolute',
                    ...positionStyles[position],
                    background: 'rgba(0, 0, 0, 0.9)',
                    color: '#fff',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                    zIndex: 4000,
                    pointerEvents: 'none',
                    animation: 'fadeIn 0.2s',
                }}>
                    {content}
                </div>
            )}
        </div>
    );
}
