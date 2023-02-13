import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navBarStyle">
            <NavLink to="/" className="navBarChild">
                Home
            </NavLink>
            <NavLink to="/about" className="navBarChild">
                About
            </NavLink>
            <NavLink to="/form" className="navBarChild">
                Form
            </NavLink>
            <NavLink to="/log" className="navBarChild">
                Journal Log
            </NavLink>
        </div>
    )
}

export default NavBar;