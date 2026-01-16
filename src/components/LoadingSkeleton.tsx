'use client';

export default function LoadingSkeleton({ variant = 'row' }: { variant?: 'row' | 'billboard' | 'card' | 'modal' }) {
    if (variant === 'billboard') {
        return (
            <div style={{
                width: '100%',
                height: '56.25vw',
                maxHeight: '80vh',
                background: 'linear-gradient(90deg, #202020 25%, #2a2a2a 50%, #202020 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite',
                position: 'relative',
            }}>
                <style jsx>{`
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>

                <div style={{
                    position: 'absolute',
                    bottom: '35%',
                    left: '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}>
                    {/* Title skeleton */}
                    <div style={{
                        width: '400px',
                        height: '60px',
                        background: '#303030',
                        borderRadius: '4px',
                    }} />

                    {/* Description skeleton */}
                    <div style={{
                        width: '500px',
                        height: '80px',
                        background: '#303030',
                        borderRadius: '4px',
                    }} />

                    {/* Buttons skeleton */}
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <div style={{
                            width: '120px',
                            height: '48px',
                            background: '#303030',
                            borderRadius: '4px',
                        }} />
                        <div style={{
                            width: '150px',
                            height: '48px',
                            background: '#303030',
                            borderRadius: '4px',
                        }} />
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 'card') {
        return (
            <div style={{
                minWidth: '230px',
                height: '130px',
                background: 'linear-gradient(90deg, #202020 25%, #2a2a2a 50%, #202020 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite',
                borderRadius: '4px',
            }}>
                <style jsx>{`
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
            </div>
        );
    }

    if (variant === 'modal') {
        return (
            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: '#181818',
                borderRadius: '8px',
                width: '850px',
                maxWidth: '90vw',
                maxHeight: '90vh',
                overflow: 'auto',
                zIndex: 1000,
            }}>
                {/* Hero Image Skeleton */}
                <div style={{
                    width: '100%',
                    height: '480px',
                    background: 'linear-gradient(90deg, #202020 25%, #2a2a2a 50%, #202020 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite',
                }} />

                <div style={{ padding: '40px' }}>
                    {/* Title */}
                    <div style={{
                        width: '60%',
                        height: '40px',
                        background: '#303030',
                        borderRadius: '4px',
                        marginBottom: '20px',
                    }} />

                    {/* Meta info */}
                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        marginBottom: '20px',
                    }}>
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} style={{
                                width: '80px',
                                height: '20px',
                                background: '#303030',
                                borderRadius: '4px',
                            }} />
                        ))}
                    </div>

                    {/* Description */}
                    <div style={{
                        width: '100%',
                        height: '60px',
                        background: '#303030',
                        borderRadius: '4px',
                        marginBottom: '30px',
                    }} />

                    {/* Cast */}
                    <div style={{
                        width: '70%',
                        height: '40px',
                        background: '#303030',
                        borderRadius: '4px',
                    }} />
                </div>
            </div>
        );
    }

    // Row variant (default)
    return (
        <div style={{ marginBottom: '30px' }}>
            {/* Title skeleton */}
            <div style={{
                width: '200px',
                height: '24px',
                background: '#303030',
                borderRadius: '4px',
                marginBottom: '15px',
                marginLeft: '60px',
            }} />

            {/* Cards skeleton */}
            <div style={{
                display: 'flex',
                gap: '10px',
                paddingLeft: '60px',
                paddingRight: '60px',
                overflowX: 'hidden',
            }}>
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div
                        key={i}
                        style={{
                            minWidth: '230px',
                            height: '130px',
                            background: 'linear-gradient(90deg, #202020 25%, #2a2a2a 50%, #202020 75%)',
                            backgroundSize: '200% 100%',
                            animation: 'shimmer 1.5s infinite',
                            borderRadius: '4px',
                        }}
                    />
                ))}
            </div>

            <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
        </div>
    );
}
