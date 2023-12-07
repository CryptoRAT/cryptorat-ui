import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Using useNavigate instead of useNavigation
import axios from 'axios';
import './css/Login.css';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const csrftoken = document.cookie.match(/csrftoken=([^;]+)/)[1];
        axios.defaults.headers.common['X-CSRFToken'] = csrftoken;
        console.log("Entering handleLogin");
        console.log("email: " + email);
        console.log("password: " + password);
        console.log("csrftoken: " + csrftoken);

        try {
            console.log("Entering try block");
            // Make a POST request to your Django backend API
            const response = await axios.post(process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL + 'user/login/', {
                username: email,
                password: password,
            });

            console.log("response: ", response);

            // Assuming your backend returns an access_token
            const accessToken = response.data.access_token;
            onLogin(accessToken);
            // Redirect to the main page
            navigate('/');
        } catch (error) {
            // Handle authentication failure
            console.error('Login failed:', error);
            // You can also set an error state and display a message to the user
            console.error('error.response.data:', error.response.data);
            console.error('error.response.status:', error.response.status);
            console.error('error.response.headers:', error.response.headers);
        }
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            // Trigger the button click logic when Enter key is pressed
            handleLogin();
        }
    };
    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form className="login-form">
                <label className="login-label">Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label className="login-label">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <input className={"login-input"}
                    type="text"
                    hidden="True"
                    placeholder="Press Enter or click button to register"
                    onKeyDown={handleEnterPress}
                />
                <button className="btn btn-primary" type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
