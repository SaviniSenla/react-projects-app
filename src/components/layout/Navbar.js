import React from 'react';
import {Link} from "react-router-dom";
import SignedinLinks from "./SignedinLinks";
import SignedOut  from "./SignedOut";

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className = "brandLogo">Projects</Link>
                <SignedinLinks/>
                <SignedOut/>
            </div>
        </nav>
    );
};

export default Navbar;