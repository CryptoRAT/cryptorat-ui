//  (Common Ancestor Component for passing around the accessToken state)
import React, { createContext, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { loginSuccess } from './redux/authActions';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const dispatch = useDispatch(); // Get the Redux dispatch function


    const onLogin = (accessToken) => {
        setAccessToken(accessToken);
        // Dispatch an action to store the token in Redux state
        dispatch({ type: 'DBD_RANDOMIZER_ACCESS_TOKEN', accessToken });
    };


    return (
        <AuthContext.Provider value={{ user, onLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
