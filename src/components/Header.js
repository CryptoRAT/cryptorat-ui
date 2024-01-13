// Header.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Header.css';

const Header = ({ accessToken }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        console.log("Entering useEffect");
        console.log("accessToken upon entering: " + accessToken);
        const checkLoggedInUser = async () => {
            console.log("Entering checkLoggedInUser");
            try {
                const csrftoken = document.cookie.match(/csrftoken=([^;]+)/)[1];

                // Set CSRF token in headers
                axios.defaults.headers.common['X-CSRFToken'] = csrftoken;
                console.log("Entering try block in checkLoggedInUser");
                const response = await axios.get(
                    process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL + 'user/check-auth/',
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                // Assuming the backend returns the user data when authenticated
                console.log("Response from backend:", response.data);

                if (response.data.username) {
                    console.log("User is authenticated:", response.data.username);
                    setLoggedInUser(response.data.username);
                } else {
                    console.log("User is not authenticated.");
                    setLoggedInUser(null);
                }
            } catch (error) {
                // User is not logged in or there's an error
                console.error("Error checking logged-in user:", error);

                // If the error is due to unauthorized (e.g., token expired), you might want to handle it differently
                if (error.response && error.response.status === 401) {
                    console.log("Unauthorized - token might be invalid or expired.");
                    // Handle token expiration or invalid token scenario
                }

                setLoggedInUser(null);
            }
            console.log("Leaving checkLoggedInUser");
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

    const renderRegisterLink = () => {
        return <Link to="/register" className="header-link">Register</Link>;
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
                <h1 className="header-h1">CryptoRAT's Neighborhood</h1>
            </div>
        </header>
    );
};

export default Header;
