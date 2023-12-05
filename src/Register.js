import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Registration.css';
import axios from "axios";


const Register = () => {
    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();


    const handleRegister = async () => {
        try {
            const registrationData = {
                email,
                password,
                confirmPassword,
                displayName,
            };
            // get the CSRF token from the cookie
            const csrftoken = document.cookie.match(/csrftoken=([^;]+)/)[1];

            // Make a request to your Django backend
            const response = await axios.post(process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL +'user/register/', registrationData, {
                headers: {'X-CSRFToken': csrftoken}
            });

            // Assuming the backend returns a success status
            if (response.status === 200) {
                // Redirect to the main page upon successful registration
                navigate('/');
            } else {
                // Handle other status codes or error responses
                console.error('Registration failed:', response.data);
            }
        } catch (error) {
            console.error('An error occurred during registration:', error);
        }
    };

    return (
        <div className="registration">
            <h2>Register</h2>
            <form>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Display Name:</label>
                <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <br />
                <button type="button" onClick={handleRegister}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
