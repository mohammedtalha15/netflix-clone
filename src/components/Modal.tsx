'use client';

export default function Modal({
    isOpen,
    onClose,
    children,
    title,
}: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}) {
    if (!isOpen) return null;

    return (
        <>
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.7)',
                    zIndex: 1998,
                }}
            />

            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: '#181818',
                borderRadius: '8px',
                maxWidth: '90vw',
                maxHeight: '90vh',
                overflow: 'auto',
                zIndex: 1999,
                minWidth: '400px',
            }}>
                {title && (
                    <div style={{
                        padding: '20px',
                        borderBottom: '1px solid #404040',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{title}</h2>
                        <button
                            onClick={onClose}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#fff',
                                fontSize: '24px',
                                cursor: 'pointer',
                                padding: '0',
                                width: '32px',
                                height: '32px',
                            }}
                        >
                            ×
                        </button>
                    </div>
                )}

                <div style={{ padding: '20px' }}>
                    {children}
                </div>
            </div>
        </>
    );
}
