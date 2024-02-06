import React from 'react';
import '../css/Header.css';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { updateAuth } from '../redux/actions/actions';

interface HeaderProps {
    loggedIn: boolean;
}

type RootState = {
    authToken: string,
};
let Header: React.FC<HeaderProps> = ({ loggedIn }) => {

    const renderLoginAndRegisterLinks = () => {
        console.log("Entering renderLoginAndRegisterButtons");
        return (
            <div className="links">
                <div>
                    <Link to="/dbd/user/register/">Register</Link>
                    <Link to="/dbd/user/login/">Login</Link>
                </div>
            </div>

        );
    };
    const renderLoggedInUserLinks = () => {
        console.log("Entering renderLoginAndRegisterButtons");
        return (
            <div className="links">
                <div>
                    <Link to="/dbd/myaccount/">My Account</Link>
                </div>
            </div>

        );
    };


    return (
        <header>
            <div className="header-banner">
                {loggedIn ? renderLoggedInUserLinks() : renderLoginAndRegisterLinks()}
            </div>
        </header>
    );
};

// Maps state from the store to props in this component
const mapStateToProps = (state: RootState) => ({
    token: state.authToken,
});

// Provides functions to dispatch actions to the store
const mapDispatchToProps = {
    updateAuth, // Shorthand for `updateAuth: auth => dispatch(updateAuth(auth))`
};

// Connect the component to the Redux store and export it
export default connect(mapStateToProps, mapDispatchToProps)(Header);

