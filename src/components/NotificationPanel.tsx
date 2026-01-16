'use client';

import { useNotifications } from '@/contexts/NotificationContext';
import { timeAgo } from '@/utils/helpers';

interface NotificationPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
    const { notifications, unreadCount, markAsRead, markAllAsRead, deleteNotification } = useNotifications();

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 998,
                }}
            />

            {/* Panel */}
            <div style={{
                position: 'fixed',
                top: '70px',
                right: '20px',
                width: '400px',
                maxHeight: '600px',
                background: 'rgba(0,0,0,0.95)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                zIndex: 999,
                overflow: 'hidden',
            }}>
                {/* Header */}
                <div style={{
                    padding: '20px',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                        Notifications {unreadCount > 0 && `(${unreadCount})`}
                    </h3>
                    {unreadCount > 0 && (
                        <button
                            onClick={markAllAsRead}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#E50914',
                                cursor: 'pointer',
                                fontSize: '14px',
                            }}
                        >
                            Mark all as read
                        </button>
                    )}
                </div>

                {/* Notifications List */}
                <div style={{
                    maxHeight: '500px',
                    overflowY: 'auto',
                }}>
                    {notifications.length === 0 ? (
                        <div style={{
                            padding: '40px 20px',
                            textAlign: 'center',
                            color: '#808080',
                        }}>
                            No notifications
                        </div>
                    ) : (
                        notifications.map((notification) => (
                            <div
                                key={notification.id}
                                onClick={() => markAsRead(notification.id)}
                                style={{
                                    padding: '15px 20px',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                    cursor: 'pointer',
                                    background: notification.read ? 'transparent' : 'rgba(229,9,20,0.1)',
                                    transition: 'background 0.2s',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = notification.read ? 'transparent' : 'rgba(229,9,20,0.1)'}
                            >
                                <div style={{
                                    display: 'flex',
                                    gap: '12px',
                                }}>
                                    {notification.thumbnailUrl && (
                                        <img
                                            src={notification.thumbnailUrl}
                                            alt=""
                                            style={{
                                                width: '60px',
                                                height: '34px',
                                                objectFit: 'cover',
                                                borderRadius: '4px',
                                            }}
                                        />
                                    )}

                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            marginBottom: '4px',
                                        }}>
                                            {notification.title}
                                        </div>
                                        <div style={{
                                            fontSize: '13px',
                                            color: '#bcbcbc',
                                            marginBottom: '6px',
                                        }}>
                                            {notification.message}
                                        </div>
                                        <div style={{
                                            fontSize: '12px',
                                            color: '#808080',
                                        }}>
                                            {timeAgo(notification.timestamp)}
                                        </div>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            deleteNotification(notification.id);
                                        }}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#808080',
                                            cursor: 'pointer',
                                            padding: '0',
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
