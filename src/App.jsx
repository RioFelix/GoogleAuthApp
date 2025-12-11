import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('google_token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser(decoded);
            } catch (error) {
                console.error("Invalid token", error);
                localStorage.removeItem('google_token');
            }
        }
    }, []);

    const handleLoginSuccess = (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            localStorage.setItem('google_token', credentialResponse.credential);
            setUser(decoded);
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('google_token');
        setUser(null);
    };

    return (
        <div className="app-container">
            {user ? (
                <Dashboard user={user} onLogout={handleLogout} />
            ) : (
                <Login onSuccess={handleLoginSuccess} />
            )}
        </div>
    );
}

export default App;
