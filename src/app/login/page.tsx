'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login - redirect to profile selection
        router.push('/profiles');
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8e0a/a449fabb-05e4-4c8a-b062-b0bec7d03085/US-en-20240115-trifectadaily-perspective_alpha_website_large.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            {/* Header */}
            <header style={{
                padding: '20px 60px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <svg
                    viewBox="0 0 111 30"
                    style={{ width: '148px', height: '40px', fill: '#E50914', cursor: 'pointer' }}
                    onClick={() => router.push('/')}
                >
                    <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 0v21.875c2.75.156 5.5.343 8.156.625v4.687c-4.218-.375-8.437-.625-12.843-.812V0h4.687zM21.875 10.97h-6.094v4.436h6.094v4.688H15.78v5.5c-1.562.062-3.125.156-4.687.25V0h10.78v4.687h-6.093v5.97h6.094v.312zM0 30s1.875-6.563 7.938-6.563c5.174 0 6.093 3.376 6.093 6.563H0z" />
                </svg>
            </header>

            {/* Login Form */}
            <div style={{
                maxWidth: '450px',
                margin: '0 auto',
                padding: '60px 68px 40px',
                background: 'rgba(0,0,0,0.75)',
                borderRadius: '4px'
            }}>
                <h1 style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    marginBottom: '28px',
                    color: '#fff'
                }}>
                    Sign In
                </h1>

                <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div style={{ marginBottom: '16px' }}>
                        <input
                            type="email"
                            placeholder="Email or phone number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '16px 20px',
                                fontSize: '16px',
                                background: '#333',
                                border: 'none',
                                borderRadius: '4px',
                                color: '#fff',
                                outline: 'none'
                            }}
                        />
                    </div>

                    {/* Password Input */}
                    <div style={{ marginBottom: '16px' }}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '16px 20px',
                                fontSize: '16px',
                                background: '#333',
                                border: 'none',
                                borderRadius: '4px',
                                color: '#fff',
                                outline: 'none'
                            }}
                        />
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '16px',
                            fontSize: '16px',
                            fontWeight: '700',
                            background: '#E50914',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginBottom: '12px',
                            transition: 'background 0.2s'
                        }}
                    >
                        Sign In
                    </button>

                    {/* OR Divider */}
                    <div style={{
                        textAlign: 'center',
                        color: '#737373',
                        fontSize: '13px',
                        marginBottom: '12px'
                    }}>
                        OR
                    </div>

                    {/* Use a Sign-In Code */}
                    <button
                        type="button"
                        style={{
                            width: '100%',
                            padding: '16px',
                            fontSize: '16px',
                            fontWeight: '700',
                            background: 'rgba(109,109,110,0.7)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginBottom: '16px',
                            transition: 'background 0.2s'
                        }}
                    >
                        Use a Sign-In Code
                    </button>

                    {/* Forgot Password */}
                    <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                        <a href="#" style={{
                            color: '#b3b3b3',
                            fontSize: '13px',
                            textDecoration: 'none'
                        }}>
                            Forgot password?
                        </a>
                    </div>

                    {/* Remember Me */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '12px'
                    }}>
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        />
                        <label
                            htmlFor="rememberMe"
                            style={{ color: '#b3b3b3', fontSize: '13px', cursor: 'pointer' }}
                        >
                            Remember me
                        </label>
                    </div>
                </form>

                {/* Sign Up Link */}
                <div style={{ marginTop: '16px' }}>
                    <span style={{ color: '#737373', fontSize: '16px' }}>
                        New to Netflix?{' '}
                    </span>
                    <a href="#" style={{ color: '#fff', fontSize: '16px', textDecoration: 'none' }}>
                        Sign up now.
                    </a>
                </div>

                {/* Captcha Notice */}
                <p style={{
                    marginTop: '16px',
                    color: '#737373',
                    fontSize: '13px',
                    lineHeight: '1.5'
                }}>
                    This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.{' '}
                    <a href="#" style={{ color: '#0071eb', textDecoration: 'none' }}>
                        Learn more.
                    </a>
                </p>
            </div>

            {/* Footer */}
            <footer style={{
                marginTop: '60px',
                padding: '30px 60px',
                background: 'rgba(0,0,0,0.75)'
            }}>
                <p style={{ color: '#737373', fontSize: '13px', marginBottom: '30px' }}>
                    Questions? Call 1-844-505-2993
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '15px',
                    color: '#737373',
                    fontSize: '13px'
                }}>
                    <a href="#" style={{ color: '#737373', textDecoration: 'underline' }}>FAQ</a>
                    <a href="#" style={{ color: '#737373', textDecoration: 'underline' }}>Help Center</a>
                    <a href="#" style={{ color: '#737373', textDecoration: 'underline' }}>Terms of Use</a>
                    <a href="#" style={{ color: '#737373', textDecoration: 'underline' }}>Privacy</a>
                    <a href="#" style={{ color: '#737373', textDecoration: 'underline' }}>Cookie Preferences</a>
                    <a href="#" style={{ color: '#737373', textDecoration: 'underline' }}>Corporate Information</a>
                </div>
                <div style={{
                    marginTop: '20px',
                    display: 'inline-block',
                    padding: '8px 16px',
                    border: '1px solid #737373',
                    color: '#737373',
                    fontSize: '13px'
                }}>
                    English
                </div>
            </footer>
        </div>
    );
}
