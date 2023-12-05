import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Using useNavigate instead of useNavigation

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Updated hook name

    const handleLogin = async () => {
        // Implement your login logic, e.g., make a request to your Django backend
        // If login is successful, redirect to the main page
        // You might want to handle authentication tokens or session management here

        // For a simple example, let's assume a successful login
        // and redirect to the main page
        navigate('/');
    };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
