import React, { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    function startClick() {
        navigate("/form")
    }

    

    return (
        <div className="textParentDiv">
            <h2 style={{ color: "red", fontSize: "28px"}}>THIS PAGE NEEDS FORMATTING. COPY IS GOOD.</h2>
            <div className="textTextDiv">
                <h1 className="h1Title">Welcome to <span style={{ color: "#e85a4f"}}>MindLOG</span>!</h1>
                <p>
                    Welcome to MindLOG, your friendly mood companion.  Get ready to log your experiences, track your mood, nights of sleep, and unlock captivating insights about yourself.
                    <br />
                    Simply tap the form button below to start pouring your thoughts, worries and delightful musings.  I'm here to capture your journey and provide valuable self-reflection.
                    <br />
                    Head over to the Log page to relive your journal entries effortlessly. Scroll, filter, and cherish those heartwarming moments.
                    <br />
                    And wait, there's more! Explore the Stats page for a visual representation of your mood and emotions.  You'll be surprised at what you find.
                    <br />
                    Let's get started on this journaling adventure together. Happy logging!
                </p>
                <button className="joinForm" onClick={startClick}>Check out the form!</button>
            </div>
        </div>
        
    )
}

export default Home;