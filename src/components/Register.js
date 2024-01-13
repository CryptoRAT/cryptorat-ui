import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Registration.css';
import axios from "axios";


const Register = () => {
    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();


    const handleRegister = async () => {
        // get the CSRF token from the cookie
        const csrftoken = document.cookie.match(/csrftoken=([^;]+)/)[1];
        axios.defaults.headers.common['X-CSRFToken'] = csrftoken;
        try {
            const registrationData = {
                email,
                password,
                confirmPassword,
                displayName,
            };

            // Make a request to your Django backend
            const response = await axios.post(process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL +'user/register/', registrationData, {});

            // Check that the backend returns a success status
            if (response.status === 201) {
                // Redirect to the main page upon successful registration
                navigate('/login/');
            } else {
                // Handle other status codes or error responses
                console.error('Registration failed:', response.data);
            }
        } catch (error) {
            console.error('An error occurred during registration:', error);
        }
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            // Trigger the button click logic when Enter key is pressed
            handleRegister();
        }
    };


    return (
        <div className="registration-container">
            <h2 className="registration-title">Register</h2>
            <form className="registration-form">
                <div className="registration-field">
                <label className="registration-label">Email:</label>
                <input className="registration-inpurt" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <br />
                <div className="registration-field">
                <label className="registration-label">Display Name:</label>
                <input className="registration-input" type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                </div>
                <br />
                <div className="registration-field">
                <label className="registration-label">Password:</label>
                <input className="registration-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                <div className="registration-field">
                <label className="registration-label">Confirm Password:</label>
                <input className="registration-input" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <br />
                <input
                    className="registration-input"
                    type="text"
                    hidden="True"
                    placeholder="Press Enter or click button to register"
                    onKeyDown={handleEnterPress}
                    />
                <button className="btn btn-primary" type="button" onClick={handleRegister}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
