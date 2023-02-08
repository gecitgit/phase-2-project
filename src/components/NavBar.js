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
        <div>
            <NavLink to="/" style={navStyles}>
                Hooome
            </NavLink>
            <NavLink to="/about" style={navStyles}>
                About
            </NavLink>
            <NavLink to="/form" style={navStyles}>
                Form
            </NavLink>
            <NavLink to="/log" style={navStyles}>
                Journal Log
            </NavLink>
        </div>
    )
}

export default NavBar;