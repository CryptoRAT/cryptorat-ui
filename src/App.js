import React, {Component} from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import GenerateRandomCharacter from "./components/GenerateRandomCharacter";
import CryptoratLandingPage from "./components/CryptoratLandingPage";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                    <Header></Header>
                    (
                        <div>
                            <Routes>
                                <Route path="/dbd/" element={<GenerateRandomCharacter/>}/>
                                <Route path="/" element={<CryptoratLandingPage/>}/>
                            </Routes>
                        </div>
                    )
            </BrowserRouter>

        );
    }


}

export default App;