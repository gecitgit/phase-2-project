import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";


function AuthLayout({ handleLogin }) {
    return (
        <div className="authLayoutBody">
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
                <Route path="/" element={<Login handleLogin={handleLogin}/>} />
            </Routes>
        </div>
    )
}

export default AuthLayout;