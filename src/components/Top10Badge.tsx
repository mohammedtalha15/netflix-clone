interface Top10BadgeProps {
    rank: number;
}

export default function Top10Badge({ rank }: Top10BadgeProps) {
    return (
        <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            zIndex: 2,
        }}>
            <svg width="60" height="90" viewBox="0 0 60 90">
                {/* Background */}
                <path
                    d="M 0 0 L 60 0 L 60 90 L 30 75 L 0 90 Z"
                    fill="#E50914"
                />

                {/* Number */}
                <text
                    x="30"
                    y="50"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="36"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                >
                    {rank}
                </text>
            </svg>
        </div>
    );
}
