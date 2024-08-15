import React from 'react';
import '../css/Header.css';
import {Link} from "react-router-dom";


interface HeaderProps {
    loggedIn: boolean;
}
let Header: React.FC<HeaderProps> = ({ loggedIn }) => {

    // const renderLoginAndRegisterLinks = () => {
    //     console.log("Entering renderLoginAndRegisterButtons");
    //     return (
    //         <div className="links">
    //             <div>
    //                 <Link to="/dbd/user/register/">Register</Link>
    //                 <Link to="/dbd/user/login/">Login</Link>
    //             </div>
    //         </div>
    //
    //     );
    // };
    // const renderLoggedInUserLinks = () => {
    //     console.log("Entering renderLoginAndRegisterButtons");
    //     return (
    //         <div className="links">
    //             <div>
    //                 <Link to="/dbd/myaccount/">My Account</Link>
    //             </div>
    //         </div>
    //
    //     );
    // };


    return (
        <header>
            <div className="header-banner">
                {/*{loggedIn ? renderLoggedInUserLinks() : renderLoginAndRegisterLinks()}*/}
            </div>
        </header>
    );
};

export default Header;

