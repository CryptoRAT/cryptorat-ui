//  (Common Ancestor Component for passing around the accessToken state)
import React, { useState } from 'react';

const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);

    const handleLogin = (token) => {
        // Set the access token upon successful login
        setAccessToken(token);
    };
    // Example: onLogin function in the parent component
    const onLogin = (accessToken) => {
        setAccessToken(accessToken);
        localStorage.setItem('accessToken', accessToken);
    };


    return (
        <div>
            {/* Other context providers, if any */}
            {children({
                accessToken,        // Pass accessToken as a prop
                handleLogin,        // Pass the login function as a prop
            })}
        </div>
    );
};

export default AuthProvider;
