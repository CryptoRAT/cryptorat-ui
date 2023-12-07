import React, {Component} from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import GenerateRandomSurvivor from "./GenerateRandomSurvivor";
import AuthProvider from "./AuthProvider";


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
                    {(authProps) => (
                        <div>
                            <Header accessToken={authProps.accessToken} />
                            <Routes>
                                <Route path="/register/" element={<Register/>}/>
                                <Route path="/login/" element={<Login onLogin={authProps.handleLogin}/>}/>
                                <Route path="/" element={<GenerateRandomSurvivor/>}/>
                            </Routes>
                        </div>
                    )}
                </AuthProvider>
            </BrowserRouter>

        );
    }


}

export default App;