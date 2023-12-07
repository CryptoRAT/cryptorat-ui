// Header.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/Header.css';

const Header = ({ accessToken }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        console.log("Entering useEffect");
        console.log("accessToken upon entering: " + accessToken);
        const checkLoggedInUser = async () => {
            console.log("Entering checkLoggedInUser");
            try {
                console.log("Entering try block in checkLoggedInUser");
                const response = await axios.get(process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL + 'user/check-auth/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                // Assuming the backend returns the user data when authenticated
                console.log("response.data.username: " + response.data.username)
                setLoggedInUser(response.data.username);
            } catch (error) {
                // User is not logged in or there's an error
                setLoggedInUser(null);
            }
        };

        if (accessToken) {
            console.log('Checking user...');
            checkLoggedInUser();
        }
        console.log("accessToken when leaving: " + accessToken);
        console.log("Leaving useEffect");
    }, [accessToken, loggedInUser]);

    const renderLoginLink = () => {
        return <Link to="/login" className="header-link">Login</Link>;
    };

    const renderUserLink = () => {
        console.log('Rendering user link...');
        if (loggedInUser) {
            console.log('User is logged in:', loggedInUser);
            return <span className="header-user">{loggedInUser}</span>;
        } else {
            console.log('User is not logged in.');
            return null;
        }
    };

    return (
        <header>
            <div className="header-banner">
                <h1 className="header-h1">Dead by Daylight Random Build Generator</h1>
                <nav className="header-nav">
                    {loggedInUser ? renderUserLink() : renderLoginLink()}
                </nav>
            </div>
        </header>
    );
};

export default Header;
