import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ textAlign: 'center', margin: '20px' }}>
            <img src="/Grand-Circus-Logo.png" alt="Grand Circus Logo" style={{ width: '300px', marginBottom: '20px' }} />
            <h1>Find Your Forecast</h1>
        </header>
    );
};

export default Header;
