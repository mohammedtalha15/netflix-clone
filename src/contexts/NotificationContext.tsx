'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import type { Notification } from '@/types';

interface NotificationContextType {
    notifications: Notification[];
    unreadCount: number;
    addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
    markAsRead: (id: string) => void;
    markAllAsRead: () => void;
    deleteNotification: (id: string) => void;
    clearAll: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
    const [notifications, setNotifications] = useState<Notification[]>([
        {
            id: 'notif-1',
            type: 'new_release',
            title: 'New Release',
            message: 'Extraction 2 is now available',
            thumbnailUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800',
            contentId: 'mega-001',
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
            read: false,
        },
        {
            id: 'notif-2',
            type: 'recommendation',
            title: 'Top Pick for You',
            message: 'Based on your viewing history, we think you\'ll love The Killer',
            thumbnailUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
            contentId: 'ext-010',
            timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
            read: false,
        },
        {
            id: 'notif-3',
            type: 'update',
            title: 'Coming Soon',
            message: 'Season 5 of Stranger Things arrives next month',
            thumbnailUrl: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800',
            contentId: 'mega-131',
            timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
            read: true,
        },
    ]);

    const unreadCount = notifications.filter(n => !n.read).length;

    const addNotification = useCallback((notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
        const newNotification: Notification = {
            ...notification,
            id: `notif-${Date.now()}`,
            timestamp: new Date(),
            read: false,
        };
        setNotifications(prev => [newNotification, ...prev]);
    }, []);

    const markAsRead = useCallback((id: string) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
    }, []);

    const markAllAsRead = useCallback(() => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    }, []);

    const deleteNotification = useCallback((id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    }, []);

    const clearAll = useCallback(() => {
        setNotifications([]);
    }, []);

    return (
        <NotificationContext.Provider value={{
            notifications,
            unreadCount,
            addNotification,
            markAsRead,
            markAllAsRead,
            deleteNotification,
            clearAll,
        }}>
            {children}
        </NotificationContext.Provider>
    );
}

export function useNotifications() {
    const context = useContext(NotificationContext);
    if (context === undefined) {
        throw new Error('useNotifications must be used within a NotificationProvider');
    }
    return context;
}
