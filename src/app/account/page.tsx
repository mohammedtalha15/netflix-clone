'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useUser } from '@/contexts/UserContext';

export default function AccountPage() {
    const { currentProfile, updateProfile } = useUser();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: currentProfile?.name || '',
        language: currentProfile?.language || 'en-US',
        maturityLevel: currentProfile?.maturityLevel || 'adults',
        autoPlayNext: currentProfile?.autoPlayNext ?? true,
        autoPlayPreviews: currentProfile?.autoPlayPreviews ?? true,
    });

    const handleSave = () => {
        if (currentProfile) {
            updateProfile(currentProfile.id, formData);
            setIsEditing(false);
        }
    };

    return (
        <main style={{ minHeight: '100vh', background: '#141414' }}>
            <Navbar />

            <div style={{ padding: '100px 60px 40px', maxWidth: '1000px' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '40px' }}>
                    Account Settings
                </h1>

                {/* Profile Settings */}
                <section style={{ marginBottom: '40px' }}>
                    <div style={{
                        background: '#333',
                        padding: '30px',
                        borderRadius: '8px',
                        marginBottom: '20px',
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '20px',
                        }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Profile Settings</h2>
                            <button
                                onClick={() => setIsEditing(!isEditing)}
                                style={{
                                    background: isEditing ? '#E50914' : 'transparent',
                                    border: '1px solid #fff',
                                    color: '#fff',
                                    padding: '10px 20px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}
                            >
                                {isEditing ? 'Cancel' : 'Edit'}
                            </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {/* Name */}
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#bcbcbc' }}>
                                    Profile Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    disabled={!isEditing}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        background: isEditing ? '#555' : '#444',
                                        border: '1px solid #666',
                                        borderRadius: '4px',
                                        color: '#fff',
                                        fontSize: '16px',
                                    }}
                                />
                            </div>

                            {/* Language */}
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#bcbcbc' }}>
                                    Language
                                </label>
                                <select
                                    value={formData.language}
                                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                                    disabled={!isEditing}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        background: isEditing ? '#555' : '#444',
                                        border: '1px solid #666',
                                        borderRadius: '4px',
                                        color: '#fff',
                                        fontSize: '16px',
                                    }}
                                >
                                    <option value="en-US">English (US)</option>
                                    <option value="es-ES">Español</option>
                                    <option value="fr-FR">Français</option>
                                    <option value="de-DE">Deutsch</option>
                                    <option value="ja-JP">日本語</option>
                                </select>
                            </div>

                            {/* Maturity Level */}
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#bcbcbc' }}>
                                    Viewing Restrictions
                                </label>
                                <select
                                    value={formData.maturityLevel}
                                    onChange={(e) => setFormData({ ...formData, maturityLevel: e.target.value })}
                                    disabled={!isEditing}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        background: isEditing ? '#555' : '#444',
                                        border: '1px solid #666',
                                        borderRadius: '4px',
                                        color: '#fff',
                                        fontSize: '16px',
                                    }}
                                >
                                    <option value="kids">Kids</option>
                                    <option value="teens">Teens</option>
                                    <option value="adults">Adults</option>
                                </select>
                            </div>

                            {/* Auto-play Settings */}
                            <div>
                                <label style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    cursor: isEditing ? 'pointer' : 'default',
                                }}>
                                    <input
                                        type="checkbox"
                                        checked={formData.autoPlayNext}
                                        onChange={(e) => setFormData({ ...formData, autoPlayNext: e.target.checked })}
                                        disabled={!isEditing}
                                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                                    />
                                    <span style={{ color: '#fff' }}>Autoplay next episode</span>
                                </label>
                            </div>

                            <div>
                                <label style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    cursor: isEditing ? 'pointer' : 'default',
                                }}>
                                    <input
                                        type="checkbox"
                                        checked={formData.autoPlayPreviews}
                                        onChange={(e) => setFormData({ ...formData, autoPlayPreviews: e.target.checked })}
                                        disabled={!isEditing}
                                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                                    />
                                    <span style={{ color: '#fff' }}>Autoplay previews while browsing</span>
                                </label>
                            </div>

                            {isEditing && (
                                <button
                                    onClick={handleSave}
                                    style={{
                                        background: '#E50914',
                                        border: 'none',
                                        color: '#fff',
                                        padding: '12px 30px',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        marginTop: '10px',
                                    }}
                                >
                                    Save Changes
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                {/* Membership & Billing */}
                <section style={{ marginBottom: '40px' }}>
                    <div style={{
                        background: '#333',
                        padding: '30px',
                        borderRadius: '8px',
                    }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px' }}>
                            Membership & Billing
                        </h2>
                        <div style={{ color: '#bcbcbc', lineHeight: '1.8' }}>
                            <p><strong style={{ color: '#fff' }}>Email:</strong> user@example.com</p>
                            <p><strong style={{ color: '#fff' }}>Plan:</strong> Premium (4K + HDR)</p>
                            <p><strong style={{ color: '#fff' }}>Next billing date:</strong> February 15, 2026</p>
                        </div>
                    </div>
                </section>

                {/* Security */}
                <section>
                    <div style={{
                        background: '#333',
                        padding: '30px',
                        borderRadius: '8px',
                    }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px' }}>
                            Security
                        </h2>
                        <button style={{
                            background: 'transparent',
                            border: '1px solid #fff',
                            color: '#fff',
                            padding: '10px 20px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginRight: '10px',
                        }}>
                            Change Password
                        </button>
                        <button style={{
                            background: 'transparent',
                            border: '1px solid #fff',
                            color: '#fff',
                            padding: '10px 20px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}>
                            Sign out of all devices
                        </button>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
