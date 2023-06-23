import React from "react";
import { NavLink } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { TbLogout } from 'react-icons/tb';

function NavBar({ currentUser, handleLogout }) {

    return (
        <div className="navBarStyle">
            <div className="navBarLeft">                
                <NavLink to="/loggedin" className="navBarChild">
                    MindLOG!
                </NavLink>
            </div>
            
            <div className="navBarRight">
                <NavLink to="/log" className="navBarChild">
                    Log
                </NavLink>
                <NavLink to="/stats" className="navBarChild">
                    Stats
                </NavLink>
                <NavLink to="/profile" className="navBarChild">
                    <BsPerson id="prof-logo" />{currentUser.username}  
                </NavLink>
                <button className="navBarChild" onClick={handleLogout}><TbLogout /></button>
            </div>
        </div>
    )
}

export default NavBar;