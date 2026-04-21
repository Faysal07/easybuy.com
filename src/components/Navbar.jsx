import React from "react";
import { Link } from "react-router-dom";
import Header_logo from "../assets/easybuy.png";

function Navbar () {
    return(
        <div>
            <nav>
                <div className="container">
                    <div className="header-logo">
                        <Link to="/"><img src={Header_logo} alt="Header Logo" /></Link>
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/checkout">Checkout</Link></li>
                        </ul>
                    </div>
                    <div className="nav-auth-links">
                        <Link to="/auth">Log in</Link>
                        <Link to="/auth">Sign up</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;