interface SpinnerProps {
    size?: number;
    color?: string;
}

export default function Spinner({ size = 40, color = '#E50914' }: SpinnerProps) {
    return (
        <div style={{
            width: `${size}px`,
            height: `${size}px`,
            border: `3px solid rgba(255, 255, 255, 0.2)`,
            borderTopColor: color,
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
        }}>
            <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}
