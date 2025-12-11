import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const Login = ({ onSuccess }) => {
    return (
        <div className="card login-card">
            <h1 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '2rem' }}>Welcome Back</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Sign in to access your dashboard
            </p>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <GoogleLogin
                    onSuccess={onSuccess}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </div>
        </div>
    );
};

export default Login;
