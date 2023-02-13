import React from "react";
import { NavLink } from "react-router-dom";

const navStyles = {
    display: "inline-block",
    width: "100px",
    padding: "15px",
    margin: "0",
    background: "orange",
    textDecoration: "none",
    color: "black",
};

//this needs to be updated to v6 notation for activestyle etc
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