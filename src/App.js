import React, {Component} from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { Provider } from 'react-redux';
import store from './store';
import GenerateRandomCharacter from "./components/GenerateRandomCharacter";
import AuthProvider from "./AuthProvider";
import CryptoratLandingPage from "./components/CryptoratLandingPage";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accessToken: null,
        };
    }

    setAccessToken = (newAccessToken) => {
        this.setState({accessToken: newAccessToken});
    };

    render() {
        return (
            <BrowserRouter>
                <AuthProvider>
                    <Provider store={store}>
                    {(authProps) => (
                        <div>
                            <Routes>
                                <Route path="/dbd/register/" element={<Register/>}/>
                                <Route path="/dbdlogin/" element={<Login onLogin={authProps.handleLogin}/>}/>
                                <Route path="/dbd/" element={<GenerateRandomCharacter/>}/>
                                <Route path="/" element={<CryptoratLandingPage/>}/>
                            </Routes>
                        </div>
                    )}
                    </Provider>
                </AuthProvider>
            </BrowserRouter>

        );
    }


}

export default App;