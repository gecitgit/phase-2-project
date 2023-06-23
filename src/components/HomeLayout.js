import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Form from "./Form";
import Log from "./Log";
import Stats from "./Stats";
import Home from "./Home";
import NavBar from "./NavBar";
import Profile from "./Profile";

function HomeLayout({ currentUser, setCurrentUser, handleLogout }) {
    return (
        <div className="homeLayoutDiv">
            {/* <h2>you're logged in bro!</h2>
            <button onClick={handleLogout}>log out</button>
            <h3>Hey, {currentUser.username}</h3>
            <h3>here's your password: {currentUser.password}</h3> */}
            <NavBar currentUser={currentUser} handleLogout={handleLogout} />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/form" element={<Form currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
                <Route path="/log" element={<Log currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
                <Route path="/loggedin" element={<Home />} />
                <Route path="/stats" element={<Stats currentUser={currentUser} />} />
                <Route path="/profile" element={<Profile currentUser={currentUser}/>} />
            </Routes>
        </div>
    )
}

export default HomeLayout;