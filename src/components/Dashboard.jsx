import React from 'react';

const Dashboard = ({ user, onLogout }) => {
    // Mock Data
    const stats = [
        { label: 'Login Count', value: '42' },
        { label: 'Avg. Session', value: '12m' },
        { label: 'Account Age', value: '3d' },
    ];

    const activities = [
        { action: 'Logged in', time: 'Just now' },
        { action: 'Updated profile picture', time: '2 hours ago' },
        { action: 'Changed settings', time: '1 day ago' },
    ];

    return (
        <div className="dashboard-container">
            {/* Header */}
            <header className="dashboard-header">
                <div className="user-profile">
                    <img src={user.picture} alt="Profile" className="avatar" />
                    <div>
                        <h3 style={{ margin: 0 }}>{user.name}</h3>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{user.email}</span>
                    </div>
                </div>
                <button onClick={onLogout} style={{ backgroundColor: '#ef4444', fontSize: '0.9rem', padding: '0.5em 1em' }}>
                    Sign Out
                </button>
            </header>

            <main className="dashboard-content">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1 style={{ marginTop: 0 }}>Welcome back, {user.given_name}!</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        Here's what's happening with your account today.
                    </p>
                </div>

                {/* Stats Grid */}
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{stat.label}</p>
                        <div className="stat-value">{stat.value}</div>
                    </div>
                ))}

                {/* Activity Log */}
                <div className="activity-list">
                    <h3 style={{ marginTop: 0 }}>Recent Activity</h3>
                    {activities.map((activity, index) => (
                        <div key={index} className="activity-item">
                            <span>{activity.action}</span>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{activity.time}</span>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
