import React from 'react';
import {Link} from 'react-router-dom';
import '../css/CryptoratLandingPage.css';

const CryptoratLandingPage: React.FC = () => {
    return (
        <div>
            {/* Logo */}
            <div className="logo">
                {/* You can insert your logo here */}
                <img src="253_CryptoRAT_Logo_03.png" alt="Cryptorat Logo"/>
            </div>

            {/* Navigation Links */}
            <nav className="navigation">
                <Link to="/dbd/">Dead by Daylight - Random Build Generator</Link>
                <a href="https://blog.cryptorat.com" target="_blank" rel="noopener noreferrer">
                    My self built blog.
                </a>
            </nav>

        </div>
    );
};

export default CryptoratLandingPage;
