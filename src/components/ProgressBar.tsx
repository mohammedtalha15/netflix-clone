'use client';

interface ProgressBarProps {
    progress: number;
    showPercentage?: boolean;
    color?: string;
    height?: number;
}

export default function ProgressBar({
    progress,
    showPercentage = false,
    color = '#E50914',
    height = 4,
}: ProgressBarProps) {
    const clampedProgress = Math.min(Math.max(progress, 0), 100);

    return (
        <div style={{ width: '100%' }}>
            <div style={{
                width: '100%',
                height: `${height}px`,
                background: 'rgba(255,255,255,0.2)',
                borderRadius: `${height / 2}px`,
                overflow: 'hidden',
                position: 'relative',
            }}>
                <div style={{
                    width: `${clampedProgress}%`,
                    height: '100%',
                    background: color,
                    borderRadius: `${height / 2}px`,
                    transition: 'width 0.3s ease',
                }} />
            </div>

            {showPercentage && (
                <div style={{
                    fontSize: '12px',
                    color: '#bcbcbc',
                    marginTop: '4px',
                }}>
                    {Math.round(clampedProgress)}%
                </div>
            )}
        </div>
    );
}
