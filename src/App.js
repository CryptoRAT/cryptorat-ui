import React, {Component} from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login";
import GenerateRandomSurvivor from "./GenerateRandomSurvivor";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/" element={<GenerateRandomSurvivor/>} />
                </Routes>
            </BrowserRouter>

        );
    }



}

export default App;