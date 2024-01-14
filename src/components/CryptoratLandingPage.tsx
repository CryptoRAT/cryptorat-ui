import React from 'react';
import {Link} from 'react-router-dom';
import '../css/CryptoratLandingPage.css';

const CryptoratLandingPage: React.FC = () => {
    return (
        <div className="component-container">
            {/* Logo */}
            <div className="logo">
                <img src="253_CryptoRAT_Logo_03.png" alt="Cryptorat Logo"/>
            </div>
            <div className="introductions">
                <p>Welcome to my neighborhood! Just a bit of warning, all web-sites not in production are in various states.
                   Some I will come back to and some will be left behind. If it stops rendering any page I will remove it from here.
                   Additionally, while I have "designed" these pages, I am afraid my sister and mother got the art talent.
                   I am open to any feedback.</p>
            </div>
            {/* Navigation Links */}
            <nav className="navigation">
                <div className="internal-link">
                    <Link to="/dbd/">Dead by Daylight - Random Build Generator</Link>
                    <p>A tool for generating random survivors and builds to play the hit asymmetrical game Dead By
                        Daylight. It is a typescript and fully reactive front end with a python/django backend with all
                        data
                        stored in a postgres database.
                        I am also working on a mobile app, check out my github to see how that is coming along. Once
                        it's a deployed mobile app I will update and add a link here.
                    </p>
                    <a href="https://github.com/CryptoRAT"
                       target="_blank"
                       rel="noopener noreferrer">
                        <i className="fab fa-github"></i> Github</a>
                </div>
                <div className="external-link">
                    <a href="https://blog.cryptorat.com" target="_blank" rel="noopener noreferrer">
                        My self built blog
                    </a>
                    <p>I am just starting this in 2024. So I don't know what it's going to look like exactly. I plan on
                        using a
                        NoSQL solution in the backend and typescript/react on the front end. I might even try
                        react-native on the
                        frontend to see how useful it really is in that context.</p>
                </div>
                <div className="external-link">
                    <a href="https://arkfarmsveganic.com" target="_blank" rel="noopener noreferrer">
                        https://arkfarmsveganic.com
                    </a>
                    <p>This is a small project I put together for a local farmer who is a really nice guy. It's a fully reactive
                        site in react and javascript. It's not much more than a a landing page with some formatting at
                        present, but let's see what it will grow into over the coming years.
                    </p>
                </div>
                {/* Contact me links*/}
                <div className="mailto-link">
                    <a href="mailto:luke@cryptorat.com">Contact me directly</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/luke-elliot-9b15ab46/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> Contact me on LinkedIn
                </a>
        </div>
</nav>

</div>
)
    ;
};

export default CryptoratLandingPage;
