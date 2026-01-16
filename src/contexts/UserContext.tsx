'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { UserProfile } from '@/types';

interface UserContextType {
    currentProfile: UserProfile | null;
    profiles: UserProfile[];
    setCurrentProfile: (profile: UserProfile) => void;
    addProfile: (profile: UserProfile) => void;
    updateProfile: (id: string, updates: Partial<UserProfile>) => void;
    deleteProfile: (id: string) => void;
    isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const DEFAULT_PROFILES: UserProfile[] = [
    {
        id: 'profile-1',
        name: 'User',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
        isKid: false,
        language: 'en-US',
        maturityLevel: 'adults',
        autoPlayNext: true,
        autoPlayPreviews: true,
    },
    {
        id: 'profile-2',
        name: 'Guest',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
        isKid: false,
        language: 'en-US',
        maturityLevel: 'adults',
        autoPlayNext: true,
        autoPlayPreviews: false,
    },
    {
        id: 'profile-3',
        name: 'Kids',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/ 0/0b/Netflix-avatar.png',
        isKid: true,
        language: 'en-US',
        maturityLevel: 'kids',
        autoPlayNext: true,
        autoPlayPreviews: false,
    },
];

export function UserProvider({ children }: { children: ReactNode }) {
    const [profiles, setProfiles] = useState<UserProfile[]>(DEFAULT_PROFILES);
    const [currentProfile, setCurrentProfile] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Load from localStorage
        const savedProfiles = localStorage.getItem('netflix-profiles');
        const savedCurrentProfile = localStorage.getItem('netflix-current-profile');

        if (savedProfiles) {
            setProfiles(JSON.parse(savedProfiles));
        }

        if (savedCurrentProfile) {
            setCurrentProfile(JSON.parse(savedCurrentProfile));
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('netflix-profiles', JSON.stringify(profiles));
        }
    }, [profiles, isLoading]);

    useEffect(() => {
        if (!isLoading && currentProfile) {
            localStorage.setItem('netflix-current-profile', JSON.stringify(currentProfile));
        }
    }, [currentProfile, isLoading]);

    const addProfile = (profile: UserProfile) => {
        setProfiles(prev => [...prev, profile]);
    };

    const updateProfile = (id: string, updates: Partial<UserProfile>) => {
        setProfiles(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
        if (currentProfile?.id === id) {
            setCurrentProfile(prev => prev ? { ...prev, ...updates } : null);
        }
    };

    const deleteProfile = (id: string) => {
        setProfiles(prev => prev.filter(p => p.id !== id));
        if (currentProfile?.id === id) {
            setCurrentProfile(null);
        }
    };

    return (
        <UserContext.Provider value={{
            currentProfile,
            profiles,
            setCurrentProfile,
            addProfile,
            updateProfile,
            deleteProfile,
            isLoading,
        }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
