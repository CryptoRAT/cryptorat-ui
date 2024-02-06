import React, { useState } from 'react'; // Imported SyntheticEvent type
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';

const Login: React.FC<{ onLogin: (accessToken: string) => void }> = ({ onLogin }) => {
    const [email, setEmail] = useState<string>(''); // Added explicit type annotation
    const [password, setPassword] = useState<string>(''); // Added explicit type annotation
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const csrftoken = document.cookie.match(/csrftoken=([^;]+)/)?.[1] ?? '';
            if(csrftoken == null) {
                // We should let the user know.
            }
            axios.defaults.headers.common['X-CSRFToken'] = csrftoken;

            const response = await axios.post(
                `${process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL}user/login/`, // Corrected the URL
                {
                    username: email,
                    password: password,
                }
            );

            const accessToken = response.data.access_token;

            onLogin(accessToken);

            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);

            if (axios.isAxiosError(error)) { // Check if it's an Axios error
                console.error('error.response.data:', error.response?.data);
                console.error('error.response.status:', error.response?.status);
                console.error('error.response.headers:', error.response?.headers);
            }
        }
    };

    const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
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
                <input
                    className="login-input"
                    type="text"
                    placeholder="Press Enter or click the button to login"
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
